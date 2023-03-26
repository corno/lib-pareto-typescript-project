import * as pd from 'pareto-core-data'

import { algorithm } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        // "createSerializer": algorithm(functionReference("this", {}, "Serialize"), constructor(null, {
        //     "serializeAPI": functionReference("api", {}, "Serialize"),
        //     "serializeGlossary": functionReference("glossary_serialize", {}, "Serialize"),
        //     "serializeImplementation": functionReference("algorithm", {}, "SerializeImplementation"),
        //     "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
        //     "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
        // })),
        // "createSerializerWithContext": algorithm(functionReference("this", {}, "SerializeWithContext"), constructor(null, {
        //     "serialize": functionReference("this", {}, "Serialize"),
        // })),
    }),
}