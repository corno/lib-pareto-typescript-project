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

export function dictionary(type: TLocalType): TLocalType {
    return ['dictionary', {
        'type': type
    }]
}

export function globalType(type: TLocalType): TGlobalType {
    return {
        'type': type,
    }
}

export function group(properties: { [key: string]: TLocalType }): TLocalType {
    return ['group', {
        'properties': d(properties).map(($) => {
            return {
                'type': $
            }
        })
    }]
}

export function taggedUnion(options: { [key: string]: TLocalType }): TLocalType {
    return ['taggedUnion', {
        'options': d(options).map(($) => {
            return {
                'type': $
            }
        })
    }]
}

export function string(): TLocalType {
    return ['string', {
        'constrained': ['no', null],
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