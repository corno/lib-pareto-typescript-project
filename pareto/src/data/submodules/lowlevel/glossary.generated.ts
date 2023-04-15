import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({}),
    'root': {
        'types': d({
            "Block": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "statements": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "block": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Block",
                                'arguments': d({}),
                            }]],
                            "expression": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                            "for": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "block": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Block",
                                        'arguments': d({}),
                                    }]],
                                },
                                "condition": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Expression",
                                        'arguments': d({}),
                                    }]],
                                },
                                "incrementer": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Expression",
                                        'arguments': d({}),
                                    }]],
                                },
                                "initializer": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Variables",
                                        'arguments': d({}),
                                    }]],
                                },
                            })],
                            "if": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "condition": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Expression",
                                        'arguments': d({}),
                                    }]],
                                },
                                "else": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Block",
                                        'arguments': d({}),
                                    }]]],
                                },
                                "then": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Block",
                                        'arguments': d({}),
                                    }]],
                                },
                            })],
                            "return": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "expression": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Expression",
                                        'arguments': d({}),
                                    }]]],
                                },
                            })],
                            "string literal switch": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "cases": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "block": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "Block",
                                                'arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                                "condition": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Expression",
                                        'arguments': d({}),
                                    }]],
                                },
                                "default": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Block",
                                        'arguments': d({}),
                                    }]]],
                                },
                            })],
                            "switch": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "cases": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "block": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "Block",
                                                'arguments': d({}),
                                            }]],
                                        },
                                        "case": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "Expression",
                                                'arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                                "condition": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Expression",
                                        'arguments': d({}),
                                    }]],
                                },
                                "default": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Block",
                                        'arguments': d({}),
                                    }]]],
                                },
                            })],
                            "while": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "block": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Block",
                                        'arguments': d({}),
                                    }]],
                                },
                                "condition": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Expression",
                                        'arguments': d({}),
                                    }]],
                                },
                            })],
                        })]],
                    },
                    "variables": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Variables",
                            'arguments': d({}),
                        }]],
                    },
                })]
            },
            "Expression": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "and": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "array literal": <g_glossary.T.Type<pd.SourceLocation>>['array', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Expression",
                        'arguments': d({}),
                    }]]],
                    "call": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "arguments": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "function": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "type arguments": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Type",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "conditional": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "false": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "test": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "true": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "element access": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "array": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "element": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "equals": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "false": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "block": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Block",
                                'arguments': d({}),
                            }]],
                        },
                        "signature": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "FunctionSignature",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "greater than": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "identifier": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                    "less than": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "minus": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "minus assign": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "new": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "class": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                        "parameters": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]]],
                        },
                    })],
                    "not": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Expression",
                        'arguments': d({}),
                    }]],
                    "not equals": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "null": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "numeric literal": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                    "object literal": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "properties": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "or": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "parenthesized": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Expression",
                        'arguments': d({}),
                    }]],
                    "plus": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "plus assign": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "left hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "right hand side": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "postdecrement": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Expression",
                        'arguments': d({}),
                    }]],
                    "postincrement": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Expression",
                        'arguments': d({}),
                    }]],
                    "predecrement": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Expression",
                        'arguments': d({}),
                    }]],
                    "preincrement": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Expression",
                        'arguments': d({}),
                    }]],
                    "property access": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "context": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                        "property": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Expression",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "string literal": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                    "true": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                })]
            },
            "FunctionSignature": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "paramerters": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "type": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Type",
                                    'arguments': d({}),
                                }]],
                            },
                        })]],
                    },
                    "return type": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Type",
                            'arguments': d({}),
                        }]]],
                    },
                    "type parameters": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Type Parameters",
                            'arguments': d({}),
                        }]],
                    },
                })]
            },
            "Namespace": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "symbols": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                            "variable": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        })]],
                    },
                    "types": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "parameters": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Type Parameters",
                                    'arguments': d({}),
                                }]],
                            },
                            "type": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "alias": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Type",
                                        'arguments': d({}),
                                    }]],
                                    "function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                        "block": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "Block",
                                                'arguments': d({}),
                                            }]],
                                        },
                                        "signature": {
                                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "FunctionSignature",
                                                'arguments': d({}),
                                            }]],
                                        },
                                    })],
                                })],
                            },
                        })]],
                    },
                })]
            },
            "SourceFile": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "imports": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "path": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                            },
                        })]],
                    },
                    "root": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Namespace",
                            'arguments': d({}),
                        }]],
                    },
                })]
            },
            "Type": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                    "function": <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "FunctionSignature",
                        'arguments': d({}),
                    }]],
                    "null": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "number": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "reference": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    "string": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                })]
            },
            "Type Parameters": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]]]
            },
            "Variables": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "initializer": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Expression",
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
                })]]
            },
        }),
        'namespaces': d({
            "Block": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "statements": {
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
                                                    "expression": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                    "for": {
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
                                                                    "incrementer": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "initializer": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
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
                                                    "return": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "expression": {
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
                                                    "string literal switch": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "cases": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "D": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "G": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "block": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "condition": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "default": {
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
                                                    "switch": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "cases": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "A": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "G": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "block": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                            "case": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "condition": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "default": {
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
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "variables": {
                                'types': d({}),
                                'namespaces': d({}),
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
                            "array literal": {
                                'types': d({}),
                                'namespaces': d({
                                    "A": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "call": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "arguments": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "function": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "type arguments": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "conditional": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "false": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "test": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "true": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "element access": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "array": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "element": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "equals": {
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
                            "function": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "block": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "signature": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
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
                            "identifier": {
                                'types': d({}),
                                'namespaces': d({}),
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
                            "minus assign": {
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
                            "new": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "class": {
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
                                        }),
                                    },
                                }),
                            },
                            "not": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "not equals": {
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
                            "null": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "numeric literal": {
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
                            "parenthesized": {
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
                            "plus assign": {
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
                            "property access": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "context": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "property": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "string literal": {
                                'types': d({}),
                                'namespaces': d({}),
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
            "FunctionSignature": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "paramerters": {
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
                            "return type": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "type parameters": {
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
                            "symbols": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
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
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                    "variable": {
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
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "alias": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "function": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "block": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "signature": {
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
            "SourceFile": {
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
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "path": {
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
            "Type": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "function": {
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
                            "number": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "reference": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
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
            "Variables": {
                'types': d({}),
                'namespaces': d({
                    "D": {
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