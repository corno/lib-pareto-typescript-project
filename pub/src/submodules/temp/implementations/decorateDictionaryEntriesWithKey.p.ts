
import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CdecorateDictionaryEntriesWithKey = ($) => {
    return $.map(($, key) => {
        return {
            key: key,
            value: $,
        }
    })
}