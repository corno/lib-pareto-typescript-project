import * as pd from 'pareto-core-data'
import {
    types, typeReference, interfaceReference, func, parametrizedTypeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "algorithm": "../../../algorithm",
            "common": "glo-pareto-common",
            "fp": "lib-fountain-pen",
            "glossary": "../../../glossary",
            "moduleDefinition": "../../../moduleDefinition",
            "project": "../../../project",
        }),
        'parameters': d({}),
        'types': d({
        }),
        'interfaces': d({
        }),
        'functions': d({
            "SerializeGlossary": func(parametrizedTypeReference("glossary", { "Type": typeReference("common", "String") }, "Glossary"), null, interfaceReference("fp", "Writer"), null),
            "SerializeImplementation": func(typeReference("algorithm", "Implementation"), null, interfaceReference("fp", "Writer"), null),
            "SerializeModuleDefinition": func(typeReference("moduleDefinition", "ModuleDefinition"), null, interfaceReference("fp", "Writer"), null),
            "SerializeParetoEnvironment": func(typeReference("common", "Null"), null, interfaceReference("fp", "Writer"), null),
            "SerializeBuildEnvironment": func(typeReference("common", "Null"), null, interfaceReference("fp", "Writer"), null),
            "SerializeProject": func(typeReference("project", "Project"), null, interfaceReference("fp", "Writer"), null),
            "SerializeTemplate": func(typeReference("project", "Project"), null, interfaceReference("fp", "Writer"), null),
            "SerializeStates": func(typeReference("algorithm", "States"), null, interfaceReference("fp", "Block"), null),
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
            "createParetoEnvironmentSerializer": algorithm(definitionReference("SerializeParetoEnvironment"), constructor(null, {
            })),
            "createBuildEnvironmentSerializer": algorithm(definitionReference("SerializeBuildEnvironment"), constructor(null, {
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