import * as pd from 'pareto-core-data'
import {
    types, typeReference, interfaceReference, func, parametrizedTypeReference, type, glossaryParameter
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: gproject.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "algorithm": "../../../algorithm",
            "common": "glo-pareto-common",
            "fp": "lib-fountain-pen",
            "glossary": "../../../glossary",
            "moduleDefinition": "../../../moduleDefinition",
            "project": "../../../project",
        }),
        'parameters': d({
            "Annotation": {}
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
        }),
        'interfaces': d({
        }),
        'functions': d({
            "SerializeGlossary": func(parametrizedTypeReference("glossary", { "Type": typeReference("Annotation") }, "Glossary"), null, interfaceReference("fp", "Directory"), null),
            "SerializeImplementation": func(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "Implementation"), null, interfaceReference("fp", "Directory"), null),
            "SerializeAPI": func(parametrizedTypeReference("moduleDefinition", { "Annotation": typeReference("Annotation") }, "API"), null, interfaceReference("fp", "Block"), null),
            "SerializeParetoEnvironment": func(typeReference("common", "Null"), null, interfaceReference("fp", "Directory"), null),
            "SerializeBuildEnvironment": func(typeReference("common", "Null"), null, interfaceReference("fp", "Directory"), null),
            "SerializeProject": func(parametrizedTypeReference("project", { "Annotation": typeReference("Annotation") }, "Project"), null, interfaceReference("fp", "Directory"), null),
            "SerializeTemplate": func(parametrizedTypeReference("project", { "Annotation": typeReference("Annotation") }, "Project"), null, interfaceReference("fp", "Directory"), null),
            "SerializeStates": func(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "States"), null, interfaceReference("fp", "Block"), null),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "glossary": "../../glossary",
            "main": "res-pareto-main",
            "project": "../../project",
            "foreach": "res-pareto-foreach",
            "ts": "res-typescript",
            "this": "./glossary",
        }),
        'algorithms': d({
            "createAPISerializer": algorithm(functionReference("this", {}, "SerializeAPI"), constructor(null, {
                "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
                "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
                "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
                "createQuotedString": functionReference("ts", {}, "CreateQuotedString"),
                "createBacktickedString": functionReference("ts", {}, "CreateBacktickedString"),
            })),
            "createGlossarySerializer": algorithm(functionReference("this", {}, "SerializeGlossary"), constructor(null, {
                "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
                "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
                "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
                "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
                "createQuotedString": functionReference("ts", {}, "CreateQuotedString"),
                "createBacktickedString": functionReference("ts", {}, "CreateBacktickedString"),
            })),
            "createImplementationSerializer": algorithm(functionReference("this", {}, "SerializeImplementation"), constructor(null, {
                "arrayForEach": functionReference("foreach", {}, "ArrayForEach"),
                "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
                "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
                "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
                "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
                "createQuotedString": functionReference("ts", {}, "CreateQuotedString"),
                "createBacktickedString": functionReference("ts", {}, "CreateBacktickedString"),
            })),
            "createProjectSerializer": algorithm(functionReference("this", {}, "SerializeProject"), constructor(null, {
                "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
                "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
                "serializeGlossary": functionReference("this", {}, "SerializeGlossary"),
                "serializeAPI": functionReference("this", {}, "SerializeAPI"),
                "serializeImplementation": functionReference("this", {}, "SerializeImplementation"),
                "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
                "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
                "createQuotedString": functionReference("ts", {}, "CreateQuotedString"),
                "createBacktickedString": functionReference("ts", {}, "CreateBacktickedString"),
            })),
            "createStatesSerializer": algorithm(functionReference("this", {}, "SerializeStates"), constructor(null, {
                "arrayForEach": functionReference("foreach", {}, "ArrayForEach"),
                "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
                "enrichedDictionaryForEach": functionReference("foreach", {}, "EnrichedDictionaryForEach"),
                "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
                "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
            })),
            "createTemplateSerializer": algorithm(functionReference("this", {}, "SerializeTemplate"), constructor(null, {
                "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
                "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
                "createApostrophedString": functionReference("ts", {}, "CreateApostrophedString"),
                "createQuotedString": functionReference("ts", {}, "CreateQuotedString"),
                "createBacktickedString": functionReference("ts", {}, "CreateBacktickedString"),
            })),
        })
    },
}