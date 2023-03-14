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
        "Builder": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "group": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "members": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Builder",
                            'arguments': d({}),
                        }]],
                    },
                })],
                "method": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "builder": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Builder",
                            'arguments': d({}),
                        }]],
                    },
                    "data": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "TypeReference",
                            'arguments': d({}),
                        }]],
                    },
                })],
                "reference": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "BuilderReference",
                    'arguments': d({}),
                }],
            })]
        },
        "BuilderReference": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "builder": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                },
                "context": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Context",
                        'arguments': d({}),
                    }],
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
                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
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
        "DataOrBuilder": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "builder": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "BuilderReference",
                    'arguments': d({}),
                }],
                "data": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "TypeReference",
                    'arguments': d({}),
                }],
            })]
        },
        "Glossary": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "imports": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "arguments": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "TypeReference",
                                'arguments': d({}),
                            }]],
                        },
                    })]],
                },
                "parameters": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                },
                "type": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "asynchronous": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "functions": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "data": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "TypeReference",
                                            'arguments': d({}),
                                        }],
                                    },
                                    "output interface": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }]],
                                    },
                                    "return type": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                            "data": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "type": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                                        'type': "TypeReference",
                                                        'arguments': d({}),
                                                    }],
                                                },
                                            })],
                                            "interface": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "InterfaceReference",
                                                'arguments': d({}),
                                            }],
                                        })],
                                    },
                                })]],
                            },
                            "interfaces": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Interface",
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                        "synchronous": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "builders": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Builder",
                                    'arguments': d({}),
                                }]],
                            },
                            "functions": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "in": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "DataOrBuilder",
                                            'arguments': d({}),
                                        }],
                                    },
                                    "out": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "parameters": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "type": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
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
            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "choice": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "options": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Interface",
                            'arguments': d({}),
                        }]],
                    },
                })],
                "method": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "data": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "TypeReference",
                            'arguments': d({}),
                        }]],
                    },
                    "interface": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Interface",
                            'arguments': d({}),
                        }]],
                    },
                })],
                "reference": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "InterfaceReference",
                    'arguments': d({}),
                }],
                "stream": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "data": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Interface",
                            'arguments': d({}),
                        }],
                    },
                    "end": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Interface",
                            'arguments': d({}),
                        }],
                    },
                })],
            })]
        },
        "InterfaceReference": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "context": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Context",
                        'arguments': d({}),
                    }],
                },
                "interface": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                },
            })]
        },
        "Type": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "array": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }],
                "boolean": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                "computed": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }],
                "dictionary": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }],
                "glossary parameter": <gglossary.T.Type<pd.SourceLocation>>['string', null],
                "group": <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "type": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                    },
                })]],
                "nested": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }],
                "null": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                "number": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                "optional": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }],
                "reference": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "TypeReference",
                    'arguments': d({}),
                }],
                "string": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                "taggedUnion": <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Type",
                    'arguments': d({}),
                }]],
                "type parameter": <gglossary.T.Type<pd.SourceLocation>>['string', null],
            })]
        },
        "TypeReference": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "arguments": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "TypeReference",
                        'arguments': d({}),
                    }]],
                },
                "context": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Context",
                        'arguments': d({}),
                    }],
                },
                "type": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                },
            })]
        },
    }),
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d<gglossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({}),
    }],
}