import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mfp from "lib-fountain-pen"

export const icreateGlossarySerializer: api.CcreateGlossarySerializer = ($d) => {
    const compare = (a: string, b: string) => $d.fcompare({ a: a, b: b })

    function serializeLeafType($: api.TLeafType, $i: mfp.ILine) {
        switch ($[0]) {
            case "boolean":
                pl.cc($[1], ($) => {
                    $i.snippet(`boolean`)
                })
                break
            case "external reference":
                pl.cc($[1], ($) => {
                    $i.snippet(`m${$.context}.T${$.type}`)
                })
                break
            case "number":
                pl.cc($[1], ($) => {
                    $i.snippet(`number`)
                })
                break
            case "reference":
                pl.cc($[1], ($) => {
                    $i.snippet(`T${$}`)
                })
                break
            case "string":
                pl.cc($[1], ($) => {
                    $i.snippet(`string`)
                })
                break
            default: pl.au($[0])
        }
    }
    function serializeType($: api.TType, $i: mfp.ILine) {
        switch ($[0]) {
            case "array":
                pl.cc($[1], ($) => {
                    $i.snippet(`pt.Array<`)
                    serializeType($, $i)
                    $i.snippet(`>`)
                })
                break
            case "nested":
                pl.cc($[1], ($) => {
                    $i.snippet(`pt.Nested<`)
                    serializeType($, $i)
                    $i.snippet(`>`)
                })
                break
            case "optional":
                pl.cc($[1], ($) => {
                    $i.snippet(`null | `)
                    serializeType($, $i)
                })
                break
            case "leaf":
                pl.cc($[1], ($) => {
                    serializeLeafType($, $i)
                })
                break
            case "dictionary":
                pl.cc($[1], ($) => {
                    $i.snippet(`pt.Dictionary<`)
                    switch ($[0]) {
                        case "null":
                            pl.cc($[1], ($) => {
                                $i.snippet(`null`)
                            })
                            break
                        case "type":
                            pl.cc($[1], ($) => {
                                serializeType($, $i)

                            })
                            break
                        default: pl.au($[0])
                    }
                    $i.snippet(`>`)
                })
                break
            case "group":
                pl.cc($[1], ($) => {
                    $i.snippet(`{`)
                    $i.indent(($i) => {
                        $.forEach(compare, ($, key) => {
                            $i.line(($i) => {
                                $i.snippet(`readonly "${key}"${$.optional === undefined || false ? "" : "?"}: `)
                                serializeType($.type, $i)
                            })
                        })
                    })
                    $i.snippet(`}`)
                })
                break
            case "taggedUnion":
                pl.cc($[1], ($) => {
                    $i.indent(($i) => {
                        $.forEach(compare, ($, key) => {
                            $i.line(($i) => {
                                $i.snippet(`| [ "${key}", `)
                                switch ($[0]) {
                                    case "null":
                                        pl.cc($[1], ($) => {
                                            $i.snippet(`null`)
                                        })
                                        break
                                    case "type":
                                        pl.cc($[1], ($) => {
                                            serializeType($, $i)

                                        })
                                        break
                                    default: pl.au($[0])
                                }
                                $i.snippet(` ]`)
                            })
                        })
                    })
                })
                break
            default: pl.au($[0])
        }
    }
    return ($, $i) => {
        $i.line(($i) => {
            $i.snippet(`import * as pt from "pareto-core-types"`)
        })
        $.imports.forEach(compare, ($, key) => {
            $i.line(($i) => {
                $i.snippet(`import * as m${key} from "${$}"`)
            })
        })
        $.types.forEach(compare, ($, key) => {
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type T${key} = `)
                serializeType($, $i)
            })
        })
        // $.procedures.forEach(compare, ($, key) => {
        //     $i.literal(``)
        //     $i.line(($i) => {
        //         $i.snippet(`export type P${key} = ($: `)
        //         serializeLeafType($.data, $i)
        //         $i.snippet(`) => void`)
        //     })
        // })
        $.functions.forEach(compare, ($, key) => {
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type ${$.async ? "A" : "F"}${key} = ($: `)
                serializeLeafType($.data, $i)
                $i.snippet(`) => `)
                if ($.async) {
                    $i.snippet(`pt.AsyncValue<`)
                    serializeLeafType($["return value"], $i)
                    $i.snippet(`>`)
                } else {
                    serializeLeafType($["return value"], $i)
                }
            })
        })
        function serializeInterface($: api.TInterface, $i: mfp.ILine) {

            $i.snippet(`{`)
            $i.indent(($i) => {
                $.members.forEach(compare, ($, key) => {
                    $i.line(($i) => {
                        $i.snippet(`"${key}": `)
                        switch ($[0]) {
                            case "interface":
                                pl.cc($[1], ($) => {
                                    if ($.context !== undefined) {
                                        switch ($.context[0]) {
                                            case "import":
                                                pl.cc($.context[1], ($) => {
                                                    $i.snippet(`m${$}.`)
                                                })
                                                break
                                            case "local":
                                                pl.cc($.context[1], ($) => {

                                                })
                                                break
                                            default: pl.au($.context[0])
                                        }
                                    }
                                    $i.snippet(`I${$.interface}`)
                                    //serializeInterface($.interface, $i)
                                })
                                break
                            case "callback":
                                pl.cc($[1], ($) => {
                                    function serializeProcedure($: api.TLeafTypeOrNull, $i: mfp.ILine) {
                                        $i.snippet(`pt.Procedure<`)
                                        switch ($[0]) {
                                            case "null":
                                                pl.cc($[1], ($) => {
                                                    $i.snippet(`null`)
                                                })
                                                break
                                            case "type":
                                                pl.cc($[1], ($) => {
                                                    serializeLeafType($, $i)
                                                })
                                                break
                                            default: pl.au($[0])
                                        }
                                        $i.snippet(`>`)
                                    }
                                    serializeProcedure($, $i)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                })
            })
            $i.snippet(`}`)
        }
        $.interfaces.forEach(compare, ($, key) => {
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type I${key} = `)
                serializeInterface($, $i)
            })
        })
        $.callbacks.forEach(compare, ($, key) => {
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type X${key} = (`)
                switch ($.data[0]) {
                    case "null":
                        pl.cc($.data[1], ($) => {
                        })
                        break
                    case "type":
                        pl.cc($.data[1], ($) => {
                            $i.snippet(`$: `)
                            serializeLeafType($, $i)
                            $i.snippet(`, `)
                        })
                        break
                    default: pl.au($.data[0])
                }
                $i.snippet(`$i: `)
                if ($.context !== undefined) {
                    switch ($.context[0]) {
                        case "import":
                            pl.cc($.context[1], ($) => {
                                $i.snippet(`m${$}.`)
                            })
                            break
                        case "local":
                            pl.cc($.context[1], ($) => {

                            })
                            break
                        default: pl.au($.context[0])
                    }
                }
                $i.snippet(`I${$.interface}) => void`)
            })
        })
        $.builders.forEach(compare, ($, key) => {
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type B${key} = (`)
                switch ($.data[0]) {
                    case "null":
                        pl.cc($.data[1], ($) => {
                        })
                        break
                    case "type":
                        pl.cc($.data[1], ($) => {
                            $i.snippet(`$: `)
                            serializeLeafType($, $i)
                            $i.snippet(`, `)
                        })
                        break
                    default: pl.au($.data[0])
                }
                $i.snippet(`$c: ($i: `)
                if ($.context !== undefined) {
                    switch ($.context[0]) {
                        case "import":
                            pl.cc($.context[1], ($) => {
                                $i.snippet(`m${$}.`)
                            })
                            break
                        case "local":
                            pl.cc($.context[1], ($) => {

                            })
                            break
                        default: pl.au($.context[0])
                    }
                }
                $i.snippet(`I${$.interface}) => void) => void`)
            })
        })
    }
}

