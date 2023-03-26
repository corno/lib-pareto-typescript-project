import * as pd from 'pareto-core-data'

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({}),
    'types': d({
        "AsynchronousInterface": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "choice": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "options": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "AsynchronousInterface",
                            'arguments': d({}),
                        }]]],
                    },
                })],
                "method": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "data": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "DataSpecifier",
                            'arguments': d({}),
                        }]]],
                    },
                    "interface": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "AsynchronousInterface",
                            'arguments': d({}),
                        }]]],
                    },
                })],
                "reference": <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "AsynchronousInterfaceReference",
                    'arguments': d({}),
                }]],
                "streamconsumer": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "data": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "AsynchronousInterface",
                            'arguments': d({}),
                        }]],
                    },
                    "end": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "AsynchronousInterface",
                            'arguments': d({}),
                        }]],
                    },
                })],
            })]
        },
        "AsynchronousInterfaceReference": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "arguments": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "DataSpecifier",
                        'arguments': d({}),
                    }]]],
                },
                "context": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Context",
                        'arguments': d({}),
                    }]],
                },
                "interface": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                },
            })]
        },
        "Context": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "import": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "glossary": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "annotation": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                            },
                            "key": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                            },
                        })],
                    },
                })],
                "local": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
            })]
        },
        "DataOrSynchronousInterface": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "data": <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "DataSpecifier",
                    'arguments': d({}),
                }]],
                "interface": <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "SynchronousInterfaceReference",
                    'arguments': d({}),
                }]],
            })]
        },
        "DataSpecifier": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "glossary parameter": <gglossary.T.Type<pd.SourceLocation>>['string', null],
                "type": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "arguments": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "DataSpecifier",
                            'arguments': d({}),
                        }]]],
                    },
                    "context": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Context",
                            'arguments': d({}),
                        }]],
                    },
                    "type": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                    },
                })],
                "type parameter": <gglossary.T.Type<pd.SourceLocation>>['string', null],
            })]
        },
        "Glossary": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "asynchronous": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "algorithms": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "parameters": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "TypeParameters",
                                        'arguments': d({}),
                                    }]],
                                },
                                "type": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "constructor": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "downstreams": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "AsynchronousInterfaceReference",
                                                    'arguments': d({}),
                                                }]]],
                                            },
                                            "interface": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "AsynchronousInterfaceReference",
                                                    'arguments': d({}),
                                                }]],
                                            },
                                        })],
                                        "function": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "in": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "DataSpecifier",
                                                    'arguments': d({}),
                                                }]],
                                            },
                                            "out": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "interface": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "AsynchronousInterface",
                                        'arguments': d({}),
                                    }]],
                                },
                                "parameters": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "TypeParameters",
                                        'arguments': d({}),
                                    }]],
                                },
                            })]],
                        },
                    })],
                },
                "imports": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "arguments": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "DataSpecifier",
                                'arguments': d({}),
                            }]]],
                        },
                    })]],
                },
                "parameters": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                },
                "synchronous": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "algorithms": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "parameters": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "TypeParameters",
                                        'arguments': d({}),
                                    }]],
                                },
                                "type": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "function": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "in": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "DataOrSynchronousInterface",
                                                    'arguments': d({}),
                                                }]],
                                            },
                                            "out": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "DataSpecifier",
                                                    'arguments': d({}),
                                                }]],
                                            },
                                        })],
                                        "procedure": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "in": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                                    'type': "DataOrSynchronousInterface",
                                                    'arguments': d({}),
                                                }]],
                                            },
                                            "out": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "interface": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "SynchronousInterface",
                                        'arguments': d({}),
                                    }]],
                                },
                                "parameters": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "TypeParameters",
                                        'arguments': d({}),
                                    }]],
                                },
                            })]],
                        },
                    })],
                },
                "types": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "parameters": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "TypeParameters",
                                'arguments': d({}),
                            }]],
                        },
                        "type": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "group": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "members": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "SynchronousInterface",
                            'arguments': d({}),
                        }]]],
                    },
                })],
                "method": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "data": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "DataSpecifier",
                            'arguments': d({}),
                        }]]],
                    },
                    "interface": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "SynchronousInterface",
                            'arguments': d({}),
                        }]]],
                    },
                })],
                "reference": <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "SynchronousInterfaceReference",
                    'arguments': d({}),
                }]],
            })]
        },
        "SynchronousInterfaceReference": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "arguments": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "DataSpecifier",
                        'arguments': d({}),
                    }]]],
                },
                "context": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Context",
                        'arguments': d({}),
                    }]],
                },
                "interface": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                },
            })]
        },
        "Type": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "array": <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]],
                "boolean": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                "computed": <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]],
                "dictionary": <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]],
                "group": <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "type": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Type",
                            'arguments': d({}),
                        }]],
                    },
                })]],
                "nested": <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]],
                "null": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                "number": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                "optional": <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]],
                "reference": <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "DataSpecifier",
                    'arguments': d({}),
                }]],
                "string": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                "taggedUnion": <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]]],
            })]
        },
        "TypeParameters": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]]
        },
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),
    },
}