import * as pl from "pareto-core-lib"
import * as pr from "pareto-core-raw"

import * as api from "../api"

import {
    array,
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    template,
    dictionary, group as grp, member, taggedUnion, types, _function, group
} from "../../glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "../../moduleDefinition/api/shorthands.p"


const d = pr.wrapRawDictionary
const a = pr.wrapRawArray


export const icreateLiana2ParetoMapper: api.CcreateLiana2ParetoMapper = ($d) => {
    return ($) => {
        return {
            'glossary': {
                'imports': d({
                    "fp": "lib-fountain-pen",
                }),
                'parameters': d({
                    "Annotation": null,
                }),
                'namespace': {
                    'types': types({}),
                    'interfaces': d({}),
                    'namespaces': d({
                        "unresolved": {
                            'namespaces': d({
                                "types": {
                                    'types': types({}),
                                    'interfaces': d({}),
                                },
                            }),
                            'types': types({
                                "root": ['leaf', ['reference', {
                                    'context': ['local', null],
                                    'namespaces': a(["types"]),
                                    'type': $.root
                                }]]
                            }),
                            'interfaces': d({}),
                        },
                        "resolved": {
                            'namespaces': d({
                                "types": {
                                    'types': types({}),
                                    'interfaces': d({}),
                                },
                            }),
                            'types': types({}),
                            'interfaces': d({}),
                        }
                    }),

                },
                'functions': d({}),
                'callbacks': d({
                    "Serialize": {
                        'data': ['type', reference("Glossary")],
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
                            'callback': "Serialize"
                        }],
                        'type': ['constructor', {
                            'configuration data': ['null', null],
                            'dependencies': d({
                                "enrichedDictionaryForEach": ['callback', {
                                    'context': ['import', "temp"],
                                    'callback': "EnrichedDictionaryForEach",
                                }],
                                "enrichedArrayForEach": ['callback', {
                                    'context': ['import', "temp"],
                                    'callback': "EnrichedArrayForEach",
                                }],
                                "compare": ['function', {
                                    'context': ['import', "collation"],
                                    'function': "IsABeforeB",
                                }],
                            })
                        }]
                    },
                })
            },
        }
    }
}