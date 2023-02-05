import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcollation from "res-pareto-collation"
import * as mforeach from "res-pareto-foreach"
import * as mglossary from "../../glossary"

export type CcreateSerializer = ($d: {
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': mforeach.FEnrichedArrayForEach
    readonly 'serializeGlossary': mglossary.FSerialize
}) => glo.FSerialize

export type API = {
    createSerializer: CcreateSerializer
}