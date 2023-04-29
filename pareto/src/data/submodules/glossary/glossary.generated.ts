import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({}),
    'core': {
        'parameters': d({
            "Annotation": null,
        }),
        'root': {
            'types': d({
                "Arguments": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "DataSpecifier",
                        'tailXX': a([]),
                        'arguments': d({}),
                    }]]]
                },
                "AsynchronousInterface": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "choice": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "options": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "AsynchronousInterface",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]]],
                            },
                        })],
                        "method": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "data": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "DataSpecifier",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]]],
                            },
                            "interface": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "AsynchronousInterface",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]]],
                            },
                        })],
                        "reference": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "AsynchronousInterfaceReference",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]],
                        "streamconsumer": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "data": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "AsynchronousInterface",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                            "end": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "AsynchronousInterface",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                    })]
                },
                "AsynchronousInterfaceReference": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "arguments": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Arguments",
                                'tailXX': a([]),
                                'arguments': d({}),
                            }]],
                        },
                        "context": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "import": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "glossaryXX": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })],
                                "local": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                            })],
                        },
                        "interfaceXX": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })]
                },
                "DataOrSynchronousInterface": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "data": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "DataSpecifier",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]],
                        "interface": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "SynchronousInterfaceReference",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]],
                    })]
                },
                "DataSpecifier": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "glossary parameterXX": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        "type": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "arguments": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Arguments",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                            "context": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "import": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "glossaryXX": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                        },
                                    })],
                                    "local": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                })],
                            },
                            "tailXX": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['string', null]],
                            },
                            "typeXX": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                            },
                        })],
                        "type parameterXX": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                    })]
                },
                "Glossary": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "core": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Glossary Core",
                                'tailXX': a([]),
                                'arguments': d({}),
                            }]],
                        },
                        "imports": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "arguments": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Arguments",
                                        'tailXX': a([]),
                                        'arguments': d({}),
                                    }]],
                                },
                            })]],
                        },
                    })]
                },
                "Glossary Core": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "asynchronous": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "algorithms": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "parameters": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "TypeParameters",
                                                'tailXX': a([]),
                                                'arguments': d({}),
                                            }]],
                                        },
                                        "type": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "constructor": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "downstreams": {
                                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "AsynchronousInterfaceReference",
                                                            'tailXX': a([]),
                                                            'arguments': d({}),
                                                        }]]],
                                                    },
                                                    "interface": {
                                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "AsynchronousInterfaceReference",
                                                            'tailXX': a([]),
                                                            'arguments': d({}),
                                                        }]],
                                                    },
                                                })],
                                                "function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "in": {
                                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "DataSpecifier",
                                                            'tailXX': a([]),
                                                            'arguments': d({}),
                                                        }]],
                                                    },
                                                    "out": {
                                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "DataSpecifier",
                                                            'tailXX': a([]),
                                                            'arguments': d({}),
                                                        }]],
                                                    },
                                                })],
                                                "resource": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "consumer": {
                                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "AsynchronousInterfaceReference",
                                                            'tailXX': a([]),
                                                            'arguments': d({}),
                                                        }]],
                                                    },
                                                    "request": {
                                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "DataSpecifier",
                                                            'tailXX': a([]),
                                                            'arguments': d({}),
                                                        }]],
                                                    },
                                                })],
                                            })],
                                        },
                                    })]],
                                },
                                "interfaces": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "interface": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "AsynchronousInterface",
                                                'tailXX': a([]),
                                                'arguments': d({}),
                                            }]],
                                        },
                                        "parameters": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "TypeParameters",
                                                'tailXX': a([]),
                                                'arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                            })],
                        },
                        "parameters": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Glossary Parameters",
                                'tailXX': a([]),
                                'arguments': d({}),
                            }]],
                        },
                        "root": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Namespace",
                                'tailXX': a([]),
                                'arguments': d({}),
                            }]],
                        },
                        "synchronous": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "algorithms": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "parameters": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "TypeParameters",
                                                'tailXX': a([]),
                                                'arguments': d({}),
                                            }]],
                                        },
                                        "type": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "callbacks": {
                                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "in": {
                                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                    'context': ['local', null],
                                                                    'typeXX': "DataSpecifier",
                                                                    'tailXX': a([]),
                                                                    'arguments': d({}),
                                                                }]],
                                                            },
                                                            "lookups": {
                                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                    'context': ['local', null],
                                                                    'typeXX': "DataSpecifier",
                                                                    'tailXX': a([]),
                                                                    'arguments': d({}),
                                                                }]]],
                                                            },
                                                            "out": {
                                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                    'context': ['local', null],
                                                                    'typeXX': "DataSpecifier",
                                                                    'tailXX': a([]),
                                                                    'arguments': d({}),
                                                                }]],
                                                            },
                                                        })]],
                                                    },
                                                    "in": {
                                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "DataOrSynchronousInterface",
                                                            'tailXX': a([]),
                                                            'arguments': d({}),
                                                        }]],
                                                    },
                                                    "out": {
                                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "DataSpecifier",
                                                            'tailXX': a([]),
                                                            'arguments': d({}),
                                                        }]],
                                                    },
                                                })],
                                                "procedure": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "in": {
                                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "DataOrSynchronousInterface",
                                                            'tailXX': a([]),
                                                            'arguments': d({}),
                                                        }]],
                                                    },
                                                    "out": {
                                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "SynchronousInterfaceReference",
                                                            'tailXX': a([]),
                                                            'arguments': d({}),
                                                        }]],
                                                    },
                                                })],
                                            })],
                                        },
                                    })]],
                                },
                                "interfaces": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "interface": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "SynchronousInterface",
                                                'tailXX': a([]),
                                                'arguments': d({}),
                                            }]],
                                        },
                                        "parameters": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "TypeParameters",
                                                'tailXX': a([]),
                                                'arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                            })],
                        },
                    })]
                },
                "Glossary Library": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Glossary Core",
                        'tailXX': a([]),
                        'arguments': d({}),
                    }]]]
                },
                "Glossary Parameters": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]]
                },
                "Glossary Wrapper": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "glossary": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Glossary",
                                'tailXX': a([]),
                                'arguments': d({}),
                            }]],
                        },
                        "library": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Glossary Library",
                                'tailXX': a([]),
                                'arguments': d({}),
                            }]],
                        },
                    })]
                },
                "Namespace": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "namespaces": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Namespace",
                                'tailXX': a([]),
                                'arguments': d({}),
                            }]]],
                        },
                        "types": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "parameters": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "TypeParameters",
                                        'tailXX': a([]),
                                        'arguments': d({}),
                                    }]],
                                },
                                "type": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([]),
                                        'arguments': d({}),
                                    }]],
                                },
                            })]],
                        },
                    })]
                },
                "SynchronousInterface": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "group": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "members": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "SynchronousInterface",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]]],
                            },
                        })],
                        "method": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "data": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "DataSpecifier",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]]],
                            },
                            "interface": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "SynchronousInterface",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]]],
                            },
                        })],
                        "reference": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "SynchronousInterfaceReference",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]],
                    })]
                },
                "SynchronousInterfaceReference": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "arguments": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Arguments",
                                'tailXX': a([]),
                                'arguments': d({}),
                            }]],
                        },
                        "context": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "import": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "glossaryXX": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })],
                                "local": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                            })],
                        },
                        "interfaceXX": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })]
                },
                "Type": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "array": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]],
                        "boolean": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "computed": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]],
                        "dictionary": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]],
                        "group": <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "type": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Type",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                        })]],
                        "null": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "number": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "optional": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]],
                        "reference": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "DataSpecifier",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]],
                        "string": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "taggedUnion": <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]]],
                    })]
                },
                "TypeParameters": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]]
                },
            }),
            'namespaces': d({
                "Arguments": {
                    'types': d({}),
                    'namespaces': d({
                        "D": {
                            'types': d({}),
                            'namespaces': d({}),
                        },
                    }),
                },
                "AsynchronousInterface": {
                    'types': d({}),
                    'namespaces': d({
                        "TU": {
                            'types': d({}),
                            'namespaces': d({
                                "choice": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "options": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "D": {
                                                            'types': d({}),
                                                            'namespaces': d({}),
                                                        },
                                                    }),
                                                },
                                            }),
                                        },
                                    }),
                                },
                                "method": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "data": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "O": {
                                                            'types': d({}),
                                                            'namespaces': d({}),
                                                        },
                                                    }),
                                                },
                                                "interface": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "O": {
                                                            'types': d({}),
                                                            'namespaces': d({}),
                                                        },
                                                    }),
                                                },
                                            }),
                                        },
                                    }),
                                },
                                "reference": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "streamconsumer": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "data": {
                                                    'types': d({}),
                                                    'namespaces': d({}),
                                                },
                                                "end": {
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
                "AsynchronousInterfaceReference": {
                    'types': d({}),
                    'namespaces': d({
                        "G": {
                            'types': d({}),
                            'namespaces': d({
                                "arguments": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "context": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "TU": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "import": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "G": {
                                                            'types': d({}),
                                                            'namespaces': d({
                                                                "glossaryXX": {
                                                                    'types': d({}),
                                                                    'namespaces': d({}),
                                                                },
                                                            }),
                                                        },
                                                    }),
                                                },
                                                "local": {
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
                                "interfaceXX": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                            }),
                        },
                    }),
                },
                "DataOrSynchronousInterface": {
                    'types': d({}),
                    'namespaces': d({
                        "TU": {
                            'types': d({}),
                            'namespaces': d({
                                "data": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "interface": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                            }),
                        },
                    }),
                },
                "DataSpecifier": {
                    'types': d({}),
                    'namespaces': d({
                        "TU": {
                            'types': d({}),
                            'namespaces': d({
                                "glossary parameterXX": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "type": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "arguments": {
                                                    'types': d({}),
                                                    'namespaces': d({}),
                                                },
                                                "context": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "TU": {
                                                            'types': d({}),
                                                            'namespaces': d({
                                                                "import": {
                                                                    'types': d({}),
                                                                    'namespaces': d({
                                                                        "G": {
                                                                            'types': d({}),
                                                                            'namespaces': d({
                                                                                "glossaryXX": {
                                                                                    'types': d({}),
                                                                                    'namespaces': d({}),
                                                                                },
                                                                            }),
                                                                        },
                                                                    }),
                                                                },
                                                                "local": {
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
                                                "tailXX": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "A": {
                                                            'types': d({}),
                                                            'namespaces': d({}),
                                                        },
                                                    }),
                                                },
                                                "typeXX": {
                                                    'types': d({}),
                                                    'namespaces': d({}),
                                                },
                                            }),
                                        },
                                    }),
                                },
                                "type parameterXX": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                            }),
                        },
                    }),
                },
                "Glossary": {
                    'types': d({}),
                    'namespaces': d({
                        "G": {
                            'types': d({}),
                            'namespaces': d({
                                "core": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "imports": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "D": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "G": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "arguments": {
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
                "Glossary Core": {
                    'types': d({}),
                    'namespaces': d({
                        "G": {
                            'types': d({}),
                            'namespaces': d({
                                "asynchronous": {
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
                                                                        "parameters": {
                                                                            'types': d({}),
                                                                            'namespaces': d({}),
                                                                        },
                                                                        "type": {
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
                                                                                                        "downstreams": {
                                                                                                            'types': d({}),
                                                                                                            'namespaces': d({
                                                                                                                "D": {
                                                                                                                    'types': d({}),
                                                                                                                    'namespaces': d({}),
                                                                                                                },
                                                                                                            }),
                                                                                                        },
                                                                                                        "interface": {
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
                                                                                                        "in": {
                                                                                                            'types': d({}),
                                                                                                            'namespaces': d({}),
                                                                                                        },
                                                                                                        "out": {
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
                                                                                                        "consumer": {
                                                                                                            'types': d({}),
                                                                                                            'namespaces': d({}),
                                                                                                        },
                                                                                                        "request": {
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
                                                "interfaces": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "D": {
                                                            'types': d({}),
                                                            'namespaces': d({
                                                                "G": {
                                                                    'types': d({}),
                                                                    'namespaces': d({
                                                                        "interface": {
                                                                            'types': d({}),
                                                                            'namespaces': d({}),
                                                                        },
                                                                        "parameters": {
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
                                "parameters": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "root": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "synchronous": {
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
                                                                        "parameters": {
                                                                            'types': d({}),
                                                                            'namespaces': d({}),
                                                                        },
                                                                        "type": {
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
                                                                                                        "callbacks": {
                                                                                                            'types': d({}),
                                                                                                            'namespaces': d({
                                                                                                                "D": {
                                                                                                                    'types': d({}),
                                                                                                                    'namespaces': d({
                                                                                                                        "G": {
                                                                                                                            'types': d({}),
                                                                                                                            'namespaces': d({
                                                                                                                                "in": {
                                                                                                                                    'types': d({}),
                                                                                                                                    'namespaces': d({}),
                                                                                                                                },
                                                                                                                                "lookups": {
                                                                                                                                    'types': d({}),
                                                                                                                                    'namespaces': d({
                                                                                                                                        "D": {
                                                                                                                                            'types': d({}),
                                                                                                                                            'namespaces': d({}),
                                                                                                                                        },
                                                                                                                                    }),
                                                                                                                                },
                                                                                                                                "out": {
                                                                                                                                    'types': d({}),
                                                                                                                                    'namespaces': d({}),
                                                                                                                                },
                                                                                                                            }),
                                                                                                                        },
                                                                                                                    }),
                                                                                                                },
                                                                                                            }),
                                                                                                        },
                                                                                                        "in": {
                                                                                                            'types': d({}),
                                                                                                            'namespaces': d({}),
                                                                                                        },
                                                                                                        "out": {
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
                                                                                                        "in": {
                                                                                                            'types': d({}),
                                                                                                            'namespaces': d({}),
                                                                                                        },
                                                                                                        "out": {
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
                                                "interfaces": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "D": {
                                                            'types': d({}),
                                                            'namespaces': d({
                                                                "G": {
                                                                    'types': d({}),
                                                                    'namespaces': d({
                                                                        "interface": {
                                                                            'types': d({}),
                                                                            'namespaces': d({}),
                                                                        },
                                                                        "parameters": {
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
                "Glossary Library": {
                    'types': d({}),
                    'namespaces': d({
                        "D": {
                            'types': d({}),
                            'namespaces': d({}),
                        },
                    }),
                },
                "Glossary Parameters": {
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
                "Glossary Wrapper": {
                    'types': d({}),
                    'namespaces': d({
                        "G": {
                            'types': d({}),
                            'namespaces': d({
                                "glossary": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "library": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                            }),
                        },
                    }),
                },
                "Namespace": {
                    'types': d({}),
                    'namespaces': d({
                        "G": {
                            'types': d({}),
                            'namespaces': d({
                                "namespaces": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "D": {
                                            'types': d({}),
                                            'namespaces': d({}),
                                        },
                                    }),
                                },
                                "types": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "D": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "G": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "parameters": {
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
                            }),
                        },
                    }),
                },
                "SynchronousInterface": {
                    'types': d({}),
                    'namespaces': d({
                        "TU": {
                            'types': d({}),
                            'namespaces': d({
                                "group": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "members": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "D": {
                                                            'types': d({}),
                                                            'namespaces': d({}),
                                                        },
                                                    }),
                                                },
                                            }),
                                        },
                                    }),
                                },
                                "method": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "data": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "O": {
                                                            'types': d({}),
                                                            'namespaces': d({}),
                                                        },
                                                    }),
                                                },
                                                "interface": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "O": {
                                                            'types': d({}),
                                                            'namespaces': d({}),
                                                        },
                                                    }),
                                                },
                                            }),
                                        },
                                    }),
                                },
                                "reference": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                            }),
                        },
                    }),
                },
                "SynchronousInterfaceReference": {
                    'types': d({}),
                    'namespaces': d({
                        "G": {
                            'types': d({}),
                            'namespaces': d({
                                "arguments": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "context": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "TU": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "import": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "G": {
                                                            'types': d({}),
                                                            'namespaces': d({
                                                                "glossaryXX": {
                                                                    'types': d({}),
                                                                    'namespaces': d({}),
                                                                },
                                                            }),
                                                        },
                                                    }),
                                                },
                                                "local": {
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
                                "interfaceXX": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                            }),
                        },
                    }),
                },
                "Type": {
                    'types': d({}),
                    'namespaces': d({
                        "TU": {
                            'types': d({}),
                            'namespaces': d({
                                "array": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "boolean": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({}),
                                        },
                                    }),
                                },
                                "computed": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "dictionary": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "group": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "D": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "G": {
                                                    'types': d({}),
                                                    'namespaces': d({
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
                                "null": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({}),
                                        },
                                    }),
                                },
                                "number": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({}),
                                        },
                                    }),
                                },
                                "optional": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "reference": {
                                    'types': d({}),
                                    'namespaces': d({}),
                                },
                                "string": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({}),
                                        },
                                    }),
                                },
                                "taggedUnion": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "D": {
                                            'types': d({}),
                                            'namespaces': d({}),
                                        },
                                    }),
                                },
                            }),
                        },
                    }),
                },
                "TypeParameters": {
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
        'asynchronous': {
            'interfaces': d({}),
            'algorithms': d({}),
        },
        'synchronous': {
            'interfaces': d({}),
            'algorithms': d({}),
        },
    },
}