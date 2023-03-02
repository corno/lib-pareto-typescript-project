import * as pl from 'pareto-core-lib'


import * as gmain from "res-pareto-main"
import * as gtest from "lib-pareto-test"

import { $a } from "../index"

import { Cmain } from "../api"

export const $$:Cmain = ($) => {
    gtest.$a.createTestProgram({
        'getTestSet': $a.getTestSet,
        'log': gmain.$a.log,
        'logError': gmain.$a.logError,
        'onTestErrors': gmain.$a.setExitCodeToFailed
    })($)
}