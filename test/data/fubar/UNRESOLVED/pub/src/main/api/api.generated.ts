import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gforeach from "res-pareto-foreach"

export type CcreateSerializer = ($d: {
    readonly 'arrayForEach': mforeach.FArrayForEach
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': mforeach.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': mforeach.FEnrichedDictionaryForEach
}) => glo.FSerialize

export type API = {
    createSerializer: CcreateSerializer
}