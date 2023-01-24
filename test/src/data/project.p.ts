import * as pr from 'pareto-core-raw'
import {
    array,
    externalReference as er,
    null_,
    string as str,
    reference,
    reference as ref,
    typeReference,
    boolean as bln,
    number as nr,
    nested,
    template,
    optional,
    dictionary, group as grp, member, taggedUnion, types, _function, group, externalTypeReference
} from "../../../pub/dist/modules/glossary/api/shorthands.p"

import * as mproject from "../../../pub/dist/modules/project"

import * as mglossary from "../../../pub/dist/modules/glossary"

type GRP = {
    type: mglossary.TType
    optional?: boolean
}

const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

export const $: mproject.TModule = {
    'definition': {
        'glossary': {
            'imports': d({
                "fp": "lib-fountain-pen",
            }),
            'namespace': {
                'types': types({
                    "Context": taggedUnion({
                        "local": null_(),
                        "import": str(),
                    }),
                    "Function": group({
                        "return type": member(taggedUnion({
                            "data": group({
                                "asynchronous": member(bln()),
                                "type": member(ref("TypeReference")),
                            }),
                            "interface": ref("InterfaceReference"),
                            "nothing": null_(),
                        })),
                        "data": member(ref("TypeReference")),
                        "managed input interface": member(optional(ref("InterfaceReference"))),
                        "output interface": member(optional(ref("InterfaceReference"))),
                    }),
                    "Glossary": group({
                        "parameters": member(ref("Parameters"), true),
                        "imports": member(dictionary(str())),
                        "namespace": member(ref("Namespace")),
                        "functions": member(dictionary(ref("Function"))),
                    }),
                    "Interface": taggedUnion({
                        "group":group({
                            "members": member(dictionary(ref("Interface")))
                        }),
                        "method": group({
                            "data": member(optional(ref("TypeReference"))),
                            "interface": member(optional(ref("Interface")))
                        }),
                        "reference": ref("InterfaceReference"),
                    }),
                    "InterfaceReference": group({
                        "context": member(ref("Context"), true),
                        "interface": member(str())
                    }),
                    "Namespace": group({
                        "namespaces": member(dictionary(ref("Namespace")), true),
                        "templates": member(dictionary(ref("Template")), true),
                        "types": member(dictionary(ref("Type"))),
                        "interfaces": member(dictionary(ref("Interface"))),
                    }),
                    "Parameters": ['dictionary', null_()],
                    "Template": group({
                        "parameters": member(['dictionary',  null_()]),
                        "type": member(ref("Type"))
                    }),
                    "Type": taggedUnion({
                        "array": ref("Type"),
                        "nested": ref("Type"),
                        "optional": ref("Type"),
                        "dictionary": ref("Type"),
                        "computed": ref("Type"),
    
                        "null": null_(),
                        "boolean": null_(),
                        "string": null_(),
                        "number": null_(),
                        "reference": ref("TypeReference"),
                        "group": dictionary(group({
                            "type": member(ref("Type")),
                            "optional": member(bln(), true)
                        })),
                        "parameter": str(),
                        "template": group({
                            "context": member(ref("Context"), true),
                            "template": member(str()),
                            "arguments": member(dictionary(ref("Type")))
                        }),
                        "taggedUnion":dictionary(ref("Type")),
                    }),
                    "TypeReference": group({
                        "context": member(ref("Context")),
                        "namespaces": member(array(str())),
                        "type": member(str()),
                    }),
                }),
                'interfaces': d({}),
    
            },
            'functions': d({}),
        },
        'api': {
            'imports': d({
                "collation": "res-pareto-collation",
                "temp": "../../temp",
            }),
            'algorithms': d({
                // "createSerializer": {
                //     'definition': ['callback', {
                //         'callback': "Serialize"
                //     }],
                //     'type': ['constructor', {
                //         'configuration data': null,
                //         'dependencies': d({
                //             "arrayForEach": ['callback', {
                //                 'context': ['import', "temp"],
                //                 'callback': "ArrayForEach",
                //             }],
                //             "dictionaryForEach": ['callback', {
                //                 'context': ['import', "temp"],
                //                 'callback': "DictionaryForEach",
                //             }],
                //             "enrichedArrayForEach": ['callback', {
                //                 'context': ['import', "temp"],
                //                 'callback': "EnrichedArrayForEach",
                //             }],
                //             "enrichedDictionaryForEach": ['callback', {
                //                 'context': ['import', "temp"],
                //                 'callback': "EnrichedDictionaryForEach",
                //             }],
                //         })
                //     }]
                // },
            })
        },
    },
    'implementation': {
        'implementations': d({
            "createSerializer": {
                'constructor': true,
                'type': ['function', {
                    'block': {
                        'innerFunctions': d({
                            "Context": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['switch', {
                                        'cases': d({
                                            "import": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({})
                                                }],
                                            },
                                            "local": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({})
                                                }],
                                            },
                                        })
                                    }],
                                },
                            },
                            "Glossary": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['groupInitializer', {
                                        'properties': d({
                                            "callbacks": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({
                                                            "context": ['call', {
                                                                'function': "Context",
                                                            }],
                                                            "data": ['call', {
                                                                'function': "OptionalTypeReference",
                                                            }],
                                                            "interface": ['implementMe', "liana2Pareto"],
                                                        })
                                                    }],
                                                },
                                            }],
                                            "functions": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({
                                                            "async": ['implementMe', "liana2Pareto"],
                                                            "data": ['call', {
                                                                'function': "TypeReference",
                                                            }],
                                                            "return value": ['call', {
                                                                'function': "TypeReference",
                                                            }],
                                                        })
                                                    }],
                                                },
                                            }],
                                            "imports": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({})
                                                    }],
                                                },
                                            }],
                                            "namespace": ['call', {
                                                'function': "Namespace",
                                            }],
                                            "parameters": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({})
                                                    }],
                                                },
                                            }],
                                            "pipes": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({
                                                            "in": ['call', {
                                                                'function': "InterfaceReference",
                                                            }],
                                                            "out": ['call', {
                                                                'function': "InterfaceReference",
                                                            }],
                                                        })
                                                    }],
                                                },
                                            }],
                                        })
                                    }],
                                },
                            },
                            "Interface": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['groupInitializer', {
                                        'properties': d({
                                            "group": ['groupInitializer', {
                                                'properties': d({
                                                    "members": ['mapDictionary', {
                                                        'block': {
                                                            'innerFunctions': d({}),
                                                            'returnExpression': ['call', {
                                                                'function': "Interface",
                                                            }],
                                                        },
                                                    }],
                                                })
                                            }],
                                            "method": ['groupInitializer', {
                                                'properties': d({
                                                    "data": ['call', {
                                                        'function': "OptionalTypeReference",
                                                    }],
                                                    "interface": ['switch', {
                                                        'cases': d({
                                                            "null": {
                                                                'innerFunctions': d({}),
                                                                'returnExpression': ['groupInitializer', {
                                                                    'properties': d({})
                                                                }],
                                                            },
                                                            "set": {
                                                                'innerFunctions': d({}),
                                                                'returnExpression': ['groupInitializer', {
                                                                    'properties': d({
                                                                        "interface": ['implementMe', "liana2Pareto"],
                                                                    })
                                                                }],
                                                            },
                                                        })
                                                    }],
                                                })
                                            }],
                                            "reference": ['call', {
                                                'function': "InterfaceReference",
                                            }],
                                        })
                                    }],
                                },
                            },
                            "InterfaceReference": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['groupInitializer', {
                                        'properties': d({
                                            "context": ['call', {
                                                'function': "Context",
                                            }],
                                            "interface": ['implementMe', "liana2Pareto"],
                                        })
                                    }],
                                },
                            },
                            "Namespace": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['groupInitializer', {
                                        'properties': d({
                                            "interfaces": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['call', {
                                                        'function': "Interface",
                                                    }],
                                                },
                                            }],
                                            "namespaces": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['call', {
                                                        'function': "Namespace",
                                                    }],
                                                },
                                            }],
                                            "templates": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({
                                                            "parameters": ['mapDictionary', {
                                                                'block': {
                                                                    'innerFunctions': d({}),
                                                                    'returnExpression': ['groupInitializer', {
                                                                        'properties': d({})
                                                                    }],
                                                                },
                                                            }],
                                                            "type": ['call', {
                                                                'function': "Type",
                                                            }],
                                                        })
                                                    }],
                                                },
                                            }],
                                            "types": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['call', {
                                                        'function': "Type",
                                                    }],
                                                },
                                            }],
                                        })
                                    }],
                                },
                            },
                            "OptionalTypeReference": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['switch', {
                                        'cases': d({
                                            "not set": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({})
                                                }],
                                            },
                                            "set": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['call', {
                                                    'function': "TypeReference",
                                                }],
                                            },
                                        })
                                    }],
                                },
                            },
                            "Type": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['groupInitializer', {
                                        'properties': d({})
                                    }],
                                },
                            },
                            "TypeReference": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['groupInitializer', {
                                        'properties': d({
                                            "context": ['call', {
                                                'function': "Context",
                                            }],
                                            "namespaces": ['mapArray', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['implementMe', "liana2Pareto"],
                                                },
                                            }],
                                            "type": ['implementMe', "liana2Pareto"],
                                        })
                                    }],
                                },
                            },
                        }),
                        'returnExpression': ['switch', {
                            'cases': d({})
                        }],
                    },
                }],
            },
        }),
    },
}