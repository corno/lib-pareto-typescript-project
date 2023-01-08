import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
import * as mexe from "lib-pareto-exe"

export const icreateProjectGenerator: api.CcreateProjectGenerator = ($d) => {
    return ($) => {

        const project = $.project

        mexe.p_getSingleArgument($.mainData.arguments, {
            callback: ($) => {

                const $i = mfp.$a.createWriter(
                    {
                        path: $,
                        configuration: mfp._defaultSettings,
                    },
                    {
                        onError: ($) => {
                            pl.logDebugMessage("ERROR!!!")
                        }
                    },
                )

                $d.cbserializeProject(
                    project,
                    $i,
                )
                $d.cbserializeTemplate(
                    project,
                    $i,
                )
            },
            error: () => {
                pl.implementMe("@@@@")
            }
        })

    }

}