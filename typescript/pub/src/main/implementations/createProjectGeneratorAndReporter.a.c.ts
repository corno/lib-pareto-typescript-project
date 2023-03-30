import * as pd from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'



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
    
                        $d.createDirectory(
                            ($i) => {
                                $i(
                                    $.directory,
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