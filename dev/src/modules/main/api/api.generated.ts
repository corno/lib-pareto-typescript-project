import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mmain from "lib-pareto-main"

export type Cmain = pt.Procedure<mmain.TMainData>

export type API = {
    main: Cmain
}