import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateSerializer = ($d) => {
    const compare = (a: string, b: string) => $d.sf_compare({ a: a, b: b })

    return ($, $i) => {
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.line(($i) => {
                $i.snippet(`'definition': `)
                $d.cb_serializeModuleDefinition($.definition, $i)
                $i.snippet(`,`)
            })
            if ($.implementation !== undefined) {
                pl.cc($.implementation, ($) => {
                    $i.line(($i) => {
                        $i.snippet(`'implementation': `)
                        $d.cb_serializeImplementation($, $i)
                        $i.snippet(`,`)
                    })
                })
            }
        })
        $i.snippet(`}`)
    }
}

