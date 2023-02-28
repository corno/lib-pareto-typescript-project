import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"

const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'imports': d({
        "collation": "res-pareto-collation",
        "foreach": "res-pareto-foreach",
        "this": "./glossary",
    }),
    'algorithms': d({
        "createSerializer": algorithm(functionReference("this", {}, "Serialize"), constructor(null, {
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
        })),
    })
}