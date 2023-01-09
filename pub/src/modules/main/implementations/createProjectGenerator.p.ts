import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
import * as mexe from "lib-pareto-exe"
import * as fs from "res-pareto-filesystem"

export const icreateProjectGenerator: api.CcreateProjectGenerator = ($d) => {
    return ($) => {

        const project = $.project

        mexe.p_getSingleArgument($.mainData.arguments, {
            callback: ($) => {

                mfp.$a.createWriterCreator(
                    {},
                    {
                        onError: ($) => {
                            pl.logDebugMessage("ERROR!!!")
                        },
                        createWriteStream: ($, $c) => {
                            fs.f_createWriteStream(
                                {
                                    path: [$],
                                    createContainingDirectories: true,
                                },
                                $c,
                                {
                                    onError: () => {
                                        pl.logDebugMessage(`SSDSFSDFS`)
                                    }
                                },
                                ($, $i) => $._execute($i)
                            )
                        },
                        pipeFountainPen: mfp.$a.createFountainPenCreator(
                            mfp._defaultSettings,
                            {}
                        ),
                    },
                )(
                    {
                        path: $,
                        //configuration: mfp._defaultSettings,
                    },
                    ($i) => {
                        $d.cbserializeProject(
                            project,
                            $i,
                        )
                        $d.cbserializeTemplate(
                            project,
                            $i,
                        )
                    }
                )

            },
            error: ($) => {
                switch ($[0]) {
                    case "no arguments found":
                        pl.cc($[1], ($) => {
                            pl.implementMe("@@@@NA")

                        })
                        break
                    case "too many arguments found":
                        pl.cc($[1], ($) => {
                            pl.implementMe("@@@@2M")

                        })
                        break
                    default: pl.au($[0])
                }
            }
        })

    }

}