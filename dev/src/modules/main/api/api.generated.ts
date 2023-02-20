import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mmain from "res-pareto-main"

export type Cmain = ($: mmain.T.MainData) => void

export type API = {
    main: Cmain
}