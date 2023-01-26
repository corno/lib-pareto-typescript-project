import * as pr from 'pareto-core-raw'

import * as mmoduleDefinition from "./import_moduleDefinition"
import * as mproject from "./import_project"
import * as mglossary from "./import_glossary"

const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

export const $: mproject.TModule = {
    'definition': {
        'glossary': {
            'imports': d({
                "fp": "lib-fountain-pen",
            }),
            'parameters': d({
                "Annotation": null,
            }),
            'templates': d({
                "Reference": {
                    'parameters': d({
                        "ReferencedType": null,
                    }),
                    'type': <mglossary.TType>['group', d({})],
                },
            }),
            'types': d({
                "Context": <mglossary.TType>['taggedUnion', d({
                    "import": <mglossary.TType>['template', {
                        'context': <mglossary.TContext>['local', null],
                        'arguments': d({
                            "RererencedType": <mglossary.TType>['null', null],
                        }),
                        'template': "Reference",
                    }],
                    "local": <mglossary.TType>['group', d({})],
                })],
                "Glossary": <mglossary.TType>['group', d({
                    "callbacks": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "context": {
                                'optional': false,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "Context",
                                }],
                            },
                            "data": {
                                'optional': false,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "OptionalTypeReference",
                                }],
                            },
                            "interface": {
                                'optional': false,
                                'type': <mglossary.TType>['template', {
                                    'context': <mglossary.TContext>['local', null],
                                    'arguments': d({
                                        "RererencedType": <mglossary.TType>['null', null],
                                    }),
                                    'template': "Reference",
                                }],
                            },
                        })]],
                    },
                    "functions": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "async": {
                                'optional': false,
                                'type': <mglossary.TType>['boolean', null],
                            },
                            "data": {
                                'optional': false,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "TypeReference",
                                }],
                            },
                            "return value": {
                                'optional': false,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "TypeReference",
                                }],
                            },
                        })]],
                    },
                    "imports": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "namespace": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Namespace",
                        }],
                    },
                    "parameters": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "pipes": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "in": {
                                'optional': false,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "InterfaceReference",
                                }],
                            },
                            "out": {
                                'optional': false,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "InterfaceReference",
                                }],
                            },
                        })]],
                    },
                })],
                "Interface": <mglossary.TType>['group', d({
                    "group": {
                        'optional': false,
                        'type': <mglossary.TType>['group', d({
                            "members": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "Interface",
                                }]],
                            },
                        })],
                    },
                    "method": {
                        'optional': false,
                        'type': <mglossary.TType>['group', d({
                            "data": {
                                'optional': false,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "OptionalTypeReference",
                                }],
                            },
                            "interface": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "null": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['group', d({
                                        "interface": {
                                            'optional': false,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['null', null],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                })],
                            },
                        })],
                    },
                    "reference": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "InterfaceReference",
                        }],
                    },
                })],
                "InterfaceReference": <mglossary.TType>['group', d({
                    "context": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Context",
                        }],
                    },
                    "interface": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
                            }),
                            'template': "Reference",
                        }],
                    },
                })],
                "Namespace": <mglossary.TType>['group', d({
                    "interfaces": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Interface",
                        }]],
                    },
                    "namespaces": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Namespace",
                        }]],
                    },
                    "templates": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "parameters": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                            },
                            "type": {
                                'optional': false,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "Type",
                                }],
                            },
                        })]],
                    },
                    "types": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Type",
                        }]],
                    },
                })],
                "OptionalTypeReference": <mglossary.TType>['taggedUnion', d({
                    "not set": <mglossary.TType>['group', d({})],
                    "set": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "TypeReference",
                    }],
                })],
                "Type": <mglossary.TType>['group', d({})],
                "TypeReference": <mglossary.TType>['group', d({
                    "context": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Context",
                        }],
                    },
                    "namespaces": {
                        'optional': false,
                        'type': <mglossary.TType>['array', <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
                            }),
                            'template': "Reference",
                        }]],
                    },
                    "type": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
                            }),
                            'template': "Reference",
                        }],
                    },
                })],
            }),
            'interfaces': d({}),
            'functions': d({
                "Enrich": {
                    'data': {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Root",
                    },
                    'managed input interface': null,
                    'output interface': null,
                    'return type': ['data', {
                        'type': {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Root",
                        },
                        'asynchronous': false,
                    }],
                },
                "Serialize": {
                    'data': {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Root",
                    },
                    'managed input interface': null,
                    'output interface': {
                        'context': <mglossary.TContext>['import', "fp"],
                        'interface': "Line",
                    },
                    'return type': ['nothing', null],
                },
            }),
        },
        'api': {
            'imports': d({
                'common': "glo-pareto-common"
            }),
            'algorithms': d({
                'createEnricher': {
                    'definition': {
                        'function': "undefined",
                    },
                    'type': ['constructor', {
                        'configuration data': null,
                        'dependencies': d({}),
                    }],
                },
                'createSerializer': {
                    'definition': {
                        'function': "undefined",
                    },
                    'type': ['constructor', {
                        'configuration data': null,
                        'dependencies': d({}),
                    }],
                },
            }),
        },
    },
    'implementation': {
        'implementations': d({
            "createEnricher": {
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
                                                'returnExpression': ['implementMe', "liana2Pareto"],
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