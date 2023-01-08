import * as pl from "pareto-core-lib"
import * as api from "../api"
import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"
export const icreateModuleDefinitionSerializer: api.CcreateModuleDefinitionSerializer = ($d) => {
    return ($, $i) => {
        const compare = (a: string, b: string) => $d.compare({ a: a, b: b })
        function glossary($: mglossary.TGlossary, $i: mfp.IWriter) {
            $i.createFile("types.generated.ts", ($i) => {
                $d.serializeGlossary($, $i)
            })
        }
        function serializeFunctionReference($: api.TFunctionReference, $i: mfp.ILine) {
            if ($.context !== undefined) {
                pl.cc($.context, ($) => {
                    switch ($[0]) {
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
            $i.snippet(`${$.async ? "A" : "F"}`)
            $i.snippet(`${$.function}`)
        }
        function serializeProcedure($: mglossary.TLeafTypeOrNull, $i: mfp.ILine) {
            $i.snippet(`pt.Procedure<`)
            switch ($[0]) {
                case "null":
                    pl.cc($[1], ($) => {
                        $i.snippet(`null`)
                    })
                    break
                case "type":
                    pl.cc($[1], ($) => {
                        $d.serializeLeafType($, $i)
                    })
                    break
                default: pl.au($[0])
            }
            $i.snippet(`>`)
        }
        function serializeCallbackReference($: api.TCallbackReference, $i: mfp.ILine) {
            if ($.context !== undefined) {
                pl.cc($.context, ($) => {
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
                                $i.snippet(`glo????.`)
                            })
                            break
                        default: pl.au($[0])
                    }
                })
            } else {
                $i.snippet(`glo.`)
            }
            $i.snippet(`X`)
            $i.snippet(`${$.callback}`)
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
                $i.literal(``)
                $i.line(($i) => {
                    $i.snippet(`export type C${key} = `)
                    switch ($[0]) {
                        case "function constructor":
                            pl.cc($[1], ($) => {
                                $i.snippet(`(`)
                                switch ($["configuration data"][0]) {
                                    case "null":
                                        pl.cc($["configuration data"][1], ($) => {
                                        })
                                        break
                                    case "type":
                                        pl.cc($["configuration data"][1], ($) => {
                                            $i.snippet(`$: `)
                                            $d.serializeLeafType($, $i)
                                            $i.snippet(`, `)
                                        })
                                        break
                                    default: pl.au($["configuration data"][0])
                                }
                                pl.cc($.dependencies, ($) => {
                                    $i.snippet(`$d: {`)
                                    $i.indent(($i) => {
                                        $i.line(($i) => {
                                            $i.snippet(`cb: {`)
                                            $i.indent(($i) => {
                                                if ($.callbacks !== undefined) {
                                                    $.callbacks.forEach(compare, ($, key) => {
                                                        $i.line(($i) => {
                                                            $i.snippet(`readonly "${key}": `)
                                                            serializeCallbackReference($, $i)
                                                        })
                                                    })
                                                }
                                            })
                                            $i.snippet(`}`)
                                        })
                                        $i.line(($i) => {
                                            $i.snippet(`f: {`)
                                            $i.indent(($i) => {
                                                $.functions.forEach(compare, ($, key) => {
                                                    $i.line(($i) => {
                                                        $i.snippet(`readonly "${key}": `)
                                                        serializeFunctionReference($, $i)
                                                    })
                                                })
                                            })
                                            $i.snippet(`}`)
                                        })
                                        $i.line(($i) => {
                                            $i.snippet(`se: {`)
                                            $i.indent(($i) => {
                                                if ($["side effects"] !== undefined) {
                                                    $["side effects"].forEach(compare, ($, key) => {
                                                        $i.line(($i) => {
                                                            $i.snippet(`readonly "${key}": `)
                                                            serializeProcedure($, $i)
                                                        })
                                                    })
                                                }
                                            })
                                            $i.snippet(`}`)
                                        })
                                    })
                                    $i.snippet(`}`)
                                })
                                $i.snippet(`) => `)
                                serializeFunctionReference($.function, $i)
                            })
                            break
                        case "procedure constructor":
                            pl.cc($[1], ($) => {
                                $i.snippet(`(`)
                                switch ($["configuration data"][0]) {
                                    case "null":
                                        pl.cc($["configuration data"][1], ($) => {
                                        })
                                        break
                                    case "type":
                                        pl.cc($["configuration data"][1], ($) => {
                                            $i.snippet(`$: `)
                                            $d.serializeLeafType($, $i)
                                            $i.snippet(`, `)
                                        })
                                        break
                                    default: pl.au($["configuration data"][0])
                                }
                                pl.cc($.dependencies, ($) => {
                                    $i.snippet(`$d: {`)
                                    $i.indent(($i) => {
                                        $i.line(($i) => {
                                            $i.snippet(`cb: {`)
                                            $i.indent(($i) => {
                                                $.callbacks.forEach(compare, ($, key) => {
                                                    $i.line(($i) => {
                                                        $i.snippet(`readonly "${key}": `)
                                                        serializeCallbackReference($, $i)
                                                    })
                                                })
                                            })
                                            $i.snippet(`}`)
                                        })
                                        $i.line(($i) => {
                                            $i.snippet(`f: {`)
                                            $i.indent(($i) => {
                                                $.functions.forEach(compare, ($, key) => {
                                                    $i.line(($i) => {
                                                        $i.snippet(`readonly "${key}": `)
                                                        serializeFunctionReference($, $i)
                                                    })
                                                })
                                            })
                                            $i.snippet(`}`)
                                        })
                                        $i.line(($i) => {
                                            $i.snippet(`d: {`)
                                            $i.indent(($i) => {
                                                $.downstreams.forEach(compare, ($, key) => {
                                                    $i.line(($i) => {
                                                        $i.snippet(`readonly "${key}": `)
                                                        serializeProcedure($, $i)
                                                    })
                                                })
                                            })
                                            $i.snippet(`}`)
                                        })
                                    })
                                    $i.snippet(`}`)
                                })
                                $i.snippet(`) => `)
                                serializeProcedure($.type, $i)
                            })
                            break
                        case "callback constructor":
                            pl.cc($[1], ($) => {
                                $i.snippet(`(`)
                                switch ($["configuration data"][0]) {
                                    case "null":
                                        pl.cc($["configuration data"][1], ($) => {
                                        })
                                        break
                                    case "type":
                                        pl.cc($["configuration data"][1], ($) => {
                                            $i.snippet(`$: `)
                                            $d.serializeLeafType($, $i)
                                            $i.snippet(`, `)
                                        })
                                        break
                                    default: pl.au($["configuration data"][0])
                                }
                                pl.cc($.dependencies, ($) => {
                                    $i.snippet(`$d: {`)
                                    $i.indent(($i) => {
                                        $i.line(($i) => {
                                            $i.snippet(`cb: {`)
                                            $i.indent(($i) => {
                                                $.callbacks.forEach(compare, ($, key) => {
                                                    $i.line(($i) => {
                                                        $i.snippet(`readonly "${key}": `)
                                                        serializeCallbackReference($, $i)
                                                    })
                                                })
                                            })
                                            $i.snippet(`}`)
                                        })
                                        $i.line(($i) => {
                                            $i.snippet(`f: {`)
                                            $i.indent(($i) => {
                                                $.functions.forEach(compare, ($, key) => {
                                                    $i.line(($i) => {
                                                        $i.snippet(`readonly "${key}": `)
                                                        serializeFunctionReference($, $i)
                                                    })
                                                })
                                            })
                                            $i.snippet(`}`)
                                        })
                                        $i.line(($i) => {
                                            $i.snippet(`se: {`)
                                            $i.indent(($i) => {
                                                $["side effects"].forEach(compare, ($, key) => {
                                                    $i.line(($i) => {
                                                        $i.snippet(`readonly "${key}": `)
                                                        serializeProcedure($, $i)
                                                    })
                                                })
                                            })
                                            $i.snippet(`}`)
                                        })
                                    })
                                    $i.snippet(`}`)
                                })
                                $i.snippet(`) => `)
                                serializeCallbackReference($.callback, $i)
                            })
                            break
                        case "function":
                            pl.cc($[1], ($) => {
                                serializeFunctionReference($, $i)
                            })
                            break
                        case "callback":
                            pl.cc($[1], ($) => {
                                serializeCallbackReference($, $i)
                            })
                            break
                        case "procedure":
                            pl.cc($[1], ($) => {
                                serializeProcedure($, $i)
                            })
                            break
                        default: pl.au($[0])
                    }
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
