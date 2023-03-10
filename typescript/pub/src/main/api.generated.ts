import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_foreach from "res-pareto-foreach"
import * as g_fp from "lib-fountain-pen"
import * as g_fs from "res-pareto-filesystem"
import * as g_pareto2typescript from "../submodules/pareto2typescript"
import * as g_this from "./glossary"

export type createParametersParser = ($d: {}) => g_this.F.ParseArguments2

export type createProjectGenerator = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': g_foreach.F.DecorateDictionaryEntriesWithKey
    readonly 'serializeProject': g_pareto2typescript.F.ProjectToDirectory
    readonly 'serializeTemplate': g_pareto2typescript.F.ProjectToDirectory
    readonly 'validateFiles': g_pareto2typescript.F.ValidateFiles
}) => g_this.F.GenerateProjectAndReport

export type API = {
    createParametersParser: createParametersParser
    createProjectGenerator: createProjectGenerator
}