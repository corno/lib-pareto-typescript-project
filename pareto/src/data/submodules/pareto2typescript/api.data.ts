import * as pd from 'pareto-core-data'

import { algorithm, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "serializeGlossary": algorithm(procedure("this", {}, "SerializeGlossary"), { "Annotation": "Annotation" }, dependent(null, {
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),
            "createApostrophedString": sfunction("ts", {}, "CreateApostrophedString"),
            "createQuotedString": sfunction("ts", {}, "CreateQuotedString"),
            "createBacktickedString": sfunction("ts", {}, "CreateBacktickedString"),
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
            "enrichedDictionaryForEach": procedure("foreach", {}, "EnrichedDictionaryForEach"),
        }, {})),
        "serializeImplementation": algorithm(procedure("this", {}, "SerializeImplementation"), { "Annotation": "Annotation" }, dependent(null, {
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
            "enrichedDictionaryForEach": procedure("foreach", {}, "EnrichedDictionaryForEach"),
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),
        }, {})),
        "validateFiles": algorithm(procedure("this", {}, "ValidateFiles"), { "Annotation": "Annotation" }),
        "serializeProject": algorithm(procedure("this", {}, "ProjectToDirectory"), { "Annotation": "Annotation" }, dependent(null, {
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),

            "serializeGlossary": procedure("this", { "T": "GAnnotation" }, "SerializeGlossary"),
            "serializeImplementation": procedure("this", { "T": "GAnnotation" }, "SerializeImplementation"),
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
            "enrichedDictionaryForEach": procedure("foreach", {}, "EnrichedDictionaryForEach"),

        }, {})),
        "serializeStates": algorithm(procedure("this", {}, "SerializeStates"), { "Annotation": "Annotation" }, dependent(null, {
            "createApostrophedString": sfunction("ts", {}, "CreateApostrophedString"),
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
            "enrichedDictionaryForEach": procedure("foreach", {}, "EnrichedDictionaryForEach"),
        }, {})),
        "serializeTemplate": algorithm(procedure("this", {}, "ProjectToDirectory"), { "Annotation": "Annotation" }, dependent(null, {
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
            "enrichedDictionaryForEach": procedure("foreach", {}, "EnrichedDictionaryForEach"),
        }, {})),
    })
}