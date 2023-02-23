import * as pd from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as gfp from "lib-fountain-pen"
import * as gmain from "../../../main"

import { CcreateProjectGenerator } from "../api"

export const $$:CcreateProjectGenerator = ($d) => {
    return ($) => {

        const model = $.model
        gmain.$a.createParametersParser({
            onError: ($) => {
                switch ($[0]) {
                    case 'missing':
                        pl.cc($[1], ($) => {
                            pd.implementMe("@@@@NA")

                        })
                        break
                    case 'too many':
                        pl.cc($[1], ($) => {
                            pd.implementMe("@@@@2M")

                        })
                        break
                    default: pl.au($[0])
                }
            }
        })(
            $.mainData.arguments,
            ($) => {
                gfp.$a.createWriter(
                    {
                        onError: $d.logError,
                        reportSuperfluousNode: ($) => {
                            $d.logError(gfp.$a.createSuperfluousNodeMessage($))
                        }
                    },
                )(
                    $.testDirectory,
                    ($i) => {
                        const modules = $d.mapLiana2pareto(model)
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