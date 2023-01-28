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
            "SerializeProject": callback(typeReference("project", "Project"), interfaceReference("fp", "Writer")),
            "SerializeTemplate": callback(typeReference("project", "Project"), interfaceReference("fp", "Writer")),
            "SerializeStates": callback(typeReference("algorithm", "States"), interfaceReference("fp", "Block")),
        }),
    },
    'api': {
        'imports': d({
            "project": "../../project",
            "main": "lib-pareto-main",
            "collation": "res-pareto-collation",
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
                "serializeModuleDefinition": definitionReference("SerializeModuleDefinition"),
                "serializeImplementation": definitionReference("SerializeImplementation"),
                "createIdentifier": definitionReference("ts", "CreateIdentifier"),
                "createApostrophedString": definitionReference("ts", "CreateApostrophedString"),
                "createQuotedString": definitionReference("ts", "CreateQuotedString"),
                "createBacktickedString": definitionReference("ts", "CreateBacktickedString"),
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