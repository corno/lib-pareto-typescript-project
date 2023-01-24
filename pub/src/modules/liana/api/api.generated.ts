import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcommon from "glo-pareto-common"

export type CcreateResolver = ($d: {
    readonly 'onError': mcommon.FLog
}) => glo.FResolve

export type API = {
    createResolver: CcreateResolver
}