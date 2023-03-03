import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"

const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "createImplementationSerializer": algorithm(functionReference("this", {}, "SerializeImplementation"), constructor(null, {
            "arrayForEach": functionReference("foreach", {}, "ArrayForEach"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
            "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
        })),
    })
}