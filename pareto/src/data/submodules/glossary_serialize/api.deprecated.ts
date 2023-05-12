import * as pd from 'pareto-core-data'

import { constructor, algorithm, procedure, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "serialize": algorithm(procedure("this", {}, "Serialize"), { "Annotation": "Annotation" }, dependent(null, {
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
            "serializeAnnotation": procedure("this", { "X": "GAnnotation" }, "SerializeAnnotation"),
            "serializeAnnotationType": procedure("this", { "X": "GAnnotation" }, "SerializeAnnotationType"),
        }, {}))
    }),
}