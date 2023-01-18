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
    dictionary, group as grp, member, taggedUnion, types, _function, group, typeReference, externalTypeReference, parameter, namespacedTypeReference
} from "../../glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "../../moduleDefinition/api/shorthands.p"

import * as malgorithm from "../../algorithm"
import * as mglossary from "../../glossary"
import * as mliana from "../../liana"


const d = pr.wrapRawDictionary
const a = pr.wrapRawArray


export const $$: api.CcreateLiana2ParetoMapper = ($d) => {
    return ($) => {
        function generateTypes(optional: boolean): mglossary.TNamespace {
            return {
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
                                                    'optional': optional,
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
                                                            'arguments': d({
                                                                "RererencedType": ref($.type)
                                                            }),
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
                    "Root": ['reference', {
                        'context': ['local', null],
                        'namespaces': a(["types"]),
                        'type': $.root
                    }]
                }),
                'interfaces': d({}),
            }
        }
        function generateBlock($: mliana.TLocalType): malgorithm.TFunctionBlock {
            return {
                'returnExpression': generateExpression($)
            }
        }
        function generateExpression($: mliana.TLocalType): malgorithm.TExpression {
            switch ($[0]) {
                case 'array':
                    return pl.cc($[1], ($) => {
                        return ['mapArray', {
                            'block': generateBlock($.type),
                        }]
                    })
                case 'boolean':
                    return pl.cc($[1], ($) => {
                        return ['implementMe', "liana2Pareto"]
                    })
                case 'component':
                    return pl.cc($[1], ($) => {
                        return ['call', {
                            'function': $.type
                        }]
                    })
                case 'dictionary':
                    return pl.cc($[1], ($) => {
                        return ['mapDictionary', {
                            'block': generateBlock($.type),
                        }]
                    })
                case 'group':
                    return pl.cc($[1], ($) => {
                        return ['groupInitializer', {
                            'properties': $.properties.map(($) => {
                                return generateExpression($.type)
                            })
                        }]
                    })
                case 'string':
                    return pl.cc($[1], ($) => {
                        return ['implementMe', "liana2Pareto"]
                    })
                case 'taggedUnion':
                    return pl.cc($[1], ($) => {
                        return ['switch', {
                            'cases': $.options.map(($) => {
                                return generateBlock($.type)
                            })
                        }]
                    })
                default: return pl.au($[0])
            }
        }
        return {
            'definition': {
                'glossary': {
                    'imports': d({
                        "fp": "lib-fountain-pen",
                    }),
                    'parameters': d({
                        "Annotation": null,
                    }),
                    'namespace': {
                        'templates': d({
                            "Reference": {

                                'type': group({
                                    "referenced": member(parameter("ReferencedType"), true),
                                    "annotation": member(parameter("Annotation"), true),
                                    "value": member(str()),
                                }),
                                'parameters': d({
                                    "ReferencedType": null,
                                }),
                            },
                        }),
                        'types': types({}),
                        'interfaces': d({}),
                        'namespaces': d({
                            "unresolved": generateTypes(true),
                            "resolved": generateTypes(false),
                        }),

                    },
                    'functions': d({}),
                    'callbacks': d({
                        "Serialize": {
                            'data': typeReference("Root"),
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
                                })
                            }]
                        },
                    })
                },
            },
            'implementation': {
                'implementations': d({
                    "createSerializer": {
                        'constructor': true,
                        'type': ['function', {
                            'block': <malgorithm.TFunctionBlock>{
                                'innerFunctions': $.globalTypes.map(($, key) => {
                                    return {
                                        'definition': {
                                            'data': namespacedTypeReference(["unresolved"], key),
                                            'return value': namespacedTypeReference(["resolved"], key),
                                        },
                                        'block': generateBlock($.type)
                                    }
                                }),
                                'returnExpression': ['switch', {
                                    'cases': d({}),
                                }]
                            }
                        }]
                    }
                }),
            },
        }
    }
}