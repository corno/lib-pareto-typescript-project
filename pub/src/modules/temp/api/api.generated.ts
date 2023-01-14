import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"

export type CcreateEnrichedDictionaryForEach = (
    $d: {
        readonly "sf_compare": mcollation.FIsABeforeB
    }
) => glo.XEnrichedDictionaryForEach

export type API = {
    createEnrichedDictionaryForEach: CcreateEnrichedDictionaryForEach
}