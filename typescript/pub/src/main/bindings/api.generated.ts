import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_foreach from "res-pareto-foreach"
import * as g_fp from "lib-fountain-pen"
import * as g_fs from "res-pareto-filesystem"
import * as g_pareto2typescript from "../../submodules/pareto2typescript"
import * as g_this from "../glossary"

export type generateProject = g_this.F.GenerateProject

export type API = {
    generateProject: generateProject
}