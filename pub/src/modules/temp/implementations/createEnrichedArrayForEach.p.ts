
import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const icreateEnrichedArrayForEach: api.CcreateEnrichedArrayForEach = ($d) => {
    return ($, $i) => {

        let empty = true
        $.forEach(($) => {
            empty = false
        })
        if (empty) {
            $i.onEmpty()
        } else {
            $i.onNotEmpty(($i) => {
                let first = true
                $.map(($) => {
                    $i({
                        isFirst: first,
                        value: $,
                    })
                    first = false
                })
            })
        }
    }
}