import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
import * as mtostring from "res-pareto-tostring"
import * as mfs from "res-pareto-filesystem"
import { $a } from "../index"

export const $$: api.CcreateProjectGenerator = ($d) => {
    return ($) => {

        const project = $.project
        $a.createParametersParser({
            pr_callback: ($) => {

                mfp.$a.createWriter(
                    {
                        pr_onError: ($) => {
                            $d.pr_logError($)
                        },
                        pr_reportSuperfluousNode: ($) => {
                            $d.pr_logError(mfp.$a.createSuperfluousNodeMessage($))
                        }
                    },
                )(
                    $,
                    ($i) => {
                        $d.cb_serializeProject(
                            project,
                            $i,
                        )
                        $d.cb_serializeTemplate(
                            project,
                            $i,
                        )
                
                    }
                )

            },
            pr_onError: ($) => {
                switch ($[0]) {
                    case 'missing':
                        pl.cc($[1], ($) => {
                            pl.implementMe(`@@@@NA`)

                        })
                        break
                    case 'too many':
                        pl.cc($[1], ($) => {
                            pl.implementMe(`@@@@2M`)

                        })
                        break
                    default: pl.au($[0])
                }
            }
        })($.mainData.arguments)

    }

}