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
            "A dictionary with constraint": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "constrained dict": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                            },
                            "constraints": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "a constraint": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "A dictionary with constraint",
                                            'tail': a([
                                                "dict",
                                                "D",
                                            ]),
                                            'arguments': d({}),
                                        }]]],
                                    },
                                })],
                            },
                            "content": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                            },
                        })]],
                    },
                    "dict": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                    },
                })]
            },
            "A optional with result": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "opt": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "content": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "rslt": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "A Result",
                                            'tail': a([]),
                                            'arguments': d({}),
                                        }]],
                                    },
                                })]],
                            },
                            "result": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "A Result",
                                    'tail': a([]),
                                    'arguments': d({}),
                                }]]],
                            },
                        })],
                    },
                })]
            },
            "A Result": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "foo": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                    },
                })]
            },
            "A tagged union with constrained option": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "tu1": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "a": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "bar": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                },
                            })],
                        })],
                    },
                    "tu2": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "a": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                },
                                "constraints": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "opt constraint": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "A tagged union with constrained option",
                                                'tail': a([
                                                    "tu1",
                                                    "a",
                                                ]),
                                                'arguments': d({}),
                                            }]]],
                                        },
                                    })],
                                },
                                "content": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "rslt": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "A Result",
                                                'tail': a([]),
                                                'arguments': d({}),
                                            }]],
                                        },
                                    })],
                                },
                            })],
                        })],
                    },
                })]
            },
            "A tagged union with constrained option and result": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "tu1": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "a": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "bar": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                },
                            })],
                        })],
                    },
                    "tu2": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "content": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "a": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "annotation": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameter', "Annotation"]],
                                        },
                                        "constraints": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "opt constraint": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                        'type': "A tagged union with constrained option",
                                                        'tail': a([
                                                            "tu1",
                                                            "a",
                                                        ]),
                                                        'arguments': d({}),
                                                    }]]],
                                                },
                                            })],
                                        },
                                        "content": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "rslt": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                        'type': "A Result",
                                                        'tail': a([]),
                                                        'arguments': d({}),
                                                    }]],
                                                },
                                            })],
                                        },
                                    })],
                                })],
                            },
                            "result": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "A Result",
                                    'tail': a([]),
                                    'arguments': d({}),
                                }]]],
                            },
                        })],
                    },
                })]
            },
            "A tagged union with result": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "tu": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "content": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "a": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "rslt": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "A Result",
                                                'tail': a([]),
                                                'arguments': d({}),
                                            }]],
                                        },
                                    })],
                                })],
                            },
                            "result": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "A Result",
                                    'tail': a([]),
                                    'arguments': d({}),
                                }]]],
                            },
                        })],
                    },
                })]
            },
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
                                        'line': 74,
                                        'column': 44,
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
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "content": {
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
                                                                                    'line': 293,
                                                                                    'column': 142,
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
                                                                                                    'line': 304,
                                                                                                    'column': 141,
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
                                                                                    'line': 313,
                                                                                    'column': 124,
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
                                                                                    'line': 315,
                                                                                    'column': 121,
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
                                            "result": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                                        'glossary': {
                                                            'annotation': {
                                                                'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                'line': 291,
                                                                'column': 83,
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
                                                'line': 325,
                                                'column': 63,
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
                                        'line': 67,
                                        'column': 44,
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
                                                    'line': 438,
                                                    'column': 109,
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
                                                'line': 743,
                                                'column': 95,
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
                                                        'line': 767,
                                                        'column': 114,
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
                                                                            'line': 772,
                                                                            'column': 173,
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
                                                                            'line': 781,
                                                                            'column': 185,
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
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
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
                                                        'line': 768,
                                                        'column': 98,
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
                                        'line': 93,
                                        'column': 44,
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
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "Type Selection",
                                                'tail': a([]),
                                                'arguments': d({}),
                                            }]],
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
                                                                    'line': 803,
                                                                    'column': 117,
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
                                    "variable stack2": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
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
                                })],
                            },
                            "result": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                                        'glossary': {
                                            'annotation': {
                                                'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                'line': 801,
                                                'column': 79,
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
            "A dictionary with constraint": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "constrained dict": {
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
                            "dict": {
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
            "A optional with result": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "opt": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "rslt": {
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
            "A Result": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "foo": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "A tagged union with constrained option": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "tu1": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "a": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "bar": {
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
                            "tu2": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "a": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "rslt": {
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
            "A tagged union with constrained option and result": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "tu1": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "a": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "bar": {
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
                            "tu2": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "a": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "rslt": {
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
            "A tagged union with result": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "tu": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "a": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "rslt": {
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
                                                    "variable stack2": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "variable": {
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
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}