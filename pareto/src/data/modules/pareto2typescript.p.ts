import * as pr from 'pareto-core-raw'
import {
    types, typeReference, interfaceReference, func
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
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
        'templates': d({}),
        'types': types({
        }),
        'interfaces': d({
        }),
        'functions': d({
            "SerializeGlossary": func(typeReference("glossary", "Glossary"), null, interfaceReference("fp", "Writer"), null),
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
            "temp": "../../temp",
            "ts": "res-typescript",
        }),
        'algorithms': d({
            "createModuleDefinitionSerializer": algorithm(definitionReference("SerializeModuleDefinition"), constructor(null, {
                "dictionaryForEach": definitionReference("temp", "DictionaryForEach"),
                "serializeGlossary": definitionReference("SerializeGlossary"),
                "createIdentifier": definitionReference("ts", "CreateIdentifier"),
                "createApostrophedString": definitionReference("ts", "CreateApostrophedString"),
                "createQuotedString": definitionReference("ts", "CreateQuotedString"),
                "createBacktickedString": definitionReference("ts", "CreateBacktickedString"),
            })),
            "createGlossarySerializer": algorithm(definitionReference("SerializeGlossary"), constructor(null, {
                "dictionaryForEach": definitionReference("temp", "DictionaryForEach"),
                "enrichedDictionaryForEach": definitionReference("temp", "EnrichedDictionaryForEach"),
                "createIdentifier": definitionReference("ts", "CreateIdentifier"),
                "createApostrophedString": definitionReference("ts", "CreateApostrophedString"),
                "createQuotedString": definitionReference("ts", "CreateQuotedString"),
                "createBacktickedString": definitionReference("ts", "CreateBacktickedString"),
            })),
            "createImplementationSerializer": algorithm(definitionReference("SerializeImplementation"), constructor(null, {
                "arrayForEach": definitionReference("temp", "ArrayForEach"),
                "dictionaryForEach": definitionReference("temp", "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("temp", "EnrichedArrayForEach"),
                "enrichedDictionaryForEach": definitionReference("temp", "EnrichedDictionaryForEach"),
                "createIdentifier": definitionReference("ts", "CreateIdentifier"),
                "createApostrophedString": definitionReference("ts", "CreateApostrophedString"),
                "createQuotedString": definitionReference("ts", "CreateQuotedString"),
                "createBacktickedString": definitionReference("ts", "CreateBacktickedString"),
            })),
            "createProjectSerializer": algorithm(definitionReference("SerializeProject"), constructor(null, {
                "dictionaryForEach": definitionReference("temp", "DictionaryForEach"),
                "enrichedDictionaryForEach": definitionReference("temp", "EnrichedDictionaryForEach"),
                "serializeGlossary": definitionReference("SerializeGlossary"),
                "serializeModuleDefinition": definitionReference("SerializeModuleDefinition"),
                "serializeImplementation": definitionReference("SerializeImplementation"),
                "createIdentifier": definitionReference("ts", "CreateIdentifier"),
                "createApostrophedString": definitionReference("ts", "CreateApostrophedString"),
                "createQuotedString": definitionReference("ts", "CreateQuotedString"),
                "createBacktickedString": definitionReference("ts", "CreateBacktickedString"),
            })),
            "createParetoEnvironmentSerializer": algorithm(definitionReference("SerializeParetoEnvironment"), constructor(null, {
            })),
            "createBuildEnvironmentSerializer": algorithm(definitionReference("SerializeBuildEnvironment"), constructor(null, {
            })),
            "createStatesSerializer": algorithm(definitionReference("SerializeStates"), constructor(null, {
                "arrayForEach": definitionReference("temp", "ArrayForEach"),
                "dictionaryForEach": definitionReference("temp", "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("temp", "EnrichedArrayForEach"),
                "enrichedDictionaryForEach": definitionReference("temp", "EnrichedDictionaryForEach"),
                "createApostrophedString": definitionReference("ts", "CreateApostrophedString"),
                "createIdentifier": definitionReference("ts", "CreateIdentifier"),
            })),
            "createTemplateSerializer": algorithm(definitionReference("SerializeTemplate"), constructor(null, {
                "dictionaryForEach": definitionReference("temp", "DictionaryForEach"),
                "createIdentifier": definitionReference("ts", "CreateIdentifier"),
                "createApostrophedString": definitionReference("ts", "CreateApostrophedString"),
                "createQuotedString": definitionReference("ts", "CreateQuotedString"),
                "createBacktickedString": definitionReference("ts", "CreateBacktickedString"),
            })),
        })
    },
}