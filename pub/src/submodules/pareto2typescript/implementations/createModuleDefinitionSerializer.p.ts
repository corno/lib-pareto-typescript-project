import * as pl from 'pareto-core-lib'


import * as gmoduleDefinition from "../../moduleDefinition"
import * as gglossary from "../../glossary"
import * as gfp from "lib-fountain-pen"

import { CcreateModuleDefinitionSerializer } from "../api"

export const $$:CcreateModuleDefinitionSerializer = ($d) => {
    return <Annotation>($:gmoduleDefinition.T.ModuleDefinition<Annotation>, $i:gfp.IWriter) => {
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
        function glossary($: gglossary.T.Glossary<Annotation>, $i: gfp.IWriter) {
            $i.directory(`glossary`, ($i) => {
                $d.serializeGlossary($, $i)

            })
        }
        function serializeTypeReference($: gglossary.T.TypeReference<string>, $i: gfp.ILine) {
            function serializeContext2($: gglossary.T.Context<string>, $i: gfp.ILine) {
                pl.cc($, ($) => {
                    switch ($[0]) {
                        // case 'api':
                        //     pl.cc($[1], ($) => {
                        //         $i.snippet(`api`)
                        //     })
                        //     break
                        case 'import':
                            pl.cc($[1], ($) => {
                                $i.snippet(`m${$.glossary}.`)
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
            serializeContext2($.context, $i)
            $i.snippet(`T.${$d.createIdentifier($.type)}`)
        }

        function serializeDefinitionReference($: gmoduleDefinition.T.DefinitionReference<Annotation>, $i: gfp.ILine) {
            function serializeContext($: gmoduleDefinition.T.Context<Annotation> | undefined, $i: gfp.ILine) {
    
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
                                    $i.snippet(`m${$.glossary}.`)
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
            serializeContext($.context, $i)
            $i.snippet($d.createIdentifier(`F${$.function}`))
        }
        glossary($.glossary, $i)

        $i.file("api.generated.ts", ($i) => {
            $i.line(`import * as pt from 'pareto-core-types'`)
            $i.line(``)
            $i.line(`import * as gglo from "./glossary"`)
            $i.line(``)
            $d.dictionaryForEach($.api.imports, ($) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`import * as g${$.key} from "${$.value}"`)
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
