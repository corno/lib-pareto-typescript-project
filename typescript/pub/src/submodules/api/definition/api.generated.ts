import * as pt from 'pareto-core-types'

import * as g_collation from "res-pareto-collation"
import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"

export type createSerializer = ($d: {
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
    readonly 'enrichedArrayForEach': g_foreach.F.EnrichedArrayForEach
}) => g_this.F.Serialize

export type API = {
    createSerializer: createSerializer
}