import * as pr from "pareto-core-raw"
import { externalTypeReference } from "../../../../pub/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "../../../../pub/dist/modules/moduleDefinition"

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
            'namespaces': d({
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
                    'namespaces': d({
                        "types": {
                            'namespaces': d({}),
                            'templates': d({}),
                            'types': d({}),
                            'interfaces': d({}),
                        },
                    }),
                    'templates': d({}),
                    'types': d({
                        "root": ['reference', {
                            'context': ['local', null],
                            'namespaces': a(["types"]),
                            'type': "FOO",
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
        }),
        'algorithms': d({
            "createSerializer": {
                'definition': ['callback', {
                    'callback': "Serialize",
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "compare": ['function', {
                            'context': ['import', "collation"],
                            'function': "IsABeforeB",
                        }],
                        "enrichedArrayForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedArrayForEach",
                        }],
                        "enrichedDictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedDictionaryForEach",
                        }],
                    }),
                }],
            },
        }),
    },
}