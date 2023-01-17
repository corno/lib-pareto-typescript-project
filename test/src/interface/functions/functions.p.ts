import * as pt from 'pareto-core-types'

import * as test from "lib-pareto-test"
import { DDependencies } from "../dependencies/dependencies.p"

export type FCreateGetTestset = (
    $: null,
    $f: DDependencies,
    //$a: pt.ProcessAsyncValue
) => test.AGetTestSet