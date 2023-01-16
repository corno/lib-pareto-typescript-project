import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const iserializeLeafType: api.CserializeLeafType = ($, $i) => {
    function serializeContext($: mglossary.TContext, $i: mfp.ILine) {
        switch ($[0]) {
            case "import":
                pl.cc($[1], ($) => {
                    $i.snippet(`m${$}.`)
                })
                break
            case "local":
                pl.cc($[1], ($) => {
                    $i.snippet(`glo.`)
                })
                break
            default: pl.au($[0])
        }
    }
    switch ($[0]) {
        case "boolean":
            pl.cc($[1], ($) => {
                $i.snippet(`boolean`)
            })
            break
        case "number":
            pl.cc($[1], ($) => {
                $i.snippet(`number`)
            })
            break
        case "reference":
            pl.cc($[1], ($) => {
                serializeContext($.context, $i)
                $.namespaces.forEach(($) => {
                    $i.snippet(`N${$}.`)
                })
                $i.snippet(`T${$.type}`)
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
