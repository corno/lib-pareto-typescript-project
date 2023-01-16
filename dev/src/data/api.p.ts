import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"
import * as mproject from "lib-pareto-typescript-project/dist/modules/project"
import * as mapi from "lib-pareto-typescript-project/dist/modules/api"
const wd = pr.wrapRawDictionary

function def($: mapi.TModuleDefinition): mapi.TModuleDefinition {
    return $
}

export const api: mapi.TModuleDefinition = def({
    'glossary': {
        'imports': wd({
            "glossary": "../../glossary",
            "moduleDefinition": "../../moduleDefinition",
            "project": "../../project",
            "common": "glo-pareto-common",
            "main": "lib-pareto-main",
            "fp": "lib-fountain-pen",
        }),
        'types': types({
            "ArgumentError": taggedUnion({
                "missing": nullType(),
                "too many": nullType(),
            }),
            "Arguments": array(str()),
            "ProjectSettings": group({
                "project": member(er("project", "Project")),
                "mainData": member(er("main", "MainData")),
            }),
            "Parameters": group({
                "testDirectory": member(str()),
            }),
        }),
        'functions': wd({
            "GetSingleArgument": _function(reference("Arguments"), string(), true),

        }),
        'interfaces': wd({
            "CreateWriter": ['method', {
                'data': ['type', string()],
                'interface': ['set', {
                    'context': ['import', "fp"],
                    'interface': "Writer"
                }],
            }],
            "ParseArguments": ['method', {
                'data': ['type', reference("Arguments")],
                'interface': ['null', null],
            }],
            "ProcessArgument": ['method', {
                'data': ['type', string()],
                'interface': ['null', null],
            }],
        }),
        // 'interfaces': wd({
        //     // "SingleArgument": {
        //     //     "members": wd({
        //     //         "Z": ["callback", ['type', string()]],
        //     //         "Y": ["callback", ['type', string()]],
        //     //     }),
        //     // }
        // }),
        'callbacks': wd({
            "SerializeGlossary": {
                'data': ['type', externalReference("glossary", "Glossary")],
                'context': ['import', "fp"],
                'interface': "Block",
            },
            "SerializeLeafType": {
                'data': ['type', externalReference("glossary", "LeafType")],
                'context': ['import', "fp"],
                'interface': "Line",
            },
            "SerializeModuleDefinition": {
                'data': ['type', externalReference("moduleDefinition", "ModuleDefinition")],
                'context': ['import', "fp"],
                'interface': "Writer",
            },
            "SerializeProject": {
                'data': ['type', externalReference("project", "Project")],
                'context': ['import', "fp"],
                'interface': "Writer",
            },
            "SerializeTemplate": {
                'data': ['type', externalReference("project", "Project")],
                'context': ['import', "fp"],
                'interface': "Writer",
            },
        }),
        'pipes': wd({
            "ParseArguments": {
                'in': {
                    'interface': "ParseArguments"
                },
                'out': {
                    'interface': "ProcessArgument"
                },
            },
        }),
    },
    'api': {
        'imports': wd({
            "project": "../../project",
            "main": "lib-pareto-main",
            "collation": "res-pareto-collation",
            "temp": "../../temp",
        }),
        'algorithms': wd({
            "createModuleDefinitionSerializer": {
                'definition': ['callback', {
                    'callback': "SerializeModuleDefinition"
                }],
                'type': ['constructor', {
                    'configuration data': ['null', null],
                    'dependencies': wd({
                        "compare": ['function', {
                            'context': ['import', "collation"],
                            'function': "IsABeforeB",
                        }],
                        "serializeGlossary": ['callback', {
                            //'context': ['import', "glossary"],
                            'callback': "SerializeGlossary"
                        }],
                        "serializeLeafType": ['callback', {
                            //'context': ['import', "glossary"],
                            'callback': "SerializeLeafType"
                        }],
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
                    'configuration data': ['null', null],
                    'dependencies': wd({
                        "compare": ['function', {
                            'context': ['import', "collation"],
                            'function': "IsABeforeB",
                        }],
                        "serializeModuleDefinition": ['callback', {
                            //'context': ['import', "api"],
                            'callback': "SerializeModuleDefinition"
                        }],
                        "serializeLeafType": ['callback', {
                            //'context': ['import', "glossary"],
                            'callback': "SerializeLeafType"
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
                    'configuration data': ['null', null],
                    'dependencies': wd({
                        "compare": ['function', {
                            'context': ['import', "collation"],
                            'function': "IsABeforeB",
                        }],
                    }),
                    'callback': {
                    }
                }]
            },
            "serializeLeafType": {
                'definition': ['callback', {
                    'callback': "SerializeLeafType"
                }],
                'type': ['reference', null],
            },
            "createGlossarySerializer": {
                'definition': ['callback', {
                    'callback': "SerializeGlossary"
                }],
                'type': ['constructor', {
                    'configuration data': ['null', null],
                    'dependencies': wd({
                        "enrichedDictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedDictionaryForEach",
                        }],
                        "compare": ['function', {
                            'context': ['import', "collation"],
                            'function': "IsABeforeB",
                        }],
                    })
                }]
            },
            "createParametersParser": {
                'definition': ['procedure', ['type', reference("Arguments")]],
                //'definition': ['procedure', ['type', externalReference("main", "Arguments")]],
                'type': ['constructor', {
                    'configuration data': ['null', null],
                    'dependencies': wd({
                        "callback": ['procedure', ['type', reference("Parameters")]],
                        "onError": ['procedure', ['type', reference("ArgumentError")]],

                    }),
                }],
            },
            "generateProject": {
                'definition': ['procedure', ['type', reference("ProjectSettings")]],
                'type': ['reference', null],
            },
            "createProjectGenerator": {
                'definition': ['procedure', ['type', reference("ProjectSettings")]],
                'type': ['constructor', {
                    'configuration data': ['null', null],
                    'dependencies': wd({
                        "getSingleArgument": ['function', {
                            'async': true,
                            'function': "GetSingleArgument",
                        }],
                        "serializeProject": ['callback', {
                            //'context': ['import', "project"],
                            'callback': "SerializeProject",
                        }],
                        "serializeTemplate": ['callback', {
                            //'context': ['import', "project"],
                            'callback': "SerializeTemplate",
                        }],
                    }),
                }],
            }
        })
    },
})
