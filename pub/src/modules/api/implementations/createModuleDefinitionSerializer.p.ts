import * as pl from "pareto-core-lib"
import * as api from "../api"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"
export const icreateModuleDefinitionSerializer: api.CcreateModuleDefinitionSerializer = ($d) => {
    return ($, $i) => {
        const compare = (a: string, b: string) => $d.sf_compare({ a: a, b: b })
        function glossary($: mglossary.TGlossary, $i: mfp.IWriter) {
            $i.createFile("types.generated.ts", ($i) => {
                $d.cb_serializeGlossary($, $i)
            })
        }

        function serializeContext($: api.TContext | undefined, $i: mfp.ILine) {

            if ($ !== undefined) {
                pl.cc($, ($) => {
                    switch ($[0]) {
                        // case "api":
                        //     pl.cc($[1], ($) => {
                        //         $i.snippet(`api`)
                        //     })
                        //     break
                        case "import":
                            pl.cc($[1], ($) => {
                                $i.snippet(`m${$}.`)
                            })
                            break
                        case "local":
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

        function serializeDefinitionReference($: api.TDefinitionReference, $i: mfp.ILine) {
            switch ($[0]) {
                case "callback":
                    pl.cc($[1], ($) => {
                        serializeContext($.context, $i)
                        $i.snippet(`X${$.callback}`)
                    })
                    break
                case "function":
                    pl.cc($[1], ($) => {
                        serializeContext($.context, $i)
                        $i.snippet(`${$.async ? "A" : "F"}${$.function}`)
                    })
                    break
                case "interface":
                    pl.cc($[1], ($) => {
                        serializeContext($.context, $i)
                        $i.snippet(`I${$.interface}`)
                    })
                    break
                case "pipe":
                    pl.cc($[1], ($) => {
                        serializeContext($.context, $i)
                        $i.snippet(`P${$.pipe}`)
                    })
                    break
                case "procedure":
                    pl.cc($[1], ($) => {
                        $i.snippet(`pt.Procedure<`)
                        switch ($[0]) {
                            case "null":
                                pl.cc($[1], ($) => {
                                    $i.snippet(`null`)
                                })
                                break
                            case "type":
                                pl.cc($[1], ($) => {
                                    $d.cb_serializeLeafType($, $i)
                                })
                                break
                            default: pl.au($[0])
                        }
                        $i.snippet(`>`)
                    })
                    break
                default: pl.au($[0])
            }
        }
        glossary($.glossary, $i)
        $i.createFile("api.generated.ts", ($i) => {
            $i.literal(`import * as pt from "pareto-core-types"`)
            $i.literal(``)
            $i.literal(`import * as glo from "./types.generated"`)
            $i.literal(``)
            $.api.imports.forEach(compare, ($, key) => {
                $i.line(($i) => {
                    $i.snippet(`import * as m${key} from "${$}"`)
                })
            })
            $.api.algorithms.forEach(compare, ($, key) => {
                const definition = $.definition
                $i.literal(``)
                $i.line(($i) => {
                    $i.snippet(`export type C${key} = `)
                    switch ($.type[0]) {
                        case "constructor":
                            pl.cc($.type[1], ($) => {
                                $i.snippet(`(`)
                                switch ($["configuration data"][0]) {
                                    case "null":
                                        pl.cc($["configuration data"][1], ($) => {
                                        })
                                        break
                                    case "type":
                                        pl.cc($["configuration data"][1], ($) => {
                                            $i.snippet(`$: `)
                                            $d.cb_serializeLeafType($, $i)
                                            $i.snippet(`, `)
                                        })
                                        break
                                    default: pl.au($["configuration data"][0])
                                }
                                $i.snippet(`$d: {`)
                                $i.indent(($i) => {
                                    $.dependencies.forEach(compare, ($, key) => {
                                        const id = pl.cc($, ($): string => {
                                            switch ($[0]) {
                                                case "callback":
                                                    return pl.cc($[1], ($) => {
                                                        return "cb"
                                                    })
                                                case "function":
                                                    return pl.cc($[1], ($) => {
                                                        return $.async ? "af" : "sf"
                                                    })
                                                case "interface":
                                                    return pl.cc($[1], ($) => {
                                                        return "if"
                                                    })
                                                case "pipe":
                                                    return pl.cc($[1], ($) => {
                                                        return "pi"
                                                    })
                                                case "procedure":
                                                    return pl.cc($[1], ($) => {
                                                        return "pr"
                                                    })
                                                default: return pl.au($[0])
                                            }
                                        })
                                        $i.line(($i) => {
                                            $i.snippet(`readonly "${id}_${key}": `)
                                            serializeDefinitionReference($, $i)
                                        })
                                    })
                                })
                                $i.snippet(`}`)
                                // pl.cc($.dependencies, ($) => {
                                //     $i.snippet(`$d: {`)
                                //     $i.indent(($i) => {
                                //         // if ($.callbacks !== undefined) {
                                //         //     $.callbacks.forEach(compare, ($, key) => {
                                //         //         $i.line(($i) => {
                                //         //             $i.snippet(`readonly "cb${key}": `)
                                //         //             serializeCallbackReference($, $i)
                                //         //         })
                                //         //     })
                                //         // }
                                //         $.functions.forEach(compare, ($, key) => {
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
                        case "reference":
                            pl.cc($.type[1], ($) => {
                            })
                            break
                        default: pl.au($.type[0])
                    }
                    serializeDefinitionReference(definition, $i)
                })
            })
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type API = {`)
                $i.indent(($i) => {
                    $.api.algorithms.forEach(compare, ($, key) => {
                        $i.literal(`${key}: C${key}`)
                    })
                })
                $i.snippet(`}`)
            })
        })
        $i.createFile("index.ts", ($i) => {
            $i.literal(`export * from "./types.generated"`)
            $i.literal(`export * from "./api.generated"`)
        })
    }
}
