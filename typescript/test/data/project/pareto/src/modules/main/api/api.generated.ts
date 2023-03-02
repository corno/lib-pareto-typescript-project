import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as gmain from "res-pareto-main"

export type Cmain = pt.Procedure<gmain.T.MainData>

export type API = {
    main: Cmain
}