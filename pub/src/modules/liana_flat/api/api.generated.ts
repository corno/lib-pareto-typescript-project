import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mtemp from "../../temp"
import * as mts from "res-typescript"

export type CcreateSerializer = ($d: {
    readonly 'createIdentifier': mts.FCreateIdentifier
}) => glo.FSerialize

export type API = {
    createSerializer: CcreateSerializer
}