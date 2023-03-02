import * as pd from 'pareto-core-data'
import {
    dictionary, group as grp, member, taggedUnion, types, group, type, method
} from "../../../../../pub/dist/submodules/glossary/shorthands"

import * as gproject from "../../../../../pub/dist/submodules/project"

import * as gglossary from "../../../../../pub/dist/submodules/glossary"

const d = pd.d

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({}),
            'parameters': d({
                "Annotation": null,
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
                //         'context': <gglossary.T.Context<string>>['local', null],
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
                                    'context': <gglossary.T.Context<string>>['local', null],
                                    'type': "TypeReference",
                                }],
                            },
                            "managed input interface": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <gglossary.T.Type<string>>['group', d({})],
                                    "set": <gglossary.T.Type<string>>['reference', {
                                        'context': <gglossary.T.Context<string>>['local', null],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                            "output interface": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <gglossary.T.Type<string>>['group', d({})],
                                    "set": <gglossary.T.Type<string>>['reference', {
                                        'context': <gglossary.T.Context<string>>['local', null],
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
                                            'type': <gglossary.T.Type<string>>['boolean', null],
                                        },
                                        "type": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<string>>['reference', {
                                                'context': <gglossary.T.Context<string>>['local', null],
                                                'type': "TypeReference",
                                            }],
                                        },
                                    })],
                                    "interface": <gglossary.T.Type<string>>['reference', {
                                        'context': <gglossary.T.Context<string>>['local', null],
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
                            'context': <gglossary.T.Context<string>>['local', null],
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
                                    'context': <gglossary.T.Context<string>>['local', null],
                                    'type': "Type",
                                }],
                            },
                        })]],
                    },
                    "types": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['reference', {
                            'context': <gglossary.T.Context<string>>['local', null],
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
                                    'context': <gglossary.T.Context<string>>['local', null],
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
                                        'context': <gglossary.T.Context<string>>['local', null],
                                        'type': "TypeReference",
                                    }],
                                })],
                            },
                            "interface": {
                                'optional': false,
                                'type': <gglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <gglossary.T.Type<string>>['group', d({})],
                                    "set": <gglossary.T.Type<string>>['reference', {
                                        'context': <gglossary.T.Context<string>>['local', null],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                        })],
                    },
                    "reference": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['reference', {
                            'context': <gglossary.T.Context<string>>['local', null],
                            'type': "InterfaceReference",
                        }],
                    },
                })]),
                "InterfaceReference": type(<gglossary.T.Type<string>>['group', d({
                    "context": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['reference', {
                            'context': <gglossary.T.Context<string>>['local', null],
                            'type': "Context",
                        }],
                    },
                    // "interface": {
                    //     'optional': false,
                    //     'type': <gglossary.T.Type<string>>['template', {
                    //         'context': <gglossary.T.Context<string>>['local', null],
                    //         'arguments': d({
                    //             "RererencedType": <gglossary.T.Type<string>>['null', {}],
                    //         }),
                    //         'template': "Reference",
                    //     }],
                    // },
                })]),
                "Type": type(<gglossary.T.Type<string>>['taggedUnion', d({
                    "array": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', null],
                        'type': "Type",
                    }],
                    "boolean": <gglossary.T.Type<string>>['group', d({})],
                    "computed": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', null],
                        'type': "Type",
                    }],
                    "dictionary": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', null],
                        'type': "Type",
                    }],
                    "group": <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['group', d({
                        "optional": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['boolean', null],
                        },
                        "type": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['reference', {
                                'context': <gglossary.T.Context<string>>['local', null],
                                'type': "Type",
                            }],
                        },
                    })]],
                    "nested": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', null],
                        'type': "Type",
                    }],
                    "null": <gglossary.T.Type<string>>['group', d({})],
                    "number": <gglossary.T.Type<string>>['group', d({})],
                    "optional": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', null],
                        'type': "Type",
                    }],
                    "parameter": <gglossary.T.Type<string>>['string', null],
                    "reference": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', null],
                        'type': "TypeReference",
                    }],
                    "string": <gglossary.T.Type<string>>['group', d({})],
                    "taggedUnion": <gglossary.T.Type<string>>['reference', {
                        'context': <gglossary.T.Context<string>>['local', null],
                        'type': "Type",
                    }],
                    "template": <gglossary.T.Type<string>>['group', d({
                        "arguments": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['dictionary', <gglossary.T.Type<string>>['reference', {
                                'context': <gglossary.T.Context<string>>['local', null],
                                'type': "Type",
                            }]],
                        },
                        "context": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['reference', {
                                'context': <gglossary.T.Context<string>>['local', null],
                                'type': "Context",
                            }],
                        },
                        "template": {
                            'optional': false,
                            'type': <gglossary.T.Type<string>>['string', null],
                        },
                    })],
                })]),
                "TypeReference": type(<gglossary.T.Type<string>>['group', d({
                    "context": {
                        'optional': false,
                        'type': <gglossary.T.Type<string>>['reference', {
                            'context': <gglossary.T.Context<string>>['local', null],
                            'type': "Context",
                        }],
                    },
                    // "type": {
                    //     'optional': false,
                    //     'type': <gglossary.T.Type<string>>['template', {
                    //         'context': <gglossary.T.Context<string>>['local', null],
                    //         'arguments': d({
                    //             "RererencedType": <gglossary.T.Type<string>>['null', {}],
                    //         }),
                    //         'template': "Reference",
                    //     }],
                    // },
                })]),
            }),
            'interfaces': d({
                "FOO": ['group', {
                    'members': d({
                        "BAR": method(null, null)
                    })
                }]
            }),
            'functions': d({}),
        },
        'api': {
            'imports': d({
                'common': "glo-pareto-common"
            }),
            'algorithms': d({}),
        },
    },
    'implementation': ['pareto', null],
}