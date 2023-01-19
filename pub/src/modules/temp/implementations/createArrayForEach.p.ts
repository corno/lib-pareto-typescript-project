
import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CcreateArrayForEach = ($d) => {
    return ($, $i) => {
        $.forEach(($) => {
            $i({
                value: $,
            })
        })
    }
}