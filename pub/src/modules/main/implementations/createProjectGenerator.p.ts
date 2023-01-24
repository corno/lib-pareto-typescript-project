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
            onError: ($) => {
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
        })(
            $.mainData.arguments,
            ($) => {

                mfp.$a.createWriter(
                    {
                        onError: ($) => {
                            $d.logError($)
                        },
                        reportSuperfluousNode: ($) => {
                            $d.logError(mfp.$a.createSuperfluousNodeMessage($))
                        }
                    },
                )(
                    $.testDirectory,
                    ($i) => {
                        $d.serializeProject(
                            project,
                            $i,
                        )
                        $d.serializeTemplate(
                            project,
                            $i,
                        )

                    }
                )

            }
        )

    }

}