import * as pl from 'pareto-core-lib'
import * as pv from 'pareto-core-dev'

import * as g_main from "res-pareto-main"
import * as g_test from "lib-pareto-test"

import { $$ as getTestSet } from "./getTestSet.p"

import {  main } from "../api.generated"

export const $$: main = ($) => {
    g_test.$a.createTestProgram({
        'getTestSet': getTestSet,
        'log': pv.logDebugMessage,
        'logError': pv.logDebugMessage,
        'onTestErrors': () => { pv.logDebugMessage("ERROR XX") }
    })($)
}