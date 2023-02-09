import * as pl from 'pareto-core-lib'
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

export function parametrizedType(parameters: RawDictionary<{}>, type: t.TType): t.GGlossary.Ptypes.D {
    return {
        'parameters': d(parameters),
        'type': type,
    }
}

export function type(type: t.TType): t.GGlossary.Ptypes.D {
    return {
        'parameters': d({}),
        'type': type,
    }
}

export function typeParameter($: string): t.TType {
    return ['type parameter', $]
}

export function glossaryParameter($: string): t.TType {
    return ['glossary parameter', $]
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

export function context(glossary?: string, args?: RawDictionary<t.TTypeReference>): t.TContext {
    if (glossary === undefined) {
        return ['local', {}]
    } else {
        return ['import', {
            'glossary': glossary,
            'arguments': d(args === undefined ? {} : args)
        }]
    }
}

export function parametrizedTypeReference(
    contextOrType: string,
    glossaryArgsOrTypeArgs: RawDictionary<t.TTypeReference>,
    type?: string,
    typeArgs?: RawDictionary<t.TTypeReference>
): t.TTypeReference {
    if (type === undefined) {
        return {
            'context': context(),
            'type': contextOrType,
            'arguments': d(glossaryArgsOrTypeArgs),
        }
    } else {

        return {
            'context': context(contextOrType, glossaryArgsOrTypeArgs),
            'type': type,
            'arguments': d(typeArgs === undefined ? {}: typeArgs),
        }
    }
}

export function typeReference(
    contextOrType: string,
    type?: string,
): t.TTypeReference {
    if (type === undefined) {
        return {
            'context': context(),
            'type': contextOrType,
            'arguments': d({}),
        }
    } else {
        return {
            'context': context(contextOrType),
            'type': type,
            'arguments': d({}),
        }
    }
}

export function interfaceReference(contextOrInterface: string, inf?: string): t.TInterfaceReference {
    if (inf === undefined) {
        return {
            'context': ['local', {}],
            'interface': contextOrInterface,
            // 'interface': {
            //     'annotation': "SSDF",
            //     'name': a
            // },
        }
    } else {
        return {
            'context': context(contextOrInterface),
            'interface': inf,
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