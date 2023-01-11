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
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
import * as mapi from "lib-pareto-typescript-project/dist/modules/api"
const wd = pr.wrapRawDictionary

function def($: mapi.TModuleDefinition): mapi.TModuleDefinition {
    return $
}


export const project: NProject.TProject = {
    'type': ['library', null],
    'modules': wd({
        "main": {
            'definition': def({
                "glossary": {
                    'imports': wd({
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
                        // "GetSingleArgument": {
                        //     'data': ['type', reference("Arguments")],
                        //     'interface': "SingleArgument",
                        // }
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
                "api": {
                    'imports': wd({
                        "project": "../../project",
                        "main": "lib-pareto-main"
                    }),
                    'algorithms': wd({
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
                                        'context': ['import', "project"],
                                        'callback': "SerializeProject",
                                    }],
                                    "serializeTemplate": ['callback', {
                                        'context': ['import', "project"],
                                        'callback': "SerializeTemplate",
                                    }],
                                }),
                            }],
                        }
                    })
                },
            }),
            'implementation': {}

        },
        "glossary": {
            'definition': def({
                "glossary": {
                    'imports': wd({
                        "fp": "lib-fountain-pen",
                    }),
                    'types': types({
                        "Interface": taggedUnion({
                            "method": type(group({
                                "data": member(ref("LeafTypeOrNull")),
                                "interface": member(taggedUnion({
                                    "set": type(group({
                                        "interface": member(str())
                                    })),
                                    "null": nullType(),
                                }))
                            })),
                            "group": type(group({
                                "members": member(dictionary(ref("Interface")))
                            })),
                            "reference": type(ref("InterfaceReference"))
                        }),
                        "InterfaceReference": group({
                            "context": member(ref("Context"), true),
                            "interface": member(str())
                        }),
                        "Callback": group({
                            "data": member(ref("LeafTypeOrNull")),
                            "context": member(ref("Context"), true),
                            "interface": member(str())
                        }),
                        "Context": taggedUnion({
                            "local": nullType(),
                            "import": type(str()),
                        }),
                        "Function": group({
                            "async": member(bln(), true),
                            "data": member(ref("LeafType")),
                            "return value": member(ref("LeafType"))
                        }),
                        "Glossary": group({
                            "imports": member(dictionary(str())),
                            "types": member(dictionary(ref("Type"))),
                            "functions": member(dictionary(ref("Function"))),
                            "interfaces": member(dictionary(ref("Interface"))),
                            "callbacks": member(dictionary(ref("Callback"))),
                            "pipes": member(dictionary(group({
                                "in": member(ref("InterfaceReference")),
                                "out": member(ref("InterfaceReference")),
                            }))),
                        }),
                        "LeafType": taggedUnion({
                            "boolean": nullType(),
                            "string": nullType(),
                            "number": nullType(),
                            "reference": type(str()),
                            "external reference": type(group({
                                "context": member(str()),
                                "type": member(str()),
                            })),
                        }),
                        "LeafTypeOrNull": taggedUnion({
                            "type": type(ref("LeafType")),
                            "null": nullType(),
                        }),
                        "Type": taggedUnion({
                            "leaf": type(ref("LeafType")),
                            "optional": type(ref("Type")),
                            "array": type(ref("Type")),
                            "nested": type(ref("Type")),
                            "dictionary": type(ref("TypeOrNull")),
                            "group": type(dictionary(group({
                                "type": member(ref("Type")),
                                "optional": member(bln(), true)
                            }))),
                            "taggedUnion": type(dictionary(ref("TypeOrNull"))),
                        }),
                        "TypeOrNull": taggedUnion({
                            "type": type(ref("Type")),
                            "null": nullType(),
                        }),
                    }),
                    'functions': wd({}),
                    'interfaces': wd({}),
                    'callbacks': wd({
                        "SerializeGlossary": {
                            'data': ['type', reference("Glossary")],
                            'context': ['import', "fp"],
                            'interface': "Block",
                        },
                        "SerializeLeafType": {
                            'data': ['type', reference("LeafType")],
                            'context': ['import', "fp"],
                            'interface': "Line",
                        },
                    }),
                    'pipes': wd({}),
                },
                'api': {
                    'imports': wd({
                        "collation": "res-pareto-collation"
                    }),
                    'algorithms': wd({
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
                                    "compare": ['function', {
                                        'context': ['import', "collation"],
                                        'function': "IsABeforeB",
                                    }],
                                })
                            }]
                        },
                    })
                },
            }),
            'implementation': {}
        },
        "api": {
            'definition': def({
                'glossary': {
                    'imports': wd({
                        "fp": "lib-fountain-pen",
                        "glossary": "../../glossary"
                    }),
                    'types': types({
                        "DefinitionReference": taggedUnion({
                            "function": type(group({
                                "context": member(ref("Context"), true),
                                "function": member(str()),
                                "async": member(bln(), true),
                            })),
                            "interface": type(group({
                                "context": member(ref("Context"), true),
                                "interface": member(str()),
                            })),
                            "callback": type(group({
                                "context": member(ref("Context"), true),
                                "callback": member(str()),
                                //"async": member(bln(), true),
                            })),
                            "pipe": type(group({
                                "context": member(ref("Context"), true),
                                "pipe": member(str()),
                            })),
                            "procedure": type(er("glossary", "LeafTypeOrNull")),

                        }),
                        "Context": taggedUnion({
                            "local": nullType(),
                            "import": type(str()),
                        }),
                        "ModuleDefinition": group({
                            "glossary": member(er("glossary", "Glossary")),
                            "api": member(group({
                                "imports": member(dictionary(str())),
                                "algorithms": member(dictionary(group({
                                    "definition": member(ref("DefinitionReference")),
                                    "type": member(taggedUnion({
                                        "reference": nullType(),
                                        "constructor": type(group({
                                            "configuration data": member(er("glossary", "LeafTypeOrNull")),
                                            "dependencies": member(dictionary(ref("DefinitionReference"))),
                                        })),
                                    }))
                                }))),
                            })),
                        })
                    }),
                    'functions': wd({}),
                    'interfaces': wd({}),
                    'callbacks': wd({
                        "SerializeModuleDefinition": {
                            'data': ['type', reference("ModuleDefinition")],
                            'context': ['import', "fp"],
                            'interface': "Writer",
                        },
                    }),
                    'pipes': wd({}),
                },
                'api': {
                    'imports': wd({
                        "collation": "res-pareto-collation",
                        "glossary": "../../glossary",
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
                                        'context': ['import', "glossary"],
                                        'callback': "SerializeGlossary"
                                    }],
                                    "serializeLeafType": ['callback', {
                                        'context': ['import', "glossary"],
                                        'callback': "SerializeLeafType"
                                    }],
                                }),
                                'callback': {
                                    'callback': "SerializeModuleDefinition"
                                }
                            }],
                        }
                    })
                },
            }),
            'implementation': {}
        },
        "project": {
            'definition': def({
                'glossary': {
                    'imports': wd({
                        "api": "../../api",
                        "fp": "lib-fountain-pen",
                    }),
                    'types': types({
                        "AlgorithmImplementation": group({}),
                        "Implementation": dictionary(ref("AlgorithmImplementation")),
                        "Project": group({
                            "type": member(taggedUnion({
                                "resource": nullType(),
                                "glossary": nullType(),
                                "library": nullType(),
                            }), true),
                            "modules": member(dictionary(group({
                                "definition": member(er("api", "ModuleDefinition")),
                                // "type": member(taggedUnion({
                                //     "binding": nll(),
                                //     "resource": nll(),
                                //     "logic": nll(),

                                // }))
                            }))),
                            "main": member(str()),
                        }),
                    }),
                    'functions': wd({}),
                    'interfaces': wd({}),
                    'callbacks': wd({
                        "SerializeProject": {
                            'data': ['type', reference("Project")],
                            'context': ['import', "fp"],
                            'interface': "Writer",
                        },
                        "SerializeTemplate": {
                            'data': ['type', reference("Project")],
                            'context': ['import', "fp"],
                            'interface': "Writer",
                        },
                    }),
                    'pipes': wd({}),
                },
                'api': {
                    'imports': wd({
                        "api": "../../api",
                        "glossary": "../../glossary",
                        "collation": "res-pareto-collation",
                    }),
                    'algorithms': wd({
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
                                        'context': ['import', "api"],
                                        'callback': "SerializeModuleDefinition"
                                    }],
                                    "serializeLeafType": ['callback', {
                                        'context': ['import', "glossary"],
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
                    })
                },
            }),
            'implemenation': {}
        }
    }),
    'main': "main"
}