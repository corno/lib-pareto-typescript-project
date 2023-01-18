import * as pl from 'pareto-core-lib'
import * as api from "../api"

import { $a } from "../index"
import * as mtest from "lib-pareto-test"

export const $$: api.Cmain = ($) => {

    mtest.$a.createTestProgram({
        af_getTestSet: $a.getTestSet,
        pr_log: pl.logDebugMessage,
        pr_logError: pl.logDebugMessage,
        pr_onTestErrors: () => { pl.logDebugMessage(`TEST ERRORS`) }
    })($.arguments)
}