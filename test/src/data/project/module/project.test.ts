import * as pd from 'pareto-core-data'
import {
    dictionary, group as grp, member, taggedUnion, types, group, type
} from "../../../../../pub/dist/submodules/glossary/shorthands"

import * as gproject from "../../../../../pub/dist/submodules/project"

import * as gglossary from "../../../../../pub/dist/submodules/glossary"

const d = pd.d

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({}),
            'parameters': d({
                "Annotation": {},
            }),
            // 'templates': d({
            //     "Reference": {
            //         'parameters': d({
            //             "ReferencedType": {},
            //         }),
            //         'type': <gglossary.T.Type<string>>['group', d({
            //             "annotation": {
            //                 'type': <gglossary.T.Type<string>>['string', {}],
            //             },
            //             "name": {
            //                 'type': <gglossary.T.Type<string>>['string', {}],
            //             },
            //         })],
            //     },
            // }),
            'types': d({
                // "Context": type(['taggedUnion', d({
                //     "import": <gglossary.T.Type<string>>['template', {
                //         'context': <gglossary.T.Context<string>>['local', {}],
                //         'arguments': d({
                //             //"RererencedType": <gglossary.TTypeReference>['null', {}],
                //         }),
                //         'template': "Reference",
                //     }],
                //     "local": <gglossary.T.Type<string>>['group', d({})],
                // })]),
                "Glossary": type(<gglossary.T.Type<string>>['group', d({
                    "functions": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['group', d({
                            "data": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['reference', {
                                    'context': <gglossary.T.Context<string>>['local', {}],
                                    'type': "TypeReference",
                                }],
                            },
                            "managed input interface": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <gglossary.T.Type<string>>['group', d({})],
                                    "set": <gglossary.T.Type<string>>['reference', {
                                        'context': <gglossary.T.Context<string>>['local', {}],
                                        'type': "InterfaceReference",
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
                                            }],
                                        },
                                    })],
                                    "interface": <gglossary.T.Type<string>>['reference', {
                                        'context': <gglossary.T.Context<string>>['local', {}],
                                        'type': "InterfaceReference",
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
                        }]],
                    },
                    "parameters": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['group', d({})]],
                    },
                    "templates": {
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
                                }],
                            },
                        })]],
                    },
                    "types": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['reference', {
                            'context': <gglossary.T.Context<string>>['local', {}],
                            'type': "Type",
                        }]],
                    },
                })]),
                "Interface": type(<gglossary.T.Type<string>>['group', d({
                    "group": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['group', d({
                            "members": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['reference', {
                                    'context': <gglossary.T.Context<string>>['local', {}],
                                    'type': "Interface",
                                }]],
                            },
                        })],
                    },
                    "method": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['group', d({
                            "data": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <gglossary.T.Type<string>>['group', d({})],
                                    "set": <gglossary.T.Type<string>>['reference', {
                                        'context': <gglossary.T.Context<string>>['local', {}],
                                        'type': "TypeReference",
                                    }],
                                })],
                            },
                            "interface": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <gglossary.T.Type<string>>['group', d({})],
                                    "set": <gglossary.T.Type<string>>['reference', {
                                        'context': <gglossary.T.Context<string>>['local', {}],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                        })],
                    },
                    "reference": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['reference', {
                            'context': <gglossary.T.Context<string>>['local', {}],
                            'type': "InterfaceReference",
                        }],
                    },
                })]),
                "InterfaceReference": type(<gglossary.T.Type<string>>['group', d({
                    "context": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['reference', {
                            'context': <gglossary.T.Context<string>>['local', {}],
                            'type': "Context",
                        }],
                    },
                    // "interface": {
                    //     'optional': false,
                    //     'type': <gglossary.T.Type<string>>['template', {
                    //         'context': <gglossary.T.Context<string>>['local', {}],
                    //         'arguments': d({
                    //             "RererencedType": <gglossary.T.Type<string>>['null', {}],
                    //         }),
                    //         'template': "Reference",
                    //     }],
                    // },
                })]),
                "Type": type(<gglossary.T.Type<string>>['taggedUnion', d({
                    "array": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                    }],
                    "boolean": <gglossary.T.Type<string>>['group', d({})],
                    "computed": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                    }],
                    "dictionary": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Type",
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
                            }],
                        },
                    })]],
                    "nested": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                    }],
                    "null": <gglossary.T.Type<string>>['group', d({})],
                    "number": <gglossary.T.Type<string>>['group', d({})],
                    "optional": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                    }],
                    "parameter": <gglossary.T.Type<string>>['string', {}],
                    "reference": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "TypeReference",
                    }],
                    "string": <gglossary.T.Type<string>>['group', d({})],
                    "taggedUnion": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                    }],
                    "template": <gglossary.T.Type<string>>['group', d({
                        "arguments": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['reference', {
                                'context': <gglossary.T.Context<string>>['local', {}],
                                'type': "Type",
                            }]],
                        },
                        "context": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['reference', {
                                'context': <gglossary.T.Context<string>>['local', {}],
                                'type': "Context",
                            }],
                        },
                        "template": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['string', {}],
                        },
                    })],
                })]),
                "TypeReference": type(<gglossary.T.Type<string>>['group', d({
                    "context": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['reference', {
                            'context': <gglossary.T.Context<string>>['local', {}],
                            'type': "Context",
                        }],
                    },
                    // "type": {
                    //     'optional': false,
                    //     'type': <gglossary.T.Type<string>>['template', {
                    //         'context': <gglossary.T.Context<string>>['local', {}],
                    //         'arguments': d({
                    //             "RererencedType": <gglossary.T.Type<string>>['null', {}],
                    //         }),
                    //         'template': "Reference",
                    //     }],
                    // },
                })]),
            }),
            'interfaces': d({}),
            'functions': d({}),
        },
        'api': {
            'imports': d({
                'common': "glo-pareto-common"
            }),
            'algorithms': d({}),
        },
    },
    'implementation': {
        'implementations': d({}),
    },
}