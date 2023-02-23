import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mliana2pareto from "../../liana2pareto"
import * as mpareto2typescript from "../../pareto2typescript"
import * as mtostring from "res-pareto-tostring"
import * as mts from "res-typescript"

export type CcreateSerializer = ($d: {
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'joinNestedStrings': mtostring.FJoinNestedStrings
    readonly 'mapLiana2States': mliana2pareto.FMapLiana2States
    readonly 'serializeStates': mpareto2typescript.FSerializeStates
}) => glo.FSerialize

export type Cserialize = glo.FSerialize

export type API = {
    createSerializer: CcreateSerializer
    serialize: Cserialize
}