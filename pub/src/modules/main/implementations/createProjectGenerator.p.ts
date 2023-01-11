import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
import * as fs from "res-pareto-filesystem"
import { icreateParametersParser } from "./createParametersParser.p"

export const icreateProjectGenerator: api.CcreateProjectGenerator = ($d) => {
    return ($) => {

        const project = $.project
        icreateParametersParser({
            pr_callback: ($) => {

                mfp.$a.createWriterCreator(
                    {
                        if_createWriteStream: ($, $c) => {
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
                        pi_pipeFountainPen: mfp.$a.createFountainPen(
                            {}
                        ),
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
                    case "missing":
                        pl.cc($[1], ($) => {
                            pl.implementMe("@@@@NA")

                        })
                        break
                    case "too many":
                        pl.cc($[1], ($) => {
                            pl.implementMe("@@@@2M")

                        })
                        break
                    default: pl.au($[0])
                }
            }
        })($.mainData.arguments)

    }

}