import * as pd from 'pareto-core-data'
import {
    types, typeReference, interfaceReference, func, parametrizedTypeReference, type, glossaryParameter
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
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
            "SerializeGlossary": func(parametrizedTypeReference("glossary", { "Type": typeReference("Annotation") }, "Glossary"), null, interfaceReference("fp", "Writer"), null),
            "SerializeImplementation": func(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "Implementation"), null, interfaceReference("fp", "Writer"), null),
            "SerializeModuleDefinition": func(parametrizedTypeReference("moduleDefinition", { "Annotation": typeReference("Annotation") }, "ModuleDefinition"), null, interfaceReference("fp", "Writer"), null),
            "SerializeParetoEnvironment": func(typeReference("common", "Null"), null, interfaceReference("fp", "Writer"), null),
            "SerializeBuildEnvironment": func(typeReference("common", "Null"), null, interfaceReference("fp", "Writer"), null),
            "SerializeProject": func(parametrizedTypeReference("project", { "Annotation": typeReference("Annotation") }, "Project"), null, interfaceReference("fp", "Writer"), null),
            "SerializeTemplate": func(parametrizedTypeReference("project", { "Annotation": typeReference("Annotation") }, "Project"), null, interfaceReference("fp", "Writer"), null),
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
        }),
        'algorithms': d({
            "createModuleDefinitionSerializer": algorithm(definitionReference("SerializeModuleDefinition"), constructor(null, {
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "serializeGlossary": definitionReference("SerializeGlossary"),
                "createIdentifier": definitionReference("ts", {}, "CreateIdentifier"),
                "createApostrophedString": definitionReference("ts", {}, "CreateApostrophedString"),
                "createQuotedString": definitionReference("ts", {}, "CreateQuotedString"),
                "createBacktickedString": definitionReference("ts", {}, "CreateBacktickedString"),
            })),
            "createGlossarySerializer": algorithm(definitionReference("SerializeGlossary"), constructor(null, {
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "enrichedDictionaryForEach": definitionReference("foreach", {}, "EnrichedDictionaryForEach"),
                "createIdentifier": definitionReference("ts", {}, "CreateIdentifier"),
                "createApostrophedString": definitionReference("ts", {}, "CreateApostrophedString"),
                "createQuotedString": definitionReference("ts", {}, "CreateQuotedString"),
                "createBacktickedString": definitionReference("ts", {}, "CreateBacktickedString"),
            })),
            "createImplementationSerializer": algorithm(definitionReference("SerializeImplementation"), constructor(null, {
                "arrayForEach": definitionReference("foreach", {}, "ArrayForEach"),
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("foreach", {}, "EnrichedArrayForEach"),
                "enrichedDictionaryForEach": definitionReference("foreach", {}, "EnrichedDictionaryForEach"),
                "createIdentifier": definitionReference("ts", {}, "CreateIdentifier"),
                "createApostrophedString": definitionReference("ts", {}, "CreateApostrophedString"),
                "createQuotedString": definitionReference("ts", {}, "CreateQuotedString"),
                "createBacktickedString": definitionReference("ts", {}, "CreateBacktickedString"),
            })),
            "createProjectSerializer": algorithm(definitionReference("SerializeProject"), constructor(null, {
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "enrichedDictionaryForEach": definitionReference("foreach", {}, "EnrichedDictionaryForEach"),
                "serializeGlossary": definitionReference("SerializeGlossary"),
                "serializeModuleDefinition": definitionReference("SerializeModuleDefinition"),
                "serializeImplementation": definitionReference("SerializeImplementation"),
                "createIdentifier": definitionReference("ts", {}, "CreateIdentifier"),
                "createApostrophedString": definitionReference("ts", {}, "CreateApostrophedString"),
                "createQuotedString": definitionReference("ts", {}, "CreateQuotedString"),
                "createBacktickedString": definitionReference("ts", {}, "CreateBacktickedString"),
            })),
            "createStatesSerializer": algorithm(definitionReference("SerializeStates"), constructor(null, {
                "arrayForEach": definitionReference("foreach", {}, "ArrayForEach"),
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("foreach", {}, "EnrichedArrayForEach"),
                "enrichedDictionaryForEach": definitionReference("foreach", {}, "EnrichedDictionaryForEach"),
                "createApostrophedString": definitionReference("ts", {}, "CreateApostrophedString"),
                "createIdentifier": definitionReference("ts", {}, "CreateIdentifier"),
            })),
            "createTemplateSerializer": algorithm(definitionReference("SerializeTemplate"), constructor(null, {
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "createIdentifier": definitionReference("ts", {}, "CreateIdentifier"),
                "createApostrophedString": definitionReference("ts", {}, "CreateApostrophedString"),
                "createQuotedString": definitionReference("ts", {}, "CreateQuotedString"),
                "createBacktickedString": definitionReference("ts", {}, "CreateBacktickedString"),
            })),
        })
    },
}