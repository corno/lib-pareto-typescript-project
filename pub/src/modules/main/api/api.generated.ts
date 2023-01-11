import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mmain from "lib-pareto-main"
import * as mproject from "../../project"

export type CcreateParametersParser = ($d: {
    readonly "pr_callback": pt.Procedure<glo.TParameters>
    readonly "pr_onError": pt.Procedure<glo.TArgumentError>
}) => pt.Procedure<glo.TArguments>

export type CcreateProjectGenerator = ($d: {
    readonly "af_getSingleArgument": glo.AGetSingleArgument
    readonly "cb_serializeProject": mproject.XSerializeProject
    readonly "cb_serializeTemplate": mproject.XSerializeTemplate
}) => pt.Procedure<glo.TProjectSettings>

export type CgenerateProject = pt.Procedure<glo.TProjectSettings>

export type API = {
    createParametersParser: CcreateParametersParser
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}