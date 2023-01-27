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
                "Annotation": {},
            }),
            'templates': d({
                "Reference": {
                    'parameters': d({
                        "ReferencedType": {},
                    }),
                    'type': <mglossary.TType>['group', d({})],
                },
            }),
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
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "data": {
                                'optional': false,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "TypeReference",
                                }],
                            },
                            "managed input interface": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "not set": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                            "output interface": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "not set": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                            "return type": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "data": <mglossary.TType>['group', d({
                                        "asynchronous": {
                                            'optional': false,
                                            'type': <mglossary.TType>['boolean', {}],
                                        },
                                        "type": {
                                            'optional': false,
                                            'type': <mglossary.TType>['reference', {
                                                'context': <mglossary.TContext>['local', {}],
                                                'type': "TypeReference",
                                            }],
                                        },
                                    })],
                                    "interface": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': "InterfaceReference",
                                    }],
                                    "nothing": <mglossary.TType>['group', d({})],
                                })],
                            },
                        })]],
                    },
                    "imports": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "interfaces": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Interface",
                        }]],
                    },
                    "parameters": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "templates": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                            "parameters": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                            },
                            "type": {
                                'optional': false,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "Type",
                                }],
                            },
                        })]],
                    },
                    "types": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Type",
                        }]],
                    },
                })],
                "Interface": <mglossary.TType>['taggedUnion', d({
                    "group": <mglossary.TType>['group', d({
                        "members": {
                            'optional': false,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Interface",
                            }]],
                        },
                    })],
                    "method": <mglossary.TType>['group', d({
                        "data": {
                            'optional': false,
                            'type': <mglossary.TType>['taggedUnion', d({
                                "not set": <mglossary.TType>['group', d({})],
                                "set": <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "TypeReference",
                                }],
                            })],
                        },
                        "interface": {
                            'optional': false,
                            'type': <mglossary.TType>['taggedUnion', d({
                                "not set": <mglossary.TType>['group', d({})],
                                "set": <mglossary.TType>['group', d({
                                    "interface": {
                                        'optional': false,
                                        'type': <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['local', {}],
                                            'type': "Interface",
                                        }],
                                    },
                                    "managed": {
                                        'optional': false,
                                        'type': <mglossary.TType>['boolean', {}],
                                    },
                                })],
                            })],
                        },
                    })],
                    "reference": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "InterfaceReference",
                    }],
                })],
                "InterfaceReference": <mglossary.TType>['group', d({
                    "context": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Context",
                        }],
                    },
                    "interface": {
                        'optional': false,
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
                        'type': "Type",
                    }],
                    "boolean": <mglossary.TType>['group', d({})],
                    "computed": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "Type",
                    }],
                    "dictionary": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "Type",
                    }],
                    "group": <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                        "optional": {
                            'optional': false,
                            'type': <mglossary.TType>['boolean', {}],
                        },
                        "type": {
                            'optional': false,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Type",
                            }],
                        },
                    })]],
                    "nested": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "Type",
                    }],
                    "null": <mglossary.TType>['group', d({})],
                    "number": <mglossary.TType>['group', d({})],
                    "optional": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "Type",
                    }],
                    "parameter": <mglossary.TType>['string', {}],
                    "reference": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "TypeReference",
                    }],
                    "string": <mglossary.TType>['group', d({})],
                    "taggedUnion": <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "Type",
                    }]],
                    "template": <mglossary.TType>['group', d({
                        "arguments": {
                            'optional': false,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Type",
                            }]],
                        },
                        "context": {
                            'optional': false,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Context",
                            }],
                        },
                        "template": {
                            'optional': false,
                            'type': <mglossary.TType>['string', {}],
                        },
                    })],
                })],
                "TypeReference": <mglossary.TType>['group', d({
                    "context": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Context",
                        }],
                    },
                    "type": {
                        'optional': false,
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
            'functions': d({
                "Enrich": {
                    'data': {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "Root",
                    },
                    'managed input interface': ['not set', {}],
                    'output interface': ['not set', {}],
                    'return type': ['data', {
                        'type': {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Root",
                        },
                        'asynchronous': false,
                    }],
                },
                "Serialize": {
                    'data': {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "Root",
                    },
                    'managed input interface': ['not set', {}],
                    'output interface': ['set', {
                        'context': <mglossary.TContext>['import', "fp"],
                        'interface': "Line",
                    }],
                    'return type': ['nothing', {}],
                },
            }),
        },
        'api': {
            'imports': d({
                "common": "glo-pareto-common",
            }),
            'algorithms': d({
                "createEnricher": {
                    'definition': {
                        'function': "undefined",
                    },
                    'type': ['foo', {
                        'configuration data': ['not set', {}],
                        'dependencies': d({}),
                    }],
                },
                "createSerializer": {
                    'definition': {
                        'function': "undefined",
                    },
                    'type': ['foo', {
                        'configuration data': ['not set', {}],
                        'dependencies': d({}),
                    }],
                },
            }),
        },
    },
    'implementation': {
        'implementations': d({}),
    },
}