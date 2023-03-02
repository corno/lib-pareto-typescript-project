import * as pl from 'pareto-core-lib'
import * as api from "../api"

import { $ as project } from "../../../data/project.data"
import * as gpareto from "lib-pareto-typescript-project"

export const $$: api.Cmain = ($) => {

    gpareto.$a.generateProject({
        project: project,
        mainData: $,
    })
}