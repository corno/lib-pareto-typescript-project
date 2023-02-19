import * as pd from 'pareto-core-data'

import * as mmoduleDefinition from "./import_moduleDefinition"
import * as mproject from "./import_project"
import * as mglossary from "./import_glossary"
import { dictionary, member, reference, string, type } from 'lib-pareto-typescript-project/dist/submodules/glossary/shorthands'

const d = pd.d
const a = pd.a

export const $: mproject.T.Module<pd.SourceLocation> = {
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
                    'type': <mglossary.T.Type<string>>['group', d({
                        "annotation": {
                            'optional': false,
                            'type': <mglossary.T.Type<string>>['string', {}],
                        },
                        "name": {
                            'optional': false,
                            'type': <mglossary.T.Type<string>>['string', {}],
                        },
                    })],
                },
                "Context": type(<mglossary.T.Type<string>>['taggedUnion', d({
                    "import": <mglossary.T.Type<string>>['group', d({
                        "glossary": member(string()),
                        "arguments": member(dictionary(reference("TypeReference")))
                    })],
                    "local": <mglossary.T.Type<string>>['group', d({})],
                })]),
                "Glossary": type(<mglossary.T.Type<string>>['group', d({
                    "functions": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['group', d({
                            "data": {
                                'optional': false,
                                'type': <mglossary.T.Type<string>>['reference', {
                                    'context': <mglossary.T.Context<string>>['local', {}],
                                    'type': "TypeReference",
                                    'arguments': d({}),
                                }],
                            },
                            "managed input interface": {
                                'optional': false,
                                'type': <mglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <mglossary.T.Type<string>>['group', d({})],
                                    "set": <mglossary.T.Type<string>>['reference', {
                                        'context': <mglossary.T.Context<string>>['local', {}],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                            "output interface": {
                                'optional': false,
                                'type': <mglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <mglossary.T.Type<string>>['group', d({})],
                                    "set": <mglossary.T.Type<string>>['reference', {
                                        'context': <mglossary.T.Context<string>>['local', {}],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                            "return type": {
                                'optional': false,
                                'type': <mglossary.T.Type<string>>['taggedUnion', d({
                                    "data": <mglossary.T.Type<string>>['group', d({
                                        "asynchronous": {
                                            'optional': false,
                                            'type': <mglossary.T.Type<string>>['boolean', {}],
                                        },
                                        "type": {
                                            'optional': false,
                                            'type': <mglossary.T.Type<string>>['reference', {
                                                'context': <mglossary.T.Context<string>>['local', {}],
                                                'type': "TypeReference",
                                                'arguments': d({}),
                                            }],
                                        },
                                    })],
                                    "interface": <mglossary.T.Type<string>>['reference', {
                                        'context': <mglossary.T.Context<string>>['local', {}],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }],
                                    "nothing": <mglossary.T.Type<string>>['group', d({})],
                                })],
                            },
                        })]],
                    },
                    "imports": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['group', d({})]],
                    },
                    "interfaces": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['reference', {
                            'context': <mglossary.T.Context<string>>['local', {}],
                            'type': "Interface",
                            'arguments': d({}),
                        }]],
                    },
                    "parameters": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['group', d({})]],
                    },
                    "types": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['group', d({
                            "parameters": {
                                'optional': false,
                                'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['group', d({})]],
                            },
                            "type": {
                                'optional': false,
                                'type': <mglossary.T.Type<string>>['reference', {
                                    'context': <mglossary.T.Context<string>>['local', {}],
                                    'type': "Type",
                                    'arguments': d({}),
                                }],
                            },
                        })]],
                    },
                })]),
                "Interface": type(<mglossary.T.Type<string>>['taggedUnion', d({
                    "group": <mglossary.T.Type<string>>['group', d({
                        "members": {
                            'optional': false,
                            'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['reference', {
                                'context': <mglossary.T.Context<string>>['local', {}],
                                'type': "Interface",
                                'arguments': d({}),
                            }]],
                        },
                    })],
                    "method": <mglossary.T.Type<string>>['group', d({
                        "data": {
                            'optional': false,
                            'type': <mglossary.T.Type<string>>['taggedUnion', d({
                                "not set": <mglossary.T.Type<string>>['group', d({})],
                                "set": <mglossary.T.Type<string>>['reference', {
                                    'context': <mglossary.T.Context<string>>['local', {}],
                                    'type': "TypeReference",
                                    'arguments': d({}),
                                }],
                            })],
                        },
                        "interface": {
                            'optional': false,
                            'type': <mglossary.T.Type<string>>['taggedUnion', d({
                                "not set": <mglossary.T.Type<string>>['group', d({})],
                                "set": <mglossary.T.Type<string>>['group', d({
                                    "interface": {
                                        'optional': false,
                                        'type': <mglossary.T.Type<string>>['reference', {
                                            'context': <mglossary.T.Context<string>>['local', {}],
                                            'type': "Interface",
                                            'arguments': d({}),
                                        }],
                                    },
                                    "managed": {
                                        'optional': false,
                                        'type': <mglossary.T.Type<string>>['boolean', {}],
                                    },
                                })],
                            })],
                        },
                    })],
                    "reference": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "InterfaceReference",
                        'arguments': d({}),
                    }],
                })]),
                "InterfaceReference": type( <mglossary.T.Type<string>>['group', d({
                    "context": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['reference', {
                            'context': <mglossary.T.Context<string>>['local', {}],
                            'type': "Context",
                            'arguments': d({}),
                        }],
                    },
                    "interface": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['string', {}],
                    },
                })]),
                "Type":type( <mglossary.T.Type<string>>['taggedUnion', d({
                    "array": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                        'arguments': d({}),
                    }],
                    "boolean": <mglossary.T.Type<string>>['group', d({})],
                    "computed": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                        'arguments': d({}),
                    }],
                    "dictionary": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                        'arguments': d({}),
                    }],
                    "group": <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['group', d({
                        "optional": {
                            'optional': false,
                            'type': <mglossary.T.Type<string>>['boolean', {}],
                        },
                        "type": {
                            'optional': false,
                            'type': <mglossary.T.Type<string>>['reference', {
                                'context': <mglossary.T.Context<string>>['local', {}],
                                'type': "Type",
                                'arguments': d({}),
                            }],
                        },
                    })]],
                    "nested": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                        'arguments': d({}),
                    }],
                    "null": <mglossary.T.Type<string>>['group', d({})],
                    "number": <mglossary.T.Type<string>>['group', d({})],
                    "optional": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                        'arguments': d({}),
                    }],
                    "type parameter": <mglossary.T.Type<string>>['string', {}],
                    "glossary parameter": <mglossary.T.Type<string>>['string', {}],
                    "reference": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "TypeReference",
                        'arguments': d({}),
                    }],
                    "string": <mglossary.T.Type<string>>['group', d({})],
                    "taggedUnion": <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                        'arguments': d({}),
                    }]],
                })]),
                "TypeReference":type( <mglossary.T.Type<string>>['group', d({
                    "context": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['reference', {
                            'context': <mglossary.T.Context<string>>['local', {}],
                            'type': "Context",
                            'arguments': d({}),
                        }],
                    },
                    "type": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['string', {}],
                    },
                    "arguments": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['reference', {
                            'context': <mglossary.T.Context<string>>['local', {}],
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
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Glossary",
                        'arguments': pd.d({}),
                    },
                    'managed input interface': ['not set', {}],
                    'output interface': ['set', {
                        'context': <mglossary.T.Context<string>>['import', {
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