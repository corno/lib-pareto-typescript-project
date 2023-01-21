import * as pr from 'pareto-core-raw'

import {
    TGlobalType,
    TLocalType,
} from "./types.generated";

const d = pr.wrapRawDictionary

export function array(type: TLocalType): TLocalType {
    return ['array', {
        'type': type
    }]
}

export function constrainedDictionary(constraint: string, type: TLocalType): TLocalType {
    return ['dictionary', {
        'key': {
            'constrained': ['yes', {
                'type': constraint,
            }],
        },
        'type': type
    }]
}

export function dictionary(type: TLocalType): TLocalType {
    return ['dictionary', {
        'key': {
            'constrained': ['no', {
                'type': "text"
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

export function taggedUnion(options: { [key: string]: TLocalType }, dflt: string): TLocalType {
    return ['taggedUnion', {
        'options': d(options).map(($) => {
            return {
                'type': $
            }
        }),
        'default': dflt
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

export function reference(type: string): TLocalType {
    return ['string', {
        'constrained': ['yes', {
            'type': type
        }],
    }]
}

export function component(type: string): TLocalType {
    return ['component', {
        'type': type
    }]
}