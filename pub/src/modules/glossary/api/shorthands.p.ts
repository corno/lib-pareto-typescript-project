
import * as pr from "pareto-core-raw"

import * as api from "./types.generated"



const wd = pr.wrapRawDictionary
const wa = pr.wrapRawArray


// export function nullType(): api.TTypeOrNull {
//     return ['null', null]
// }

export function boolean(): api.TType {
    return ['boolean', null]
}
export function string(): api.TType {
    return ['string', null]
}
export function number(): api.TType {
    return ['number', null]
}
export function types($: { [key: string]: api.TType }) {
    return wd($)
}
export function taggedUnion($: { [key: string]: api.TType }): api.TType {
    return ['taggedUnion', wd($)]
}
export function dictionary($: api.TType): api.TType {
    return ['dictionary', $]
}

export function nullDictionary(): api.TType {
    return ['dictionary', ['null', null]]
}
export function parameter($: string): api.TType {
    return ['parameter', $]
}
export function template(template: string, $: { [key: string]: api.TType }): api.TType {
    return ['template', {
        'template': template,
        'arguments': wd($),
    }]
}
export function array($: api.TType): api.TType {
    return ['array', $]
}
export function nested($: api.TType): api.TType {
    return ['nested', $]
}
export function optional($: api.TType): api.TType {
    return ['optional', $]
}
export function group($: {
    [key: string]: {
        type: api.TType
        optional?: boolean
    }
}): api.TType {
    return ['group', wd($)]
}

export function member($: api.TType, optional?: boolean): { type: api.TType, optional?: boolean } {
    return {
        optional: optional,
        type: $
    }
}

export function reference(type: string): api.TType {
    return ['reference', {
        'context': ['local', null],
        'namespaces': wa([]),
        'type': type,
    }]
}
export function typeReference(type: string): api.TTypeReference {
    return {
        'context': ['local', null],
        'namespaces': wa([]),
        'type': type,
    }
}

export function externalReference(context: string, type: string): api.TType {
    return ['reference', {
        'context': ['import', context],
        'namespaces': wa([]),
        'type': type,
    }]
}
export function externalTypeReference(context: string, type: string): api.TTypeReference {
    return {
        'context': ['import', context],
        'namespaces': wa([]),
        'type': type,
    }
}

export function _function(data: api.TTypeReference, returnValue: api.TTypeReference, async?: boolean): api.TFunction {
    return {
        "async": async === undefined ? false : async,
        "data": data,
        "return value": returnValue,
    }
}