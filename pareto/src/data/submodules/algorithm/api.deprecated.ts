import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createImplementationSerializer": algorithm(functionReference("this", {}, "SerializeImplementation"), constructor(null, {
            "arrayForEach": functionReference("foreach", {}, "ArrayForEach"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
            "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
        })),
    }),
}