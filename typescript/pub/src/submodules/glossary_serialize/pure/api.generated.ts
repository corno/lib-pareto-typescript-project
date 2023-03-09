import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_this from "../glossary"

export type createSerializer = ($d: {
    readonly 'arrayForEach': g_foreach.F.ArrayForEach
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
    readonly 'enrichedArrayForEach': g_foreach.F.EnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': g_foreach.F.EnrichedDictionaryForEach
}) => g_this.F.Serialize

export type API = {
    createSerializer: createSerializer
}