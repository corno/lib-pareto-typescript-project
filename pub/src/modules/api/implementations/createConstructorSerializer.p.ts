

import * as api from "../api"

export const icreateConstructorSerializer: api.CcreateConstructorSerializer = (
    $, $d
) => {
    const compare = (a: string, b: string) => $d.compare({ a: a, b: b })

    return ($, $i) => {
        $i.snippet(`($: `)
        $d.serializeLeafType($.data, $i)
        $i.snippet(`, $d: {`)
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
