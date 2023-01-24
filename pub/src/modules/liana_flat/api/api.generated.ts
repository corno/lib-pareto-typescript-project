import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mtemp from "../../temp"

export type CcreateSerializer = ($d: {}) => glo.FSerialize

export type API = {
    createSerializer: CcreateSerializer
}