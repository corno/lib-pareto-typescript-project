import * as pr from 'pareto-core-raw'
import {
    types, _function, externalTypeReference, externalInterfaceReference, callback
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mproject from "lib-pareto-typescript-project/dist/modules/project"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
const d = pr.wrapRawDictionary

function def($: mmoduleDefinition.TModuleDefinition): mmoduleDefinition.TModuleDefinition {
    return $
}

export const $: mmoduleDefinition.TModuleDefinition = def({
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
            "SerializeGlossary": callback(externalTypeReference("glossary", "Glossary"), externalInterfaceReference("fp", "Writer")),
            "SerializeImplementation": callback(externalTypeReference("algorithm", "Implementation"), externalInterfaceReference("fp", "Writer")),
            "SerializeModuleDefinition": callback(externalTypeReference("moduleDefinition", "ModuleDefinition"), externalInterfaceReference("fp", "Writer")),
            "SerializeProject": callback(externalTypeReference("project", "Project"), externalInterfaceReference("fp", "Writer")),
            "SerializeTemplate": callback(externalTypeReference("project", "Project"), externalInterfaceReference("fp", "Writer")),
            "SerializeStates": callback(externalTypeReference("algorithm", "States"), externalInterfaceReference("fp", "Block")),
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
            "createModuleDefinitionSerializer": {
                'definition': definitionReference("SerializeModuleDefinition"),
                'type': constructor(null, {
                    "dictionaryForEach": externalDefinitionReference("temp", "DictionaryForEach"),
                    "serializeGlossary": definitionReference("SerializeGlossary"),
                    "createIdentifier": externalDefinitionReference("ts", "CreateIdentifier"),
                    "createApostrophedString": externalDefinitionReference("ts", "CreateApostrophedString"),
                    "createQuotedString": externalDefinitionReference("ts", "CreateQuotedString"),
                    "createBacktickedString": externalDefinitionReference("ts", "CreateBacktickedString"),
                }),
            },
            "createGlossarySerializer": {
                'definition': definitionReference("SerializeGlossary"),
                'type': constructor(null, {
                    "dictionaryForEach": externalDefinitionReference("temp", "DictionaryForEach"),
                    "enrichedDictionaryForEach": externalDefinitionReference("temp", "EnrichedDictionaryForEach"),
                    "createIdentifier": externalDefinitionReference("ts", "CreateIdentifier"),
                    "createApostrophedString": externalDefinitionReference("ts", "CreateApostrophedString"),
                    "createQuotedString": externalDefinitionReference("ts", "CreateQuotedString"),
                    "createBacktickedString": externalDefinitionReference("ts", "CreateBacktickedString"),
                })
            },
            "createImplementationSerializer": {
                'definition': definitionReference("SerializeImplementation"),
                'type': constructor(null, {
                    "arrayForEach": externalDefinitionReference("temp", "ArrayForEach"),
                    "dictionaryForEach": externalDefinitionReference("temp", "DictionaryForEach"),
                    "enrichedArrayForEach": externalDefinitionReference("temp", "EnrichedArrayForEach"),
                    "enrichedDictionaryForEach": externalDefinitionReference("temp", "EnrichedDictionaryForEach"),
                    "createIdentifier": externalDefinitionReference("ts", "CreateIdentifier"),
                    "createApostrophedString": externalDefinitionReference("ts", "CreateApostrophedString"),
                    "createQuotedString": externalDefinitionReference("ts", "CreateQuotedString"),
                    "createBacktickedString": externalDefinitionReference("ts", "CreateBacktickedString"),
                }),
            },
            "createProjectSerializer": {
                'definition': definitionReference("SerializeProject"),
                'type': constructor(null, {
                    "dictionaryForEach": externalDefinitionReference("temp", "DictionaryForEach"),
                    "serializeModuleDefinition": definitionReference("SerializeModuleDefinition"),
                    "serializeImplementation": definitionReference("SerializeImplementation"),
                    "createIdentifier": externalDefinitionReference("ts", "CreateIdentifier"),
                    "createApostrophedString": externalDefinitionReference("ts", "CreateApostrophedString"),
                    "createQuotedString": externalDefinitionReference("ts", "CreateQuotedString"),
                    "createBacktickedString": externalDefinitionReference("ts", "CreateBacktickedString"),
                }),
            },
            "createStatesSerializer": {
                'definition': definitionReference("SerializeStates"),
                'type': constructor(null, {
                    "arrayForEach": externalDefinitionReference("temp", "ArrayForEach"),
                    "dictionaryForEach": externalDefinitionReference("temp", "DictionaryForEach"),
                    "enrichedArrayForEach": externalDefinitionReference("temp", "EnrichedArrayForEach"),
                    "enrichedDictionaryForEach": externalDefinitionReference("temp", "EnrichedDictionaryForEach"),
                    "createApostrophedString": externalDefinitionReference("ts", "CreateApostrophedString"),
                    "createIdentifier": externalDefinitionReference("ts", "CreateIdentifier"),
                })
            },
            "createTemplateSerializer": {
                'definition': definitionReference("SerializeTemplate"),
                'type': constructor(null, {
                    "dictionaryForEach": externalDefinitionReference("temp", "DictionaryForEach"),
                    "createIdentifier": externalDefinitionReference("ts", "CreateIdentifier"),
                    "createApostrophedString": externalDefinitionReference("ts", "CreateApostrophedString"),
                    "createQuotedString": externalDefinitionReference("ts", "CreateQuotedString"),
                    "createBacktickedString": externalDefinitionReference("ts", "CreateBacktickedString"),
                }),
            },
        })
    },
})
