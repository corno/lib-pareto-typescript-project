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
                "Namespace": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "type": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "namespace": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'typeXX': "Namespace",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                                "type definition": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "parameters": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'typeXX': "Type Parameters",
                                            'tailXX': a([]),
                                            'arguments': d({}),
                                        }]],
                                    },
                                    "type": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'typeXX': "Type",
                                            'tailXX': a([]),
                                            'arguments': d({}),
                                        }]],
                                    },
                                })],
                            })],
                        },
                    })]]
                },
                "Parameters": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "type": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'typeXX': "Type",
                                'tailXX': a([]),
                                'arguments': d({}),
                            }]],
                        },
                    })]]
                },
                "SourceFile": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "root": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'typeXX': "Namespace",
                                'tailXX': a([]),
                                'arguments': d({}),
                            }]],
                        },
                    })]
                },
                "Type": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "address function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "parameters": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'typeXX': "Parameters",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                            "return type": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'typeXX': "Type",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                            "type parameters": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'typeXX': "Type Parameters",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                        "array": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]],
                        "boolean": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "group": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "properties": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "type": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'typeXX': "Type",
                                            'tailXX': a([]),
                                            'arguments': d({}),
                                        }]],
                                    },
                                })]],
                            },
                        })],
                        "null": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "number": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "optional": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]],
                        "procedure": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "parameters": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'typeXX': "Parameters",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                            "type parameters": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'typeXX': "Type Parameters",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                        "reference": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "path": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                    },
                                    "constraint": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'typeXX': "Type",
                                            'tailXX': a([
                                                "group",
                                                "properties",
                                                "D",
                                            ]),
                                            'arguments': d({}),
                                        }]]],
                                    },
                                    "key": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })]],
                            },
                        })],
                        "string": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "tagged union": <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'arguments': d({}),
                        }]]],
                        "value function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "parameters": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'typeXX': "Parameters",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                            "return type": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'typeXX': "Type",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                            "type parameters": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'typeXX': "Type Parameters",
                                    'tailXX': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                    })]
                },
                "Type Parameters": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'typeXX': "Type",
                        'tailXX': a([]),
                        'arguments': d({}),
                    }]]]
                },
                "Type Path": {
                    'parameters': d({}),
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "namespaces": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "constraint": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'typeXX': "Namespace",
                                        'tailXX': a([
                                            "D",
                                        ]),
                                        'arguments': d({}),
                                    }]]],
                                },
                                "key": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                },
                            })]],
                        },
                        "parameters": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'typeXX': "Type",
                                'tailXX': a([]),
                                'arguments': d({}),
                            }]]],
                        },
                        "type": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "constraint": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'typeXX': "Namespace",
                                        'tailXX': a([
                                            "D",
                                        ]),
                                        'arguments': d({}),
                                    }]]],
                                },
                                "key": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                },
                            })],
                        },
                    })]
                },
            }),
            'namespaces': d({
                "Namespace": {
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
                                            'namespaces': d({
                                                "TU": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "namespace": {
                                                            'types': d({}),
                                                            'namespaces': d({}),
                                                        },
                                                        "type definition": {
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
                            }),
                        },
                    }),
                },
                "Parameters": {
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
                "SourceFile": {
                    'types': d({}),
                    'namespaces': d({
                        "G": {
                            'types': d({}),
                            'namespaces': d({
                                "root": {
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
                                "address function": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "parameters": {
                                                    'types': d({}),
                                                    'namespaces': d({}),
                                                },
                                                "return type": {
                                                    'types': d({}),
                                                    'namespaces': d({}),
                                                },
                                                "type parameters": {
                                                    'types': d({}),
                                                    'namespaces': d({}),
                                                },
                                            }),
                                        },
                                    }),
                                },
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
                                "group": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "properties": {
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
                                "procedure": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "parameters": {
                                                    'types': d({}),
                                                    'namespaces': d({}),
                                                },
                                                "type parameters": {
                                                    'types': d({}),
                                                    'namespaces': d({}),
                                                },
                                            }),
                                        },
                                    }),
                                },
                                "reference": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "path": {
                                                    'types': d({}),
                                                    'namespaces': d({
                                                        "A": {
                                                            'types': d({}),
                                                            'namespaces': d({}),
                                                        },
                                                    }),
                                                },
                                            }),
                                        },
                                    }),
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
                                "tagged union": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "D": {
                                            'types': d({}),
                                            'namespaces': d({}),
                                        },
                                    }),
                                },
                                "value function": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "G": {
                                            'types': d({}),
                                            'namespaces': d({
                                                "parameters": {
                                                    'types': d({}),
                                                    'namespaces': d({}),
                                                },
                                                "return type": {
                                                    'types': d({}),
                                                    'namespaces': d({}),
                                                },
                                                "type parameters": {
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
                "Type Parameters": {
                    'types': d({}),
                    'namespaces': d({
                        "D": {
                            'types': d({}),
                            'namespaces': d({}),
                        },
                    }),
                },
                "Type Path": {
                    'types': d({}),
                    'namespaces': d({
                        "G": {
                            'types': d({}),
                            'namespaces': d({
                                "namespaces": {
                                    'types': d({}),
                                    'namespaces': d({
                                        "A": {
                                            'types': d({}),
                                            'namespaces': d({}),
                                        },
                                    }),
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