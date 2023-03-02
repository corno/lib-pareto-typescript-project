import * as pl from 'pareto-core-lib'
import * as api from "../api"

import { $a } from "../index"
import * as gmain from "res-pareto-main"
import * as gtest from "lib-pareto-test"

export const $$: api.Cmain = ($) => {

    gtest.$a.createTestProgram({
        getTestSet: $a.getTestSet,
        log: gmain.$a.log,
        logError: gmain.$a.logError,
        onTestErrors: gmain.$a.setExitCodeToFailed
    })($)
}