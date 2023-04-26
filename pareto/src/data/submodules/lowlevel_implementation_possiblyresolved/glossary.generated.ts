import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "typesystem": {
            'arguments': d({
                "Annotation": ['glossary parameter', "Annotation"]
            }),
        },
    }),
    'root': {
        'types': d({
            "Address Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "content": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "tail": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Address Selection Tail",
                                    'tail': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                            "variable": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                    },
                                    "constraint": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "Variables",
                                            'tail': a([
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
                        })],
                    },
                    "result": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                'glossary': {
                                    'annotation': {
                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                        'line': 204,
                                        'column': 57,
                                    },
                                    'key': "typesystem",
                                },
                            }],
                            'type': "Type",
                            'tail': a([]),
                            'arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Address Selection Tail": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "content": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "content": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "step": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                            "call": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "annotation": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                                },
                                                "constraints": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "address function": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                                                    'glossary': {
                                                                        'annotation': {
                                                                            'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                            'line': 163,
                                                                            'column': 138,
                                                                        },
                                                                        'key': "typesystem",
                                                                    },
                                                                }],
                                                                'type': "Type",
                                                                'tail': a([
                                                                    "address function",
                                                                ]),
                                                                'arguments': d({}),
                                                            }]]],
                                                        },
                                                    })],
                                                },
                                                "content": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "arguments": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "annotation": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                                                },
                                                                "constraints": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                                        "parameter": {
                                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                                                                    'glossary': {
                                                                                        'annotation': {
                                                                                            'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                                            'line': 174,
                                                                                            'column': 134,
                                                                                        },
                                                                                        'key': "typesystem",
                                                                                    },
                                                                                }],
                                                                                'type': "Parameters",
                                                                                'tail': a([
                                                                                    "D",
                                                                                ]),
                                                                                'arguments': d({}),
                                                                            }]]],
                                                                        },
                                                                    })],
                                                                },
                                                                "content": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                                        'type': "Expression",
                                                                        'tail': a([]),
                                                                        'arguments': d({}),
                                                                    }]],
                                                                },
                                                            })]],
                                                        },
                                                        "type arguments": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                                'type': "Type Arguments",
                                                                'tail': a([]),
                                                                'arguments': d({}),
                                                            }]],
                                                        },
                                                    })],
                                                },
                                            })],
                                            "property": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "annotation": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                                },
                                                "constraints": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "group": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                                                    'glossary': {
                                                                        'annotation': {
                                                                            'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                            'line': 182,
                                                                            'column': 116,
                                                                        },
                                                                        'key': "typesystem",
                                                                    },
                                                                }],
                                                                'type': "Type",
                                                                'tail': a([
                                                                    "group",
                                                                ]),
                                                                'arguments': d({}),
                                                            }]]],
                                                        },
                                                    })],
                                                },
                                                "content": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "annotation": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                                        },
                                                        "constraint": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                                                    'glossary': {
                                                                        'annotation': {
                                                                            'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                            'line': 183,
                                                                            'column': 113,
                                                                        },
                                                                        'key': "typesystem",
                                                                    },
                                                                }],
                                                                'type': "Type",
                                                                'tail': a([
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
                                                    })],
                                                },
                                            })],
                                        })],
                                    },
                                    "tail": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "Address Selection Tail",
                                            'tail': a([]),
                                            'arguments': d({}),
                                        }]],
                                    },
                                })]],
                            },
                            "result": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                        'glossary': {
                                            'annotation': {
                                                'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                'line': 187,
                                                'column': 59,
                                            },
                                            'key': "typesystem",
                                        },
                                    }],
                                    'type': "Type",
                                    'tail': a([]),
                                    'arguments': d({}),
                                }]]],
                            },
                        })],
                    },
                    "result": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                'glossary': {
                                    'annotation': {
                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                        'line': 189,
                                        'column': 57,
                                    },
                                    'key': "typesystem",
                                },
                            }],
                            'type': "Type",
                            'tail': a([]),
                            'arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Expression": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "string": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "annotation": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                        },
                        "constraints": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "out": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                            'glossary': {
                                                'annotation': {
                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                    'line': 309,
                                                    'column': 96,
                                                },
                                                'key': "typesystem",
                                            },
                                        }],
                                        'type': "Type",
                                        'tail': a([
                                            "string",
                                        ]),
                                        'arguments': d({}),
                                    }]]],
                                },
                            })],
                        },
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "String Expression",
                                'tail': a([]),
                                'arguments': d({}),
                            }]],
                        },
                    })],
                })]
            },
            "String Expression": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "string literal": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                })]
            },
            "Type Arguments": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "annotation": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                    },
                    "constraints": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "x": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                        'glossary': {
                                            'annotation': {
                                                'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                'line': 621,
                                                'column': 91,
                                            },
                                            'key': "typesystem",
                                        },
                                    }],
                                    'type': "Type Parameters",
                                    'tail': a([
                                        "D",
                                    ]),
                                    'arguments': d({}),
                                }]]],
                            },
                        })],
                    },
                    "content": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "type": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Type Selection",
                                    'tail': a([]),
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                    },
                })]]
            },
            "Type Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "content": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "referenced type": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                    },
                                    "constraint": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                                'glossary': {
                                                    'annotation': {
                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                        'line': 647,
                                                        'column': 110,
                                                    },
                                                    'key': "typesystem",
                                                },
                                            }],
                                            'type': "Namespace",
                                            'tail': a([
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
                            "type of referenced type": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "content": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                            "namespace": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "annotation": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                                },
                                                "constraints": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "referenced namespace": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                                                    'glossary': {
                                                                        'annotation': {
                                                                            'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                            'line': 652,
                                                                            'column': 146,
                                                                        },
                                                                        'key': "typesystem",
                                                                    },
                                                                }],
                                                                'type': "Namespace",
                                                                'tail': a([
                                                                    "D",
                                                                    "type",
                                                                    "namespace",
                                                                ]),
                                                                'arguments': d({}),
                                                            }]]],
                                                        },
                                                    })],
                                                },
                                                "content": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                        'type': "Type Selection",
                                                        'tail': a([]),
                                                        'arguments': d({}),
                                                    }]],
                                                },
                                            })],
                                            "type definition": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "annotation": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                                },
                                                "constraints": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "referenced type definition": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                                                    'glossary': {
                                                                        'annotation': {
                                                                            'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                            'line': 661,
                                                                            'column': 158,
                                                                        },
                                                                        'key': "typesystem",
                                                                    },
                                                                }],
                                                                'type': "Namespace",
                                                                'tail': a([
                                                                    "D",
                                                                    "type",
                                                                    "type definition",
                                                                ]),
                                                                'arguments': d({}),
                                                            }]]],
                                                        },
                                                    })],
                                                },
                                                "content": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "result": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                                                    'glossary': {
                                                                        'annotation': {
                                                                            'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                            'line': 663,
                                                                            'column': 78,
                                                                        },
                                                                        'key': "typesystem",
                                                                    },
                                                                }],
                                                                'type': "Type",
                                                                'tail': a([]),
                                                                'arguments': d({}),
                                                            }]]],
                                                        },
                                                    })],
                                                },
                                            })],
                                        })],
                                    },
                                    "result": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                                'glossary': {
                                                    'annotation': {
                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                        'line': 648,
                                                        'column': 94,
                                                    },
                                                    'key': "typesystem",
                                                },
                                            }],
                                            'type': "Type",
                                            'tail': a([]),
                                            'arguments': d({}),
                                        }]]],
                                    },
                                })],
                            },
                        })],
                    },
                    "result": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                'glossary': {
                                    'annotation': {
                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                        'line': 677,
                                        'column': 57,
                                    },
                                    'key': "typesystem",
                                },
                            }],
                            'type': "Type",
                            'tail': a([]),
                            'arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Type Selection Tail": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "content": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "content": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "tail": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "Type Selection Tail",
                                            'tail': a([]),
                                            'arguments': d({}),
                                        }]],
                                    },
                                })]],
                            },
                            "result": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                        'glossary': {
                                            'annotation': {
                                                'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                'line': 640,
                                                'column': 59,
                                            },
                                            'key': "typesystem",
                                        },
                                    }],
                                    'type': "Type",
                                    'tail': a([]),
                                    'arguments': d({}),
                                }]]],
                            },
                        })],
                    },
                    "result": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                'glossary': {
                                    'annotation': {
                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                        'line': 641,
                                        'column': 57,
                                    },
                                    'key': "typesystem",
                                },
                            }],
                            'type': "Type",
                            'tail': a([]),
                            'arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Variables": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "type": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "content": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "local": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "initializer": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "Expression",
                                                'tail': a([]),
                                                'arguments': d({}),
                                            }]],
                                        },
                                        "type": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "annotation": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                                },
                                                "constraint": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                                            'glossary': {
                                                                'annotation': {
                                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                    'line': 692,
                                                                    'column': 107,
                                                                },
                                                                'key': "typesystem",
                                                            },
                                                        }],
                                                        'type': "Namespace",
                                                        'tail': a([
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
                                    })],
                                    "parameter": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "parameter": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "annotation": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                                },
                                                "constraint": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                                            'glossary': {
                                                                'annotation': {
                                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                    'line': 688,
                                                                    'column': 113,
                                                                },
                                                                'key': "typesystem",
                                                            },
                                                        }],
                                                        'type': "Parameters",
                                                        'tail': a([
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
                                    })],
                                    "stack": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                })],
                            },
                            "result": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                        'glossary': {
                                            'annotation': {
                                                'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                'line': 686,
                                                'column': 75,
                                            },
                                            'key': "typesystem",
                                        },
                                    }],
                                    'type': "Type",
                                    'tail': a([]),
                                    'arguments': d({}),
                                }]]],
                            },
                        })],
                    },
                })]]
            },
        }),
        'namespaces': d({
            "Address Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "tail": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "variable": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Address Selection Tail": {
                'types': d({}),
                'namespaces': d({
                    "O": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({
                                    "step": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "TU": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "call": {
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
                                                                    "type arguments": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                    "property": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "tail": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Expression": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "string": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "String Expression": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "string literal": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Type Arguments": {
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
            "Type Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "referenced type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "type of referenced type": {
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
            "Type Selection Tail": {
                'types': d({}),
                'namespaces': d({
                    "O": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({
                                    "tail": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Variables": {
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
                                                    "local": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "initializer": {
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
                                                    "parameter": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "parameter": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                    "stack": {
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