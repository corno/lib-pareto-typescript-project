import * as pt from 'pareto-core-types'

import * as g_collation from "res-pareto-collation"
import * as g_foreach from "res-pareto-foreach"
import * as g_this from "../algorithm"

export type createImplementationSerializer = ($d: {
    readonly 'arrayForEach': g_foreach.F.ArrayForEach
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
    readonly 'enrichedArrayForEach': g_foreach.F.EnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': g_foreach.F.EnrichedDictionaryForEach
}) => g_this.F.SerializeImplementation

export type API = {
    createImplementationSerializer: createImplementationSerializer
}