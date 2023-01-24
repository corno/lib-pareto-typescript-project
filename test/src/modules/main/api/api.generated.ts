import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mmain from "lib-pareto-main"
import * as mtest from "lib-pareto-test"

export type CgetTestSet = mtest.FGetTestSet

export type Cmain = pt.Procedure<mmain.TMainData>

export type API = {
    getTestSet: CgetTestSet
    main: Cmain
}