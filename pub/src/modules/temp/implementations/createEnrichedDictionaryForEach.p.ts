
import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CcreateEnrichedDictionaryForEach = ($d) => {
    return ($, $i) => {
        let empty = true
        $.forEach((a, b) => $d.sf_compare({ a: a, b: b }), ($) => {
            empty = false
        })
        if (empty) {
            $i.onEmpty()
        } else {
            $i.onNotEmpty(($i) => {
                let first = true
                $.forEach((a, b) => $d.sf_compare({ a: a, b: b }), ($, key) => {
                    $i({
                        isFirst: first,
                        key: key,
                        value: $,
                    })
                    first = false
                })
            })
        }
    }
}