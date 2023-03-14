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
        "Builder": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "group": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "members": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Builder",
                            'arguments': d({}),
                        }]],
                    },
                })],
                "method": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "builder": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Builder",
                            'arguments': d({}),
                        }]],
                    },
                    "data": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "TypeReference",
                            'arguments': d({}),
                        }]],
                    },
                })],
                "reference": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "BuilderReference",
                    'arguments': d({}),
                }],
            })]
        },
        "BuilderReference": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                "builder": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                },
                "context": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Context",
                        'arguments': d({}),
                    }],
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
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
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
        "DataOrBuilder": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "builder": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "BuilderReference",
                    'arguments': d({}),
                }],
                "data": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "TypeReference",
                    'arguments': d({}),
                }],
            })]
        },
        "Glossary": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                "imports": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "arguments": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "TypeReference",
                                'arguments': d({}),
                            }]],
                        },
                    })]],
                },
                "parameters": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                },
                "type": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "asynchronous": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "functions": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "data": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "TypeReference",
                                            'arguments': d({}),
                                        }],
                                    },
                                    "output interface": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }]],
                                    },
                                    "return type": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                            "data": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                                "type": {
                                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                                                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                        'type': "TypeReference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                            })],
                                            "interface": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "InterfaceReference",
                                                'arguments': d({}),
                                            }],
                                        })],
                                    },
                                })]],
                            },
                            "interfaces": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Interface",
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                        "synchronous": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "builders": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Builder",
                                    'arguments': d({}),
                                }]],
                            },
                            "functions": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "in": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "DataOrBuilder",
                                            'arguments': d({}),
                                        }],
                                    },
                                    "out": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "DataOrBuilder",
                                            'arguments': d({}),
                                        }],
                                    },
                                })]],
                            },
                        })],
                    })],
                },
                "types": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "parameters": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "type": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Type",
                                'arguments': d({}),
                            }],
                        },
                    })]],
                },
            })]
        },
        "Interface": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "choice": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "options": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Interface",
                            'arguments': d({}),
                        }]],
                    },
                })],
                "method": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "data": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "TypeReference",
                            'arguments': d({}),
                        }]],
                    },
                    "interface": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Interface",
                            'arguments': d({}),
                        }]],
                    },
                })],
                "reference": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "InterfaceReference",
                    'arguments': d({}),
                }],
                "stream": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "data": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Interface",
                            'arguments': d({}),
                        }],
                    },
                    "end": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Interface",
                            'arguments': d({}),
                        }],
                    },
                })],
            })]
        },
        "InterfaceReference": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                "context": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Context",
                        'arguments': d({}),
                    }],
                },
                "interface": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                },
            })]
        },
        "Type": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "array": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }],
                "boolean": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                "computed": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }],
                "dictionary": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }],
                "glossary parameter": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                "group": <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                    "type": {
                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                    },
                })]],
                "nested": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }],
                "null": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                "number": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                "optional": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }],
                "reference": <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "TypeReference",
                    'arguments': d({}),
                }],
                "string": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                "taggedUnion": <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]],
                "type parameter": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
            })]
        },
        "TypeReference": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                "arguments": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "TypeReference",
                        'arguments': d({}),
                    }]],
                },
                "context": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Context",
                        'arguments': d({}),
                    }],
                },
                "type": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                },
            })]
        },
    }),
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d<g_glossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({}),
    }],
}