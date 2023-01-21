import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"


export type Cresolve = pt.Procedure<glo.TModel>

export type API = {
    resolve: Cresolve
}