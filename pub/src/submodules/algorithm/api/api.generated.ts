import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcollation from "res-pareto-collation"
import * as mforeach from "res-pareto-foreach"

export type CcreateImplementationSerializer = ($d: {
    readonly 'arrayForEach': mforeach.FArrayForEach
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': mforeach.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': mforeach.FEnrichedDictionaryForEach
}) => glo.FSerializeImplementation

export type API = {
    createImplementationSerializer: CcreateImplementationSerializer
}