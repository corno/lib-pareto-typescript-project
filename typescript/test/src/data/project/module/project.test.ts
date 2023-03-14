import * as pd from 'pareto-core-data'
import {
    dictionary, group as grp, member, taggedUnion, types, group, type, builderMethod, interfaceMethod,
} from "../../../../../pub/dist/submodules/glossary/shorthands"
import { external } from "../../../../../pub/dist/submodules/project/shorthands"

import * as g_project from "../../../../../pub/dist/submodules/project"

import * as g_glossary from "../../../../../pub/dist/submodules/glossary"

const d = pd.d

export const $: g_project.T.Project._ltype.library.main<pd.SourceLocation> = {
    'glossary': {
        'root': {
            'parameters': d({
                "Annotation": null,
            }),
            'imports': d({}),
            // 'templates': d({
            //     "Reference": {
            //         'parameters': d({
            //             "ReferencedType": {},
            //         }),
            //         'type': <g_glossary.T.Type<string>>['group', d({
            //             "annotation": {
            //                 'type': <g_glossary.T.Type<string>>['string', {}],
            //             },
            //             "name": {
            //                 'type': <g_glossary.T.Type<string>>['string', {}],
            //             },
            //         })],
            //     },
            // }),
            'types': d({
                // "Context": type(['taggedUnion', d({
                //     "import": <g_glossary.T.Type<string>>['template', {
                //         'context': <g_glossary.T.Context<string>>['local', null],
                //         'arguments': d({
                //             //"RererencedType": <g_glossary.TTypeReference>['null', {}],
                //         }),
                //         'template': "Reference",
                //     }],
                //     "local": <g_glossary.T.Type<string>>['group', d({})],
                // })]),
                "Glossary": type(<g_glossary.T.Type<string>>['group', d({
                    "functions": {
                        'optional': false,
                        'type': <g_glossary.T.Type<string>>['dictionary', <g_glossary.T.Type<string>>['group', d({
                            "data": {
                                'optional': false,
                                'type': <g_glossary.T.Type<string>>['reference', {
                                    'context': <g_glossary.T.Context<string>>['local', null],
                                    'type': "TypeReference",
                                }],
                            },
                            "managed input interface": {
                                'optional': false,
                                'type': <g_glossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <g_glossary.T.Type<string>>['group', d({})],
                                    "set": <g_glossary.T.Type<string>>['reference', {
                                        'context': <g_glossary.T.Context<string>>['local', null],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                            "output interface": {
                                'optional': false,
                                'type': <g_glossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <g_glossary.T.Type<string>>['group', d({})],
                                    "set": <g_glossary.T.Type<string>>['reference', {
                                        'context': <g_glossary.T.Context<string>>['local', null],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                            "return type": {
                                'optional': false,
                                'type': <g_glossary.T.Type<string>>['taggedUnion', d({
                                    "data": <g_glossary.T.Type<string>>['group', d({
                                        "asynchronous": {
                                            'optional': false,
                                            'type': <g_glossary.T.Type<string>>['boolean', null],
                                        },
                                        "type": {
                                            'optional': false,
                                            'type': <g_glossary.T.Type<string>>['reference', {
                                                'context': <g_glossary.T.Context<string>>['local', null],
                                                'type': "TypeReference",
                                            }],
                                        },
                                    })],
                                    "interface": <g_glossary.T.Type<string>>['reference', {
                                        'context': <g_glossary.T.Context<string>>['local', null],
                                        'type': "InterfaceReference",
                                    }],
                                    "nothing": <g_glossary.T.Type<string>>['group', d({})],
                                })],
                            },
                        })]],
                    },
                    "imports": {
                        'optional': false,
                        'type': <g_glossary.T.Type<string>>['dictionary', <g_glossary.T.Type<string>>['group', d({})]],
                    },
                    "interfaces": {
                        'optional': false,
                        'type': <g_glossary.T.Type<string>>['dictionary', <g_glossary.T.Type<string>>['reference', {
                            'context': <g_glossary.T.Context<string>>['local', null],
                            'type': "Interface",
                        }]],
                    },
                    "parameters": {
                        'optional': false,
                        'type': <g_glossary.T.Type<string>>['dictionary', <g_glossary.T.Type<string>>['group', d({})]],
                    },
                    "templates": {
                        'optional': false,
                        'type': <g_glossary.T.Type<string>>['dictionary', <g_glossary.T.Type<string>>['group', d({
                            "parameters": {
                                'optional': false,
                                'type': <g_glossary.T.Type<string>>['dictionary', <g_glossary.T.Type<string>>['group', d({})]],
                            },
                            "type": {
                                'optional': false,
                                'type': <g_glossary.T.Type<string>>['reference', {
                                    'context': <g_glossary.T.Context<string>>['local', null],
                                    'type': "Type",
                                }],
                            },
                        })]],
                    },
                    "types": {
                        'optional': false,
                        'type': <g_glossary.T.Type<string>>['dictionary', <g_glossary.T.Type<string>>['reference', {
                            'context': <g_glossary.T.Context<string>>['local', null],
                            'type': "Type",
                        }]],
                    },
                })]),
                "Interface": type(<g_glossary.T.Type<string>>['group', d({
                    "group": {
                        'optional': false,
                        'type': <g_glossary.T.Type<string>>['group', d({
                            "members": {
                                'optional': false,
                                'type': <g_glossary.T.Type<string>>['dictionary', <g_glossary.T.Type<string>>['reference', {
                                    'context': <g_glossary.T.Context<string>>['local', null],
                                    'type': "Interface",
                                }]],
                            },
                        })],
                    },
                    "method": {
                        'optional': false,
                        'type': <g_glossary.T.Type<string>>['group', d({
                            "data": {
                                'optional': false,
                                'type': <g_glossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <g_glossary.T.Type<string>>['group', d({})],
                                    "set": <g_glossary.T.Type<string>>['reference', {
                                        'context': <g_glossary.T.Context<string>>['local', null],
                                        'type': "TypeReference",
                                    }],
                                })],
                            },
                            "interface": {
                                'optional': false,
                                'type': <g_glossary.T.Type<string>>['taggedUnion', d({
                                    "not set": <g_glossary.T.Type<string>>['group', d({})],
                                    "set": <g_glossary.T.Type<string>>['reference', {
                                        'context': <g_glossary.T.Context<string>>['local', null],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                        })],
                    },
                    "reference": {
                        'optional': false,
                        'type': <g_glossary.T.Type<string>>['reference', {
                            'context': <g_glossary.T.Context<string>>['local', null],
                            'type': "InterfaceReference",
                        }],
                    },
                })]),
                "InterfaceReference": type(<g_glossary.T.Type<string>>['group', d({
                    "context": {
                        'optional': false,
                        'type': <g_glossary.T.Type<string>>['reference', {
                            'context': <g_glossary.T.Context<string>>['local', null],
                            'type': "Context",
                        }],
                    },
                    // "interface": {
                    //     'optional': false,
                    //     'type': <g_glossary.T.Type<string>>['template', {
                    //         'context': <g_glossary.T.Context<string>>['local', null],
                    //         'arguments': d({
                    //             "RererencedType": <g_glossary.T.Type<string>>['null', {}],
                    //         }),
                    //         'template': "Reference",
                    //     }],
                    // },
                })]),
                "Type": type(<g_glossary.T.Type<string>>['taggedUnion', d({
                    "array": <g_glossary.T.Type<string>>['reference', {
                        'context': <g_glossary.T.Context<string>>['local', null],
                        'type': "Type",
                    }],
                    "boolean": <g_glossary.T.Type<string>>['group', d({})],
                    "computed": <g_glossary.T.Type<string>>['reference', {
                        'context': <g_glossary.T.Context<string>>['local', null],
                        'type': "Type",
                    }],
                    "dictionary": <g_glossary.T.Type<string>>['reference', {
                        'context': <g_glossary.T.Context<string>>['local', null],
                        'type': "Type",
                    }],
                    "group": <g_glossary.T.Type<string>>['dictionary', <g_glossary.T.Type<string>>['group', d({
                        "optional": {
                            'optional': false,
                            'type': <g_glossary.T.Type<string>>['boolean', null],
                        },
                        "type": {
                            'optional': false,
                            'type': <g_glossary.T.Type<string>>['reference', {
                                'context': <g_glossary.T.Context<string>>['local', null],
                                'type': "Type",
                            }],
                        },
                    })]],
                    "nested": <g_glossary.T.Type<string>>['reference', {
                        'context': <g_glossary.T.Context<string>>['local', null],
                        'type': "Type",
                    }],
                    "null": <g_glossary.T.Type<string>>['group', d({})],
                    "number": <g_glossary.T.Type<string>>['group', d({})],
                    "optional": <g_glossary.T.Type<string>>['reference', {
                        'context': <g_glossary.T.Context<string>>['local', null],
                        'type': "Type",
                    }],
                    "parameter": <g_glossary.T.Type<string>>['string', null],
                    "reference": <g_glossary.T.Type<string>>['reference', {
                        'context': <g_glossary.T.Context<string>>['local', null],
                        'type': "TypeReference",
                    }],
                    "string": <g_glossary.T.Type<string>>['group', d({})],
                    "taggedUnion": <g_glossary.T.Type<string>>['reference', {
                        'context': <g_glossary.T.Context<string>>['local', null],
                        'type': "Type",
                    }],
                    "template": <g_glossary.T.Type<string>>['group', d({
                        "arguments": {
                            'optional': false,
                            'type': <g_glossary.T.Type<string>>['dictionary', <g_glossary.T.Type<string>>['reference', {
                                'context': <g_glossary.T.Context<string>>['local', null],
                                'type': "Type",
                            }]],
                        },
                        "context": {
                            'optional': false,
                            'type': <g_glossary.T.Type<string>>['reference', {
                                'context': <g_glossary.T.Context<string>>['local', null],
                                'type': "Context",
                            }],
                        },
                        "template": {
                            'optional': false,
                            'type': <g_glossary.T.Type<string>>['string', null],
                        },
                    })],
                })]),
                "TypeReference": type(<g_glossary.T.Type<string>>['group', d({
                    "context": {
                        'optional': false,
                        'type': <g_glossary.T.Type<string>>['reference', {
                            'context': <g_glossary.T.Context<string>>['local', null],
                            'type': "Context",
                        }],
                    },
                    // "type": {
                    //     'optional': false,
                    //     'type': <g_glossary.T.Type<string>>['template', {
                    //         'context': <g_glossary.T.Context<string>>['local', null],
                    //         'arguments': d({
                    //             "RererencedType": <g_glossary.T.Type<string>>['null', {}],
                    //         }),
                    //         'template': "Reference",
                    //     }],
                    // },
                })]),
            }),
            'type': ['asynchronous', {
                'interfaces': d({
                    "FOO": ['choice', {
                        'options': d({
                            "BAR": interfaceMethod(null, null)
                        })
                    }]
                }),
                'resources': d({}),
                'functions': d<g_glossary.T.Glossary._ltype.asynchronous.functions.D<pd.SourceLocation>>({}),
            }]
        },
        'imports': d({}),
    },
        'api': {
            'root': {
                'algorithms': d({}),
            },
            'imports': d({
            }),
        },
        'implementation': ['pareto', null],
}