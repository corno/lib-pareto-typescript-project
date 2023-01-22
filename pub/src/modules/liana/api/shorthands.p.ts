import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'

import {
    TGlobalType,
    TLocalType,
    TReference,
    TString,
    T_Reference,
} from "./types.generated";

const d = pr.wrapRawDictionary

function r_imp(name: string, annotation: string): T_Reference {
    return {
        name: name,
        annotation: annotation
    }
}

export function r(name: string): T_Reference {
    return r_imp(name, pr.getLocationInfo(1))
}

export function array(type: TLocalType): TLocalType {
    return ['array', {
        'type': type
    }]
}

function constrainedString($: ReferenceType, steps: Step[], annotation: string): TString {
    return {
        'constrained': ['yes', referenceX($, steps, annotation)],
    }
}

export function constrainedDictionary($: ReferenceType, steps: Step[], type: TLocalType): TLocalType {
    return ['dictionary', {
        'key': constrainedString($, steps, pr.getLocationInfo(1)),
        'type': type
    }]
}

export function dictionary(type: TLocalType): TLocalType {
    return ['dictionary', {
        'key': {
            'constrained': ['no', {
                'type': r_imp("identifier", pr.getLocationInfo(1))
            }]
        },
        'type': type
    }]
}

export function globalType(parameters: string[], type: TLocalType): TGlobalType {
    const temp: { [key: string]: null } = {}
    pr.wrapRawArray(parameters).forEach(($) => {
        temp[$] = null
    })
    return {
        'type': type,
        'parameters': pr.wrapRawDictionary(temp)
    }
}

export function group(properties: { [key: string]: [string[], TLocalType] }): TLocalType {
    return ['group', {
        'properties': d(properties).map(($) => {
            const temp: { [key: string]: null } = {}
            pr.wrapRawArray($[0]).forEach(($) => {
                temp[$] = null
            })
            return {
                'sibling dependencies': d(temp),
                'type': $[1],
            }
        })
    }]
}

export function taggedUnion(options: { [key: string]: TLocalType }): TLocalType {
    let firstKey: null | string = null
    d(options).map(($, key) => {
        if (firstKey === null) {
            firstKey = key
        }
    })
    if (firstKey === null) {
        pl.panic(`Missing options in tagged union`)
    }
    return pl.cc(firstKey, ($) => {

        return ['taggedUnion', {
            'options': d(options).map(($) => {
                return {
                    'type': $
                }
            }),
            'default': {
                'name': $,
                'annotation': pr.getLocationInfo(1)
            }
        }]
    })
}

export function string(type: string): TLocalType {
    return ['string', {
        'constrained': ['no', {
            'type': r_imp(type, pr.getLocationInfo(1)),
        }],
    }]
}

export function boolean(): TLocalType {
    return ['boolean', null]
}

export type ReferenceType =
    | ["sibling", string]
    | ["parent", null]
    | ["parameter", string]
    | ["self", null]

export type Step =
    | ["group", string]
    | ["tagged union", string]
    | ["reference", null]
    | ["array", null]

function referenceX($: ReferenceType, steps: Step[], annotation: string): TReference {


    return {
        'type': pl.cc($, ($) => {
            switch ($[0]) {
                case 'parameter':
                    return pl.cc($[1], ($) => {
                        return ['parameter', $]
                    })
                case 'parent':
                    return pl.cc($[1], ($) => {
                        return ['other', null]
                    })
                case 'self':
                    return pl.cc($[1], ($) => {
                        return ['other', null]
                    })
                case 'sibling':
                    return pl.cc($[1], ($) => {
                        return ['sibling', $]
                    })
                default: return pl.au($[0])
            }
        }),
        'steps': pr.wrapRawArray(steps).map(($) => {
            switch ($[0]) {
                case 'array':
                    return pl.cc($[1], ($) => {
                        return ['array', null]
                    })
                case 'group':
                    return pl.cc($[1], ($) => {
                        return ['group', {
                            'name': $,
                            'annotation': annotation,
                        }]
                    })
                case 'reference':
                    return pl.cc($[1], ($) => {
                        return ['reference', null]
                    })
                case 'tagged union':
                    return pl.cc($[1], ($) => {
                        return ['tagged union', {
                            'name': $,
                            'annotation': annotation,
                        }]
                    })
                default: return pl.au($[0])
            }
        }),
        'annotation': annotation,
    }

}

export function reference(
    type: ReferenceType,
    steps: Step[],
): TLocalType {
    return ['string', {
        'constrained': ['yes', referenceX(type, steps, pr.getLocationInfo(1))],
    }]
}

export function component(type: string, args: string[]): TLocalType {
    const temp: { [key: string]: null } = {}
    pr.wrapRawArray(args).forEach(($) => {
        temp[$] = null
    })
    return ['component', {
        'type': type,
        'arguments': pr.wrapRawDictionary(temp)
    }]
}