import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mmoduleDefinition from "../../moduleDefinition"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"


export namespace VOptional {}
export type VOptional<AType> = 
    | ['not set', {}]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

export const $$: api.CcreateModuleDefinitionSerializer = ($d) => {
    return ($, $i) => {
        function doOptional<T>(
            $: MOptional<T>,
            $i: mfp.ILine,
            $c: {
                onSet: ($: T, $i: mfp.ILine) => void,
                onNotset: ($: {}, $i: mfp.ILine) => void,
            },
        ) {
            switch ($[0]) {
                case 'not set':
                    pl.cc($[1], ($) => {
                        $c.onNotset($, $i)
                    })
                    break
                case 'set':
                    pl.cc($[1], ($) => {
                        $c.onSet($, $i)
                    })
                    break
                default: pl.au($[0])
            }
        }
        function glossary($: mglossary.TGlossary, $i: mfp.IWriter) {
            $i.directory(`glossary`, ($i) => {
                $d.serializeGlossary($, $i)

            })
        }
        function serializeTypeReference($: mglossary.TTypeReference, $i: mfp.ILine) {
            serializeContext2($.context, $i)
            $i.snippet($d.createIdentifier(`T${$.type}`))
        }
        function serializeContext2($: mglossary.TContext, $i: mfp.ILine) {
            pl.cc($, ($) => {
                switch ($[0]) {
                    // case 'api':
                    //     pl.cc($[1], ($) => {
                    //         $i.snippet(`api`)
                    //     })
                    //     break
                    case 'import':
                        pl.cc($[1], ($) => {
                            $i.snippet(`m${$}.`)
                        })
                        break
                    case 'local':
                        pl.cc($[1], ($) => {
                            $i.snippet(`glo.`)
                        })
                        break
                    default: pl.au($[0])
                }
            })
        }
        function serializeContext($: mmoduleDefinition.TContext | undefined, $i: mfp.ILine) {

            if ($ !== undefined) {
                pl.cc($, ($) => {
                    switch ($[0]) {
                        // case 'api':
                        //     pl.cc($[1], ($) => {
                        //         $i.snippet(`api`)
                        //     })
                        //     break
                        case 'import':
                            pl.cc($[1], ($) => {
                                $i.snippet(`m${$}.`)
                            })
                            break
                        case 'local':
                            pl.cc($[1], ($) => {
                                $i.snippet(`glo.`)
                            })
                            break
                        default: pl.au($[0])
                    }
                })
            } else {
                $i.snippet(`glo.`)
            }
        }

        function serializeDefinitionReference($: mmoduleDefinition.TDefinitionReference, $i: mfp.ILine) {
            serializeContext($.context, $i)
            $i.snippet($d.createIdentifier(`F${$.function}`))
        }
        glossary($.glossary, $i)
        $i.allowed("shorthands.p.ts")

        $i.file("api.generated.ts", ($i) => {
            $i.line(`import * as pt from 'pareto-core-types'`)
            $i.line(``)
            $i.line(`import * as glo from "./glossary"`)
            $i.line(``)
            $d.dictionaryForEach($.api.imports, ($) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as m${$.key} from "${$.value}"`)
                })
            })
            $d.dictionaryForEach($.api.algorithms, ($) => {
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
                                        serializeTypeReference($, $i)
                                        $i.snippet(`, `)
                                    }
                                })
                                $i.snippet(`$d: {`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.dependencies, ($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`readonly '${$.key}': `)
                                            serializeDefinitionReference($.value, $i)
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
                    serializeDefinitionReference(definition, $i)
                })
            })
            $i.line(``)
            $i.nestedLine(($i) => {
                $i.snippet(`export type API = {`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.api.algorithms, ($) => {
                        $i.line(`${$.key}: ${$d.createIdentifier(`C${$.key}`)}`)
                    })
                })
                $i.snippet(`}`)
            })
        })
        $i.file("index.ts", ($i) => {
            $i.line(`export * from "./glossary"`)
            $i.line(`export * from "./api.generated"`)
        })
    }
}