import * as pd from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as gfp from "lib-fountain-pen"
import * as gmain from "../../../main"

import { CcreateModuleGenerator } from "../api"

export const $$: CcreateModuleGenerator = ($d) => {
    return ($) => {
        gfp.$a.createWriter(
            {
                onError: $d.logError,
                reportSuperfluousNode: ($) => {
                    $d.logError(gfp.$a.createSuperfluousNodeMessage($))
                }
            },
        )(
            $.path,
            ($i) => {
                $d.serializeProject(
                    $d.mapLiana2Pareto($.data),
                    $i,
                )
            }
        )
    }
}