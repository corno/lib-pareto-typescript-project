import * as pt from 'pareto-core-types'

import * as gmain from "res-pareto-main"
import * as gtest from "lib-pareto-test"

export type getTestSet = gtest.F.GetTestSet
export type main = ($: gmain.T.MainData) => void

export type API = {
    'getTestSet': getTestSet
    'main': main
}