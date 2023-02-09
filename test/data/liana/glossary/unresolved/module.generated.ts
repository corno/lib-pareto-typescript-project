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
            'types': d({
                "Context": {
                    'parameters': d({}),
                    'type': <mglossary.TType>['taggedUnion', d({
                        "import": <mglossary.TType>['string', {}],
                        "local": <mglossary.TType>['group', d({})],
                    })]
                },
                "Glossary": {
                    'parameters': d({}),
                    'type': <mglossary.TType>['group', d({
                        "functions": {
                            'optional': false,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                "data": {
                                    'optional': false,
                                    'type': <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }],
                                },
                                "managed input interface": {
                                    'optional': false,
                                    'type': <mglossary.TType>['taggedUnion', d({
                                        "not set": <mglossary.TType>['group', d({})],
                                        "set": <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['local', {}],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
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
                                            'arguments': d({}),
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
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "interface": <mglossary.TType>['reference', {
                                            'context': <mglossary.TContext>['local', {}],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
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
                                'arguments': d({}),
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
                                        'arguments': d({}),
                                    }],
                                },
                            })]],
                        },
                        "types": {
                            'optional': false,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Type",
                                'arguments': d({}),
                            }]],
                        },
                    })]
                },
                "Interface": {
                    'parameters': d({}),
                    'type': <mglossary.TType>['taggedUnion', d({
                        "group": <mglossary.TType>['group', d({
                            "members": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "Interface",
                                    'arguments': d({}),
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
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                            "interface": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "not set": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                        })],
                        "reference": <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "InterfaceReference",
                            'arguments': d({}),
                        }],
                    })]
                },
                "InterfaceReference": {
                    'parameters': d({}),
                    'type': <mglossary.TType>['group', d({
                        "context": {
                            'optional': false,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "interface": {
                            'optional': false,
                            'type': <mglossary.TType>['string', {}],
                        },
                    })]
                },
                "Type": {
                    'parameters': d({}),
                    'type': <mglossary.TType>['taggedUnion', d({
                        "array": <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "boolean": <mglossary.TType>['group', d({})],
                        "computed": <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "dictionary": <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
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
                                    'arguments': d({}),
                                }],
                            },
                        })]],
                        "nested": <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "null": <mglossary.TType>['group', d({})],
                        "number": <mglossary.TType>['group', d({})],
                        "parameter": <mglossary.TType>['string', {}],
                        "reference": <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "TypeReference",
                            'arguments': d({}),
                        }],
                        "string": <mglossary.TType>['group', d({})],
                        "taggedUnion": <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }]],
                        "template": <mglossary.TType>['group', d({
                            "arguments": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "Type",
                                    'arguments': d({}),
                                }]],
                            },
                            "context": {
                                'optional': false,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "Context",
                                    'arguments': d({}),
                                }],
                            },
                            "template": {
                                'optional': false,
                                'type': <mglossary.TType>['string', {}],
                            },
                        })],
                    })]
                },
                "TypeReference": {
                    'parameters': d({}),
                    'type': <mglossary.TType>['group', d({
                        "context": {
                            'optional': false,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "type": {
                            'optional': false,
                            'type': <mglossary.TType>['string', {}],
                        },
                    })]
                },
            }),
            'interfaces': d({}),
            'functions': d({
                "Serialize": {
                    'data': {
                        'context': <mglossary.TContext>['local', {}],
                        'type': "Glossary",
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
                "foreach": "res-pareto-foreach",
            }),
            'algorithms': d({
                "createSerializer": {
                    'definition': {
                        'context': ['local', {}],
                        'function': "Serialize",
                    },
                    'type': ['constructor', {
                        'configuration data': ['not set', {}],
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