import * as pr from 'pareto-core-raw'

import * as mmoduleDefinition from "./import_moduleDefinition"
import * as mproject from "./import_project"
import * as mglossary from "./import_glossary"

const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

export const $: mproject.TModule = {
    'definition': {
        'glossary': {
            'imports': d({
                "fp": "lib-fountain-pen",
            }),
            'parameters': d({
                "Annotation": null,
            }),
            'templates': d({}),
            'types': d({
                "Context": <mglossary.TType>['taggedUnion', d({
                    "import": <mglossary.TType>['template', {
                        'context': <mglossary.TContext>['local', null],
                        'arguments': d({
                            "RererencedType": <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', null],
                                'type': "string",
                            }],
                        }),
                        'template': "Reference",
                    }],
                    "local": <mglossary.TType>['group', d({})],
                })],
                "Glossary": <mglossary.TType>['group', d({
                    "callbacks": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "context": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "Context",
                                }],
                            },
                            "data": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "OptionalTypeReference",
                                }],
                            },
                            "interface": {
                                'optional': true,
                                'type': <mglossary.TType>['template', {
                                    'context': <mglossary.TContext>['local', null],
                                    'arguments': d({
                                        "RererencedType": <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['local', null],
                                            'type': "string",
                                        }],
                                    }),
                                    'template': "Reference",
                                }],
                            },
                        })]],
                    },
                    "functions": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "async": {
                                'optional': true,
                                'type': <mglossary.TType>['boolean', null],
                            },
                            "data": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "TypeReference",
                                }],
                            },
                            "return value": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "TypeReference",
                                }],
                            },
                        })]],
                    },
                    "imports": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "namespace": {
                        'optional': true,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Namespace",
                        }],
                    },
                    "parameters": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "pipes": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "in": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "InterfaceReference",
                                }],
                            },
                            "out": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "InterfaceReference",
                                }],
                            },
                        })]],
                    },
                })],
                "Interface": <mglossary.TType>['group', d({
                    "group": {
                        'optional': true,
                        'type': <mglossary.TType>['group', d({
                            "members": {
                                'optional': true,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "Interface",
                                }]],
                            },
                        })],
                    },
                    "method": {
                        'optional': true,
                        'type': <mglossary.TType>['group', d({
                            "data": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "OptionalTypeReference",
                                }],
                            },
                            "interface": {
                                'optional': true,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "null": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['group', d({
                                        "interface": {
                                            'optional': true,
                                            'type': <mglossary.TType>['template', {
                                                'context': <mglossary.TContext>['local', null],
                                                'arguments': d({
                                                    "RererencedType": <mglossary.TType>['reference', {
                                                        'context': <mglossary.TContext>['local', null],
                                                        'type': "string",
                                                    }],
                                                }),
                                                'template': "Reference",
                                            }],
                                        },
                                    })],
                                })],
                            },
                        })],
                    },
                    "reference": {
                        'optional': true,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "InterfaceReference",
                        }],
                    },
                })],
                "InterfaceReference": <mglossary.TType>['group', d({
                    "context": {
                        'optional': true,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Context",
                        }],
                    },
                    "interface": {
                        'optional': true,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "string",
                                }],
                            }),
                            'template': "Reference",
                        }],
                    },
                })],
                "Namespace": <mglossary.TType>['group', d({
                    "interfaces": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Interface",
                        }]],
                    },
                    "namespaces": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Namespace",
                        }]],
                    },
                    "templates": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "parameters": {
                                'optional': true,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                            },
                            "type": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "Type",
                                }],
                            },
                        })]],
                    },
                    "types": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Type",
                        }]],
                    },
                })],
                "OptionalTypeReference": <mglossary.TType>['taggedUnion', d({
                    "not set": <mglossary.TType>['group', d({})],
                    "set": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "TypeReference",
                    }],
                })],
                "Type": <mglossary.TType>['group', d({})],
                "TypeReference": <mglossary.TType>['group', d({
                    "context": {
                        'optional': true,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Context",
                        }],
                    },
                    "namespaces": {
                        'optional': true,
                        'type': <mglossary.TType>['array', <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "string",
                                }],
                            }),
                            'template': "Reference",
                        }]],
                    },
                    "type": {
                        'optional': true,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "string",
                                }],
                            }),
                            'template': "Reference",
                        }],
                    },
                })],
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