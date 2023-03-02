import * as pt from 'pareto-core-types'

import * as gmain from "res-pareto-main"
import * as gtest from "lib-pareto-test"

export type CgetTestSet = gtest.FGetTestSet
export type Cmain = ($: gmain.T.MainData) => void

export type API = {
    getTestSet: CgetTestSet
    main: Cmain
}