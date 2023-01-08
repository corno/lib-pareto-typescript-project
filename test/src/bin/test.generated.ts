#!/usr/bin/env node

import * as pe from "pareto-core-exe"
import * as pl from "pareto-core-lib"
import * as test from "lib-pareto-test"

import { dependencies } from "../dependencies/dependencies.p"
import { data } from "../data/data.p"
import { createGetTestset } from "../implementation"

pe.runProgram(
    ($) => {
        test.$a.createTestProgram(
            {
                fgetTestSet: createGetTestset(
                    data,
                    dependencies
                ),
                dlog: ($) => {
                    pl.logDebugMessage($)
                },
                dlogError: ($) => {
                    pl.logDebugMessage($)
                },
                donTestErrors: ($) => {
                    pl.logDebugMessage("TEST ERROR")
                },
            },
        )(
           $.arguments
        )
    }
)