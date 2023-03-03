import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({}),
            'parameters': d({
                "Annotation": {},
            }),
            'types': d({
                "Context": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "import": <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                        "local": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                    })]
                },
                "Glossary": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "functions": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "data": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }],
                                },
                                "managed input interface": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "not set": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "set": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }],
                                    })],
                                },
                                "output interface": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "not set": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "set": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }],
                                    })],
                                },
                                "return type": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "data": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "asynchronous": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['boolean', {}],
                                            },
                                            "type": {
                                                'optional': false,
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
                                        "nothing": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "imports": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "interfaces": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Interface",
                                'arguments': d({}),
                            }]],
                        },
                        "parameters": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "templates": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "parameters": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                },
                                "type": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "Type",
                                        'arguments': d({}),
                                    }],
                                },
                            })]],
                        },
                        "types": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Type",
                                'arguments': d({}),
                            }]],
                        },
                    })]
                },
                "Interface": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "group": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "members": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Interface",
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                        "method": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "data": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "not set": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    "set": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                            "interface": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "not set": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    "set": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                        })],
                        "reference": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "InterfaceReference",
                            'arguments': d({}),
                        }],
                    })]
                },
                "InterfaceReference": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "context": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "interface": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
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
                        "group": <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "optional": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['boolean', {}],
                            },
                            "type": {
                                'optional': false,
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
                        "parameter": <gglossary.T.Type<pd.SourceLocation>>['string', {}],
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
                        "template": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "arguments": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Type",
                                    'arguments': d({}),
                                }]],
                            },
                            "context": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Context",
                                    'arguments': d({}),
                                }],
                            },
                            "template": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                            },
                        })],
                    })]
                },
                "TypeReference": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "context": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "type": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                        },
                    })]
                },
            }),
            'interfaces': d({}),
            'functions': d({}),
        },
        'api': {
            'imports': d({
                "foreach": external("res-pareto-foreach"),
            }),
            'algorithms': d({}),
        },
    },
    'implementation': {
        'implementations': d({}),
    },
}