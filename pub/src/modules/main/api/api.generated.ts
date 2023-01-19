import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mcommon from "glo-pareto-common"
import * as mmain from "lib-pareto-main"
import * as mpareto2typescript from "../../pareto2typescript"
import * as mtemp from "../../temp"

export type CcreateParametersParser = ($d: {
    readonly 'pr_callback': pt.Procedure<glo.TParameters>
    readonly 'pr_onError': pt.Procedure<glo.TArgumentError>
}) => pt.Procedure<glo.TArguments>

export type CcreateProjectGenerator = ($d: {
    readonly 'sf_addKeysToDictionary': mtemp.FAddKeysToDictionary
    readonly 'af_getSingleArgument': glo.AGetSingleArgument
    readonly 'pr_logError': pt.Procedure<mcommon.TString>
    readonly 'cb_serializeProject': mpareto2typescript.XSerializeProject
    readonly 'cb_serializeTemplate': mpareto2typescript.XSerializeTemplate
}) => pt.Procedure<glo.TProjectSettings>

export type CgenerateProject = pt.Procedure<glo.TProjectSettings>

export type API = {
    createParametersParser: CcreateParametersParser
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}