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
import { api } from "./api.p"
const wd = pr.wrapRawDictionary

function def($: mapi.TModuleDefinition): mapi.TModuleDefinition {
    return $
}

export const project: mproject.TProject = {
    'type': ['library', null],
    'modules': wd({
        "main": {
            'definition': api,
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
                            "group": type(group({
                                "members": member(dictionary(ref("Interface")))
                            })),
                            "method": type(group({
                                "data": member(ref("LeafTypeOrNull")),
                                "interface": member(taggedUnion({
                                    "set": type(group({
                                        "interface": member(str())
                                    })),
                                    "null": nullType(),
                                }))
                            })),
                            "reference": type(ref("InterfaceReference")),
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
                            "templates": member(dictionary(ref("Template")), true),
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
                        "Template": group({
                            "parameters": member(["dictionary", nullType()]),
                            "type": member(ref("Type"))
                        }),
                        "Type": taggedUnion({
                            "array": type(ref("Type")),
                            "dictionary": type(ref("TypeOrNull")),
                            "group": type(dictionary(group({
                                "type": member(ref("Type")),
                                "optional": member(bln(), true)
                            }))),
                            "leaf": type(ref("LeafType")),
                            "nested": type(ref("Type")),
                            "optional": type(ref("Type")),
                            "parameter": type(str()),
                            "template": type(group({
                                "context": member(ref("Context"), true),
                                "template": member(str()),
                                "arguments": member(dictionary(ref("TypeOrNull")))
                            })),
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
                    }),
                    'pipes': wd({}),
                },
                'api': {
                    'imports': wd({
                    }),
                    'algorithms': wd({
                    })
                },
            }),
            'implementation': {}
        },
        "moduleDefinition": {
            'definition': def({
                'glossary': {
                    'imports': wd({
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
                    }),
                    'pipes': wd({}),
                },
                'api': {
                    'imports': wd({
                    }),
                    'algorithms': wd({
                    })
                },
            }),
            'implementation': {}
        },
        "project": {
            'definition': def({
                'glossary': {
                    'imports': wd({
                        "moduleDefinition": "../../moduleDefinition",
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
                                "definition": member(er("moduleDefinition", "ModuleDefinition")),
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
                    }),
                    'pipes': wd({}),
                },
                'api': {
                    'imports': wd({
                    }),
                    'algorithms': wd({
                    })
                },
            }),
            'implemenation': {}
        },
        // "temp": {
        //     'definition': def({
        //         'glossary': {
        //             'imports': wd({}),
        //             'types': types({
        //                 "Dictionary": dictionary(str()),
        //                 "B": group({
        //                     "key": member(str()),
        //                     "value": member(str()),
        //                     "isFirst": member(bln()),
        //                 }),
        //             }),
        //             'functions': wd({}),
        //             'interfaces': wd({
        //                 "X": ['group', {
        //                     'members': wd({
        //                         "onEmpty": ['method', {
        //                             'data': ['null', null],
        //                             'interface': ['null', null],

        //                         }],
        //                         "onNotEmpty": ['method', {
        //                             'data': ['null', null],
        //                             'interface': ['set', {
        //                                 'interface': "Y"
        //                             }],
        //                         }],
        //                     })
        //                 }],
        //                 "Y": ['method', {
        //                     'data': ['null', null],
        //                     'interface': ['set', {
        //                         'interface': "Y"
        //                     }],
        //                 }],
        //             }),
        //             'callbacks': wd({
        //                 "EnrichedDictionaryForEach": {
        //                     'data': ['type', reference("Dictionary")],
        //                     'interface': "X",
        //                 },
        //             }),
        //             'pipes': wd({}),
        //         },
        //         "api": {
        //             'imports': wd({}),
        //             'algorithms': wd({})
        //         },
        //     }),
        //     'implementation': {}

        // },
    }),
    'main': "main"
}