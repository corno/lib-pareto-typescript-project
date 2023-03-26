import * as pd from 'pareto-core-data'

import { algorithm, procedure, dependent } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "serializeImplementation": algorithm(procedure("this", {}, "SerializeImplementation"), { "Annotation": "Annotation" }, dependent(null, {
            // "arrayForEach": procedure("foreach", { "T": "string" }, "ArrayForEach"),
            "forEachImplementation": procedure("foreach", { "T": "g_this.T.Implementation.implementations.D<GAnnotation>" }, "DictionaryForEach"),
            // "enrichedArrayForEach": procedure("foreach", { "T": "string" }, "EnrichedArrayForEach"),
            // "enrichedDictionaryForEach": procedure("foreach", { "T": "string" }, "EnrichedDictionaryForEach"),

        }, {})),
    }),
}