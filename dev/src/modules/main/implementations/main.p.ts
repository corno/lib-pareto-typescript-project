import * as pl from "pareto-core-lib"

import * as api from "../api"

import { project } from "../../../data/project.p"
import * as mpareto from "lib-pareto-typescript-project"

export const imain: api.Cmain = ($) => {
    mpareto.$a.generateProject({
        project: project,
        mainData: $,
    })
}
