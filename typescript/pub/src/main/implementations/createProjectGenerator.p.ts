import * as pd from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as g_fp from "lib-fountain-pen"

import { $api } from "../implementation.generated"

import { createProjectGenerator } from "../api.generated"

export const $$: createProjectGenerator = ($d) => {
    return ($, $i) => {

        const project = $.project

        $api.createParametersParser({
            // onError: ($) => {
            //     switch ($[0]) {
            //         case 'missing':
            //             pl.cc($[1], ($) => {
            //                 pd.implementMe(`@@@@NA`)

            //             })
            //             break
            //         case 'too many':
            //             pl.cc($[1], ($) => {
            //                 pd.implementMe(`@@@@2M`)

            //             })
            //             break
            //         default: pl.au($[0])
            //     }
            // }
        })(
            $.mainData.arguments,
            ($) => {

                g_fp.$b.createDirectory(
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
                    },
                    $i,
                )

            }
        )

    }

}