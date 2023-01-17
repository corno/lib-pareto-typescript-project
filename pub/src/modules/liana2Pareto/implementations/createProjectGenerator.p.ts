import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mfp from "lib-fountain-pen"
import * as mtostring from "res-pareto-tostring"
import * as mfs from "res-pareto-filesystem"
import * as mmain from "../../main"

export const $$: api.CcreateProjectGenerator = ($d) => {
    return ($) => {

        const model = $.model
        mmain.$a.createParametersParser({
            pr_callback: ($) => {

                mfp.$a.createWriterCreator(
                    {
                        if_createWriteStream: ($, $c) => {
                            mfs.$a.createWriteStream(
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
                            return mfs.$a.readDirectory({
                                path: $
                            }).map<pt.Dictionary<string>>(($) => {
                                switch ($[0]) {
                                    case 'error':
                                        return pl.cc($[1], ($) => {
                                            return pl.asyncValue(pl.createEmptyDictionary())
                                        })
                                    case 'success':
                                        return pl.cc($[1], ($) => {
                                            return pl.asyncValue($.map(($, key) => key))
                                        })
                                    default: return pl.au($[0])
                                }
                            })
                        },
                        pr_reportSuperfluousNode: ($) => {
                            const red = "\x1b[31m"
                            const green = "\x1b[32m"
                            const reset = "\x1b[0m"
                            pl.logDebugMessage(`${red}superfluous node: ${mtostring.$a.joinNestedStrings({
                                strings: $.path,
                                separator: "/",
                            })}/${$.name}${reset}`)
                        },
                    },
                )(
                    $,
                    ($i) => {
                        const module = $d.sf_mapLiana2Pareto(model)

                        $d.cb_serializeProject(
                            module,
                            $i,
                        )
                    }
                )

            },
            pr_onError: ($) => {
                switch ($[0]) {
                    case 'missing':
                        pl.cc($[1], ($) => {
                            pl.implementMe("@@@@NA")

                        })
                        break
                    case 'too many':
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