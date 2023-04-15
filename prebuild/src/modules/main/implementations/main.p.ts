import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'

import * as a_liana from "lib-liana"
import * as a_liana_error from "lib-liana/dist/submodules/errorMessaging"
import * as a_main from "res-pareto-main"

import { $ as data } from "../../../data/data.data"

import { main } from "../api"

export const $$: main = ($) => {
    //pv.logDebugMessage("REENABLE")
    const el = a_main.$r.createErrorLogger().construct()

    a_liana.$b.compile<pd.SourceLocation>({
        'getSourceLocation': ($) => $
    })(data, ($) => {
        pv.logDebugMessage(a_liana_error.$a.createErrorMessage()($))
    })
    el.end()
}