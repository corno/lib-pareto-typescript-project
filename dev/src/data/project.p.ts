import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    array,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
const wd = pr.wrapRawDictionary


export const project: NProject.TProject = {
    'type': ['library', null],
    'modules': wd({
        "main": {
            'definition': {
                "glossary": {
                    'imports': wd({
                        "project": "../../project",
                        "common": "glo-pareto-common",
                        "main": "lib-pareto-main",
                    }),
                    'types': types({
                        "ProjectSettings": group({
                            "project": member(er("project", "Project")),
                            "mainData": member(er("main", "MainData")),
                        }),
                        "Arguments": array(str()),
                    }),
                    'functions': wd({}),
                    'builders': wd({}),
                    'interfaces': wd({
                        "SingleArgument": {
                            "members": wd({
                                //"Z": ["callback", ['type', string()]]
                            }),
                        }
                    }),
                    'callbacks': wd({
                        "GetSingleArgument": {
                            'data': ['type', reference("Arguments")],
                            'interface': "SingleArgument",
                        }
                    }),
                },
                "api": {
                    'imports': wd({
                        "project": "../../project"
                    }),
                    'algorithms': wd({
                        "generateProject": ['procedure', ['type', reference("ProjectSettings")]],
                        "createProjectGenerator": ['procedure constructor', {
                            'configuration data': ['null', null],
                            'dependencies': {
                                'functions': wd({
                                    // "isABeforeB": {
                                    //     'context': ['import', "collation"],
                                    //     'function': "IsABeforeB",
                                    // },
                                }),
                                'downstreams': wd({
                                    // "log": ['type', string()],
                                }),
                                'callbacks': wd({
                                    "serializeProject": {
                                        'context': ['import', "project"],
                                        'callback': "SerializeProject",
                                    },
                                    "serializeTemplate": {
                                        'context': ['import', "project"],
                                        'callback': "SerializeTemplate",
                                    },
                                    "getSingleArgument": {
                                        'callback': "GetSingleArgument",
                                    }
                                }),
                            },
                            'type': ['type', reference("ProjectSettings")],
                        }],
                    })
                },
            },
            'implementation': {}

        },
        "glossary": {
            'definition': {
                "glossary": {
                    'imports': wd({
                        "fp": "lib-fountain-pen",
                    }),
                    'types': types({
                        "Function": group({
                            "async": member(bln(), true),
                            "data": member(ref("LeafType")),
                            "return value": member(ref("LeafType"))
                        }),
                        "Callback": group({
                            "data": member(ref("LeafTypeOrNull")),
                            "context": member(taggedUnion({
                                "local": nullType(),
                                "import": type(str()),
                            }), true),
                            "interface": member(str())
                        }),
                        "Glossary": group({
                            "imports": member(dictionary(str())),
                            "types": member(dictionary(ref("Type"))),
                            "functions": member(dictionary(ref("Function"))),
                            "interfaces": member(dictionary(ref("Interface"))),
                            "callbacks": member(dictionary(ref("Callback"))),
                            "builders": member(dictionary(group({
                                "data": member(ref("LeafTypeOrNull")),
                                "context": member(taggedUnion({
                                    "local": nullType(),
                                    "import": type(str()),
                                }), true),
                                "interface": member(str())
                            }))),
                        }),
                        "Interface": group({
                            "members": member(dictionary(taggedUnion({
                                "interface": type(group({
                                    "context": member(taggedUnion({
                                        "local": nullType(),
                                        "import": type(str()),
                                    }), true),
                                    "interface": member(str()),
                                })),
                                "callback": type(ref("LeafTypeOrNull"))
                            })))
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
                        "TypeOrNull": taggedUnion({
                            "type": type(ref("Type")),
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
                    }),
                    'functions': wd({}),
                    'builders': wd({}),
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
                    'interfaces': wd({}),
                },
                'api': {
                    'imports': wd({
                        "collation": "res-pareto-collation"
                    }),
                    'algorithms': wd({
                        "serializeLeafType": ['callback', {
                            'callback': "SerializeLeafType"
                        }],
                        "createGlossarySerializer": ['callback constructor', {
                            'configuration data': ['null', null],
                            'dependencies': {
                                'functions': wd({
                                    "compare": {
                                        'context': ['import', "collation"],
                                        'function': "IsABeforeB",
                                    },
                                }),
                                'callbacks': wd({}),
                                'side effects': wd({}),

                            },
                            'callback': {
                                'callback': "SerializeGlossary"
                            }
                        }],
                    })
                },
            },
            'implementation': {}
        },
        "api": {
            'definition': {
                'glossary': {
                    'imports': wd({
                        "fp": "lib-fountain-pen",
                        "glossary": "../../glossary"
                    }),
                    'types': types({
                        "FunctionReference": group({
                            "context": member(taggedUnion({
                                "local": nullType(),
                                "import": type(str()),
                            }), true),
                            "function": member(str()),
                            "async": member(bln(), true),
                        }),
                        "CallbackReference": group({
                            "context": member(taggedUnion({
                                "local": nullType(),
                                "import": type(str()),
                            }), true),
                            "callback": member(str()),
                            "async": member(bln(), true),
                        }),
                        "ModuleDefinition": group({
                            "glossary": member(er("glossary", "Glossary")),
                            "api": member(group({
                                "imports": member(dictionary(str())),
                                "algorithms": member(dictionary(taggedUnion({
                                    "function constructor": type(group({
                                        "configuration data": member(er("glossary", "LeafTypeOrNull")),
                                        "dependencies": member(group({
                                            "functions": member(dictionary(ref("FunctionReference"))),
                                            "side effects": member(dictionary(er("glossary", "LeafTypeOrNull")), true),
                                            //"callbacks": member(dictionary(ref("CallbackReference")), true),

                                        })),
                                        "function": member(ref("FunctionReference")),
                                    })),
                                    "callback constructor": type(group({
                                        "configuration data": member(er("glossary", "LeafTypeOrNull")),
                                        "dependencies": member(group({
                                            "functions": member(dictionary(ref("FunctionReference"))),
                                            "side effects": member(dictionary(er("glossary", "LeafTypeOrNull"))),
                                            "callbacks": member(dictionary(ref("CallbackReference"))),

                                        })),
                                        "callback": member(ref("CallbackReference")),
                                    })),
                                    "procedure constructor": type(group({
                                        "configuration data": member(er("glossary", "LeafTypeOrNull")),
                                        "dependencies": member(group({
                                            "functions": member(dictionary(ref("FunctionReference"))),
                                            "downstreams": member(dictionary(er("glossary", "LeafTypeOrNull"))),
                                            "callbacks": member(dictionary(ref("CallbackReference"))),
                                        })),
                                        "type": member(er("glossary", "LeafTypeOrNull")),
                                    })),
                                    "function": type(ref("FunctionReference")),
                                    "callback": type(ref("CallbackReference")),
                                    "procedure": type(er("glossary", "LeafTypeOrNull")),
                                }))),
                            })),
                        })
                    }),
                    'functions': wd({}),
                    'builders': wd({}),
                    'callbacks': wd({
                        "SerializeModuleDefinition": {
                            'data': ['type', reference("ModuleDefinition")],
                            'context': ['import', "fp"],
                            'interface': "Writer",
                        },
                    }),
                    'interfaces': wd({}),
                },
                'api': {
                    'imports': wd({
                        "collation": "res-pareto-collation",
                        "glossary": "../../glossary",
                    }),
                    'algorithms': wd({
                        "createModuleDefinitionSerializer": ['callback constructor', {
                            'configuration data': ['null', null],
                            'dependencies': {
                                'functions': wd({
                                    "compare": {
                                        'context': ['import', "collation"],
                                        'function': "IsABeforeB",
                                    },
                                }),
                                'callbacks': wd({
                                    "serializeGlossary": {
                                        'context': ['import', "glossary"],
                                        'callback': "SerializeGlossary"
                                    },
                                    "serializeLeafType": {
                                        'context': ['import', "glossary"],
                                        'callback': "SerializeLeafType"
                                    },
                                }),
                                'side effects': wd({}),

                            },
                            'callback': {
                                'callback': "SerializeModuleDefinition"
                            }
                        }],
                    })
                },
            },
            'implementation': {}
        },
        "project": {
            'definition': {
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
                    'builders': wd({}),
                    'interfaces': wd({
                    }),
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
                },
                'api': {
                    'imports': wd({
                        "api": "../../api",
                        "glossary": "../../glossary",
                        "collation": "res-pareto-collation",
                    }),
                    'algorithms': wd({
                        "createProjectSerializer": ['callback constructor', {
                            'configuration data': ['null', null],
                            'dependencies': {
                                'functions': wd({
                                    "compare": {
                                        'context': ['import', "collation"],
                                        'function': "IsABeforeB",
                                    },
                                }),
                                'callbacks': wd({
                                    "serializeModuleDefinition": {
                                        'context': ['import', "api"],
                                        'callback': "SerializeModuleDefinition"
                                    },
                                    "serializeLeafType": {
                                        'context': ['import', "glossary"],
                                        'callback': "SerializeLeafType"
                                    },
                                }),
                                'side effects': wd({}),

                            },
                            'callback': {
                                'callback': "SerializeProject"
                            }
                        }],
                        "createTemplateSerializer": ['callback constructor', {
                            'configuration data': ['null', null],
                            'dependencies': {
                                'functions': wd({
                                    "compare": {
                                        'context': ['import', "collation"],
                                        'function': "IsABeforeB",
                                    },
                                }),
                                'callbacks': wd({}),
                                'side effects': wd({}),

                            },
                            'callback': {
                                'callback': "SerializeTemplate"
                            }
                        }],
                    })
                },
            },
            'implemenation': {}
        }
    }),
    'main': "main"
}