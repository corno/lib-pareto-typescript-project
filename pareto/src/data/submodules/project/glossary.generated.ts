import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "glossary": null,
    }),
    'glossary parameters': d({
        "Annotation": null,
    }),
    'root': {
        'types': d({
            "AlgorithmTypeReference": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "context": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Context",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "type": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "asynchronous": <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "constructor": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "constructor": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })],
                                "function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "function": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })],
                                "resource": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "resource": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })],
                            })],
                            "synchronous": <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "function": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })],
                                "procedure": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "procedure": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })],
                            })],
                        })],
                    },
                })]
            },
            "Context": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "arguments": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['string', null]],
                    },
                    "glossary": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                    },
                })]
            },
            "Module": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "definition": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "ModuleDefinition",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "implementation": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "pareto": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                            "typescript": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        })],
                    },
                })]
            },
            "ModuleDefinition": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "api": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "imports": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "external": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    "main": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    "sibling": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    "submodule": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    "this": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                })]],
                            },
                            "root": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "algorithms": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "definition": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': ['local', null],
                                                    'typeXX': "AlgorithmTypeReference",
                                                    'tailXX': a([]),
                                                    'type arguments': d({}),
                                                }]],
                                            },
                                            "parameters": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['string', null]],
                                            },
                                            "type": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                    "dependent": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "configuration data": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "context": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                        'context': ['local', null],
                                                                        'typeXX': "Context",
                                                                        'tailXX': a([]),
                                                                        'type arguments': d({}),
                                                                    }]],
                                                                },
                                                                "type": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                                                },
                                                            })]],
                                                        },
                                                        "dependencies": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                'context': ['local', null],
                                                                'typeXX': "AlgorithmTypeReference",
                                                                'tailXX': a([]),
                                                                'type arguments': d({}),
                                                            }]]],
                                                        },
                                                        "side effects": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "context": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                        'context': ['local', null],
                                                                        'typeXX': "Context",
                                                                        'tailXX': a([]),
                                                                        'type arguments': d({}),
                                                                    }]],
                                                                },
                                                                "type": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                                        "asynchronous": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                                            "interface": {
                                                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                                                            },
                                                                        })],
                                                                        "synchronous": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                                            "interface": {
                                                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                                                            },
                                                                        })],
                                                                    })],
                                                                },
                                                            })]],
                                                        },
                                                    })],
                                                    "independent": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                })],
                                            },
                                        })]],
                                    },
                                })],
                            },
                        })],
                    },
                    "glossary": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "imports": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "external": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    "main": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    "sibling": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    "temp submodule": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                })]],
                            },
                            "root": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['import', {
                                        'glossary': {
                                            'glossary':{
                                                'annotation': {
                                                    'file': "../../prebuild/src/data/models/project.data.ts",
                                                    'line': 62,
                                                    'column': 51,
                                                },
                                                'key': "glossary",
                                            },
                                            'glossary arguments': d({
                                                "Annotation": ['glossary parameterXX', "Annotation"]
                                            }),
                                        },
                                    }],
                                    'typeXX': "Glossary",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    },
                })]
            },
            "Project": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "author": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                    },
                    "dependencies": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                    },
                    "description": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                    },
                    "license": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                    },
                    "type": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "glossary": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "imports": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "external": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    })]],
                                },
                                "root": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['import', {
                                            'glossary': {
                                                'glossary':{
                                                    'annotation': {
                                                        'file': "../../prebuild/src/data/models/project.data.ts",
                                                        'line': 136,
                                                        'column': 55,
                                                    },
                                                    'key': "glossary",
                                                },
                                                'glossary arguments': d({
                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                }),
                                            },
                                        }],
                                        'typeXX': "Glossary",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "library": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "bindings": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "definition": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "ModuleDefinition",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                        "implementation": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "pareto": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "typescript": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                            })],
                                        },
                                    })]],
                                },
                                "executables": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "constructor": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                        },
                                    })]],
                                },
                                "main": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Module",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "submodules": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Module",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                                "test": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Test",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "resource": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "definition": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "ModuleDefinition",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "temp": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "devDependencies": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                        },
                                        "nativeDependencies": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                        },
                                    })],
                                },
                                "test": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Test",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                        })],
                    },
                })]
            },
            "Test": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "definition": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "ModuleDefinition",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "dependencies": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                    },
                    "imports": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "external": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                            "pub": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                            "this": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        })]],
                    },
                })]
            },
        }),
        'namespaces': d({
            "AlgorithmTypeReference": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "context": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "type": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "asynchronous": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "TU": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "constructor": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "G": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "constructor": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                            "function": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "G": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "function": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                            "resource": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "G": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "resource": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "synchronous": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "TU": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "function": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "G": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "function": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                            "procedure": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "G": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "procedure": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Context": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "arguments": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "glossary": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Module": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "definition": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "implementation": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "pareto": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "typescript": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "ModuleDefinition": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "api": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "imports": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "D": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "external": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "main": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "sibling": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "submodule": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "this": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "root": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "algorithms": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "D": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "definition": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "parameters": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "D": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                    "type": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "TU": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({
                                                                                                    "dependent": {
                                                                                                        'types': d({}),
                                                                                                        'namespaces': d({
                                                                                                            "G": {
                                                                                                                'types': d({}),
                                                                                                                'namespaces': d({
                                                                                                                    "configuration data": {
                                                                                                                        'types': d({}),
                                                                                                                        'namespaces': d({
                                                                                                                            "O": {
                                                                                                                                'types': d({}),
                                                                                                                                'namespaces': d({
                                                                                                                                    "G": {
                                                                                                                                        'types': d({}),
                                                                                                                                        'namespaces': d({
                                                                                                                                            "context": {
                                                                                                                                                'types': d({}),
                                                                                                                                                'namespaces': d({}),
                                                                                                                                            },
                                                                                                                                            "type": {
                                                                                                                                                'types': d({}),
                                                                                                                                                'namespaces': d({}),
                                                                                                                                            },
                                                                                                                                        }),
                                                                                                                                    },
                                                                                                                                }),
                                                                                                                            },
                                                                                                                        }),
                                                                                                                    },
                                                                                                                    "dependencies": {
                                                                                                                        'types': d({}),
                                                                                                                        'namespaces': d({
                                                                                                                            "D": {
                                                                                                                                'types': d({}),
                                                                                                                                'namespaces': d({}),
                                                                                                                            },
                                                                                                                        }),
                                                                                                                    },
                                                                                                                    "side effects": {
                                                                                                                        'types': d({}),
                                                                                                                        'namespaces': d({
                                                                                                                            "D": {
                                                                                                                                'types': d({}),
                                                                                                                                'namespaces': d({
                                                                                                                                    "G": {
                                                                                                                                        'types': d({}),
                                                                                                                                        'namespaces': d({
                                                                                                                                            "context": {
                                                                                                                                                'types': d({}),
                                                                                                                                                'namespaces': d({}),
                                                                                                                                            },
                                                                                                                                            "type": {
                                                                                                                                                'types': d({}),
                                                                                                                                                'namespaces': d({
                                                                                                                                                    "TU": {
                                                                                                                                                        'types': d({}),
                                                                                                                                                        'namespaces': d({
                                                                                                                                                            "asynchronous": {
                                                                                                                                                                'types': d({}),
                                                                                                                                                                'namespaces': d({
                                                                                                                                                                    "G": {
                                                                                                                                                                        'types': d({}),
                                                                                                                                                                        'namespaces': d({
                                                                                                                                                                            "interface": {
                                                                                                                                                                                'types': d({}),
                                                                                                                                                                                'namespaces': d({}),
                                                                                                                                                                            },
                                                                                                                                                                        }),
                                                                                                                                                                    },
                                                                                                                                                                }),
                                                                                                                                                            },
                                                                                                                                                            "synchronous": {
                                                                                                                                                                'types': d({}),
                                                                                                                                                                'namespaces': d({
                                                                                                                                                                    "G": {
                                                                                                                                                                        'types': d({}),
                                                                                                                                                                        'namespaces': d({
                                                                                                                                                                            "interface": {
                                                                                                                                                                                'types': d({}),
                                                                                                                                                                                'namespaces': d({}),
                                                                                                                                                                            },
                                                                                                                                                                        }),
                                                                                                                                                                    },
                                                                                                                                                                }),
                                                                                                                                                            },
                                                                                                                                                        }),
                                                                                                                                                    },
                                                                                                                                                }),
                                                                                                                                            },
                                                                                                                                        }),
                                                                                                                                    },
                                                                                                                                }),
                                                                                                                            },
                                                                                                                        }),
                                                                                                                    },
                                                                                                                }),
                                                                                                            },
                                                                                                        }),
                                                                                                    },
                                                                                                    "independent": {
                                                                                                        'types': d({}),
                                                                                                        'namespaces': d({
                                                                                                            "G": {
                                                                                                                'types': d({}),
                                                                                                                'namespaces': d({}),
                                                                                                            },
                                                                                                        }),
                                                                                                    },
                                                                                                }),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "glossary": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "imports": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "D": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "external": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "main": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "sibling": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "temp submodule": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "root": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Project": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "author": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "dependencies": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "description": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "license": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "type": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "glossary": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "imports": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "D": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "TU": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "external": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                            "root": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "library": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "bindings": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "O": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "definition": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "implementation": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "TU": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({
                                                                                                    "pareto": {
                                                                                                        'types': d({}),
                                                                                                        'namespaces': d({
                                                                                                            "G": {
                                                                                                                'types': d({}),
                                                                                                                'namespaces': d({}),
                                                                                                            },
                                                                                                        }),
                                                                                                    },
                                                                                                    "typescript": {
                                                                                                        'types': d({}),
                                                                                                        'namespaces': d({
                                                                                                            "G": {
                                                                                                                'types': d({}),
                                                                                                                'namespaces': d({}),
                                                                                                            },
                                                                                                        }),
                                                                                                    },
                                                                                                }),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                            "executables": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "D": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "constructor": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                            "main": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "submodules": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "D": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                            "test": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "resource": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "definition": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "temp": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "G": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "devDependencies": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "D": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "G": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                            "nativeDependencies": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "D": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "G": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                            "test": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Test": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "definition": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "dependencies": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "imports": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "TU": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "external": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "pub": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "this": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}