import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mmoduleDefinition from "../../moduleDefinition"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"


export const $$: api.CcreateModuleDefinitionSerializer = ($d) => {
    return ($, $i) => {
        function glossary($: mglossary.TGlossary, $i: mfp.IWriter) {
            $i.file("types.generated.ts", ($i) => {
                $d.cb_serializeGlossary($, $i)
            })
        }
        function serializeOptionalTypeReference($: mglossary.TOptionalTypeReference, $i: mfp.ILine) {
            if ($ === null) {
                //
            } else {
                $i.snippet(`$: `)
                serializeTypeReference($, $i)
                $i.snippet(`, `)
            }
        }
        function serializeTypeReference($: mglossary.TTypeReference, $i: mfp.ILine) {
            serializeContext($.context, $i)
            $.namespaces.forEach(($) => {
                $i.snippet(`N${$}.`)
            })
            $i.snippet(`T${$.type}`)
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
            switch ($[0]) {
                case 'callback':
                    pl.cc($[1], ($) => {
                        serializeContext($.context, $i)
                        $i.snippet(`X${$.callback}`)
                    })
                    break
                case 'function':
                    pl.cc($[1], ($) => {
                        serializeContext($.context, $i)
                        $i.snippet(`${$.async ? `A` : `F`}${$.function}`)
                    })
                    break
                case 'interface':
                    pl.cc($[1], ($) => {
                        serializeContext($.context, $i)
                        $i.snippet(`I${$.interface}`)
                    })
                    break
                case 'pipe':
                    pl.cc($[1], ($) => {
                        serializeContext($.context, $i)
                        $i.snippet(`P${$.pipe}`)
                    })
                    break
                case 'procedure':
                    pl.cc($[1], ($) => {
                        $i.snippet(`pt.Procedure<`)
                        serializeTypeReference($, $i)
                        $i.snippet(`>`)
                    })
                    break
                default: pl.au($[0])
            }
        }
        glossary($.glossary, $i)
        $i.allowed("shorthands.p.ts")

        $i.file("api.generated.ts", ($i) => {
            $i.literal(`import * as pt from 'pareto-core-types'`)
            $i.literal(``)
            $i.literal(`import * as glo from "./types.generated"`)
            $i.literal(``)
            $d.cb_dictionaryForEach($.api.imports, ($) => {
                $i.line(($i) => {
                    $i.snippet(`import * as m${$.key} from "${$.value}"`)
                })
            })
            $d.cb_dictionaryForEach($.api.algorithms, ($) => {
                const definition = $.value.definition
                $i.literal(``)
                $i.line(($i) => {
                    $i.snippet(`export type C${$.key} = `)
                    switch ($.value.type[0]) {
                        case 'constructor':
                            pl.cc($.value.type[1], ($) => {
                                $i.snippet(`(`)
                                serializeOptionalTypeReference($['configuration data'], $i)
                                $i.snippet(`$d: {`)
                                $i.indent(($i) => {
                                    $d.cb_dictionaryForEach($.dependencies, ($) => {
                                        const id = pl.cc($.value, ($): string => {
                                            switch ($[0]) {
                                                case 'callback':
                                                    return pl.cc($[1], ($) => {
                                                        return `cb`
                                                    })
                                                case 'function':
                                                    return pl.cc($[1], ($) => {
                                                        return $.async ? `af` : `sf`
                                                    })
                                                case 'interface':
                                                    return pl.cc($[1], ($) => {
                                                        return `if`
                                                    })
                                                case 'pipe':
                                                    return pl.cc($[1], ($) => {
                                                        return `pi`
                                                    })
                                                case 'procedure':
                                                    return pl.cc($[1], ($) => {
                                                        return `pr`
                                                    })
                                                default: return pl.au($[0])
                                            }
                                        })
                                        $i.line(($i) => {
                                            $i.snippet(`readonly '${id}_${$.key}': `)
                                            serializeDefinitionReference($.value, $i)
                                        })
                                    })
                                })
                                $i.snippet(`}`)
                                // pl.cc($.dependencies, ($) => {
                                //     $i.snippet(`$d: {`)
                                //     $i.indent(($i) => {
                                //         // if ($.callbacks !== undefined) {
                                //         //     $d.cb_dictionaryForEach($.callbacks, ($, key) => {
                                //         //         $i.line(($i) => {
                                //         //             $i.snippet(`readonly "cb${key}": `)
                                //         //             serializeCallbackReference($, $i)
                                //         //         })
                                //         //     })
                                //         // }
                                //         $d.cb_dictionaryForEach($.functions, ($, key) => {
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
                    $d.cb_dictionaryForEach($.api.algorithms, ($) => {
                        $i.literal(`${$.key}: C${$.key}`)
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
