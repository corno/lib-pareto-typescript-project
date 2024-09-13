import * as pm from 'pareto-core-map'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-dev'

import * as g_pub from "../../../../../pub"

import { A } from "../api.generated"

export const $$: A.getTestSet = ($) => {
    pd.implementMe("IMPLEMENT A TESTSET")
    return pa.asyncValue({
        elements: pm.wrapRawDictionary({})
    })
}