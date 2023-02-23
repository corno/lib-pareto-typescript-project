import * as pd from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as mapi from "../api"
import * as mfp from "lib-fountain-pen"

import { $a } from "../index"

export const $$: mapi.CcreateProjectGenerator = ($d) => {
    return ($) => {

        const project = $.project


        $a.createParametersParser({
            onError: ($) => {
                switch ($[0]) {
                    case 'missing':
                        pl.cc($[1], ($) => {
                            pd.implementMe(`@@@@NA`)

                        })
                        break
                    case 'too many':
                        pl.cc($[1], ($) => {
                            pd.implementMe(`@@@@2M`)

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