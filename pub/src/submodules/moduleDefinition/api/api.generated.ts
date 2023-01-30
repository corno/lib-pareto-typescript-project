import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcollation from "res-pareto-collation"
import * as mglossary from "../../glossary"
import * as mtemp from "../../temp"

export type CcreateSerializer = ($d: {
    readonly 'dictionaryForEach': mtemp.FDictionaryForEach
    readonly 'enrichedArrayForEach': mtemp.FEnrichedArrayForEach
    readonly 'serializeGlossary': mglossary.FSerialize
}) => glo.FSerialize

export type API = {
    createSerializer: CcreateSerializer
}