import * as pl from "pareto-core-lib"

import * as mexe from "lib-pareto-exe"
import * as mmain from "glo-pareto-main"


import { project } from "../../../data/project.p"
import { igenerateProject } from "./generateProject.p"

export const imain: mmain.PProgramMain = ($) => {
    mexe.p_getSingleArgument($.arguments, {
        callback: ($) => {
            igenerateProject({
                project: project,
                path: $,
            })
        },
        error: () => {
            pl.implementMe("@@@@")
        }
    })
}
