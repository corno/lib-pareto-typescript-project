import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gforeach from "res-pareto-foreach"

export type CcreateSerializer = ($d: {
    readonly 'arrayForEach': gforeach.FArrayForEach
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': gforeach.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': gforeach.FEnrichedDictionaryForEach
}) => gglo.FSerialize

export type API = {
    createSerializer: CcreateSerializer
}