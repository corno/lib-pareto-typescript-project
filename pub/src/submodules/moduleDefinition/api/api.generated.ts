import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcollation from "res-pareto-collation"
import * as gforeach from "res-pareto-foreach"
import * as gglossary from "../../glossary"

export type CcreateSerializer = ($d: {
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': gforeach.FEnrichedArrayForEach
    readonly 'serializeGlossary': gglossary.FSerialize
}) => gglo.FSerialize

export type API = {
    createSerializer: CcreateSerializer
}