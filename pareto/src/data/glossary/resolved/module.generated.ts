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
                    "functions": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "data": {
                                'optional': false,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "TypeReference",
                                }],
                            },
                            "managed input interface": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "not set": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                            "output interface": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "not set": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                            "return type": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "data": <mglossary.TType>['group', d({
                                        "asynchronous": {
                                            'optional': false,
                                            'type': <mglossary.TType>['boolean', null],
                                        },
                                        "type": {
                                            'optional': false,
                                            'type': <mglossary.TType>['reference', {
                                                'context': <mglossary.TContext>['local', null],
                                                'type': "TypeReference",
                                            }],
                                        },
                                    })],
                                    "interface": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "InterfaceReference",
                                    }],
                                    "nothing": <mglossary.TType>['group', d({})],
                                })],
                            },
                        })]],
                    },
                    "imports": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "interfaces": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Interface",
                        }]],
                    },
                    "parameters": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
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
                "Interface": <mglossary.TType>['taggedUnion', d({
                    "group": <mglossary.TType>['group', d({
                        "members": {
                            'optional': false,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', null],
                                'type': "Interface",
                            }]],
                        },
                    })],
                    "method": <mglossary.TType>['group', d({
                        "data": {
                            'optional': false,
                            'type': <mglossary.TType>['taggedUnion', d({
                                "not set": <mglossary.TType>['group', d({})],
                                "set": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "TypeReference",
                                }],
                            })],
                        },
                        "interface": {
                            'optional': false,
                            'type': <mglossary.TType>['taggedUnion', d({
                                "not set": <mglossary.TType>['group', d({})],
                                "set": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "InterfaceReference",
                                }],
                            })],
                        },
                    })],
                    "reference": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "InterfaceReference",
                    }],
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
                "Type": <mglossary.TType>['taggedUnion', d({
                    "array": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Type",
                    }],
                    "boolean": <mglossary.TType>['group', d({})],
                    "computed": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Type",
                    }],
                    "dictionary": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Type",
                    }],
                    "group": <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                        "optional": {
                            'optional': false,
                            'type': <mglossary.TType>['boolean', null],
                        },
                        "type": {
                            'optional': false,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', null],
                                'type': "Type",
                            }],
                        },
                    })]],
                    "nested": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Type",
                    }],
                    "null": <mglossary.TType>['group', d({})],
                    "number": <mglossary.TType>['group', d({})],
                    "optional": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Type",
                    }],
                    "parameter": <mglossary.TType>['string', null],
                    "reference": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "TypeReference",
                    }],
                    "string": <mglossary.TType>['group', d({})],
                    "taggedUnion": <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Type",
                    }]],
                    "template": <mglossary.TType>['group', d({
                        "arguments": {
                            'optional': false,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', null],
                                'type': "Type",
                            }]],
                        },
                        "context": {
                            'optional': false,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', null],
                                'type': "Context",
                            }],
                        },
                        "template": {
                            'optional': false,
                            'type': <mglossary.TType>['string', null],
                        },
                    })],
                })],
                "TypeReference": <mglossary.TType>['group', d({
                    "context": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Context",
                        }],
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
                                            "functions": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({
                                                            "data": ['call', {
                                                                'function': "TypeReference",
                                                            }],
                                                            "managed input interface": ['switch', {
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
                                                                            'function': "InterfaceReference",
                                                                        }],
                                                                    },
                                                                })
                                                            }],
                                                            "output interface": ['switch', {
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
                                                                            'function': "InterfaceReference",
                                                                        }],
                                                                    },
                                                                })
                                                            }],
                                                            "return type": ['switch', {
                                                                'cases': d({
                                                                    "data": {
                                                                        'innerFunctions': d({}),
                                                                        'returnExpression': ['groupInitializer', {
                                                                            'properties': d({
                                                                                "asynchronous": ['implementMe', "liana2Pareto"],
                                                                                "type": ['call', {
                                                                                    'function': "TypeReference",
                                                                                }],
                                                                            })
                                                                        }],
                                                                    },
                                                                    "interface": {
                                                                        'innerFunctions': d({}),
                                                                        'returnExpression': ['call', {
                                                                            'function': "InterfaceReference",
                                                                        }],
                                                                    },
                                                                    "nothing": {
                                                                        'innerFunctions': d({}),
                                                                        'returnExpression': ['groupInitializer', {
                                                                            'properties': d({})
                                                                        }],
                                                                    },
                                                                })
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
                                            "interfaces": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['call', {
                                                        'function': "Interface",
                                                    }],
                                                },
                                            }],
                                            "parameters": ['mapDictionary', {
                                                'block': {
                                                    'innerFunctions': d({}),
                                                    'returnExpression': ['groupInitializer', {
                                                        'properties': d({})
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
                            "Interface": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['switch', {
                                        'cases': d({
                                            "group": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
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
                                            },
                                            "method": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({
                                                        "data": ['switch', {
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
                                                        "interface": ['switch', {
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
                                                                        'function': "InterfaceReference",
                                                                    }],
                                                                },
                                                            })
                                                        }],
                                                    })
                                                }],
                                            },
                                            "reference": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['call', {
                                                    'function': "InterfaceReference",
                                                }],
                                            },
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
                            "Type": {
                                'block': {
                                    'innerFunctions': d({}),
                                    'returnExpression': ['switch', {
                                        'cases': d({
                                            "array": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['call', {
                                                    'function': "Type",
                                                }],
                                            },
                                            "boolean": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({})
                                                }],
                                            },
                                            "computed": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['call', {
                                                    'function': "Type",
                                                }],
                                            },
                                            "dictionary": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['call', {
                                                    'function': "Type",
                                                }],
                                            },
                                            "group": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['mapDictionary', {
                                                    'block': {
                                                        'innerFunctions': d({}),
                                                        'returnExpression': ['groupInitializer', {
                                                            'properties': d({
                                                                "optional": ['implementMe', "liana2Pareto"],
                                                                "type": ['call', {
                                                                    'function': "Type",
                                                                }],
                                                            })
                                                        }],
                                                    },
                                                }],
                                            },
                                            "nested": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['call', {
                                                    'function': "Type",
                                                }],
                                            },
                                            "null": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({})
                                                }],
                                            },
                                            "number": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({})
                                                }],
                                            },
                                            "optional": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['call', {
                                                    'function': "Type",
                                                }],
                                            },
                                            "parameter": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['implementMe', "liana2Pareto"],
                                            },
                                            "reference": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['call', {
                                                    'function': "TypeReference",
                                                }],
                                            },
                                            "string": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({})
                                                }],
                                            },
                                            "taggedUnion": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['mapDictionary', {
                                                    'block': {
                                                        'innerFunctions': d({}),
                                                        'returnExpression': ['call', {
                                                            'function': "Type",
                                                        }],
                                                    },
                                                }],
                                            },
                                            "template": {
                                                'innerFunctions': d({}),
                                                'returnExpression': ['groupInitializer', {
                                                    'properties': d({
                                                        "arguments": ['mapDictionary', {
                                                            'block': {
                                                                'innerFunctions': d({}),
                                                                'returnExpression': ['call', {
                                                                    'function': "Type",
                                                                }],
                                                            },
                                                        }],
                                                        "context": ['call', {
                                                            'function': "Context",
                                                        }],
                                                        "template": ['implementMe', "liana2Pareto"],
                                                    })
                                                }],
                                            },
                                        })
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