import * as pd from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as gfp from "lib-fountain-pen"

import { $a } from ".."

import { createProjectGenerator } from "../definition/api.generated"

export const $$: createProjectGenerator = ($d) => {
    return ($) => {

        const project = $.project

        $a.createParametersParser({
            onError: ($) => {
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
            }
        })(
            $.mainData.arguments,
            ($) => {

                gfp.$a.createDirectory(
                    {
                        onError: $d.logWriteFileError,
                        reportSuperfluousNode: $d.reportSuperfluousNode,
                    },
                )(
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
                            project,
                            $i,
                        )

                    }
                )

            }
        )

    }

}