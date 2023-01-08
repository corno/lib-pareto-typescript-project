import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    _null as nll,
    reference as ref,
    boolean as bln,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, _null, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
const wd = pr.wrapRawDictionary
export const project: NProject.TProject = {
    modules: wd({
        "main": {
            'definition': {
                "glossary": {
                    'imports': wd({
                        "project": "../../project",
                        "common": "glo-pareto-common",
                        "main": "glo-pareto-main",
                    }),
                    'types': types({
                        "ProjectSettings": group({
                            "project": member(er("project", "Project")),
                            "mainData": member(er("main", "MainData")),
                        })
                    }),
                    'functions': wd({
                    }),
                    'callbacks': wd({
                    }),
                    'interfaces': wd({}),
                },
                "api": {
                    'imports': wd({
                        "main": "glo-pareto-main",
                    }),
                    'algorithms': wd({
                        "generateProject": ['algorithm', {
                            'type': ['procedure', reference("ProjectSettings")],
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
                                "local": nll(),
                                "import": str(),
                            }), true),
                            "interface": member(str())
                        }),
                        "Glossary": group({
                            "imports": member(dictionary(str())),
                            "types": member(dictionary(ref("Type"))),
                            "functions": member(dictionary(ref("Function"))),
                            "interfaces": member(dictionary(ref("Interface"))),
                            "callbacks": member(dictionary(ref("Callback"))),
                        }),
                        "Interface": group({
                            "members": member(dictionary(taggedUnion({
                                "interface": group({
                                    "context": member(taggedUnion({
                                        "local": nll(),
                                        "import": str(),
                                    }), true),
                                    "interface": member(str()),
                                }),
                                "procedure": ref("LeafTypeOrNull")
                            })))
                        }),
                        "LeafType": taggedUnion({
                            "boolean": nll(),
                            "string": nll(),
                            "number": nll(),
                            "reference": str(),
                            "external reference": group({
                                "context": member(str()),
                                "type": member(str()),
                            }),
                        }),
                        "LeafTypeOrNull": taggedUnion({
                            "type": ref("LeafType"),
                            "null": nll(),
                        }),
                        "Type": taggedUnion({
                            "leaf": ref("LeafType"),
                            "optional": ref("Type"),
                            "array": ref("Type"),
                            "nested": ref("Type"),
                            "dictionary": ref("Type"),
                            "group": dictionary(group({
                                "type": member(ref("Type")),
                                "optional": member(bln(), true)
                            })),
                            "taggedUnion": dictionary(ref("Type")),
                        }),
                    }),
                    'functions': wd({
                    }),
                    'callbacks': wd({
                        "SerializeGlossary": {
                            'data': reference("Glossary"),
                            'context': ['import', "fp"],
                            'interface': "Block",
                        },
                        "SerializeLeafType": {
                            'data': reference("LeafType"),
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
                        "serializeLeafType": ['algorithm', {
                            'type': ['callback', {
                                'callback': "SerializeLeafType"
                            }],
                        }],
                        "createGlossarySerializer": ['constructor', {
                            'data': ['null', null],
                            'dependencies': wd({
                                "compare": {
                                    'type': ['function', {
                                        'context': ['import', "collation"],
                                        'function': "IsABeforeB",
                                    }],
                                },
                            }),
                            'result': {
                                'type': ['callback', {
                                    'callback': "SerializeGlossary"
                                }],
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
                        "AlgorithmDefinition": taggedUnion({
                            "constructor": ref("Constructor"),
                            "algorithm": ref("AlgorithmReference"),
                        }),
                        "AlgorithmReference": group({
                            "type": member(taggedUnion({
                                "function": group({
                                    "context": member(taggedUnion({
                                        "local": nll(),
                                        "import": str(),
                                    }), true),
                                    "function": member(str()),
                                    "async": member(bln(), true),
                                }),
                                "procedure": er("glossary", "LeafTypeOrNull"),
                                "callback": group({
                                    "context": member(taggedUnion({
                                        "local": nll(),
                                        "import": str(),
                                    }), true),
                                    "callback": member(str()),
                                })
                            })),
                        }),
                        "Constructor": group({
                            "data": member(er("glossary", "LeafTypeOrNull")),
                            "dependencies": member(dictionary(ref("AlgorithmReference"))),
                            "result": member(ref("AlgorithmReference")),
                        }),
                        "ModuleDefinition": group({
                            "glossary": member(er("glossary", "Glossary")),
                            "api": member(group({
                                "imports": member(dictionary(str())),
                                "algorithms": member(dictionary(ref("AlgorithmDefinition"))),
                            })),
                        })
                    }),
                    'functions': wd({
                    }),
                    'callbacks': wd({
                        "SerializeConstructor": {
                            'data': reference("Constructor"),
                            'context': ['import', "fp"],
                            'interface': "Line",
                        },
                        "SerializeAlgorithmReference": {
                            'data': reference("AlgorithmReference"),
                            'context': ['import', "fp"],
                            'interface': "Line",
                        },
                        "SerializeModuleDefinition": {
                            'data': reference("ModuleDefinition"),
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
                        "createAlgorithmReferenceSerializer": ['constructor', {
                            'data': ['null', null],
                            'dependencies': wd({
                                "serializeLeafType": {
                                    'type': ['callback', {
                                        'context': ['import', "glossary"],
                                        'callback': "SerializeLeafType"
                                    }],
                                },
                            }),
                            'result': {
                                'type': ['callback', {
                                    'callback': "SerializeAlgorithmReference"
                                }],
                            }
                        }],
                        "createModuleDefinitionSerializer": ['constructor', {
                            'data': ['null', null],
                            'dependencies': wd({
                                "compare": {
                                    'type': ['function', {
                                        'context': ['import', "collation"],
                                        'function': "IsABeforeB",
                                    }],
                                },
                                "serializeGlossary": {
                                    'type': ['callback', {
                                        'context': ['import', "glossary"],
                                        'callback': "SerializeGlossary"
                                    }],
                                },
                                "serializeAlgorithmReference": {
                                    'type': ['callback', {
                                        'callback': "SerializeAlgorithmReference"
                                    }],
                                },
                                "serializeConstructor": {
                                    'type': ['callback', {
                                        'callback': "SerializeConstructor"
                                    }],
                                },
                            }),
                            'result': {
                                'type': ['callback', {
                                    'callback': "SerializeModuleDefinition"
                                }],
                            }
                        }],
                        "createConstructorSerializer": ['constructor', {
                            'data': ['null', null],
                            'dependencies': wd({
                                "compare": {
                                    'type': ['function', {
                                        'context': ['import', "collation"],
                                        'function': "IsABeforeB",
                                    }],
                                },
                                "serializeLeafType": {
                                    'type': ['callback', {
                                        'context': ['import', "glossary"],
                                        'callback': "SerializeLeafType"
                                    }],
                                },
                                "serializeAlgorithmReference": {
                                    'type': ['callback', {
                                        'callback': "SerializeAlgorithmReference"
                                    }],
                                },
                            }),
                            'result': {
                                'type': ['callback', {
                                    'callback': "SerializeConstructor"
                                }],
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
                            "resource": member(bln(), true),
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
                    'functions': wd({
                    }),
                    'callbacks': wd({
                        "SerializeProject": {
                            'data': reference("Project"),
                            'context': ['import', "fp"],
                            'interface': "Writer",
                        },
                    }),
                    'interfaces': wd({}),
                },
                'api': {
                    'imports': wd({
                        "api": "../../api",
                        "glossary": "../../glossary",
                        "collation": "res-pareto-collation",
                    }),
                    'algorithms': wd({
                        "createProjectSerializer": ['constructor', {
                            'data': ['null', null],
                            'dependencies': wd({
                                "serializeLeafType": {
                                    'type': ['callback', {
                                        'context': ['import', "glossary"],
                                        'callback': "SerializeLeafType"
                                    }],
                                },
                                "serializeModuleDefinition": {
                                    'type': ['callback', {
                                        'context': ['import', "api"],
                                        'callback': "SerializeModuleDefinition"
                                    }],
                                },
                                "compare": {
                                    'type': ['function', {
                                        'context': ['import', "collation"],
                                        'function': "IsABeforeB",
                                    }],
                                },
                            }),
                            'result': {
                                'type': ['callback', {
                                    'callback': "SerializeProject"
                                }],
                            }
                        }],
                        "createTemplateSerializer": ['constructor', {
                            'data': ['null', null],
                            'dependencies': wd({
                                "compare": {
                                    'type': ['function', {
                                        'context': ['import', "collation"],
                                        'function': "IsABeforeB",
                                    }],
                                },
                            }),
                            'result': {
                                'type': ['callback', {
                                    'callback': "SerializeProject"
                                }],
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