
import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const icreateEnrichedDictionaryForEach: api.CcreateEnrichedDictionaryForEach = ($d) => {
    return ($, $i) => {
        const compare = (a: string, b: string) => $d.sf_compare({ a: a, b: b })

        let empty = true
        $.forEach(compare, ($) => {
            empty = false
        })
        if (empty) {
            $i.onEmpty()
        } else {
            $i.onNotEmpty(($i) => {
                let first = true
                $.map(($, key) => {
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