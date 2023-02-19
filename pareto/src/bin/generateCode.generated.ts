import * as pe from 'pareto-core-exe'

import * as mpareto from "lib-pareto-typescript-project"

import { $ as project } from "../data/project.data"

pe.runProgram(($) => {
    mpareto.$a.generateProject({
        project: project,
        mainData: $,
    })
})