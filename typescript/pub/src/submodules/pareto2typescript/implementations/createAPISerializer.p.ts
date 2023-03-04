import * as pl from 'pareto-core-lib'

import * as gmoduleDefinition from "../../api"
import * as gfp from "lib-fountain-pen"
import * as gapi from "../definition/glossary"

import { CcreateAPISerializer } from "../definition/api.generated"

export const $$: CcreateAPISerializer = ($d) => {
    return <Annotation>($: gapi.T.SerializeAPIData<Annotation>, $i: gfp.IBlock) => {
        function doOptional<T>(
            $: [false] | [true, T],
            $i: gfp.ILine,
            $c: {
                onSet: ($: T, $i: gfp.ILine) => void,
                onNotset: ($: null, $i: gfp.ILine) => void,
            },
        ) {
            if ($[0] === true) {
                $c.onSet($[1], $i)
            } else {
                $c.onNotset(null, $i)
            }
        }


        function serializeFunctionReference($: gmoduleDefinition.T.FunctionReference<Annotation>, $i: gfp.ILine) {

            $i.snippet(`g${$.context.glossary}.`)

            $i.snippet($d.createIdentifier(`F${$.function}`))
        }

        $i.line(`import * as pt from 'pareto-core-types'`)
        $i.line(``)
        $d.dictionaryForEach($.imports, ($) => {
            $i.nestedLine(($i) => {
                $i.snippet(`import * as g${$.key} from "${$.value}"`)
            })
        })
        pl.cc($.api, ($) => {

            $d.dictionaryForEach($.algorithms, ($) => {
                const definition = $.value.definition
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`C${$.key}`)} = `)
                    switch ($.value.type[0]) {
                        case 'constructor':
                            pl.cc($.value.type[1], ($) => {
                                $i.snippet(`(`)
                                doOptional($['configuration data'], $i, {
                                    onNotset: () => { },
                                    onSet: ($, $i) => {
    
                                        $i.snippet(`$: `)
    
                                        $i.snippet(`g${$.context.glossary}.`)
    
                                        $i.snippet(`T.${$d.createIdentifier($.type)}`)
                                        $i.snippet(`, `)
                                    }
                                })
                                $i.snippet(`$d: {`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.dependencies, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`readonly '${$.key}': `)
                                            serializeFunctionReference($.value, $i)
                                        })
                                    })
                                })
                                $i.snippet(`}`)
                                // pl.cc($.dependencies, ($) => {
                                //     $i.snippet(`$d: {`)
                                //     $i.indent(($i) => {
                                //         // if ($.callbacks !== undefined) {
                                //         //     $d.dictionaryForEach($.callbacks, ($, key) => {
                                //         //         $i.nestedLine(($i) => {
                                //         //             $i.snippet(`readonly "cb${key}": `)
                                //         //             serializeCallbackReference($, $i)
                                //         //         })
                                //         //     })
                                //         // }
                                //         $d.dictionaryForEach($.functions, ($, key) => {
                                //             $i.nestedLine(($i) => {
                                //                 $i.snippet(`readonly "f${key}": `)
                                //                 serializeFunctionReference($, $i)
                                //             })
                                //         })
                                //         if ($["side effects"] !== undefined) {
                                //             $["side effects"].forEach(compare, ($, key) => {
                                //                 $i.nestedLine(($i) => {
                                //                     $i.snippet(`readonly "se${key}": `)
                                //                     serializeProcedure($, $i)
                                //                 })
                                //             })
                                //         }
                                //     })
                                //     $i.snippet(`}`)
                                // })
                                $i.snippet(`) => `)
                            })
                            break
                        case 'reference':
                            pl.cc($.value.type[1], ($) => {
                            })
                            break
                        default: pl.au($.value.type[0])
                    }
                    serializeFunctionReference(definition, $i)
                })
            })
            $i.line(``)
            $i.nestedLine(($i) => {
                $i.snippet(`export type API = {`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.algorithms, ($) => {
                        $i.line(`${$.key}: ${$d.createIdentifier(`C${$.key}`)}`)
                    })
                })
                $i.snippet(`}`)
            })
        })
    }
}
