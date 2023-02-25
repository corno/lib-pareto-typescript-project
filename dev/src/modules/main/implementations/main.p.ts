import * as gliana2pareto from "lib-liana/dist/submodules/liana2pareto"

import { $ as data } from "../../../data/data.data"

import { Cmain } from "../api"

export const $$: Cmain = ($) => {
    data.__forEach(($) => {
        gliana2pareto.$a.generateModule($)
    })
}