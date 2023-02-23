import * as pd from 'pareto-core-data'

import * as gmoduleDefinition from "./import_moduleDefinition"
import * as gproject from "./import_project"
import * as gglossary from "./import_glossary"
import { dictionary, member, reference, string, type } from 'lib-pareto-typescript-project/dist/submodules/glossary/shorthands'

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({
                "fp": "lib-fountain-pen",
            }),
            'parameters': d({
                "Annotation": {},
            }),
            'types': d({
                "Reference": {
                    'parameters': d({
                        "ReferencedType": {},
                    }),
                    'type': <gglossary.T.Type<string>>['group', d({
                        "annotation": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['string', {}],
                        },
                        "name": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['string', {}],
                        },
                    })],
                },
                "Context": type(<gglossary.T.Type<string>>['taggedUnion', d({
                    "import": <gglossary.T.Type<string>>['group', d({
                        "glossary": member(string()),
                        "arguments": member(dictionary(reference("TypeReference")))
                    })],
                    "local": <gglossary.T.Type<string>>['group', d({})],
                })]),
                "Glossary": type(<gglossary.T.Type<string>>['group', d({
                    "functions": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['group', d({
                            "data": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['reference', {
                                    'context': <gglossary.T.Context<string>>['local', {}],
                                    'type': "TypeReference",
                                    'arguments': d({}),
                                }],
                            },
                            "managed input interface": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <gglossary.T.Type<string>>['group', d({})],
                                    "set": <gglossary.T.Type<string>>['reference', {
                                        'context': <gglossary.T.Context<string>>['local', {}],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                            "output interface": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <gglossary.T.Type<string>>['group', d({})],
                                    "set": <gglossary.T.Type<string>>['reference', {
                                        'context': <gglossary.T.Context<string>>['local', {}],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                            "return type": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['taggedUnion', d({
                                    "data": <gglossary.T.Type<string>>['group', d({
                                        "asynchronous": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<string>>['boolean', {}],
                                        },
                                        "type": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<string>>['reference', {
                                                'context': <gglossary.T.Context<string>>['local', {}],
                                                'type': "TypeReference",
                                                'arguments': d({}),
                                            }],
                                        },
                                    })],
                                    "interface": <gglossary.T.Type<string>>['reference', {
                                        'context': <gglossary.T.Context<string>>['local', {}],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }],
                                    "nothing": <gglossary.T.Type<string>>['group', d({})],
                                })],
                            },
                        })]],
                    },
                    "imports": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['group', d({})]],
                    },
                    "interfaces": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['reference', {
                            'context': <gglossary.T.Context<string>>['local', {}],
                            'type': "Interface",
                            'arguments': d({}),
                        }]],
                    },
                    "parameters": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['group', d({})]],
                    },
                    "types": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['group', d({
                            "parameters": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['group', d({})]],
                            },
                            "type": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['reference', {
                                    'context': <gglossary.T.Context<string>>['local', {}],
                                    'type': "Type",
                                    'arguments': d({}),
                                }],
                            },
                        })]],
                    },
                })]),
                "Interface": type(<gglossary.T.Type<string>>['taggedUnion', d({
                    "group": <gglossary.T.Type<string>>['group', d({
                        "members": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['reference', {
                                'context': <gglossary.T.Context<string>>['local', {}],
                                'type': "Interface",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "method": <gglossary.T.Type<string>>['group', d({
                        "data": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['taggedUnion', d({
                                "not set": <gglossary.T.Type<string>>['group', d({})],
                                "set": <gglossary.T.Type<string>>['reference', {
                                    'context': <gglossary.T.Context<string>>['local', {}],
                                    'type': "TypeReference",
                                    'arguments': d({}),
                                }],
                            })],
                        },
                        "interface": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['taggedUnion', d({
                                "not set": <gglossary.T.Type<string>>['group', d({})],
                                "set": <gglossary.T.Type<string>>['group', d({
                                    "interface": {
                                        'optional': false,
                                        'type': <gglossary.T.Type<string>>['reference', {
                                            'context': <gglossary.T.Context<string>>['local', {}],
                                            'type': "Interface",
                                            'arguments': d({}),
                                        }],
                                    },
                                    "managed": {
                                        'optional': false,
                                        'type': <gglossary.T.Type<string>>['boolean', {}],
                                    },
                                })],
                            })],
                        },
                    })],
                    "reference": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "InterfaceReference",
                        'arguments': d({}),
                    }],
                })]),
                "InterfaceReference": type( <gglossary.T.Type<string>>['group', d({
                    "context": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['reference', {
                            'context': <gglossary.T.Context<string>>['local', {}],
                            'type': "Context",
                            'arguments': d({}),
                        }],
                    },
                    "interface": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['string', {}],
                    },
                })]),
                "Type":type( <gglossary.T.Type<string>>['taggedUnion', d({
                    "array": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                        'arguments': d({}),
                    }],
                    "boolean": <gglossary.T.Type<string>>['group', d({})],
                    "computed": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                        'arguments': d({}),
                    }],
                    "dictionary": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                        'arguments': d({}),
                    }],
                    "group": <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['group', d({
                        "optional": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['boolean', {}],
                        },
                        "type": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['reference', {
                                'context': <gglossary.T.Context<string>>['local', {}],
                                'type': "Type",
                                'arguments': d({}),
                            }],
                        },
                    })]],
                    "nested": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                        'arguments': d({}),
                    }],
                    "null": <gglossary.T.Type<string>>['group', d({})],
                    "number": <gglossary.T.Type<string>>['group', d({})],
                    "optional": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                        'arguments': d({}),
                    }],
                    "type parameter": <gglossary.T.Type<string>>['string', {}],
                    "glossary parameter": <gglossary.T.Type<string>>['string', {}],
                    "reference": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "TypeReference",
                        'arguments': d({}),
                    }],
                    "string": <gglossary.T.Type<string>>['group', d({})],
                    "taggedUnion": <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                        'arguments': d({}),
                    }]],
                })]),
                "TypeReference":type( <gglossary.T.Type<string>>['group', d({
                    "context": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['reference', {
                            'context': <gglossary.T.Context<string>>['local', {}],
                            'type': "Context",
                            'arguments': d({}),
                        }],
                    },
                    "type": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['string', {}],
                    },
                    "arguments": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['reference', {
                            'context': <gglossary.T.Context<string>>['local', {}],
                            'type': "TypeReference",
                            'arguments': d({}),
                        }]],
                    },
                })]),
            }),
            'interfaces': d({}),
            'functions': d({
                "Serialize": {
                    'data': {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Glossary",
                        'arguments': pd.d({}),
                    },
                    'managed input interface': ['not set', {}],
                    'output interface': ['set', {
                        'context': <gglossary.T.Context<string>>['import', {
                            'glossary': "fp",
                            'arguments': pd.d({}),
                        }],
                        'interface': "Line",
                    }],
                    'return type': ['nothing', {}],
                },
            }),
        },
        'api': {
            'imports': d({
                "foreach": "res-pareto-foreach",
            }),
            'algorithms': d({
                // "createSerializer": {
                //     'definition': {
                //         'context': ['local', {}],
                //         'function': "Serialize",
                //     },
                //     'type': ['constructor', {
                //         'configuration data': ['not set', {}],
                //         'dependencies': d({
                //             "arrayForEach": {
                //                 'context': ['import', "foreach"],
                //                 'function': "ArrayForEach",
                //             },
                //             "dictionaryForEach": {
                //                 'context': ['import', "foreach"],
                //                 'function': "DictionaryForEach",
                //             },
                //             "enrichedArrayForEach": {
                //                 'context': ['import', "foreach"],
                //                 'function': "EnrichedArrayForEach",
                //             },
                //             "enrichedDictionaryForEach": {
                //                 'context': ['import', "foreach"],
                //                 'function': "EnrichedDictionaryForEach",
                //             },
                //         }),
                //     }],
                // },
            }),
        },
    },
    'implementation': {
        'implementations': d({}),
    },
}