import * as pt from 'pareto-core-types'

import * as gcollation from "res-pareto-collation"
import * as gforeach from "res-pareto-foreach"
import * as gthis from "./glossary"

export type CcreateImplementationSerializer = ($d: {
    readonly 'arrayForEach': gforeach.FArrayForEach
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': gforeach.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': gforeach.FEnrichedDictionaryForEach
}) => gthis.FSerializeImplementation

export type API = {
    createImplementationSerializer: CcreateImplementationSerializer
}