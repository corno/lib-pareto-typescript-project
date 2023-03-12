import * as pl from 'pareto-core-lib'


import * as g_main from "res-pareto-main"
import * as g_test from "lib-pareto-test"

import { $$ as getTestSet } from "./getTestSet.p"

import {  main } from "../api.generated"

export const $$: main = ($) => {
    g_test.$a.createTestProgram({
        'getTestSet': getTestSet,
        'log': g_main.$r.log,
        'logError': g_main.$r.logError,
        'onTestErrors': g_main.$r.setExitCodeToFailed
    })($)
}