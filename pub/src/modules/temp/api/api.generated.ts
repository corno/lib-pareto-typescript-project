import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"

export type CaddKeysToDictionary = glo.FAddKeysToDictionary

export type CcreateArrayForEach = (
    $d: {
        readonly "sf_compare": mcollation.FIsABeforeB
    }
) => glo.XArrayForEach

export type CcreateDictionaryForEach = (
    $d: {
        readonly "sf_compare": mcollation.FIsABeforeB
    }
) => glo.XDictionaryForEach

export type CcreateEnrichedArrayForEach = (
    $d: {
    }
) => glo.XEnrichedArrayForEach

export type CcreateEnrichedDictionaryForEach = (
    $d: {
        readonly "sf_compare": mcollation.FIsABeforeB
    }
) => glo.XEnrichedDictionaryForEach

export type API = {
    addKeysToDictionary: CaddKeysToDictionary,
    createArrayForEach: CcreateArrayForEach
    createDictionaryForEach: CcreateDictionaryForEach
    createEnrichedArrayForEach: CcreateEnrichedArrayForEach
    createEnrichedDictionaryForEach: CcreateEnrichedDictionaryForEach
}