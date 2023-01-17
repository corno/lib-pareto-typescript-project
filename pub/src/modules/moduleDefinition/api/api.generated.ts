import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mglossary from "../../glossary"
import * as mtemp from "../../temp"

export type CcreateSerializer = ($d: {
    readonly 'sf_compare': mcollation.FIsABeforeB
    readonly 'cb_enrichedArrayForEach': mtemp.XEnrichedArrayForEach
    readonly 'cb_serializeGlossary': mglossary.XSerialize
}) => glo.XSerialize

export type API = {
    createSerializer: CcreateSerializer
}