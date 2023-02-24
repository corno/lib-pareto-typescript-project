import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcollation from "res-pareto-collation"
import * as gcommon from "glo-pareto-common"
import * as gforeach from "res-pareto-foreach"
import * as gmain from "res-pareto-main"
import * as gpareto2typescript from "../../submodules/pareto2typescript"

export type CcreateParametersParser = ($d: {
    readonly 'onError': gglo.FHandleArgumentError
}) => gglo.FParseArguments2

export type CcreateProjectGenerator = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': gforeach.FDecorateDictionaryEntriesWithKey
    readonly 'logError': gcommon.FLog
    readonly 'serializeProject': gpareto2typescript.FSerializeProject
    readonly 'serializeTemplate': gpareto2typescript.FSerializeTemplate
}) => gglo.FGenerateProject

export type CgenerateProject = gglo.FGenerateProject

export type API = {
    createParametersParser: CcreateParametersParser
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}