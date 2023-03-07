import * as pv from 'pareto-core-dev'
import * as pd from 'pareto-core-data'

import * as gliana2pareto from "lib-liana/dist/submodules/liana2glossary"
import * as gresolve from "lib-liana/dist/submodules/resolve"
import * as gerror from "lib-liana/dist/submodules/errorMessaging"
import * as gmain from "lib-liana/dist/main"

import { $ as data } from "../../../data/data.data"

import { main } from "../api"

export const $$: main = ($) => {
    gmain.$a.compile(data, ($) => {
        pv.logDebugMessage(gerror($))
    })
}