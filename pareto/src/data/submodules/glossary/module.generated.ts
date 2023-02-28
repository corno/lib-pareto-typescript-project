import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'api': {
            'imports': d({}),
            'algorithms': d({}),
        },
        'glossary': {
            'imports': d({
                "common": "glo-pareto-common",
            }),
            'parameters': d({
                "Annotation": {},
            }),
            'types': d({
                "Context": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "import": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "arguments": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                    'type': "TypeReference",
                                    'arguments': d({}),
                                }]],
                            },
                            "glossary": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                            },
                        })],
                        "local": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                    })]
                },
                "Glossary": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "functions": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "data": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }],
                                },
                                "managed input interface": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }]],
                                },
                                "output interface": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }]],
                                },
                                "return type": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "data": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "asynchronous": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['boolean', {}],
                                            },
                                            "type": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                                    'type': "TypeReference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "interface": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }],
                                        "nothing": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "imports": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "interfaces": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "Interface",
                                'arguments': d({}),
                            }]],
                        },
                        "parameters": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "types": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "parameters": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                },
                                "type": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
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
                        "group": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "members": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                    'type': "Interface",
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                        "method": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "data": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                    'type': "TypeReference",
                                    'arguments': d({}),
                                }]],
                            },
                            "interface": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "interface": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                            'type': "Interface",
                                            'arguments': d({}),
                                        }],
                                    },
                                    "managed": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['boolean', {}],
                                    },
                                })]],
                            },
                        })],
                        "reference": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "InterfaceReference",
                            'arguments': d({}),
                        }],
                    })]
                },
                "InterfaceReference": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "context": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "interface": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                        },
                    })]
                },
                "Type": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "array": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "boolean": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "computed": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "dictionary": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "glossary parameter": <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                        "group": <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "type": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                    'type': "Type",
                                    'arguments': d({}),
                                }],
                            },
                        })]],
                        "nested": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "null": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "number": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "optional": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "reference": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "TypeReference",
                            'arguments': d({}),
                        }],
                        "string": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "taggedUnion": <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }]],
                        "type parameter": <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                    })]
                },
                "TypeReference": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "arguments": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "TypeReference",
                                'arguments': d({}),
                            }]],
                        },
                        "context": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "type": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                        },
                    })]
                },
            }),
            'interfaces': d({}),
            'functions': d({}),
        },
    },
    'implementation': ['typescript', {}],
}