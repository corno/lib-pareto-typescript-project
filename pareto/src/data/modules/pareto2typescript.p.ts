import * as pr from 'pareto-core-raw'
import {
    types, _function, typeReference, interfaceReference, callback
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

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
            "SerializeGlossary": callback(typeReference("glossary", "Glossary"), interfaceReference("fp", "Writer")),
            "SerializeImplementation": callback(typeReference("algorithm", "Implementation"), interfaceReference("fp", "Writer")),
            "SerializeModuleDefinition": callback(typeReference("moduleDefinition", "ModuleDefinition"), interfaceReference("fp", "Writer")),
            "SerializeParetoEnvironment": callback(typeReference("common", "Null"), interfaceReference("fp", "Writer")),
            "SerializeBuildEnvironment": callback(typeReference("common", "Null"), interfaceReference("fp", "Writer")),
            "SerializeProject": callback(typeReference("project", "Project"), interfaceReference("fp", "Writer")),
            "SerializeTemplate": callback(typeReference("project", "Project"), interfaceReference("fp", "Writer")),
            "SerializeStates": callback(typeReference("algorithm", "States"), interfaceReference("fp", "Block")),
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