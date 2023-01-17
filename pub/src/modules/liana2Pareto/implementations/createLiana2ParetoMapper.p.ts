import * as pl from 'pareto-core-lib'
import * as pr from 'pareto-core-raw'

import * as api from "../api"

import {
    array,
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    template,
    dictionary, group as grp, member, taggedUnion, types, _function, group, typeReference, externalTypeReference
} from "../../glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "../../moduleDefinition/api/shorthands.p"

import * as mglossary from "../../glossary"
import * as mliana from "../../liana"


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
                                    'types': $.globalTypes.map(($) => {
                                        function mapType($: mliana.TLocalType): mglossary.TType {
                                            switch ($[0]) {
                                                case 'array':
                                                    return pl.cc($[1], ($) => {
                                                        return ['array', mapType($.type)]
                                                    })
                                                case 'boolean':
                                                    return pl.cc($[1], ($) => {
                                                        return ['boolean', null]
                                                    })
                                                case 'component':
                                                    return pl.cc($[1], ($) => {
                                                        return ['reference', {
                                                            'context': ['local', null],
                                                            'namespaces': pl.createEmptyArray(),
                                                            'type': $.type,
                                                        }]
                                                    })
                                                case 'dictionary':
                                                    return pl.cc($[1], ($) => {
                                                        return ['dictionary', mapType($.type)]
                                                    })
                                                case 'group':
                                                    return pl.cc($[1], ($) => {
                                                        return ['group', $.properties.map(($) => {
                                                            return {
                                                                'type': mapType($.type),
                                                                'optional': false,
                                                            }
                                                        })]
                                                    })
                                                case 'string':
                                                    return pl.cc($[1], ($) => {
                                                        switch ($.constrained[0]) {
                                                            case 'no':
                                                                return pl.cc($.constrained[1], ($) => {
                                                                    return ['string', null]
                                                                })
                                                            case 'yes':
                                                                return pl.cc($.constrained[1], ($) => {
                                                                    return ['template', {
                                                                        'template': "Reference",
                                                                        'arguments': d({}),
                                                                    }]
                                                                })
                                                            default: return pl.au($.constrained[0])
                                                        }
                                                    })
                                                case 'taggedUnion':
                                                    return pl.cc($[1], ($) => {
                                                        return ['taggedUnion', $.options.map(($) => {
                                                            return mapType($.type)
                                                        })]
                                                    })
                                                default: return pl.au($[0])
                                            }

                                        }
                                        return mapType($.type)
                                    }),
                                    'interfaces': d({}),
                                },
                            }),
                            'types': types({
                                "root": ['reference', {
                                    'context': ['local', null],
                                    'namespaces': a(["types"]),
                                    'type': $.root
                                }]
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
                        'data': typeReference("Glossary"),
                        'context': ['import', "fp"],
                        'interface': "Line",
                    },
                }),
                'pipes': d({}),
            },
            'api': {
                'imports': d({
                    "common": "glo-pareto-common",
                }),
                'algorithms': d({
                    "createSerializer": {
                        'definition': ['callback', {
                            'callback': "Serialize"
                        }],
                        'type': ['constructor', {
                            'configuration data': externalTypeReference("common", "Null"),
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