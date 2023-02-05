
import * as pr from 'pareto-core-raw'

import * as t from "./api"

const d = pr.wrapRawDictionary

type RawDictionary<T> = { [key: string]: T }

export function null_(): t.TType {
    return ['null', {}]
}

export function boolean(): t.TType {
    return ['boolean', {}]
}

export function string(): t.TType {
    return ['string', {}]
}

export function number(): t.TType {
    return ['number', {}]
}

export function types($: RawDictionary<t.TType>) {
    return d($)
}

export function taggedUnion($: RawDictionary<t.TType>): t.TType {
    return ['taggedUnion', d($)]
}

export function dictionary($: t.TType): t.TType {
    return ['dictionary', $]
}

export function typeParameter($: string): t.TType {
    return ['type parameter', $]
}

export function glossaryParameter($: string): t.TType {
    return ['glossary parameter', $]
}

export function template(template: string, $: RawDictionary<t.TType>): t.TType {
    return ['template', {
        'template': template,
        'context': ['local', {}],
        'arguments': d($),
    }]
}

export function array($: t.TType): t.TType {
    return ['array', $]
}

export function optional($: t.TType): t.TType {
    return ['optional', $]
}

export function computed($: t.TType): t.TType {
    return ['computed', $]
}

export function nested($: t.TType): t.TType {
    return ['nested', $]
}

export function group($: {
    [key: string]: {
        type: t.TType
        optional: boolean
    }
}): t.TType {
    return ['group', d($)]
}

export function member($: t.TType, optional?: boolean): { type: t.TType, optional: boolean } {
    return {
        optional: optional === undefined ? false : optional,
        type: $
    }
}

export function reference(contextOrType: string, type?: string): t.TType {
    return ['reference', typeReference(contextOrType, type)]
}

export function typeReference(contextOrType: string, type?: string): t.TTypeReference {
    if (type === undefined) {
        return {
            'context': ['local', {}],
            'type': contextOrType,
            // 'type': {
            //     'annotation': "SSDF",
            //     'name': a
            // },
        }
    } else {
        return {
            'context': ['import', contextOrType],
            'type': type,
            // 'context': ['import', {
            //     'annotation': "SSDF",
            //     'name': a
            // }],
            // 'type': {
            //     'annotation': "SSDF",
            //     'name': b
            // },
        }

    }
}

export function interfaceReference(a: string, b?: string): t.TInterfaceReference {
    if (b === undefined) {
        return {
            'context': ['local', {}],
            'interface': a,
            // 'interface': {
            //     'annotation': "SSDF",
            //     'name': a
            // },
        }
    } else {
        return {
            'context': ['import', a],
            'interface': b,
            // 'context': ['import', {
            //     'annotation': "SSDF",
            //     'name': a
            // }],
            // 'interface': {
            //     'annotation': "SSDF",
            //     'name': b
            // },
        }
    }
}

export function nothing(): t.GGlossary.Pfunctions.D.Preturn__type {
    return ['nothing', {}]
}

export function data($: t.TTypeReference, async: boolean): t.GGlossary.Pfunctions.D.Preturn__type {
    return ['data', {
        'type': $,
        'asynchronous': async,
    }]
}

export function inf($: t.TInterfaceReference): t.GGlossary.Pfunctions.D.Preturn__type {
    return ['interface', $]
}

export function func(data: t.TTypeReference, mii: t.TInterfaceReference | null, oi: t.TInterfaceReference | null, returnType: null | t.GGlossary.Pfunctions.D.Preturn__type): t.GGlossary.Pfunctions.D {
    return {
        'return type': returnType === null
            ? ['nothing', {}]
            : returnType,
        'data': data,
        'managed input interface': mii === null
            ? ['not set', {}]
            : ['set', mii],
        'output interface': oi === null
            ? ['not set', {}]
            : ['set', oi],
    }
}

export function method(data: null | t.TTypeReference, inf?: null | t.TInterface, managed?: boolean): t.TInterface {
    return ['method', {
        'data': data === null
            ? ['not set', {}]
            : ['set', data],
        'interface': inf === undefined
            ? ['not set', {}]
            : inf === null
                ? ['not set', {}]
                : ['set', {
                    'interface': inf,
                    'managed': managed === undefined ? false : managed
                }],
    }]
}