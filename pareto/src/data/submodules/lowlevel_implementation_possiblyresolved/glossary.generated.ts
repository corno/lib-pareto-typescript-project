import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "typesystem": null,
    }),
    'glossary parameters': d({
        "Annotation": null,
    }),
    'root': {
        'types': d({
            "A dictionary with constraint": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "constrained dict": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "constraints": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "a constraint": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': ['local', null],
                                            'typeXX': "A dictionary with constraint",
                                            'tailXX': a([
                                                "dict",
                                                "D",
                                            ]),
                                            'type arguments': d({}),
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
                                            'context': ['local', null],
                                            'typeXX': "A Result",
                                            'tailXX': a([]),
                                            'type arguments': d({}),
                                        }]],
                                    },
                                })]],
                            },
                            "result": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "A Result",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
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
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "constraints": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "opt constraint": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "A tagged union with constrained option",
                                                'tailXX': a([
                                                    "tu1",
                                                    "a",
                                                ]),
                                                'type arguments': d({}),
                                            }]]],
                                        },
                                    })],
                                },
                                "content": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "rslt": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "A Result",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
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
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                        },
                                        "constraints": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "opt constraint": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                        'context': ['local', null],
                                                        'typeXX': "A tagged union with constrained option",
                                                        'tailXX': a([
                                                            "tu1",
                                                            "a",
                                                        ]),
                                                        'type arguments': d({}),
                                                    }]]],
                                                },
                                            })],
                                        },
                                        "content": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "rslt": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                        'context': ['local', null],
                                                        'typeXX': "A Result",
                                                        'tailXX': a([]),
                                                        'type arguments': d({}),
                                                    }]],
                                                },
                                            })],
                                        },
                                    })],
                                })],
                            },
                            "result": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "A Result",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
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
                                                'context': ['local', null],
                                                'typeXX': "A Result",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })],
                                })],
                            },
                            "result": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "A Result",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
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
                                    'context': ['local', null],
                                    'typeXX': "Address Selection Tail",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                            },
                            "variable": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                    },
                                    "constraint": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': ['local', null],
                                            'typeXX': "Variables",
                                            'tailXX': a([
                                                "D",
                                            ]),
                                            'type arguments': d({}),
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
                            'context': ['import', {
                                'glossary': {
                                    'glossary':{
                                        'annotation': {
                                            'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                            'line': 91,
                                            'column': 52,
                                        },
                                        'key': "typesystem",
                                    },
                                    'glossary arguments': d({
                                        "Annotation": ['glossary parameterXX', "Annotation"]
                                    }),
                                },
                            }],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'type arguments': d({}),
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
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                                        },
                                                        "constraints": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "address function": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                        'context': ['import', {
                                                                            'glossary': {
                                                                                'glossary':{
                                                                                    'annotation': {
                                                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                                        'line': 367,
                                                                                        'column': 150,
                                                                                    },
                                                                                    'key': "typesystem",
                                                                                },
                                                                                'glossary arguments': d({
                                                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                                                }),
                                                                            },
                                                                        }],
                                                                        'typeXX': "Type",
                                                                        'tailXX': a([
                                                                            "address function",
                                                                        ]),
                                                                        'type arguments': d({}),
                                                                    }]]],
                                                                },
                                                            })],
                                                        },
                                                        "content": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "arguments": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                                        "annotation": {
                                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                                                        },
                                                                        "constraints": {
                                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                                                "parameter": {
                                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                                        'context': ['import', {
                                                                                            'glossary': {
                                                                                                'glossary':{
                                                                                                    'annotation': {
                                                                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                                                        'line': 378,
                                                                                                        'column': 173,
                                                                                                    },
                                                                                                    'key': "typesystem",
                                                                                                },
                                                                                                'glossary arguments': d({
                                                                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                                                                }),
                                                                                            },
                                                                                        }],
                                                                                        'typeXX': "Function Declaration",
                                                                                        'tailXX': a([
                                                                                            "parameters",
                                                                                            "D",
                                                                                        ]),
                                                                                        'type arguments': d({}),
                                                                                    }]]],
                                                                                },
                                                                            })],
                                                                        },
                                                                        "content": {
                                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                                'context': ['local', null],
                                                                                'typeXX': "Expression",
                                                                                'tailXX': a([]),
                                                                                'type arguments': d({}),
                                                                            }]],
                                                                        },
                                                                    })]],
                                                                },
                                                                "type arguments": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                        'context': ['local', null],
                                                                        'typeXX': "Type Arguments",
                                                                        'tailXX': a([]),
                                                                        'type arguments': d({}),
                                                                    }]],
                                                                },
                                                            })],
                                                        },
                                                    })],
                                                    "property": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "annotation": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                                        },
                                                        "constraints": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "group": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                        'context': ['import', {
                                                                            'glossary': {
                                                                                'glossary':{
                                                                                    'annotation': {
                                                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                                        'line': 387,
                                                                                        'column': 132,
                                                                                    },
                                                                                    'key': "typesystem",
                                                                                },
                                                                                'glossary arguments': d({
                                                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                                                }),
                                                                            },
                                                                        }],
                                                                        'typeXX': "Type",
                                                                        'tailXX': a([
                                                                            "group",
                                                                        ]),
                                                                        'type arguments': d({}),
                                                                    }]]],
                                                                },
                                                            })],
                                                        },
                                                        "content": {
                                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "annotation": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                                                },
                                                                "constraint": {
                                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                                        'context': ['import', {
                                                                            'glossary': {
                                                                                'glossary':{
                                                                                    'annotation': {
                                                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                                        'line': 389,
                                                                                        'column': 129,
                                                                                    },
                                                                                    'key': "typesystem",
                                                                                },
                                                                                'glossary arguments': d({
                                                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                                                }),
                                                                            },
                                                                        }],
                                                                        'typeXX': "Type",
                                                                        'tailXX': a([
                                                                            "group",
                                                                            "properties",
                                                                            "D",
                                                                        ]),
                                                                        'type arguments': d({}),
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
                                                    'context': ['import', {
                                                        'glossary': {
                                                            'glossary':{
                                                                'annotation': {
                                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                    'line': 365,
                                                                    'column': 91,
                                                                },
                                                                'key': "typesystem",
                                                            },
                                                            'glossary arguments': d({
                                                                "Annotation": ['glossary parameterXX', "Annotation"]
                                                            }),
                                                        },
                                                    }],
                                                    'typeXX': "Type",
                                                    'tailXX': a([]),
                                                    'type arguments': d({}),
                                                }]]],
                                            },
                                        })],
                                    },
                                    "tail": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': ['local', null],
                                            'typeXX': "Address Selection Tail",
                                            'tailXX': a([]),
                                            'type arguments': d({}),
                                        }]],
                                    },
                                })]],
                            },
                            "result": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['import', {
                                        'glossary': {
                                            'glossary':{
                                                'annotation': {
                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                    'line': 399,
                                                    'column': 71,
                                                },
                                                'key': "typesystem",
                                            },
                                            'glossary arguments': d({
                                                "Annotation": ['glossary parameterXX', "Annotation"]
                                            }),
                                        },
                                    }],
                                    'typeXX': "Type",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]]],
                            },
                        })],
                    },
                    "result": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['import', {
                                'glossary': {
                                    'glossary':{
                                        'annotation': {
                                            'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                            'line': 84,
                                            'column': 52,
                                        },
                                        'key': "typesystem",
                                    },
                                    'glossary arguments': d({
                                        "Annotation": ['glossary parameterXX', "Annotation"]
                                    }),
                                },
                            }],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Assign": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "right hand side": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Expression",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "target": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Address Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Block": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "statements": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Statements",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "variables": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Variables",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Boolean Expression": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "and": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "false": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "greater than": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "less than": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "not": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Boolean Expression Or Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "number equals": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "number not equals": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "or": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "string equals": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "String Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "String Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "string not equals": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "String Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "String Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "true": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                })]
            },
            "Boolean Expression Or Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "expression": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Boolean Expression",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "selection": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "cast to boolean": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "boolean": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                    },
                                    "constraints": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "boolean": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': ['import', {
                                                        'glossary': {
                                                            'glossary':{
                                                                'annotation': {
                                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                    'line': 356,
                                                                    'column': 141,
                                                                },
                                                                'key': "typesystem",
                                                            },
                                                            'glossary arguments': d({
                                                                "Annotation": ['glossary parameterXX', "Annotation"]
                                                            }),
                                                        },
                                                    }],
                                                    'typeXX': "Type",
                                                    'tailXX': a([
                                                        "boolean",
                                                    ]),
                                                    'type arguments': d({}),
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
                        "selection": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Address Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                })]
            },
            "Expression": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "array literal": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "annotation": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "constraints": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "out": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['import', {
                                            'glossary': {
                                                'glossary':{
                                                    'annotation': {
                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                        'line': 418,
                                                        'column': 116,
                                                    },
                                                    'key': "typesystem",
                                                },
                                                'glossary arguments': d({
                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                }),
                                            },
                                        }],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "array",
                                        ]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                        },
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Expression",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]]],
                        },
                    })],
                    "boolean": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "annotation": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "constraints": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "out": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['import', {
                                            'glossary': {
                                                'glossary':{
                                                    'annotation': {
                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                        'line': 500,
                                                        'column': 118,
                                                    },
                                                    'key': "typesystem",
                                                },
                                                'glossary arguments': d({
                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                }),
                                            },
                                        }],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "boolean",
                                        ]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                        },
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Expression",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "null": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "annotation": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "constraints": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "out": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['import', {
                                            'glossary': {
                                                'glossary':{
                                                    'annotation': {
                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                        'line': 543,
                                                        'column': 115,
                                                    },
                                                    'key': "typesystem",
                                                },
                                                'glossary arguments': d({
                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                }),
                                            },
                                        }],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "null",
                                        ]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                        },
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        },
                    })],
                    "numerical": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "annotation": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "constraints": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "out": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['import', {
                                            'glossary': {
                                                'glossary':{
                                                    'annotation': {
                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                        'line': 507,
                                                        'column': 117,
                                                    },
                                                    'key': "typesystem",
                                                },
                                                'glossary arguments': d({
                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                }),
                                            },
                                        }],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "number",
                                        ]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                        },
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "object literal": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "annotation": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "constraints": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "out": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['import', {
                                            'glossary': {
                                                'glossary':{
                                                    'annotation': {
                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                        'line': 426,
                                                        'column': 116,
                                                    },
                                                    'key': "typesystem",
                                                },
                                                'glossary arguments': d({
                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                }),
                                            },
                                        }],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "group",
                                        ]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                        },
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "properties": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "annotation": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                        },
                                        "constraints": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "prop": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                        'context': ['import', {
                                                            'glossary': {
                                                                'glossary':{
                                                                    'annotation': {
                                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                        'line': 430,
                                                                        'column': 127,
                                                                    },
                                                                    'key': "typesystem",
                                                                },
                                                                'glossary arguments': d({
                                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                                }),
                                                            },
                                                        }],
                                                        'typeXX': "Type",
                                                        'tailXX': a([
                                                            "group",
                                                            "properties",
                                                            "D",
                                                        ]),
                                                        'type arguments': d({}),
                                                    }]]],
                                                },
                                            })],
                                        },
                                        "content": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Expression",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                            })],
                        },
                    })],
                    "string": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "annotation": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "constraints": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "out": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': ['import', {
                                            'glossary': {
                                                'glossary':{
                                                    'annotation': {
                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                        'line': 514,
                                                        'column': 117,
                                                    },
                                                    'key': "typesystem",
                                                },
                                                'glossary arguments': d({
                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                }),
                                            },
                                        }],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "string",
                                        ]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                        },
                        "content": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "String Expression",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                })]
            },
            "Numerical Expression": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "minus": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "numeric literal": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                    "plus": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Numerical Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "postdecrement": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Numerical Expression Or Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "postincrement": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Numerical Expression Or Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "predecrement": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Numerical Expression Or Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "preincrement": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Numerical Expression Or Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                })]
            },
            "Numerical Expression Or Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "expression": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Numerical Expression",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "selection": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "cast to number": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "number": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                    },
                                    "constraints": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "number": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': ['import', {
                                                        'glossary': {
                                                            'glossary':{
                                                                'annotation': {
                                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                    'line': 616,
                                                                    'column': 139,
                                                                },
                                                                'key': "typesystem",
                                                            },
                                                            'glossary arguments': d({
                                                                "Annotation": ['glossary parameterXX', "Annotation"]
                                                            }),
                                                        },
                                                    }],
                                                    'typeXX': "Type",
                                                    'tailXX': a([
                                                        "number",
                                                    ]),
                                                    'type arguments': d({}),
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
                        "selection": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Address Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                })]
            },
            "Source File": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]
            },
            "Statements": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "block": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Block",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "if": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "condition": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "else": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Block",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]]],
                        },
                        "then": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Block",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "while": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "block": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Block",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "condition": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Boolean Expression Or Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "with": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "action": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "assign": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Assign",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                                "minus assign": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                    },
                                    "constraints": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "number address": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': ['import', {
                                                        'glossary': {
                                                            'glossary':{
                                                                'annotation': {
                                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                    'line': 676,
                                                                    'column': 145,
                                                                },
                                                                'key': "typesystem",
                                                            },
                                                            'glossary arguments': d({
                                                                "Annotation": ['glossary parameterXX', "Annotation"]
                                                            }),
                                                        },
                                                    }],
                                                    'typeXX': "Type",
                                                    'tailXX': a([
                                                        "number",
                                                    ]),
                                                    'type arguments': d({}),
                                                }]]],
                                            },
                                        })],
                                    },
                                    "content": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "right hand side": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': ['local', null],
                                                    'typeXX': "Numerical Expression Or Selection",
                                                    'tailXX': a([]),
                                                    'type arguments': d({}),
                                                }]],
                                            },
                                        })],
                                    },
                                })],
                                "plus assign": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                    },
                                    "constraints": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "number address": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': ['import', {
                                                        'glossary': {
                                                            'glossary':{
                                                                'annotation': {
                                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                    'line': 684,
                                                                    'column': 145,
                                                                },
                                                                'key': "typesystem",
                                                            },
                                                            'glossary arguments': d({
                                                                "Annotation": ['glossary parameterXX', "Annotation"]
                                                            }),
                                                        },
                                                    }],
                                                    'typeXX': "Type",
                                                    'tailXX': a([
                                                        "number",
                                                    ]),
                                                    'type arguments': d({}),
                                                }]]],
                                            },
                                        })],
                                    },
                                    "content": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "right hand side": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': ['local', null],
                                                    'typeXX': "Numerical Expression Or Selection",
                                                    'tailXX': a([]),
                                                    'type arguments': d({}),
                                                }]],
                                            },
                                        })],
                                    },
                                })],
                            })],
                        },
                        "address": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Address Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                })]]
            },
            "String Expression": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "string literal": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                })]
            },
            "String Expression Or Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "expression": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "String Expression",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "selection": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "cast to string": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "string": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                    },
                                    "constraints": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                            "string": {
                                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                    'context': ['import', {
                                                        'glossary': {
                                                            'glossary':{
                                                                'annotation': {
                                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                    'line': 798,
                                                                    'column': 139,
                                                                },
                                                                'key': "typesystem",
                                                            },
                                                            'glossary arguments': d({
                                                                "Annotation": ['glossary parameterXX', "Annotation"]
                                                            }),
                                                        },
                                                    }],
                                                    'typeXX': "Type",
                                                    'tailXX': a([
                                                        "string",
                                                    ]),
                                                    'type arguments': d({}),
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
                        "selection": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Address Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                })]
            },
            "Type Arguments": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "annotation": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                    },
                    "constraints": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "x": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['import', {
                                        'glossary': {
                                            'glossary':{
                                                'annotation': {
                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                    'line': 820,
                                                    'column': 103,
                                                },
                                                'key': "typesystem",
                                            },
                                            'glossary arguments': d({
                                                "Annotation": ['glossary parameterXX', "Annotation"]
                                            }),
                                        },
                                    }],
                                    'typeXX': "Type Parameters",
                                    'tailXX': a([
                                        "D",
                                    ]),
                                    'type arguments': d({}),
                                }]]],
                            },
                        })],
                    },
                    "content": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "type": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Type Selection",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
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
                            "content": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "child namespace": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "namespacex": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "annotation": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                                },
                                                "constraint": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                        'context': ['import', {
                                                            'glossary': {
                                                                'glossary':{
                                                                    'annotation': {
                                                                        'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                        'line': 852,
                                                                        'column': 152,
                                                                    },
                                                                    'key': "typesystem",
                                                                },
                                                                'glossary arguments': d({
                                                                    "Annotation": ['glossary parameterXX', "Annotation"]
                                                                }),
                                                            },
                                                        }],
                                                        'typeXX': "Namespace",
                                                        'tailXX': a([
                                                            "namespaces",
                                                            "D",
                                                        ]),
                                                        'type arguments': d({}),
                                                    }]]],
                                                },
                                                "key": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                                },
                                            })],
                                        },
                                        "selection": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type Selection",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })],
                                    "current namespace": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "annotation": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                        },
                                        "constraint": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['import', {
                                                    'glossary': {
                                                        'glossary':{
                                                            'annotation': {
                                                                'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                                'line': 847,
                                                                'column': 124,
                                                            },
                                                            'key': "typesystem",
                                                        },
                                                        'glossary arguments': d({
                                                            "Annotation": ['glossary parameterXX', "Annotation"]
                                                        }),
                                                    },
                                                }],
                                                'typeXX': "Namespace",
                                                'tailXX': a([
                                                    "types",
                                                    "D",
                                                ]),
                                                'type arguments': d({}),
                                            }]]],
                                        },
                                        "key": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                        },
                                    })],
                                })],
                            },
                            "result": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': ['import', {
                                        'glossary': {
                                            'glossary':{
                                                'annotation': {
                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                    'line': 844,
                                                    'column': 56,
                                                },
                                                'key': "typesystem",
                                            },
                                            'glossary arguments': d({
                                                "Annotation": ['glossary parameterXX', "Annotation"]
                                            }),
                                        },
                                    }],
                                    'typeXX': "Type",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]]],
                            },
                        })],
                    },
                    "result": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': ['import', {
                                'glossary': {
                                    'glossary':{
                                        'annotation': {
                                            'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                            'line': 110,
                                            'column': 52,
                                        },
                                        'key': "typesystem",
                                    },
                                    'glossary arguments': d({
                                        "Annotation": ['glossary parameterXX', "Annotation"]
                                    }),
                                },
                            }],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'type arguments': d({}),
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
                                                'context': ['local', null],
                                                'typeXX': "Expression",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                        "type": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type Selection",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })],
                                    "variable stack2": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "variable": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "annotation": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['glossary parameterXX', "Annotation"]],
                                                },
                                                "constraint": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                        'context': ['local', null],
                                                        'typeXX': "Variables",
                                                        'tailXX': a([
                                                            "D",
                                                        ]),
                                                        'type arguments': d({}),
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
                                    'context': ['import', {
                                        'glossary': {
                                            'glossary':{
                                                'annotation': {
                                                    'file': "../../prebuild/src/data/models/lowlevel_implementation.data.ts",
                                                    'line': 865,
                                                    'column': 87,
                                                },
                                                'key': "typesystem",
                                            },
                                            'glossary arguments': d({
                                                "Annotation": ['glossary parameterXX', "Annotation"]
                                            }),
                                        },
                                    }],
                                    'typeXX': "Type",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
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
            "Assign": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "right hand side": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "target": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Block": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "statements": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "variables": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Boolean Expression": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "and": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "false": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "greater than": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "less than": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "not": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "number equals": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "number not equals": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "or": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "string equals": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "string not equals": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "true": {
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
            "Boolean Expression Or Selection": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "expression": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "selection": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "cast to boolean": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "TU": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "boolean": {
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
                                            "selection": {
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
            "Expression": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "array literal": {
                                'types': d({}),
                                'namespaces': d({
                                    "A": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "boolean": {
                                'types': d({}),
                                'namespaces': d({}),
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
                            "numerical": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "object literal": {
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
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Numerical Expression": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "minus": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "numeric literal": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "plus": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "left hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "right hand side": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "postdecrement": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "postincrement": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "predecrement": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "preincrement": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Numerical Expression Or Selection": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "expression": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "selection": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "cast to number": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "TU": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "number": {
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
                                            "selection": {
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
            "Source File": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({}),
                    },
                }),
            },
            "Statements": {
                'types': d({}),
                'namespaces': d({
                    "A": {
                        'types': d({}),
                        'namespaces': d({
                            "TU": {
                                'types': d({}),
                                'namespaces': d({
                                    "block": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                    "if": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "condition": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "else": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "O": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                    "then": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "while": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "block": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "condition": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "with": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "action": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "assign": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "minus assign": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "right hand side": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "plus assign": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "right hand side": {
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
                                                    "address": {
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
            "String Expression Or Selection": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "expression": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "selection": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "cast to string": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "TU": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "string": {
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
                                            "selection": {
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
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "child namespace": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "namespacex": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "selection": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "current namespace": {
                                'types': d({}),
                                'namespaces': d({}),
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