import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"

export type CdecorateDictionaryEntriesWithKey = glo.FDecorateDictionaryEntriesWithKey

export type CcreateArrayForEach = (
    $d: {
        readonly 'compare': mcollation.FIsABeforeB
    }
) => glo.FArrayForEach

export type CcreateDictionaryForEach = (
    $d: {
        readonly 'compare': mcollation.FIsABeforeB
    }
) => glo.FDictionaryForEach

export type CcreateEnrichedArrayForEach = (
    $d: {
    }
) => glo.FEnrichedArrayForEach

export type CcreateEnrichedDictionaryForEach = (
    $d: {
        readonly 'compare': mcollation.FIsABeforeB
    }
) => glo.FEnrichedDictionaryForEach

export type API = {
    decorateDictionaryEntriesWithKey: CdecorateDictionaryEntriesWithKey,
    createArrayForEach: CcreateArrayForEach
    createDictionaryForEach: CcreateDictionaryForEach
    createEnrichedArrayForEach: CcreateEnrichedArrayForEach
    createEnrichedDictionaryForEach: CcreateEnrichedDictionaryForEach
}