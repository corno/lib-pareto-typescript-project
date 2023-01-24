import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mglossary from "../../glossary"
import * as mfp from "lib-fountain-pen"

export const $$: api.CcreateSerializer = ($d) => {
    return ($, $i) => {
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.line(($i) => {
                $i.snippet(`'definition': `)
                $d.serializeModuleDefinition($.definition, $i)
                $i.snippet(`,`)
            })
            if ($.implementation !== undefined) {
                pl.cc($.implementation, ($) => {
                    $i.line(($i) => {
                        $i.snippet(`'implementation': `)
                        $d.serializeImplementation($, $i)
                        $i.snippet(`,`)
                    })
                })
            }
        })
        $i.snippet(`}`)
    }
}

