import * as pv from 'pareto-core-dev'

import * as gerror from "lib-liana/dist/submodules/errorMessaging"
import * as gmain from "lib-liana/dist/main"

import { $ as data } from "../../../data/data.data"

import { main } from "../api"

export const $$: main = ($) => {
    pv.logDebugMessage("REENABLE")
    // gmain.$a.compile(data, ($) => {
    //     pv.logDebugMessage(gerror($))
    // })
}