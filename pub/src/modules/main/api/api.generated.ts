import * as pt from "pareto-core-types"

import * as glo from "./types.generated"


export type CcreateProjectGenerator = ($d: {}) => pt.Procedure<glo.TProjectSettings>

export type CgenerateProject = pt.Procedure<glo.TProjectSettings>

export type API = {
    createProjectGenerator: CcreateProjectGenerator
    generateProject: CgenerateProject
}