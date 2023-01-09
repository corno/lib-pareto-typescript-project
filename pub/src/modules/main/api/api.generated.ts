import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mproject from "../../project"

export type CcreateProjectGenerator = ($d: {
    readonly "af_getSingleArgument": glo.AGetSingleArgument
    readonly "cb_serializeProject": mproject.XSerializeProject
    readonly "cb_serializeTemplate": mproject.XSerializeTemplate
}) => pt.Procedure<glo.TProjectSettings>

export type CgenerateProject = pt.Procedure<glo.TProjectSettings>

export type API = {
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}