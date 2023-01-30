
import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CcreateEnrichedArrayForEach = ($d) => {
    return ($, $i) => {
        let length = $.reduce(0, (current) => current + 1)

        if (length === 0) {
            $i.onEmpty()
        } else {
            $i.onNotEmpty(($i) => {
                let current = 0
                $.forEach(($) => {
                    $i({
                        isFirst: current === 0,
                        isLast: current === length - 1,
                        value: $,
                    })
                    current += 1
                })
            })
        }
    }
}