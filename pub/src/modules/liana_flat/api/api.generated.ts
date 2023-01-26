import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mliana2Pareto from "../../liana2Pareto"
import * as mpareto2typescript from "../../pareto2typescript"
import * as mtemp from "../../temp"
import * as mtostring from "res-pareto-tostring"
import * as mts from "res-typescript"

export type CcreateSerializer = ($d: {
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'joinNestedStrings': mtostring.FJoinNestedStrings
    readonly 'mapLiana2States': mliana2Pareto.FMapLiana2States
    readonly 'serializeStates': mpareto2typescript.FSerializeStates
}) => glo.FSerialize

export type API = {
    createSerializer: CcreateSerializer
}