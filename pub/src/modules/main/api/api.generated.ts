import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mcommon from "glo-pareto-common"
import * as mmain from "lib-pareto-main"
import * as mpareto2typescript from "../../pareto2typescript"
import * as mtemp from "../../temp"

export type CcreateParametersParser = ($d: {
    readonly 'onError': glo.FHandleArgumentError
}) => glo.FParseArguments2

export type CcreateProjectGenerator = ($d: {
    readonly 'addKeysToDictionary': mtemp.FAddKeysToDictionary
    readonly 'getSingleArgument': glo.FGetSingleArgument
    readonly 'logError': mcommon.FLog
    readonly 'serializeProject': mpareto2typescript.FSerializeProject
    readonly 'serializeTemplate': mpareto2typescript.FSerializeTemplate
}) => glo.FGenerateProject

export type CgenerateProject = glo.FGenerateProject

export type API = {
    createParametersParser: CcreateParametersParser
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}