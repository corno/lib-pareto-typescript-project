import * as pt from 'pareto-core-types'

import * as g_main from "res-pareto-main"
import * as g_test from "lib-pareto-test"

export type getTestSet = g_test.F.GetTestSet
export type main = ($: g_main.T.MainData) => void

export type API = {
    'getTestSet': getTestSet
    'main': main
}