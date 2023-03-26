import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({}),
    'types': d({
        "AsynchronousInterface": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "choice": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "options": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "AsynchronousInterface",
                            'arguments': d({}),
                        }]]],
                    },
                })],
                "method": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "data": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "DataSpecifier",
                            'arguments': d({}),
                        }]]],
                    },
                    "interface": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "AsynchronousInterface",
                            'arguments': d({}),
                        }]]],
                    },
                })],
                "reference": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "AsynchronousInterfaceReference",
                    'arguments': d({}),
                }]],
                "streamconsumer": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "data": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "AsynchronousInterface",
                            'arguments': d({}),
                        }]],
                    },
                    "end": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "AsynchronousInterface",
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
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "DataSpecifier",
                        'arguments': d({}),
                    }]]],
                },
                "context": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Context",
                        'arguments': d({}),
                    }]],
                },
                "interface": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                },
            })]
        },
        "Context": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "import": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "glossary": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                            },
                            "key": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                            },
                        })],
                    },
                })],
                "local": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
            })]
        },
        "DataOrSynchronousInterface": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "data": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "DataSpecifier",
                    'arguments': d({}),
                }]],
                "interface": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "SynchronousInterfaceReference",
                    'arguments': d({}),
                }]],
            })]
        },
        "DataSpecifier": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "glossary parameter": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                "type": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "arguments": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "DataSpecifier",
                            'arguments': d({}),
                        }]]],
                    },
                    "context": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Context",
                            'arguments': d({}),
                        }]],
                    },
                    "type": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                    },
                })],
                "type parameter": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
            })]
        },
        "Glossary": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                "asynchronous": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "algorithms": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "parameters": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "TypeParameters",
                                        'arguments': d({}),
                                    }]],
                                },
                                "type": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "constructor": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "downstreams": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "AsynchronousInterfaceReference",
                                                    'arguments': d({}),
                                                }]]],
                                            },
                                            "interface": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "AsynchronousInterfaceReference",
                                                    'arguments': d({}),
                                                }]],
                                            },
                                        })],
                                        "function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "in": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "DataSpecifier",
                                                    'arguments': d({}),
                                                }]],
                                            },
                                            "out": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "DataSpecifier",
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
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "AsynchronousInterface",
                                        'arguments': d({}),
                                    }]],
                                },
                                "parameters": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "TypeParameters",
                                        'arguments': d({}),
                                    }]],
                                },
                            })]],
                        },
                    })],
                },
                "imports": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "arguments": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "DataSpecifier",
                                'arguments': d({}),
                            }]]],
                        },
                    })]],
                },
                "parameters": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                },
                "synchronous": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "algorithms": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "parameters": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "TypeParameters",
                                        'arguments': d({}),
                                    }]],
                                },
                                "type": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "in": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "DataOrSynchronousInterface",
                                                    'arguments': d({}),
                                                }]],
                                            },
                                            "out": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "DataSpecifier",
                                                    'arguments': d({}),
                                                }]],
                                            },
                                        })],
                                        "procedure": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "in": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "DataOrSynchronousInterface",
                                                    'arguments': d({}),
                                                }]],
                                            },
                                            "out": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "SynchronousInterfaceReference",
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
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "SynchronousInterface",
                                        'arguments': d({}),
                                    }]],
                                },
                                "parameters": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "TypeParameters",
                                        'arguments': d({}),
                                    }]],
                                },
                            })]],
                        },
                    })],
                },
                "types": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "parameters": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "TypeParameters",
                                'arguments': d({}),
                            }]],
                        },
                        "type": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Type",
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
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "SynchronousInterface",
                            'arguments': d({}),
                        }]]],
                    },
                })],
                "method": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "data": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "DataSpecifier",
                            'arguments': d({}),
                        }]]],
                    },
                    "interface": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "SynchronousInterface",
                            'arguments': d({}),
                        }]]],
                    },
                })],
                "reference": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "SynchronousInterfaceReference",
                    'arguments': d({}),
                }]],
            })]
        },
        "SynchronousInterfaceReference": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                "arguments": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "DataSpecifier",
                        'arguments': d({}),
                    }]]],
                },
                "context": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Context",
                        'arguments': d({}),
                    }]],
                },
                "interface": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                },
            })]
        },
        "Type": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "array": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]],
                "boolean": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                "computed": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]],
                "dictionary": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]],
                "group": <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "type": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Type",
                            'arguments': d({}),
                        }]],
                    },
                })]],
                "nested": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]],
                "null": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                "number": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                "optional": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]],
                "reference": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "DataSpecifier",
                    'arguments': d({}),
                }]],
                "string": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                "taggedUnion": <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]]],
            })]
        },
        "TypeParameters": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]]
        },
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}