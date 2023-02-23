import * as pl from 'pareto-core-lib'

import * as mapi from "../api"
import * as mmain from "res-pareto-main"
import * as mtest from "lib-pareto-test"

import { $a } from "../index"

export const $$: mapi.Cmain = ($) => {

    mtest.$a.createTestProgram({
        getTestSet: $a.getTestSet,
        log: mmain.$a.log,
        logError: mmain.$a.logError,
        onTestErrors: mmain.$a.setExitCodeToFailed
    })($)
}