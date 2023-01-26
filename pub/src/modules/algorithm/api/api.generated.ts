import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mtemp from "../../temp"

export type CcreateImplementationSerializer = ($d: {
    readonly 'arrayForEach': mtemp.FArrayForEach
    readonly 'dictionaryForEach': mtemp.FDictionaryForEach
    readonly 'enrichedArrayForEach': mtemp.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': mtemp.FEnrichedDictionaryForEach
}) => glo.FSerializeImplementation

export type API = {
    createImplementationSerializer: CcreateImplementationSerializer
}