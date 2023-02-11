import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'

import {
    T
} from "./api/glossary";

type RawDictionary<T> = { [key: string]: T }

function r_imp(name: string, annotation: string): T._$Reference {
    return {
        name: name,
        annotation: annotation
    }
}

function d_imp<T>($: RawDictionary<T>, annotation: string): T.Dictionary<T> {
    return {
        'annotation': annotation,
        'dictionary': pr.wrapRawDictionary($),
    }
}

function d_mappedimp<T, RT>($: RawDictionary<T>, annotation: string, cb: ($: T) => RT): T.Dictionary<RT> {
    return {
        'annotation': annotation,
        'dictionary': pr.wrapRawDictionary($).map(cb),
    }
}

export function d<T>($: RawDictionary<T>) {
    const li = pr.getLocationInfo(1)
    return d_imp($, li)
}

export function r(name: string): T._$Reference {
    const li = pr.getLocationInfo(1)
    return r_imp(name, li)
}

export function array(type: T.LocalType): T.LocalType {
    return ['array', {
        'type': type
    }]
}

function constrainedString($: ReferenceType, steps: Step[], annotation: string): T.String {
    return {
        'constrained': ['yes', referenceX($, steps, annotation)],
    }
}

export function constrainedDictionary($: ReferenceType, steps: Step[], type: T.LocalType): T.LocalType {
    const li = pr.getLocationInfo(1)
    return ['dictionary', {
        // 'annotation': li,
        'key': constrainedString($, steps, li),
        'type': type
    }]
}

export function dictionary(type: T.LocalType): T.LocalType {
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

export function globalType(parameters: RawDictionary<string>, type: T.LocalType): T.GlobalType {
    const li = pr.getLocationInfo(1)
    return {
        'type': type,
        'parameters': d_mappedimp(parameters, li, ($) => {
            return r_imp($, li)
        })
    }
}

export function group(properties: RawDictionary<[string[], T.LocalType]>): T.LocalType {
    const li = pr.getLocationInfo(1)
    return ['group', {
        'properties': d_mappedimp(properties, li, ($) => {
            const temp: RawDictionary<null> = {}
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

export function taggedUnion(options: RawDictionary<T.LocalType>): T.LocalType {
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
                return $
            }),
            'default': {
                'name': $,
                'annotation': li
            }
        }]
    })
}

export function string(type: string): T.LocalType {
    const li = pr.getLocationInfo(1)
    return ['string', {
        'constrained': ['no', {
            'type': r_imp(type, li),
        }],
    }]
}

export function boolean(): T.LocalType {
    return ['boolean', {}]
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

function referenceX($: ReferenceType, steps: Step[], annotation: string): T.Reference {
    return {
        'type': pl.cc($, ($) => {
            switch ($[0]) {
                case 'parameter':
                    return pl.cc($[1], ($) => {
                        return ['parameter', r_imp($, annotation)]
                    })
                case 'parent':
                    return pl.cc($[1], ($) => {
                        return ['other', {}]
                    })
                case 'self':
                    return pl.cc($[1], ($) => {
                        return ['other', {}]
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
                        return ['array', {}]
                    })
                case 'group':
                    return pl.cc($[1], ($) => {
                        return ['group', r_imp($, annotation)]
                    })
                case 'reference':
                    return pl.cc($[1], ($) => {
                        return ['reference', {}]
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
): T.LocalType {
    const li = pr.getLocationInfo(1)
    return ['string', {
        'constrained': ['yes', referenceX(type, steps, li)],
    }]
}

export function component(type: string, args: RawDictionary<null>): T.LocalType {
    const li = pr.getLocationInfo(1)
    return ['component', {
        'type': {
            'name': type,
            'annotation': li
        },
        'arguments': d_imp(args, li)
    }]
}