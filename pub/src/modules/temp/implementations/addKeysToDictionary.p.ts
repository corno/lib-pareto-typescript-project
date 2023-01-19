
import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CaddKeysToDictionary = ($) => {
    return $.map(($, key) => {
        return {
            key: key,
            value: $,
        }
    })
}