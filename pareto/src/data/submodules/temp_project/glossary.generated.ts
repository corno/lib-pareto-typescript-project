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
        "AlgorithmTypeReference": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                "context": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Context",
                        'arguments': d({}),
                    }]],
                },
                "type": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "asynchronous": <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "constructor": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "constructor": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                },
                            })],
                            "function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "function": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                },
                            })],
                        })],
                        "synchronous": <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "function": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "function": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                },
                            })],
                            "procedure": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                "procedure": {
                                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                },
                            })],
                        })],
                    })],
                },
            })]
        },
        "Context": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                "arguments": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['string', null]],
                },
                "glossary": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                },
            })]
        },
        "Module": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                "definition": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "ModuleDefinition",
                        'arguments': d({}),
                    }]],
                },
                "implementation": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "pareto": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "typescript": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    })],
                },
            })]
        },
        "ModuleDefinition": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                "glossary": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                        "imports": {
                            'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "external": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                "main": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "sibling": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                "temp submodule": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                            })]],
                        },
                    })],
                },
            })]
        },
        "Project": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                "author": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                },
                "dependencies": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                },
                "description": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                },
                "license": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                },
                "type": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "glossary": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "imports": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "external": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                                })]],
                            },
                        })],
                        "library": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "bindings": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['optional', <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "definition": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                            'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "ModuleDefinition",
                                            'arguments': d({}),
                                        }]],
                                    },
                                    "implementation": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                            "pareto": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                            "typescript": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        })],
                                    },
                                })]],
                            },
                            "executables": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                            },
                            "main": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Module",
                                    'arguments': d({}),
                                }]],
                            },
                            "submodules": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Module",
                                    'arguments': d({}),
                                }]]],
                            },
                            "test": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Test",
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                        "resource": <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                            "definition": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "ModuleDefinition",
                                    'arguments': d({}),
                                }]],
                            },
                            "temp": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                                    "devDependencies": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                    },
                                    "nativeDependencies": {
                                        'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                    },
                                })],
                            },
                            "test": {
                                'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                                    'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Test",
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                    })],
                },
            })]
        },
        "Test": {
            'parameters': d({}),
            'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                "definition": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['reference', ['type', {
                        'context': <g_glossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "ModuleDefinition",
                        'arguments': d({}),
                    }]],
                },
                "dependencies": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['group', d({})]],
                },
                "imports": {
                    'type': <g_glossary.T.Type<pd.SourceLocation>>['dictionary', <g_glossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "external": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        "pub": <g_glossary.T.Type<pd.SourceLocation>>['string', null],
                        "this": <g_glossary.T.Type<pd.SourceLocation>>['group', d({})],
                    })]],
                },
            })]
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