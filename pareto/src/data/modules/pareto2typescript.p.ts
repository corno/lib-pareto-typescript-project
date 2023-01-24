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
            "algorithm": "../../algorithm",
            "fp": "lib-fountain-pen",
            "glossary": "../../glossary",
            "moduleDefinition": "../../moduleDefinition",
            "project": "../../project",
        }),
        'parameters': d({}),
        'namespace': {
            'types': types({
            }),
            'interfaces': d({
            }),
        },
        'functions': d({
            "SerializeGlossary": callback(externalTypeReference("glossary", "Glossary"), externalInterfaceReference("fp", "Block")),
            "SerializeImplementation": callback(externalTypeReference("algorithm", "Implementation"), externalInterfaceReference("fp", "Writer")),
            "SerializeModuleDefinition": callback(externalTypeReference("moduleDefinition", "ModuleDefinition"), externalInterfaceReference("fp", "Writer")),
            "SerializeProject": callback(externalTypeReference("project", "Project"), externalInterfaceReference("fp", "Writer")),
            "SerializeTemplate": callback(externalTypeReference("project", "Project"), externalInterfaceReference("fp", "Writer")),
        }),
    },
    'api': {
        'imports': d({
            "project": "../../project",
            "main": "lib-pareto-main",
            "collation": "res-pareto-collation",
            "temp": "../../temp",
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
                        // "serializeLeafType": ['callback', {
                        //     //'context': ['import', "glossary"],
                        //     'callback': "SerializeLeafType"
                        // }],
                    }),
                }],
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
                }),
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
                    }),
                }]
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
                    })
                }]
            },
        })
    },
})
