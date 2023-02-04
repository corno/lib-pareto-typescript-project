import * as pl from 'pareto-core-lib'
import * as api from "../api"

import { $ as project } from "../../../data/project.data"
import * as mpareto from "lib-pareto-typescript-project"

export const $$: api.Cmain = ($) => {

    mpareto.$a.generateProject({
        project: project,
        mainData: $,
    })
}