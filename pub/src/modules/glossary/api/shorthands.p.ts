
import * as pr from "pareto-core-raw"

import * as api from "./types.generated"



const d = pr.wrapRawDictionary
const wa = pr.wrapRawArray


export function null_(): api.TType {
    return ['null', null]
}

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
    return d($)
}
export function taggedUnion($: { [key: string]: api.TType }): api.TType {
    return ['taggedUnion', d($)]
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
        'arguments': d($),
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
    return ['group', d($)]
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