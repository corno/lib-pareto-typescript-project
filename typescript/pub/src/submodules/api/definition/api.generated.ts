import * as pt from 'pareto-core-types'

import * as gcollation from "res-pareto-collation"
import * as gforeach from "res-pareto-foreach"
import * as gthis from "../../api"

export type CcreateSerializer = ($d: {
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': gforeach.FEnrichedArrayForEach
}) => gthis.FSerialize

export type API = {
    createSerializer: CcreateSerializer
}