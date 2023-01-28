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
                                    'type': "TypeReference",
                                }],
                            },
                            "managed input interface": {
                                'optional': true,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "not set": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', {}],
                                        'type': "InterfaceReference",
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
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['group', d({})]],
                    },
                    "interfaces": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Interface",
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
                                }],
                            },
                        })]],
                    },
                    "types": {
                        'optional': true,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Type",
                        }]],
                    },
                })],
                "Interface": <mglossary.TType>['taggedUnion', d({
                    "group": <mglossary.TType>['group', d({
                        "members": {
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Interface",
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
                                }],
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
                        'optional': true,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', {}],
                            'type': "Context",
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
                            'optional': true,
                            'type': <mglossary.TType>['boolean', {}],
                        },
                        "type": {
                            'optional': true,
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
                            'optional': true,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Type",
                            }]],
                        },
                        "context": {
                            'optional': true,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', {}],
                                'type': "Context",
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
                            'type': "Context",
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