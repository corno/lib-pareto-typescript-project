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


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mproject from "lib-pareto-typescript-project/dist/modules/project"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
const d = pr.wrapRawDictionary

function def($: mmoduleDefinition.TModuleDefinition): mmoduleDefinition.TModuleDefinition {
    return $
}

export const api: mmoduleDefinition.TModuleDefinition = def({
    'glossary': {
        'imports': d({
            "glossary": "../../glossary",
            "moduleDefinition": "../../moduleDefinition",
            "project": "../../project",
            "common": "glo-pareto-common",
            "main": "lib-pareto-main",
            "fp": "lib-fountain-pen",
        }),
        'namespace': {
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
            'interfaces': d({
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
        },
        'functions': d({
            "GetSingleArgument": _function(reference("Arguments"), string(), true),

        }),
        // 'interfaces': d({
        //     // "SingleArgument": {
        //     //     "members": d({
        //     //         "Z": ["callback", ['type', string()]],
        //     //         "Y": ["callback", ['type', string()]],
        //     //     }),
        //     // }
        // }),
        'callbacks': d({
            "SerializeGlossary": {
                'data': ['type', externalReference("glossary", "Glossary")],
                'context': ['import', "fp"],
                'interface': "Block",
            },
            // "SerializeLeafType": {
            //     'data': ['type', externalReference("glossary", "LeafType")],
            //     'context': ['import', "fp"],
            //     'interface': "Line",
            // },
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
        'pipes': d({
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
                    'configuration data': ['null', null],
                    'dependencies': d({
                        "compare": ['function', {
                            'context': ['import', "collation"],
                            'function': "IsABeforeB",
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
                    'configuration data': ['null', null],
                    'dependencies': d({
                        "compare": ['function', {
                            'context': ['import', "collation"],
                            'function': "IsABeforeB",
                        }],
                        "serializeModuleDefinition": ['callback', {
                            //'context': ['import', "api"],
                            'callback': "SerializeModuleDefinition"
                        }],
                        // "serializeLeafType": ['callback', {
                        //     //'context': ['import', "glossary"],
                        //     'callback': "SerializeLeafType"
                        // }],
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
                    'dependencies': d({
                        "compare": ['function', {
                            'context': ['import', "collation"],
                            'function': "IsABeforeB",
                        }],
                    }),
                    'callback': {
                    }
                }]
            },
            // "serializeLeafType": {
            //     'definition': ['callback', {
            //         'callback': "SerializeLeafType"
            //     }],
            //     'type': ['reference', null],
            // },
            "createGlossarySerializer": {
                'definition': ['callback', {
                    'callback': "SerializeGlossary"
                }],
                'type': ['constructor', {
                    'configuration data': ['null', null],
                    'dependencies': d({
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
                    'dependencies': d({
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
                    'dependencies': d({
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
