
import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CcreateDictionaryForEach = ($d) => {
    return ($, $i) => {
        const compare = (a: string, b: string) => $d.sf_compare({ a: a, b: b })

        $.forEach(compare, ($, key) => {
            $i({
                key: key,
                value: $,
            })
        })
    }
}