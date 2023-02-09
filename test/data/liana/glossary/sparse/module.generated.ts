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
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                                "data": {
                                    'optional': true,
                                    'type': <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }],
                                },
                                "managed input interface": {
                                    'optional': true,
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
                                    'optional': true,
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
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                        },
                        "interfaces": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Interface",
                                'arguments': d({}),
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
                                        'type': "Type",
                                        'arguments': d({}),
                                    }],
                                },
                            })]],
                        },
                        "types": {
                            'optional': true,
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
                                'optional': true,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "Interface",
                                    'arguments': d({}),
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
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                            "interface": {
                                'optional': true,
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
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "interface": {
                            'optional': true,
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
                                'optional': true,
                                'type': <mglossary.TType>['boolean', {}],
                            },
                            "type": {
                                'optional': true,
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
                                'optional': true,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "Type",
                                    'arguments': d({}),
                                }]],
                            },
                            "context": {
                                'optional': true,
                                'type': <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', {}],
                                    'type': "Context",
                                    'arguments': d({}),
                                }],
                            },
                            "template": {
                                'optional': true,
                                'type': <mglossary.TType>['string', {}],
                            },
                        })],
                    })]
                },
                "TypeReference": {
                    'parameters': d({}),
                    'type': <mglossary.TType>['group', d({
                        "context": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "type": {
                            'optional': true,
                            'type': <mglossary.TType>['string', {}],
                        },
                    })]
                },
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