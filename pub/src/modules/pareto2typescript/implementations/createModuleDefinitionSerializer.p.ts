import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mmoduleDefinition from "../../moduleDefinition"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"


export const $$: api.CcreateModuleDefinitionSerializer = ($d) => {
    return ($, $i) => {
        function glossary($: mglossary.TGlossary, $i: mfp.IWriter) {
            $i.file("types.generated.ts", ($i) => {
                $d.serializeGlossary($, $i)
            })
        }
        function serializeTypeReference($: mglossary.TTypeReference, $i: mfp.ILine) {
            serializeContext($.context, $i)
            $i.snippet($d.createIdentifier(`T${$.type}`))
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
            $i.literal(`import * as pt from 'pareto-core-types'`)
            $i.literal(``)
            $i.literal(`import * as glo from "./types.generated"`)
            $i.literal(``)
            $d.dictionaryForEach($.api.imports, ($) => {
                $i.line(($i) => {
                    $i.snippet(`import * as m${$.key} from "${$.value}"`)
                })
            })
            $d.dictionaryForEach($.api.algorithms, ($) => {
                const definition = $.value.definition
                $i.literal(``)
                $i.line(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(`C${$.key}`)} = `)
                    switch ($.value.type[0]) {
                        case 'constructor':
                            pl.cc($.value.type[1], ($) => {
                                $i.snippet(`(`)
                                if ($['configuration data'] === null) {
                                    //
                                } else {
                                    $i.snippet(`$: `)
                                    serializeTypeReference($['configuration data'], $i)
                                    $i.snippet(`, `)
                                }
                                $i.snippet(`$d: {`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.dependencies, ($) => {
                                        $i.line(($i) => {
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
                                //         //         $i.line(($i) => {
                                //         //             $i.snippet(`readonly "cb${key}": `)
                                //         //             serializeCallbackReference($, $i)
                                //         //         })
                                //         //     })
                                //         // }
                                //         $d.dictionaryForEach($.functions, ($, key) => {
                                //             $i.line(($i) => {
                                //                 $i.snippet(`readonly "f${key}": `)
                                //                 serializeFunctionReference($, $i)
                                //             })
                                //         })
                                //         if ($["side effects"] !== undefined) {
                                //             $["side effects"].forEach(compare, ($, key) => {
                                //                 $i.line(($i) => {
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
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type API = {`)
                $i.indent(($i) => {
                    $d.dictionaryForEach($.api.algorithms, ($) => {
                        $i.literal(`${$.key}: ${$d.createIdentifier(`C${$.key}`)}`)
                    })
                })
                $i.snippet(`}`)
            })
        })
        $i.file("index.ts", ($i) => {
            $i.literal(`export * from "./types.generated"`)
            $i.literal(`export * from "./api.generated"`)
        })
    }
}
