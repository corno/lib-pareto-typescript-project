import * as pl from 'pareto-core-lib'

import { CcreateSerializer } from "../api"

export const $$:CcreateSerializer = ($d) => {
    return ($, $i) => {
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.nestedLine(($i) => {
                $i.snippet(`'definition': `)
                $d.serializeModuleDefinition($.definition, $i)
                $i.snippet(`,`)
            })
            if ($.implementation !== undefined) {
                pl.cc($.implementation, ($) => {
                    $i.nestedLine(($i) => {
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

