import * as pd from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as a_f2 from "lib-fountain-pen/dist/submodules/serialize"

import { A } from "../api.generated"

export const $$: A.createProjectGeneratorAndReporter = ($d) => {
    return {
        'construct': ($is) => {
            return ($) => {
                const project = $.project

                const $ixx = $d.createParametersParser.construct({
                    'errorHandler': {
                        'data': ($) => {
                            switch ($[0]) {
                                case 'missing':
                                    pl.ss($, ($) => {
                                        pd.implementMe(`@@@@NA`)

                                    })
                                    break
                                case 'too many':
                                    pl.ss($, ($) => {
                                        pd.implementMe(`@@@@2M`)

                                    })
                                    break
                                default: pl.au($[0])
                            }
                        },
                        'end': () => {
                            //
                        },
                    },
                    'handler': ($) => {
                        $d.createDirectory(
                            ($i) => {
                                $i(
                                    $.directory,
                                    ($i) => {
                                        $d.serializeProject(
                                            project,
                                            $i,
                                        )
                                        a_f2.$a.serializeDirectory()(
                                            $d.validateFiles(
                                                null,
                                            ),
                                            $i,
                                        )
                                    }
                                )
                            },
                            {
                                'log': $is.log,
                                'logError': $is.logError,
                            }
                        )
                    },
                })
                $ixx.data($.mainData.arguments)
                $ixx.end()
            }
        }
    }
}