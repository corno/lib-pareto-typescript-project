import * as pd from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as g_fp from "lib-fountain-pen"


import { A } from "../api.generated"

export const $$: A.generateProjectAndReport = ($d) => {
    return ($, $i) => {

        const project = $.project

        const $ixx = $d.createParametersParser({
            'errorHandler': {
                'data': ($) => {
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
                },
                'end': () => {
                    //
                },
            },
            'handler': ($) => {

                const y = g_fp.$a.createDirectoryCreator(
                    {
                        'getNodes': () => {
                            pd.implementMe(`sfasdfafsfd`)
                        },
                        'pipeFountainPen': () => {
                            pd.implementMe(`sfasdfafsfd`)
                        },
                    }
                )

                y(
                    ($i) => {
                        $i(
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
                                $d.validateFiles(
                                    null,
                                    $i,
                                )
                            }
                        )
                    },
                    {
                        'createWriteStream': () => {
                            pd.implementMe(`sfasdfafsfd`)
                        },
                        'report': $i
                    }
                )
            },
        })
        $ixx.data($.mainData.arguments)
        $ixx.end()
    }

}