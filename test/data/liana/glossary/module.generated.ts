import * as pr from 'pareto-core-data'

import * as gmoduleDefinition from "./import_moduleDefinition"
import * as gproject from "./import_project"
import * as gglossary from "./import_glossary"

const d = pd.wrapRawDictionary
const a = pr.wrapRawArray

export const $: gproject.TModule = {
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
                    'type': <gglossary.T.Type>['taggedUnion', d({
                        "import": <gglossary.T.Type>['string', {}],
                        "local": <gglossary.T.Type>['group', d({})],
                    })]
                },
                "Glossary": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type>['group', d({
                        "functions": {
                            'optional': false,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                "data": {
                                    'optional': false,
                                    'type': <gglossary.T.Type>['reference', {
                                        'context': <gglossary.TContext>['local', {}],
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }],
                                },
                                "managed input interface": {
                                    'optional': false,
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "not set": <gglossary.T.Type>['group', d({})],
                                        "set": <gglossary.T.Type>['reference', {
                                            'context': <gglossary.TContext>['local', {}],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }],
                                    })],
                                },
                                "output interface": {
                                    'optional': false,
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "not set": <gglossary.T.Type>['group', d({})],
                                        "set": <gglossary.T.Type>['reference', {
                                            'context': <gglossary.TContext>['local', {}],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }],
                                    })],
                                },
                                "return type": {
                                    'optional': false,
                                    'type': <gglossary.T.Type>['taggedUnion', d({
                                        "data": <gglossary.T.Type>['group', d({
                                            "asynchronous": {
                                                'optional': false,
                                                'type': <gglossary.T.Type>['boolean', {}],
                                            },
                                            "type": {
                                                'optional': false,
                                                'type': <gglossary.T.Type>['reference', {
                                                    'context': <gglossary.TContext>['local', {}],
                                                    'type': "TypeReference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "interface": <gglossary.T.Type>['reference', {
                                            'context': <gglossary.TContext>['local', {}],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }],
                                        "nothing": <gglossary.T.Type>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "imports": {
                            'optional': false,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                        },
                        "interfaces": {
                            'optional': false,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['local', {}],
                                'type': "Interface",
                                'arguments': d({}),
                            }]],
                        },
                        "parameters": {
                            'optional': false,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                        },
                        "templates": {
                            'optional': false,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                                "parameters": {
                                    'optional': false,
                                    'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({})]],
                                },
                                "type": {
                                    'optional': false,
                                    'type': <gglossary.T.Type>['reference', {
                                        'context': <gglossary.TContext>['local', {}],
                                        'type': "Type",
                                        'arguments': d({}),
                                    }],
                                },
                            })]],
                        },
                        "types": {
                            'optional': false,
                            'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['local', {}],
                                'type': "Type",
                                'arguments': d({}),
                            }]],
                        },
                    })]
                },
                "Interface": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type>['taggedUnion', d({
                        "group": <gglossary.T.Type>['group', d({
                            "members": {
                                'optional': false,
                                'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['reference', {
                                    'context': <gglossary.TContext>['local', {}],
                                    'type': "Interface",
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                        "method": <gglossary.T.Type>['group', d({
                            "data": {
                                'optional': false,
                                'type': <gglossary.T.Type>['taggedUnion', d({
                                    "not set": <gglossary.T.Type>['group', d({})],
                                    "set": <gglossary.T.Type>['reference', {
                                        'context': <gglossary.TContext>['local', {}],
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                            "interface": {
                                'optional': false,
                                'type': <gglossary.T.Type>['taggedUnion', d({
                                    "not set": <gglossary.T.Type>['group', d({})],
                                    "set": <gglossary.T.Type>['reference', {
                                        'context': <gglossary.TContext>['local', {}],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                        })],
                        "reference": <gglossary.T.Type>['reference', {
                            'context': <gglossary.TContext>['local', {}],
                            'type': "InterfaceReference",
                            'arguments': d({}),
                        }],
                    })]
                },
                "InterfaceReference": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type>['group', d({
                        "context": {
                            'optional': false,
                            'type': <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['local', {}],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "interface": {
                            'optional': false,
                            'type': <gglossary.T.Type>['string', {}],
                        },
                    })]
                },
                "Type": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type>['taggedUnion', d({
                        "array": <gglossary.T.Type>['reference', {
                            'context': <gglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "boolean": <gglossary.T.Type>['group', d({})],
                        "computed": <gglossary.T.Type>['reference', {
                            'context': <gglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "dictionary": <gglossary.T.Type>['reference', {
                            'context': <gglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "group": <gglossary.T.Type>['dictionary', <gglossary.T.Type>['group', d({
                            "optional": {
                                'optional': false,
                                'type': <gglossary.T.Type>['boolean', {}],
                            },
                            "type": {
                                'optional': false,
                                'type': <gglossary.T.Type>['reference', {
                                    'context': <gglossary.TContext>['local', {}],
                                    'type': "Type",
                                    'arguments': d({}),
                                }],
                            },
                        })]],
                        "nested": <gglossary.T.Type>['reference', {
                            'context': <gglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "null": <gglossary.T.Type>['group', d({})],
                        "number": <gglossary.T.Type>['group', d({})],
                        "parameter": <gglossary.T.Type>['string', {}],
                        "reference": <gglossary.T.Type>['reference', {
                            'context': <gglossary.TContext>['local', {}],
                            'type': "TypeReference",
                            'arguments': d({}),
                        }],
                        "string": <gglossary.T.Type>['group', d({})],
                        "taggedUnion": <gglossary.T.Type>['dictionary', <gglossary.T.Type>['reference', {
                            'context': <gglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }]],
                        "template": <gglossary.T.Type>['group', d({
                            "arguments": {
                                'optional': false,
                                'type': <gglossary.T.Type>['dictionary', <gglossary.T.Type>['reference', {
                                    'context': <gglossary.TContext>['local', {}],
                                    'type': "Type",
                                    'arguments': d({}),
                                }]],
                            },
                            "context": {
                                'optional': false,
                                'type': <gglossary.T.Type>['reference', {
                                    'context': <gglossary.TContext>['local', {}],
                                    'type': "Context",
                                    'arguments': d({}),
                                }],
                            },
                            "template": {
                                'optional': false,
                                'type': <gglossary.T.Type>['string', {}],
                            },
                        })],
                    })]
                },
                "TypeReference": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type>['group', d({
                        "context": {
                            'optional': false,
                            'type': <gglossary.T.Type>['reference', {
                                'context': <gglossary.TContext>['local', {}],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "type": {
                            'optional': false,
                            'type': <gglossary.T.Type>['string', {}],
                        },
                    })]
                },
            }),
            'interfaces': d({}),
            'functions': d({
                "Serialize": {
                    'data': {
                        'context': <gglossary.TContext>['local', {}],
                        'type': "Glossary",
                        'arguments': d({}),
                    },
                    'managed input interface': ['not set', {}],
                    'output interface': ['set', {
                        'context': <gglossary.TContext>['import', {
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
                "foreach": "res-pareto-foreach",
            }),
            'algorithms': d({
                "createSerializer": {
                    'definition': {
                        'context': ['local', {}],
                        'function': "Serialize",
                    },
                    'type': ['constructor', {
                        'configuration data': [false],
                        'dependencies': d({
                            "arrayForEach": {
                                'context': ['import', "[object Object]"],
                                'function': "ArrayForEach",
                            },
                            "dictionaryForEach": {
                                'context': ['import', "[object Object]"],
                                'function': "DictionaryForEach",
                            },
                            "enrichedArrayForEach": {
                                'context': ['import', "[object Object]"],
                                'function': "EnrichedArrayForEach",
                            },
                            "enrichedDictionaryForEach": {
                                'context': ['import', "[object Object]"],
                                'function': "EnrichedDictionaryForEach",
                            },
                        }),
                    }],
                },
            }),
        },
    },
    'implementation': {
        'implementations': d({}),
    },
}