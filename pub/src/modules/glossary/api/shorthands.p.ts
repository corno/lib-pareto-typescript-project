
import * as pr from 'pareto-core-raw'

import * as t from "./types.generated"



const d = pr.wrapRawDictionary
const wa = pr.wrapRawArray


export function null_(): t.TType {
    return ['null', null]
}

export function boolean(): t.TType {
    return ['boolean', null]
}
export function string(): t.TType {
    return ['string', null]
}
export function number(): t.TType {
    return ['number', null]
}
export function types($: { [key: string]: t.TType }) {
    return d($)
}
export function taggedUnion($: { [key: string]: t.TType }): t.TType {
    return ['taggedUnion', d($)]
}
export function dictionary($: t.TType): t.TType {
    return ['dictionary', $]
}

export function nullDictionary(): t.TType {
    return ['dictionary', ['null', null]]
}
export function parameter($: string): t.TType {
    return ['parameter', $]
}
export function template(template: string, $: { [key: string]: t.TType }): t.TType {
    return ['template', {
        'template': template,
        'arguments': d($),
    }]
}
export function array($: t.TType): t.TType {
    return ['array', $]
}
export function nested($: t.TType): t.TType {
    return ['nested', $]
}
export function optional($: t.TType): t.TType {
    return ['optional', $]
}
export function group($: {
    [key: string]: {
        type: t.TType
        optional?: boolean
    }
}): t.TType {
    return ['group', d($)]
}

export function member($: t.TType, optional?: boolean): { type: t.TType, optional?: boolean } {
    return {
        optional: optional,
        type: $
    }
}

export function reference(type: string): t.TType {
    return ['reference', {
        'context': ['local', null],
        'namespaces': wa([]),
        'type': type,
    }]
}
export function typeReference(type: string): t.TTypeReference {
    return {
        'context': ['local', null],
        'namespaces': wa([]),
        'type': type,
    }
}
export function namespacedTypeReference(namespaces: string[], type: string): t.TTypeReference {
    return {
        'context': ['local', null],
        'namespaces': wa(namespaces),
        'type': type,
    }
}

export function externalReference(context: string, type: string): t.TType {
    return ['reference', {
        'context': ['import', context],
        'namespaces': wa([]),
        'type': type,
    }]
}
export function externalTypeReference(context: string, type: string): t.TTypeReference {
    return {
        'context': ['import', context],
        'namespaces': wa([]),
        'type': type,
    }
}

export function _function(data: t.TTypeReference, returnValue: t.TTypeReference, async?: boolean): t.TFunction {
    return {
        "async": async === undefined ? false : async,
        "data": data,
        "return value": returnValue,
    }
}