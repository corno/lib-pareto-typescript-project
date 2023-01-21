import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'

import {
    TGlobalType,
    TLocalType,
    TString,
} from "./types.generated";

const d = pr.wrapRawDictionary

export function array(type: TLocalType): TLocalType {
    return ['array', {
        'type': type
    }]
}

function constrainedString(constraint: string): TString {
    return {
        'constrained': ['yes', {
            'referenced type': constraint,
        }],
    }
}

export function constrainedDictionary(constraint: string, type: TLocalType): TLocalType {
    return ['dictionary', {
        'key': constrainedString(constraint),
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

export function globalType(type: TLocalType): TGlobalType {
    return {
        'type': type,
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

export function reference(
    type:
    | ["sibling"]
    | ["parent"]
    | ["parameter"]
        | ["self"],
    referencedType: string
): TLocalType {
    return ['string', {
        'constrained': ['yes', {
            'referenced type': referencedType
        }],
    }]
}

export function component(type: string): TLocalType {
    return ['component', {
        'type': type
    }]
}