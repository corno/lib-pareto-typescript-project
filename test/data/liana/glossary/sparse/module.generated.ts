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
                "fp": {},
            }),
            'parameters': d({
                "Annotation": {},
            }),
            'templates': d({}),
            'types': d({
                "Context": <mglossary.TType>['taggedUnion', d({
                    "import": <mglossary.TType>['template', {
                        'context': <mglossary.TContext>['local', {}],
                        'arguments': d({
                            "RererencedType": <mglossary.TType>['null', {}],
                        }),
                        'template': "Reference",
                    }],
                    "local": <mglossary.TType>['group', d({})],
                })],
                "Glossary": <mglossary.TType>['group', d({
                    "functions": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "data": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': {
                                        'annotation': "XXX",
                                        'name': "TypeReference",
                                    },
                                }],
                            },
                            "managed input interface": {
                                'optional': true,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "not set": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': {
                                            'annotation': "XXX",
                                            'name': "InterfaceReference",
                                        },
                                    }],
                                })],
                            },
                            "output interface": {
                                'optional': true,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "not set": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': {
                                            'annotation': "XXX",
                                            'name': "InterfaceReference",
                                        },
                                    }],
                                })],
                            },
                            "return type": {
                                'optional': true,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "data": <mglossary.TType>['group', d({
                                        "asynchronous": {
                                            'optional': true,
                                            'type': <mglossary.TType>['boolean', {}],
                                        },
                                        "type": {
                                            'optional': true,
                                            'type': <mglossary.TType>['reference', {
                                                'context': <mglossary.TContext>['local', {}],
                                                'type': {
                                                    'annotation': "XXX",
                                                    'name': "TypeReference",
                                                },
                                            }],
                                        },
                                    })],
                                    "interface": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': {
                                            'annotation': "XXX",
                                            'name': "InterfaceReference",
                                        },
                                    }],
                                    "nothing": <mglossary.TType>['group', d({})],
                                })],
                            },
                        })]],
                    },
                    "imports": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "interfaces": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': {
                                'annotation': "XXX",
                                'name': "Interface",
                            },
                        }]],
                    },
                    "parameters": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
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
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': {
                                        'annotation': "XXX",
                                        'name': "Type",
                                    },
                                }],
                            },
                        })]],
                    },
                    "types": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': {
                                'annotation': "XXX",
                                'name': "Type",
                            },
                        }]],
                    },
                })],
                "Interface": <mglossary.TType>['taggedUnion', d({
                    "group": <mglossary.TType>['group', d({
                        "members": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': {
                                    'annotation': "XXX",
                                    'name': "Interface",
                                },
                            }]],
                        },
                    })],
                    "method": <mglossary.TType>['group', d({
                        "data": {
                            'optional': true,
                            'type': <mglossary.TType>['taggedUnion', d({
                                "not set": <mglossary.TType>['group', d({})],
                                "set": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': {
                                        'annotation': "XXX",
                                        'name': "TypeReference",
                                    },
                                }],
                            })],
                        },
                        "interface": {
                            'optional': true,
                            'type': <mglossary.TType>['taggedUnion', d({
                                "not set": <mglossary.TType>['group', d({})],
                                "set": <mglossary.TType>['group', d({
                                    "interface": {
                                        'optional': true,
                                        'type': <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['local', {}],
                                            'type': {
                                                'annotation': "XXX",
                                                'name': "Interface",
                                            },
                                        }],
                                    },
                                    "managed": {
                                        'optional': true,
                                        'type': <mglossary.TType>['boolean', {}],
                                    },
                                })],
                            })],
                        },
                    })],
                    "reference": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': {
                            'annotation': "XXX",
                            'name': "InterfaceReference",
                        },
                    }],
                })],
                "InterfaceReference": <mglossary.TType>['group', d({
                    "context": {
                        'optional': true,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': {
                                'annotation': "XXX",
                                'name': "Context",
                            },
                        }],
                    },
                    "interface": {
                        'optional': true,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', {}],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', {}],
                            }),
                            'template': "Reference",
                        }],
                    },
                })],
                "Type": <mglossary.TType>['taggedUnion', d({
                    "array": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': {
                            'annotation': "XXX",
                            'name': "Type",
                        },
                    }],
                    "boolean": <mglossary.TType>['group', d({})],
                    "computed": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': {
                            'annotation': "XXX",
                            'name': "Type",
                        },
                    }],
                    "dictionary": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': {
                            'annotation': "XXX",
                            'name': "Type",
                        },
                    }],
                    "group": <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                        "optional": {
                            'optional': true,
                            'type': <mglossary.TType>['boolean', {}],
                        },
                        "type": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': {
                                    'annotation': "XXX",
                                    'name': "Type",
                                },
                            }],
                        },
                    })]],
                    "nested": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': {
                            'annotation': "XXX",
                            'name': "Type",
                        },
                    }],
                    "null": <mglossary.TType>['group', d({})],
                    "number": <mglossary.TType>['group', d({})],
                    "optional": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': {
                            'annotation': "XXX",
                            'name': "Type",
                        },
                    }],
                    "parameter": <mglossary.TType>['string', {}],
                    "reference": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': {
                            'annotation': "XXX",
                            'name': "TypeReference",
                        },
                    }],
                    "string": <mglossary.TType>['group', d({})],
                    "taggedUnion": <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': {
                            'annotation': "XXX",
                            'name': "Type",
                        },
                    }]],
                    "template": <mglossary.TType>['group', d({
                        "arguments": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': {
                                    'annotation': "XXX",
                                    'name': "Type",
                                },
                            }]],
                        },
                        "context": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': {
                                    'annotation': "XXX",
                                    'name': "Context",
                                },
                            }],
                        },
                        "template": {
                            'optional': true,
                            'type': <mglossary.TType>['string', {}],
                        },
                    })],
                })],
                "TypeReference": <mglossary.TType>['group', d({
                    "context": {
                        'optional': true,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': {
                                'annotation': "XXX",
                                'name': "Context",
                            },
                        }],
                    },
                    "type": {
                        'optional': true,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', {}],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', {}],
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
                "common": "glo-pareto-common",
            }),
            'algorithms': d({}),
        },
    },
    'implementation': {
        'implementations': d({}),
    },
}