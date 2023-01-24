import * as pl from 'pareto-core-lib'
import * as api from "../api"

import { $a } from "../index"
import * as mmain from "lib-pareto-main"
import * as mtest from "lib-pareto-test"

export const $$: api.Cmain = ($) => {

    mtest.$a.createTestProgram({
        getTestSet: $a.getTestSet,
        log: mmain.$a.log,
        logError: mmain.$a.logError,
        onTestErrors: mmain.$a.setExitCodeToFailed
    })($)
}