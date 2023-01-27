import * as pr from 'pareto-core-raw'

import * as mmoduleDefinition from "./import_moduleDefinition"
import * as mproject from "./import_project"
import * as mglossary from "./import_glossary"

const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

export const $: mproject.TModule = {
    'definition': {
        'glossary': {
            'imports': d({}),
            'parameters': d({
                "Annotation": null,
            }),
            'templates': d({
                "Reference": {
                    'parameters': d({
                        "ReferencedType": null,
                    }),
                    'type': <mglossary.TType>['group', d({
                        "annotation": {
                            'type': <mglossary.TType>['string', null],
                        },
                        "name": {
                            'type': <mglossary.TType>['string', null],
                        },
                    })],
                },
            }),
            'types': d({
                "Context": <mglossary.TType>['taggedUnion', d({
                    "import": <mglossary.TType>['template', {
                        'context': <mglossary.TContext>['local', null],
                        'arguments': d({
                            "RererencedType": <mglossary.TType>['null', null],
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
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "TypeReference",
                                }],
                            },
                            "managed input interface": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "not set": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                            "output interface": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "not set": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
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
                                            'type': <mglossary.TType>['boolean', null],
                                        },
                                        "type": {
                                            'optional': false,
                                            'type': <mglossary.TType>['reference', {
                                                'context': <mglossary.TContext>['local', null],
                                                'type': "TypeReference",
                                            }],
                                        },
                                    })],
                                    "interface": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
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
                            'context': <mglossary.TContext>['local', null],
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
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "Type",
                                }],
                            },
                        })]],
                    },
                    "types": {
                        'optional': false,
                        'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Type",
                        }]],
                    },
                })],
                "Interface": <mglossary.TType>['group', d({
                    "group": {
                        'optional': false,
                        'type': <mglossary.TType>['group', d({
                            "members": {
                                'optional': false,
                                'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                    'context': <mglossary.TContext>['local', null],
                                    'type': "Interface",
                                }]],
                            },
                        })],
                    },
                    "method": {
                        'optional': false,
                        'type': <mglossary.TType>['group', d({
                            "data": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "not set": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "TypeReference",
                                    }],
                                })],
                            },
                            "interface": {
                                'optional': false,
                                'type': <mglossary.TType>['taggedUnion', d({
                                    "not set": <mglossary.TType>['group', d({})],
                                    "set": <mglossary.TType>['reference', {
                                        'context': <mglossary.TContext>['local', null],
                                        'type': "InterfaceReference",
                                    }],
                                })],
                            },
                        })],
                    },
                    "reference": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "InterfaceReference",
                        }],
                    },
                })],
                "InterfaceReference": <mglossary.TType>['group', d({
                    "context": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Context",
                        }],
                    },
                    "interface": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
                            }),
                            'template': "Reference",
                        }],
                    },
                })],
                "Type": <mglossary.TType>['taggedUnion', d({
                    "array": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Type",
                    }],
                    "boolean": <mglossary.TType>['group', d({})],
                    "computed": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Type",
                    }],
                    "dictionary": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Type",
                    }],
                    "group": <mglossary.TType>['dictionary', <mglossary.TType>['group', d({
                        "optional": {
                            'optional': false,
                            'type': <mglossary.TType>['boolean', null],
                        },
                        "type": {
                            'optional': false,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', null],
                                'type': "Type",
                            }],
                        },
                    })]],
                    "nested": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Type",
                    }],
                    "null": <mglossary.TType>['group', d({})],
                    "number": <mglossary.TType>['group', d({})],
                    "optional": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Type",
                    }],
                    "parameter": <mglossary.TType>['string', null],
                    "reference": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "TypeReference",
                    }],
                    "string": <mglossary.TType>['group', d({})],
                    "taggedUnion": <mglossary.TType>['reference', {
                        'context': <mglossary.TContext>['local', null],
                        'type': "Type",
                    }],
                    "template": <mglossary.TType>['group', d({
                        "arguments": {
                            'optional': false,
                            'type': <mglossary.TType>['dictionary', <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', null],
                                'type': "Type",
                            }]],
                        },
                        "context": {
                            'optional': false,
                            'type': <mglossary.TType>['reference', {
                                'context': <mglossary.TContext>['local', null],
                                'type': "Context",
                            }],
                        },
                        "template": {
                            'optional': false,
                            'type': <mglossary.TType>['string', null],
                        },
                    })],
                })],
                "TypeReference": <mglossary.TType>['group', d({
                    "context": {
                        'optional': false,
                        'type': <mglossary.TType>['reference', {
                            'context': <mglossary.TContext>['local', null],
                            'type': "Context",
                        }],
                    },
                    "type": {
                        'optional': false,
                        'type': <mglossary.TType>['template', {
                            'context': <mglossary.TContext>['local', null],
                            'arguments': d({
                                "RererencedType": <mglossary.TType>['null', null],
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