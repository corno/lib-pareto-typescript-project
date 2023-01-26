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
            onError: ($) => {
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
        })(
            $.mainData.arguments,
            ($) => {
                mfp.$a.createWriter(
                    {
                        onError: $d.logError,
                        reportSuperfluousNode: ($) => {
                            $d.logError(mfp.$a.createSuperfluousNodeMessage($))
                        }
                    },
                )(
                    $.testDirectory,
                    ($i) => {
                        const modules = $d.mapLiana2Pareto(model)
                        $d.dictionaryForEach(modules.modules, ($) => {
                            $i.directory($.key, ($i) => {
                                $d.serializeProject(
                                    $.value,
                                    $i,
                                )
                            })
                        })
                    }
                )
            }
        )
    }
}