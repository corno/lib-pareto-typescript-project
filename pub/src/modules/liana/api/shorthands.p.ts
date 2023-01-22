import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'

import {
    TGlobalType,
    TLocalType,
    TReference,
    TString,
} from "./types.generated";

const d = pr.wrapRawDictionary

export function array(type: TLocalType): TLocalType {
    return ['array', {
        'type': type
    }]
}

function constrainedString($: ReferenceType, constraint: string, annotation: string): TString {
    return {
        'constrained': ['yes', referenceX($, constraint, annotation)],
    }
}

export function constrainedDictionary($: ReferenceType, constraint: string, type: TLocalType): TLocalType {
    return ['dictionary', {
        'key': constrainedString($, constraint, pr.getLocationInfo(1)),
        'type': type
    }]
}

export function dictionary(type: TLocalType): TLocalType {
    return ['dictionary', {
        'key': {
            'constrained': ['no', {
                'type': "identifier"
            }]
        },
        'type': type
    }]
}

export function globalType(parameters: string[], type: TLocalType): TGlobalType {
    const temp: { [key: string]: null} = {}
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
    return ['taggedUnion', {
        'options': d(options).map(($) => {
            return {
                'type': $
            }
        }),
        'default': firstKey
    }]
}

export function string(type: string): TLocalType {
    return ['string', {
        'constrained': ['no', {
            'type': type,
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

function referenceX($: ReferenceType, referencedType: string, annotation: string): TReference {


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
        'referenced type': referencedType,
        'annotation': annotation,
    }

}

export function reference(
    type: ReferenceType,
    referencedType: string,
): TLocalType {
    return ['string', {
        'constrained': ['yes', referenceX(type, referencedType, pr.getLocationInfo(1))],
    }]
}

export function component(type: string, args: string[]): TLocalType {
    const temp: { [key: string]: null} = {}
    pr.wrapRawArray(args).forEach(($) => {
        temp[$] = null
    })
    return ['component', {
        'type': type,
        'arguments': pr.wrapRawDictionary(temp)
    }]
}