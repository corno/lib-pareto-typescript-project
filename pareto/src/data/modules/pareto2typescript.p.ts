import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, externalTypeReference, typeReference
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
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
        'namespace': {
            'types': types({
            }),
            'interfaces': d({
            }),
        },
        'functions': d({
        }),
        'callbacks': d({
            "SerializeGlossary": {
                'data': externalTypeReference("glossary", "Glossary"),
                'context': ['import', "fp"],
                'interface': "Block",
            },
            "SerializeImplementation": {
                'data': externalTypeReference("algorithm", "Implementation"),
                'context': ['import', "fp"],
                'interface': "Writer",
            },
            "SerializeModuleDefinition": {
                'data': externalTypeReference("moduleDefinition", "ModuleDefinition"),
                'context': ['import', "fp"],
                'interface': "Writer",
            },
            "SerializeProject": {
                'data': externalTypeReference("project", "Project"),
                'context': ['import', "fp"],
                'interface': "Writer",
            },
            "SerializeTemplate": {
                'data': externalTypeReference("project", "Project"),
                'context': ['import', "fp"],
                'interface': "Writer",
            },
        }),
        'pipes': d({
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
                'definition': ['callback', {
                    'callback': "SerializeModuleDefinition"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "dictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "DictionaryForEach",
                        }],
                        "serializeGlossary": ['callback', {
                            //'context': ['import', "glossary"],
                            'callback': "SerializeGlossary"
                        }],
                        // "serializeLeafType": ['callback', {
                        //     //'context': ['import', "glossary"],
                        //     'callback': "SerializeLeafType"
                        // }],
                    }),
                    'callback': {
                        'callback': "SerializeModuleDefinition"
                    }
                }],
            },
            "createProjectSerializer": {
                'definition': ['callback', {
                    'callback': "SerializeProject"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "dictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "DictionaryForEach",
                        }],
                        "serializeModuleDefinition": ['callback', {
                            //'context': ['import', "api"],
                            'callback': "SerializeModuleDefinition"
                        }],
                        // "serializeLeafType": ['callback', {
                        //     //'context': ['import', "glossary"],
                        //     'callback': "SerializeLeafType"
                        // }],
                        "serializeImplementation": ['callback', {
                            //'context': ['import', "project"],
                            'callback': "SerializeImplementation",
                        }],
                    }),
                    'callback': {
                        'callback': "SerializeProject"
                    }
                }]
            },
            "createTemplateSerializer": {
                'definition': ['callback', {
                    'callback': "SerializeTemplate"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "dictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "DictionaryForEach",
                        }],
                    }),
                    'callback': {
                    }
                }]
            },
            "createGlossarySerializer": {
                'definition': ['callback', {
                    'callback': "SerializeGlossary"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "dictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "DictionaryForEach",
                        }],
                        "enrichedDictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedDictionaryForEach",
                        }],
                    })
                }]
            },
            "createImplementationSerializer": {
                'definition': ['callback', {
                    'callback': "SerializeImplementation"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "arrayForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "ArrayForEach",
                        }],
                        "dictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "DictionaryForEach",
                        }],
                        "enrichedArrayForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedArrayForEach",
                        }],
                        "enrichedDictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedDictionaryForEach",
                        }],
                    })
                }]
            },
        })
    },
})
