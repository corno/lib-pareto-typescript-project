import * as pl from 'pareto-core-lib'
import * as pv from 'pareto-core-dev'

import * as g_main from "res-pareto-main"
import * as g_test from "lib-pareto-test"

import { $$ as getTestSet } from "./getTestSet.a.f"

import { A } from "../api.generated"

export const $$: A.main = ($) => {
    g_test.$b.createTestProgram({
        'getTestSet': getTestSet,
    }).construct()($)
}