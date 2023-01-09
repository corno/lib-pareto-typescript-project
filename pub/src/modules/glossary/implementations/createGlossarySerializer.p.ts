import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mfp from "lib-fountain-pen"

export const icreateGlossarySerializer: api.CcreateGlossarySerializer = ($d) => {
    const compare = (a: string, b: string) => $d.sf_compare({ a: a, b: b })

    function serializeLeafType($: api.TLeafType, $i: mfp.BLine) {
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
    function serializeType($: api.TType, $i: mfp.BLine) {
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
    function serializeInterfaceReference($: api.TInterfaceReference, $i: mfp.BLine) {
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

    }
    function serializeInterface($: api.TInterface, $i: mfp.BLine) {
        switch ($[0]) {
            case "group":
                pl.cc($[1], ($) => {

                    $i.snippet(`{`)
                    $i.indent(($i) => {
                        $.members.forEach(compare, ($, key) => {
                            $i.line(($i) => {
                                $i.snippet(`"${key}": `)
                                serializeInterface($, $i)
                            })
                        })
                    })
                    $i.snippet(`}`)
                })
                break
            case "method":
                pl.cc($[1], ($) => {

                    $i.snippet(`(`)
                    pl.cc($.data, ($) => {
                        switch ($[0]) {
                            case "null":
                                pl.cc($[1], ($) => {
                                })
                                break
                            case "type":
                                pl.cc($[1], ($) => {
                                    $i.snippet(`$: `)
                                    serializeLeafType($, $i)
                                    $i.snippet(`, `)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    pl.cc($.interface, ($) => {
                        switch ($[0]) {
                            case "null":
                                pl.cc($[1], ($) => {
                                })
                                break
                            case "set":
                                pl.cc($[1], ($) => {
                                    $i.snippet(`$c: ($i: `)
                                    serializeInterfaceReference($, $i)
                                    $i.snippet(`) => void`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    $i.snippet(`) => void`)
                })
                break
            case "reference":
                pl.cc($[1], ($) => {
                    serializeInterfaceReference($, $i)
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
        $.interfaces.forEach(compare, ($, key) => {
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type I${key} = `)
                serializeInterface($, $i)
            })
        })
        $.pipes.forEach(compare, ($, key) => {
            $i.literal(``)
            $i.line(($i) => {
                $i.snippet(`export type P${key} = ($i: `)
                serializeInterfaceReference($.in, $i)
                $i.snippet(`, $c: ($i: `)
                serializeInterfaceReference($.out, $i)
                $i.snippet(`) => void) => void`)
            })
        })
    }
}

