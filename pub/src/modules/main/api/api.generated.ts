import * as pt from "pareto-core-types"

import * as glo from "./types.generated"


export type CgenerateProject = pt.Procedure<glo.TProjectSettings>

export type API = {
    generateProject: CgenerateProject
}