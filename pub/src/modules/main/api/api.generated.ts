import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mproject from "../../project"

export type CcreateProjectGenerator = ($d: {
    readonly "cbgetSingleArgument": glo.XGetSingleArgument
    readonly "cbserializeProject": mproject.XSerializeProject
    readonly "cbserializeTemplate": mproject.XSerializeTemplate
}) => pt.Procedure<glo.TProjectSettings>

export type CgenerateProject = pt.Procedure<glo.TProjectSettings>

export type API = {
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}