import * as pl from "pareto-core-lib"

import * as api from "../api"

export const icreateConstructorSerializer: api.CcreateConstructorSerializer = (
    $d
) => {
    const compare = (a: string, b: string) => $d.compare({ a: a, b: b })

    return ($, $i) => {
        $i.snippet(`(`)
        switch ($.data[0]) {
            case "null":
                pl.cc($.data[1], ($) => {
                })
                break
            case "type":
                pl.cc($.data[1], ($) => {
                    $i.snippet(`$: `)
                    $d.serializeLeafType($, $i)
                    $i.snippet(`, `)
                })
                break
            default: pl.au($.data[0])
        }
        $i.snippet(`$d: {`)
        $i.indent(($i) => {
            $.dependencies.forEach(compare, ($, key) => {
                $i.line(($i) => {
                    $i.snippet(`readonly "${key}": `)
                    $d.serializeAlgorithmReference($, $i)
                })
            })
        })

        $i.snippet(`}) => `)
        $d.serializeAlgorithmReference($.result, $i)
    }
}
