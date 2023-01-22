import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'

import {
    MDictionary,
    TGlobalType,
    TLocalType,
    TReference,
    TString,
    T_Reference,
} from "./types.generated";

function r_imp(name: string, annotation: string): T_Reference {
    return {
        name: name,
        annotation: annotation
    }
}

function d_imp<T>($: { [key: string]: T }, annotation: string): MDictionary<T> {
    return {
        'annotation': annotation,
        'dictionary': pr.wrapRawDictionary($),
    }
}

function d_mappedimp<T, RT>($: { [key: string]: T }, annotation: string, cb: ($: T) => RT): MDictionary<RT> {
    return {
        'annotation': annotation,
        'dictionary': pr.wrapRawDictionary($).map(cb),
    }
}

export function d<T>($: { [key: string]: T }) {
    const li = pr.getLocationInfo(1)
    return d_imp($, li)
}

export function r(name: string): T_Reference {
    const li = pr.getLocationInfo(1)
    return r_imp(name, li)
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
    const li = pr.getLocationInfo(1)
    return ['dictionary', {
        // 'annotation': li,
        'key': constrainedString($, steps, li),
        'type': type
    }]
}

export function dictionary(type: TLocalType): TLocalType {
    const li = pr.getLocationInfo(1)

    return ['dictionary', {
        // 'annotation': li,
        'key': {
            'constrained': ['no', {
                'type': r_imp("identifier", li)
            }]
        },
        'type': type
    }]
}

export function globalType(parameters: { [key: string]: string }, type: TLocalType): TGlobalType {
    const li = pr.getLocationInfo(1)
    return {
        'type': type,
        'parameters': d_mappedimp(parameters, li, ($) => {
            return r_imp($, li)
        })
    }
}

export function group(properties: { [key: string]: [string[], TLocalType] }): TLocalType {
    const li = pr.getLocationInfo(1)
    return ['group', {
        'properties': d_mappedimp(properties, li, ($) => {
            const temp: { [key: string]: null } = {}
            pr.wrapRawArray($[0]).forEach(($) => {
                temp[$] = null
            })
            return {
                'sibling dependencies': d_imp(temp, li),
                'type': $[1],
            }
        })
    }]
}

export function taggedUnion(options: { [key: string]: TLocalType }): TLocalType {
    const li = pr.getLocationInfo(1)
    let firstKey: null | string = null
    pr.wrapRawDictionary(options).map(($, key) => {
        if (firstKey === null) {
            firstKey = key
        }
    })
    if (firstKey === null) {
        firstKey = "--NO OPTIONS--"
    }
    return pl.cc(firstKey, ($) => {

        return ['taggedUnion', {
            'options': d_mappedimp(options, li, ($) => {
                return {
                    'type': $
                }
            }),
            'default': {
                'name': $,
                'annotation': li
            }
        }]
    })
}

export function string(type: string): TLocalType {
    const li = pr.getLocationInfo(1)
    return ['string', {
        'constrained': ['no', {
            'type': r_imp(type, li),
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
                        return ['parameter', r_imp($, annotation)]
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
                        return ['sibling', r_imp($, annotation)]
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
                        return ['group', r_imp($, annotation)]
                    })
                case 'reference':
                    return pl.cc($[1], ($) => {
                        return ['reference', null]
                    })
                case 'tagged union':
                    return pl.cc($[1], ($) => {
                        return ['tagged union', r_imp($, annotation)]
                    })
                default: return pl.au($[0])
            }
        }),
    }

}

export function reference(
    type: ReferenceType,
    steps: Step[],
): TLocalType {
    const li = pr.getLocationInfo(1)
    return ['string', {
        'constrained': ['yes', referenceX(type, steps, li)],
    }]
}

export function component(type: string, args: string[]): TLocalType {
    const li = pr.getLocationInfo(1)
    const temp: { [key: string]: null } = {}
    pr.wrapRawArray(args).forEach(($) => {
        temp[$] = null
    })
    return ['component', {
        'type': {
            'name': type,
            'annotation': li
        },
        'arguments': d_imp(temp, li)
    }]
}