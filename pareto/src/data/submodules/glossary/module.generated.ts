import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import { external } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d
const a = pd.a

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'definition': {
        'api': {
            'imports': d({}),
            'root': {
                'algorithms': d({}),
            }
        },
        'glossary': {
            'root': {
                'parameters': d({
                    "Annotation": null,
                }),
                'types': d({
                    "Context": {
                        'parameters': d({}),
                        'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "import": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "arguments": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }]],
                                },
                                "glossary": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
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
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "TypeReference",
                                            'arguments': d({}),
                                        }],
                                    },
                                    "managed input interface": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }]],
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
                                                "asynchronous": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['boolean', null],
                                                },
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
                                            "nothing": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
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
                            "group": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "members": {
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
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "interface": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                                'type': "Interface",
                                                'arguments': d({}),
                                            }],
                                        },
                                        "managed": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['boolean', null],
                                        },
                                    })]],
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
                'interfaces': d({}),
                'functions': d({}),
            },
            'imports': d({
                "common": external("glo-pareto-common"),
            }),
        },
    },
    'implementation': ['typescript', null],
}