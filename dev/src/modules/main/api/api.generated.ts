import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mmain from "glo-pareto-main"

export type CgenerateProject = pt.Procedure<glo.TProjectSettings>

export type Cmain = pt.Procedure<{
    readonly "arguments": mmain.TArguments
}>

export type API = {
    generateProject: CgenerateProject
    main: Cmain
}