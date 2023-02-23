import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as gmain from "res-pareto-main"
import * as gtest from "lib-pareto-test"

export type CgetTestSet = gtest.FGetTestSet

export type Cmain = pt.Procedure<gmain.T.MainData>

export type API = {
    getTestSet: CgetTestSet
    main: Cmain
}