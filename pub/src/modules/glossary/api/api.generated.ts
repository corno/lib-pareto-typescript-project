import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcollation from "res-pareto-collation"
import * as mtemp from "../../temp"

export type CcreateSerializer = ($d: {
    readonly 'arrayForEach': mtemp.FArrayForEach
    readonly 'dictionaryForEach': mtemp.FDictionaryForEach
    readonly 'enrichedArrayForEach': mtemp.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': mtemp.FEnrichedDictionaryForEach
}) => glo.FSerialize

export type API = {
    createSerializer: CcreateSerializer
}