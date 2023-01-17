#!/usr/bin/env node

import * as pe from 'pareto-core-exe'
import * as pl from 'pareto-core-lib'
import * as test from "lib-pareto-test"

import { dependencies } from "../dependencies/dependencies.p"
import { data } from "../data/data.p"
import { createGetTestset } from "../implementation"

pe.runProgram(
    ($) => {
        test.$a.createTestProgram(
            {
                af_getTestSet: createGetTestset(
                    data,
                    dependencies
                ),
                pr_log: ($) => {
                    pl.logDebugMessage($)
                },
                pr_logError: ($) => {
                    pl.logDebugMessage($)
                },
                pr_onTestErrors: ($) => {
                    pl.logDebugMessage("TEST ERROR")
                },
            },
        )(
           $.arguments
        )
    }
)