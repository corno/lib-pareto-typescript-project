import * as pd from 'pareto-core-data'
import {
    dictionary, group as grp, member, taggedUnion, types, group, type
} from "../../../../../pub/dist/submodules/glossary/shorthands"

import * as mproject from "../../../../../pub/dist/submodules/project"

import * as mglossary from "../../../../../pub/dist/submodules/glossary"

type GRP = {
    type: mglossary.T.Type<string>
    optional?: boolean
}

const d = pd.wrapRawDictionary

export const $: mproject.T.Module = {
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
            //         'type': <mglossary.T.Type<string>>['group', d({
            //             "annotation": {
            //                 'type': <mglossary.T.Type<string>>['string', {}],
            //             },
            //             "name": {
            //                 'type': <mglossary.T.Type<string>>['string', {}],
            //             },
            //         })],
            //     },
            // }),
            'types': d({
                // "Context": type(['taggedUnion', d({
                //     "import": <mglossary.T.Type<string>>['template', {
                //         'context': <mglossary.T.Context<string>>['local', {}],
                //         'arguments': d({
                //             //"RererencedType": <mglossary.TTypeReference>['null', {}],
                //         }),
                //         'template': "Reference",
                //     }],
                //     "local": <mglossary.T.Type<string>>['group', d({})],
                // })]),
                "Glossary": type(<mglossary.T.Type<string>>['group', d({
                    "functions": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['group', d({
                            "data": {
                                'optional': false,
                                'type': <mglossary.T.Type<string>>['reference', {
                                    'context': <mglossary.T.Context<string>>['local', {}],
                                    'type': "TypeReference",
                                }],
                            },
                            "managed input interface": {
                                'optional': false,
                                'type': <mglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <mglossary.T.Type<string>>['group', d({})],
                                    "set": <mglossary.T.Type<string>>['reference', {
                                        'context': <mglossary.T.Context<string>>['local', {}],
                                        'type': "InterfaceReference",
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
                                            }],
                                        },
                                    })],
                                    "interface": <mglossary.T.Type<string>>['reference', {
                                        'context': <mglossary.T.Context<string>>['local', {}],
                                        'type': "InterfaceReference",
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
                        }]],
                    },
                    "parameters": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['group', d({})]],
                    },
                    "templates": {
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
                                }],
                            },
                        })]],
                    },
                    "types": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['reference', {
                            'context': <mglossary.T.Context<string>>['local', {}],
                            'type': "Type",
                        }]],
                    },
                })]),
                "Interface": type(<mglossary.T.Type<string>>['group', d({
                    "group": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['group', d({
                            "members": {
                                'optional': false,
                                'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['reference', {
                                    'context': <mglossary.T.Context<string>>['local', {}],
                                    'type': "Interface",
                                }]],
                            },
                        })],
                    },
                    "method": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['group', d({
                            "data": {
                                'optional': false,
                                'type': <mglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <mglossary.T.Type<string>>['group', d({})],
                                    "set": <mglossary.T.Type<string>>['reference', {
                                        'context': <mglossary.T.Context<string>>['local', {}],
                                        'type': "TypeReference",
                                    }],
                                })],
                            },
                            "interface": {
                                'optional': false,
                                'type': <mglossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <mglossary.T.Type<string>>['group', d({})],
                                    "set": <mglossary.T.Type<string>>['reference', {
                                        'context': <mglossary.T.Context<string>>['local', {}],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                        })],
                    },
                    "reference": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['reference', {
                            'context': <mglossary.T.Context<string>>['local', {}],
                            'type': "InterfaceReference",
                        }],
                    },
                })]),
                "InterfaceReference": type(<mglossary.T.Type<string>>['group', d({
                    "context": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['reference', {
                            'context': <mglossary.T.Context<string>>['local', {}],
                            'type': "Context",
                        }],
                    },
                    // "interface": {
                    //     'optional': false,
                    //     'type': <mglossary.T.Type<string>>['template', {
                    //         'context': <mglossary.T.Context<string>>['local', {}],
                    //         'arguments': d({
                    //             "RererencedType": <mglossary.T.Type<string>>['null', {}],
                    //         }),
                    //         'template': "Reference",
                    //     }],
                    // },
                })]),
                "Type": type(<mglossary.T.Type<string>>['taggedUnion', d({
                    "array": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                    }],
                    "boolean": <mglossary.T.Type<string>>['group', d({})],
                    "computed": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                    }],
                    "dictionary": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Type",
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
                            }],
                        },
                    })]],
                    "nested": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                    }],
                    "null": <mglossary.T.Type<string>>['group', d({})],
                    "number": <mglossary.T.Type<string>>['group', d({})],
                    "optional": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                    }],
                    "parameter": <mglossary.T.Type<string>>['string', {}],
                    "reference": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "TypeReference",
                    }],
                    "string": <mglossary.T.Type<string>>['group', d({})],
                    "taggedUnion": <mglossary.T.Type<string>>['reference', {
                        'context': <mglossary.T.Context<string>>['local', {}],
                        'type': "Type",
                    }],
                    "template": <mglossary.T.Type<string>>['group', d({
                        "arguments": {
                            'optional': false,
                            'type': <mglossary.T.Type<string>>['dictionary', <mglossary.T.Type<string>>['reference', {
                                'context': <mglossary.T.Context<string>>['local', {}],
                                'type': "Type",
                            }]],
                        },
                        "context": {
                            'optional': false,
                            'type': <mglossary.T.Type<string>>['reference', {
                                'context': <mglossary.T.Context<string>>['local', {}],
                                'type': "Context",
                            }],
                        },
                        "template": {
                            'optional': false,
                            'type': <mglossary.T.Type<string>>['string', {}],
                        },
                    })],
                })]),
                "TypeReference": type(<mglossary.T.Type<string>>['group', d({
                    "context": {
                        'optional': false,
                        'type': <mglossary.T.Type<string>>['reference', {
                            'context': <mglossary.T.Context<string>>['local', {}],
                            'type': "Context",
                        }],
                    },
                    // "type": {
                    //     'optional': false,
                    //     'type': <mglossary.T.Type<string>>['template', {
                    //         'context': <mglossary.T.Context<string>>['local', {}],
                    //         'arguments': d({
                    //             "RererencedType": <mglossary.T.Type<string>>['null', {}],
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