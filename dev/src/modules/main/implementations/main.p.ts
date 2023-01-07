import * as pl from "pareto-core-lib"

import * as mmain from "glo-pareto-main"

import { project } from "../../../data/project.p"
import * as mpareto from "lib-pareto-typescript-project"

export const imain: mmain.PProgramMain = ($) => {
    mpareto.$a.generateProject({
        project: project,
        mainData: $,
    })
}
