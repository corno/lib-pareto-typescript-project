import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'imports': d({
        "collation": "res-pareto-collation",
        "foreach": "res-pareto-foreach",
        "this": "./glossary",
    }),
    'algorithms': d({
        "createImplementationSerializer": algorithm(functionReference("this", {}, "SerializeImplementation"), constructor(null, {
            "arrayForEach": functionReference("foreach", {}, "ArrayForEach"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
            "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
        })),
    })
}