import * as pt from 'pareto-core-types'

import * as gforeach from "res-pareto-foreach"
import * as gthis from "../../glossary_serialize_temp"

export type CcreateSerializer = ($d: {
    readonly 'arrayForEach': gforeach.FArrayForEach
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': gforeach.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': gforeach.FEnrichedDictionaryForEach
}) => gthis.FSerialize

export type API = {
    createSerializer: CcreateSerializer
}