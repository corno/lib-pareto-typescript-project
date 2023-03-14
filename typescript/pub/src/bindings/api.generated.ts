import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_foreach from "res-pareto-foreach"
import * as g_fp from "lib-fountain-pen"
import * as g_fs from "res-pareto-filesystem"
import * as g_pareto2typescript from "../submodules/pareto2typescript"
import * as g_this from "../main/glossary"

export type generateProject = ($c: ($b: g_this.B.GenerateProject) => void) => void

export type API = {
    generateProject: generateProject
}