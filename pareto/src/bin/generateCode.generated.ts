import * as pe from 'pareto-core-exe'

import * as gpareto from "lib-pareto-typescript-project"

import { $ as project } from "../data/project.data"

pe.runProgram(($) => {
    gpareto.$b.generateProject({
        project: project,
        mainData: $,
    })
})