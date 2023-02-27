import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import { CcreateSerializer } from "../api"

export const $$: CcreateSerializer = ($d) => {
    return ($, $i) => {
        $i.snippet(`{`)
        $i.indent(($i) => {
            $i.nestedLine(($i) => {
                $i.snippet(`'definition': `)
                $d.serializeModuleDefinition($.definition, $i)
                $i.snippet(`,`)
            })
            $i.nestedLine(($i) => {
                $i.snippet(`'implementation': `)
                switch ($.implementation[0]) {
                    case 'generated':
                        pl.cc($.implementation[1], ($) => {
                            pd.implementMe("HIEROS")
                            //$d.serializeImplementation($, $i)
                        })
                        break
                    case 'manual':
                        pl.cc($.implementation[1], ($) => {
                            $i.snippet(`[manual, {}],`)
                        })
                        break
                    default: pl.au($.implementation[0])
                }
                $i.snippet(`,`)
            })
            if ($.implementation !== undefined) {
                pl.cc($.implementation, ($) => {
                })
            }
        })
        $i.snippet(`}`)
    }
}

