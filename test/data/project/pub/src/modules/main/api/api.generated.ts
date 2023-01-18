import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcommon from "glo-pareto-common"

export type CcreateSerializer = ($: mcommon.TNull, $d: {}) => glo.XSerialize

export type API = {
    createSerializer: CcreateSerializer
}