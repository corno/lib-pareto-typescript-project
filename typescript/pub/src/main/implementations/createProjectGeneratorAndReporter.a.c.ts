import * as pd from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'



import { A } from "../api.generated"

export const $$: A.createProjectGeneratorAndReporter = ($d) => {
    return ($is) => {
        return ($) => {
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

                    $d.createDirectory(
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
    // return ($, $i) => {

    // // return () => {


    // //     // return ($) => {

    // //     //    (
    // //     //         $,
    // //     //         {
    // //     //             'nodes': {

    // //     //                 'manualNode': ($) => {
    // //     //                     // a_mainlib.$r.(($i) => {
    // //     //                     //     a_fp.$b.createAllowedNodeMessage($)
    // //     //                     // })
    // //     //                 },
    // //     //                 'superfluousNode': ($) => {
    // //     //                     a_mainlib.$r.logError(($i) => {
    // //     //                         a_fp.$b.createSuperfluousNodeMessage($)
    // //     //                     })
    // //     //                 },
    // //     //             },
    // //     //             'onWriteFileError': ($) => {
    // //     //                 el.data(($i) => {
    // //     //                     a_fse.$a.writeFile($, $i)
    // //     //                 })
    // //     //             },
    // //     //             'onReadDirError': ($) => {
    // //     //                 a_fse.$a.readDir()({
    // //     //                     'handler': ($) => {

    // //     //                     }
    // //     //                 })
    // //     //                 el.data(($i) => {
    // //     //                 })
    // //     //             },
    // //     //         }
    // //     //     )
    // //     // }
    // // }


    // }

}