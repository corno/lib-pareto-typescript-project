import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcommon from "glo-pareto-common"

export type CcreateResolver = ($d: {
    readonly 'onError': gcommon.FLog
}) => gglo.FResolve

export type API = {
    createResolver: CcreateResolver
}