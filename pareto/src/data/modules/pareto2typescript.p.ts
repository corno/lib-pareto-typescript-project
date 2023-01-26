import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, externalTypeReference, typeReference, externalInterfaceReference, callback
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
                'definition': {
                    'function': "SerializeModuleDefinition"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "dictionaryForEach": {
                            'context': ['import', "temp"],
                            'function': "DictionaryForEach",
                        },
                        "serializeGlossary": {
                            //'context': ['import', "glossary"],
                            'function': "SerializeGlossary"
                        },
                        "createIdentifier": externalDefinitionReference("ts", "CreateIdentifier"),
                        "createApostrophedString": externalDefinitionReference("ts", "CreateApostrophedString"),
                        "createQuotedString": externalDefinitionReference("ts", "CreateQuotedString"),
                        "createBacktickedString": externalDefinitionReference("ts", "CreateBacktickedString"),
                        // "serializeLeafType": ['callback', {
                        //     //'context': ['import', "glossary"],
                        //     'callback': "SerializeLeafType"
                        // }],
                    }),
                }],
            },
            "createGlossarySerializer": {
                'definition': {
                    'function': "SerializeGlossary"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "dictionaryForEach": {
                            'context': ['import', "temp"],
                            'function': "DictionaryForEach",
                        },
                        "enrichedDictionaryForEach": {
                            'context': ['import', "temp"],
                            'function': "EnrichedDictionaryForEach",
                        },
                        "createIdentifier": externalDefinitionReference("ts", "CreateIdentifier"),
                        "createApostrophedString": externalDefinitionReference("ts", "CreateApostrophedString"),
                        "createQuotedString": externalDefinitionReference("ts", "CreateQuotedString"),
                        "createBacktickedString": externalDefinitionReference("ts", "CreateBacktickedString"),
                    })
                }]
            },
            "createImplementationSerializer": {
                'definition': {
                    'function': "SerializeImplementation"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "arrayForEach": {
                            'context': ['import', "temp"],
                            'function': "ArrayForEach",
                        },
                        "dictionaryForEach": {
                            'context': ['import', "temp"],
                            'function': "DictionaryForEach",
                        },
                        "enrichedArrayForEach": {
                            'context': ['import', "temp"],
                            'function': "EnrichedArrayForEach",
                        },
                        "enrichedDictionaryForEach": {
                            'context': ['import', "temp"],
                            'function': "EnrichedDictionaryForEach",
                        },
                        "createIdentifier": externalDefinitionReference("ts", "CreateIdentifier"),
                        "createApostrophedString": externalDefinitionReference("ts", "CreateApostrophedString"),
                        "createQuotedString": externalDefinitionReference("ts", "CreateQuotedString"),
                        "createBacktickedString": externalDefinitionReference("ts", "CreateBacktickedString"),
                    })
                }]
            },
            "createProjectSerializer": {
                'definition': {
                    'function': "SerializeProject"
                },
                'type': constructor(null, {
                    "dictionaryForEach": {
                        'context': ['import', "temp"],
                        'function': "DictionaryForEach",
                    },
                    "serializeModuleDefinition": {
                        //'context': ['import', "api"],
                        'function': "SerializeModuleDefinition"
                    },
                    // "serializeLeafType": ['callback', {
                    //     //'context': ['import', "glossary"],
                    //     'callback': "SerializeLeafType"
                    // }],
                    "serializeImplementation": {
                        //'context': ['import', "project"],
                        'function': "SerializeImplementation",
                    },
                    "createIdentifier": externalDefinitionReference("ts", "CreateIdentifier"),
                    "createApostrophedString": externalDefinitionReference("ts", "CreateApostrophedString"),
                    "createQuotedString": externalDefinitionReference("ts", "CreateQuotedString"),
                    "createBacktickedString": externalDefinitionReference("ts", "CreateBacktickedString"),
                }),
            },
            "createStatesSerializer": {
                'definition': {
                    'function': "SerializeStates"
                },
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
                'definition': {
                    'function': "SerializeTemplate"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "dictionaryForEach": {
                            'context': ['import', "temp"],
                            'function': "DictionaryForEach",
                        },
                        "createIdentifier": externalDefinitionReference("ts", "CreateIdentifier"),
                        "createApostrophedString": externalDefinitionReference("ts", "CreateApostrophedString"),
                        "createQuotedString": externalDefinitionReference("ts", "CreateQuotedString"),
                        "createBacktickedString": externalDefinitionReference("ts", "CreateBacktickedString"),
                    }),
                }]
            },
        })
    },
})
