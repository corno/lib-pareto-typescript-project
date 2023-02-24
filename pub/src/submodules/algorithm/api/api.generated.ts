import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcollation from "res-pareto-collation"
import * as gforeach from "res-pareto-foreach"

export type CcreateImplementationSerializer = ($d: {
    readonly 'arrayForEach': gforeach.FArrayForEach
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': gforeach.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': gforeach.FEnrichedDictionaryForEach
}) => gglo.FSerializeImplementation

export type API = {
    createImplementationSerializer: CcreateImplementationSerializer
}