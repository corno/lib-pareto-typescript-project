import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    null_,
    string as str,
    reference,
    reference as ref,
    typeReference,
    boolean as bln,
    number as nr,
    nested,
    template,
    dictionary, group as grp, member, taggedUnion, types, _function, group, externalTypeReference
} from "../../../../pub/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "../../../../pub/dist/modules/moduleDefinition"

import * as mglossary from "../../../../pub/dist/modules/glossary"


const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
        }),
        'parameters': d({
            "Annotation": null,
        }),
        'namespace': {
            'namespaces': d<mglossary.TNamespace>({
                "resolved": {
                    'namespaces': d({
                        "types": {
                            'namespaces': d({}),
                            'templates': d({}),
                            'types': d({}),
                            'interfaces': d({}),
                        },
                    }),
                    'templates': d({}),
                    'types': d({}),
                    'interfaces': d({}),
                },
                "unresolved": {
                    'namespaces': d<mglossary.TNamespace>({
                        "types": {
                            'namespaces': d({}),
                            'templates': d({}),
                            'types': d<mglossary.TType>({
                                // "Glossary": ['group', {
                                //     'callbacks': ['dictionary', ['group', {
                                //         'context': ['reference', {
                                //             'context': ['local', null],
                                //             'namespaces': a([]),
                                //             'type': "Context",
                                //         }],
                                //         'data': ['reference', {
                                //             'context': ['local', null],
                                //             'namespaces': a([]),
                                //             'type': "OptionalTypeReference",
                                //         }],
                                //         'interface': "#####################MReference",
                                //     }]],
                                //     'functions': ['dictionary', ['group', {
                                //         'async': ['boolean', null],
                                //         'data': ['reference', {
                                //             'context': ['local', null],
                                //             'namespaces': a([]),
                                //             'type': "TypeReference",
                                //         }],
                                //         'return value': ['reference', {
                                //             'context': ['local', null],
                                //             'namespaces': a([]),
                                //             'type': "TypeReference",
                                //         }],
                                //     }]],
                                //     'imports': ['dictionary', ['group', {}]],
                                //     'namespace': ['reference', {
                                //         'context': ['local', null],
                                //         'namespaces': a([]),
                                //         'type': "Namespace",
                                //     }],
                                //     'parameters': ['dictionary', ['group', {}]],
                                //     'pipes': ['dictionary', ['group', {
                                //         'in': ['reference', {
                                //             'context': ['local', null],
                                //             'namespaces': a([]),
                                //             'type': "InterfaceReference",
                                //         }],
                                //         'out': ['reference', {
                                //             'context': ['local', null],
                                //             'namespaces': a([]),
                                //             'type': "InterfaceReference",
                                //         }],
                                //     }]],
                                // }],
                                // "Interface": ['group', d({})],
                                // "Namespace": ['group', {
                                //     'interfaces': ['dictionary', ['reference', {
                                //         'context': ['local', null],
                                //         'namespaces': a([]),
                                //         'type': "Interface",
                                //     }]],
                                //     'namespaces': ['dictionary', ['reference', {
                                //         'context': ['local', null],
                                //         'namespaces': a([]),
                                //         'type': "Namespace",
                                //     }]],
                                //     'templates': ['dictionary', ['reference', {
                                //         'context': ['local', null],
                                //         'namespaces': a([]),
                                //         'type': "Template",
                                //     }]],
                                //     'types': ['dictionary', ['reference', {
                                //         'context': ['local', null],
                                //         'namespaces': a([]),
                                //         'type': "Type",
                                //     }]],
                                // }],
                                // "Type": ['group', d({})],
                            }),
                            'interfaces': d({}),
                        },
                    }),
                    'templates': d({}),
                    'types': d({
                        "root": ['reference', {
                            'context': ['local', null],
                            'namespaces': a(["types"]),
                            'type': "Glossary",
                        }],
                    }),
                    'interfaces': d({}),
                },
            }),
            'templates': d({}),
            'types': d({}),
            'interfaces': d({}),
        },
        'functions': d({}),
        'callbacks': d({
            "Serialize": {
                'data': {
                    'context': ['local', null],
                    'namespaces': a([]),
                    'type': "Glossary",
                },
                'context': ['import', "fp"],
                'interface': "Line",
            },
        }),
        'pipes': d({}),
    },
    'api': {
        'imports': d({
            'common': "glo-pareto-common"
        }),
        'algorithms': d({
            'createSerializer': {
                'definition': ['callback', {
                    'callback': "Serialize",
                }],
                'type': ['constructor', {
                    'configuration data': {
                        'context': ['import', "common"],
                        'namespaces': a([]),
                        'type': "Null",
                    },
                    'dependencies': d({
                        'compare': ['function', {
                            'context': ['import', "collation"],
                            'function': "IsABeforeB",
                        }],
                        'enrichedArrayForEach': ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedArrayForEach",
                        }],
                        'enrichedDictionaryForEach': ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedDictionaryForEach",
                        }],
                    }),
                }],
            },
        }),
    },
}