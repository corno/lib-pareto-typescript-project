import * as pr from 'pareto-core-data'

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
            'types': d({
                "Context": {
                    'parameters': d({}),
                    'type': <mglossary.T.Type>['taggedUnion', d({
                        "import": <mglossary.T.Type>['string', {}],
                        "local": <mglossary.T.Type>['group', d({})],
                    })]
                },
                "Glossary": {
                    'parameters': d({}),
                    'type': <mglossary.T.Type>['group', d({
                        "functions": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "data": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }],
                                },
                                "managed input interface": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "not set": <mglossary.T.Type>['group', d({})],
                                        "set": <mglossary.T.Type>['reference', {
                                            'context': <mglossary.TContext>['local', {}],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }],
                                    })],
                                },
                                "output interface": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "not set": <mglossary.T.Type>['group', d({})],
                                        "set": <mglossary.T.Type>['reference', {
                                            'context': <mglossary.TContext>['local', {}],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }],
                                    })],
                                },
                                "return type": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['taggedUnion', d({
                                        "data": <mglossary.T.Type>['group', d({
                                            "asynchronous": {
                                                'optional': false,
                                                'type': <mglossary.T.Type>['boolean', {}],
                                            },
                                            "type": {
                                                'optional': false,
                                                'type': <mglossary.T.Type>['reference', {
                                                    'context': <mglossary.TContext>['local', {}],
                                                    'type': "TypeReference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "interface": <mglossary.T.Type>['reference', {
                                            'context': <mglossary.TContext>['local', {}],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }],
                                        "nothing": <mglossary.T.Type>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "imports": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                        "interfaces": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Interface",
                                'arguments': d({}),
                            }]],
                        },
                        "parameters": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                        },
                        "templates": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                                "parameters": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({})]],
                                },
                                "type": {
                                    'optional': false,
                                    'type': <mglossary.T.Type>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': "Type",
                                        'arguments': d({}),
                                    }],
                                },
                            })]],
                        },
                        "types": {
                            'optional': false,
                            'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Type",
                                'arguments': d({}),
                            }]],
                        },
                    })]
                },
                "Interface": {
                    'parameters': d({}),
                    'type': <mglossary.T.Type>['taggedUnion', d({
                        "group": <mglossary.T.Type>['group', d({
                            "members": {
                                'optional': false,
                                'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "Interface",
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                        "method": <mglossary.T.Type>['group', d({
                            "data": {
                                'optional': false,
                                'type': <mglossary.T.Type>['taggedUnion', d({
                                    "not set": <mglossary.T.Type>['group', d({})],
                                    "set": <mglossary.T.Type>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                            "interface": {
                                'optional': false,
                                'type': <mglossary.T.Type>['taggedUnion', d({
                                    "not set": <mglossary.T.Type>['group', d({})],
                                    "set": <mglossary.T.Type>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                        })],
                        "reference": <mglossary.T.Type>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "InterfaceReference",
                            'arguments': d({}),
                        }],
                    })]
                },
                "InterfaceReference": {
                    'parameters': d({}),
                    'type': <mglossary.T.Type>['group', d({
                        "context": {
                            'optional': false,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "interface": {
                            'optional': false,
                            'type': <mglossary.T.Type>['string', {}],
                        },
                    })]
                },
                "Type": {
                    'parameters': d({}),
                    'type': <mglossary.T.Type>['taggedUnion', d({
                        "array": <mglossary.T.Type>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "boolean": <mglossary.T.Type>['group', d({})],
                        "computed": <mglossary.T.Type>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "dictionary": <mglossary.T.Type>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "group": <mglossary.T.Type>['dictionary', <mglossary.T.Type>['group', d({
                            "optional": {
                                'optional': false,
                                'type': <mglossary.T.Type>['boolean', {}],
                            },
                            "type": {
                                'optional': false,
                                'type': <mglossary.T.Type>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "Type",
                                    'arguments': d({}),
                                }],
                            },
                        })]],
                        "nested": <mglossary.T.Type>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "null": <mglossary.T.Type>['group', d({})],
                        "number": <mglossary.T.Type>['group', d({})],
                        "parameter": <mglossary.T.Type>['string', {}],
                        "reference": <mglossary.T.Type>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "TypeReference",
                            'arguments': d({}),
                        }],
                        "string": <mglossary.T.Type>['group', d({})],
                        "taggedUnion": <mglossary.T.Type>['dictionary', <mglossary.T.Type>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }]],
                        "template": <mglossary.T.Type>['group', d({
                            "arguments": {
                                'optional': false,
                                'type': <mglossary.T.Type>['dictionary', <mglossary.T.Type>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "Type",
                                    'arguments': d({}),
                                }]],
                            },
                            "context": {
                                'optional': false,
                                'type': <mglossary.T.Type>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "Context",
                                    'arguments': d({}),
                                }],
                            },
                            "template": {
                                'optional': false,
                                'type': <mglossary.T.Type>['string', {}],
                            },
                        })],
                    })]
                },
                "TypeReference": {
                    'parameters': d({}),
                    'type': <mglossary.T.Type>['group', d({
                        "context": {
                            'optional': false,
                            'type': <mglossary.T.Type>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "type": {
                            'optional': false,
                            'type': <mglossary.T.Type>['string', {}],
                        },
                    })]
                },
            }),
            'interfaces': d({}),
            'functions': d({
                "Enrich": {
                    'data': {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "Root",
                        'arguments': d({}),
                    },
                    'managed input interface': ['not set', {}],
                    'output interface': ['not set', {}],
                    'return type': ['data', {
                        'type': {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Root",
                            'arguments': d({}),
                        },
                        'asynchronous': false,
                    }],
                },
                "Serialize": {
                    'data': {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "Root",
                        'arguments': d({}),
                    },
                    'managed input interface': ['not set', {}],
                    'output interface': ['set', {
                        'context': <mglossary.TContext>['import', {
                            'glossary': "fp",
                            'arguments': d({}),
                        }],
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
                        'function': "Enrich",
                    },
                    'type': ['constructor', {
                        'configuration data': [false],
                        'dependencies': d({}),
                    }],
                },
                "createSerializer": {
                    'definition': {
                        'function': "Serialize",
                    },
                    'type': ['constructor', {
                        'configuration data': [false],
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