import * as pl from "pareto-core-lib"

import * as api from "../api"

export const iserializeLeafType: api.CserializeLeafType = ($, $i) => {
    switch ($[0]) {
        case "boolean":
            pl.cc($[1], ($) => {
                $i.snippet(`boolean`)
            })
            break
        case "null":
            pl.cc($[1], ($) => {
                $i.snippet(`null`)
            })
            break
        case "number":
            pl.cc($[1], ($) => {
                $i.snippet(`number`)
            })
            break
        case "reference":
            pl.cc($[1], ($) => {
                $i.snippet(`glo.T${$}`)
            })
            break
        case "external reference":
            pl.cc($[1], ($) => {
                $i.snippet(`m${$.context}.T${$.type}`)
            })
            break
        case "string":
            pl.cc($[1], ($) => {
                $i.snippet(`string`)
            })
            break
        default: pl.au($[0])
    }
}
