import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
import * as mtostring from "res-pareto-tostring"
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
                            fs.$a.createWriteStream(
                                {
                                    pr_onError: () => {
                                        pl.logDebugMessage(`SSDSFSDFS`)
                                    }
                                },
                            )(

                                {
                                    path: [$],
                                    createContainingDirectories: true,
                                },
                                $c,
                            )
                        },
                        pi_pipeFountainPen: mfp.$a.createFountainPen(
                            {}
                        ),
                        af_getNodes: ($) => {
                            return fs.$a.readDirectory({
                                path: $
                            }).map<pt.Dictionary<string>>(($) => {
                                switch ($[0]) {
                                    case "error":
                                        return pl.cc($[1], ($) => {
                                            return pl.asyncValue(pl.createEmptyDictionary())
                                        })
                                    case "success":
                                        return pl.cc($[1], ($) => {
                                            return  pl.asyncValue($.map(($, key) => key))
                                        })
                                    default: return pl.au($[0])
                                }
                            })
                        },
                        pr_reportSuperfluousNode: ($) => {
                            pl.logDebugMessage(`SUPERFLUOUS: ${mtostring.$a.joinNestedStrings({
                                strings: $.path,
                                separator: "/",
                            })}/${$.name}`)
                        },
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