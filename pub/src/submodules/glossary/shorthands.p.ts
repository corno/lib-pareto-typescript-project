import * as pl from 'pareto-core-lib'
import * as pr from 'pareto-core-raw'

import * as t from "./api"

const d = pr.wrapRawDictionary

type RawDictionary<T> = { [key: string]: T }

export function null_(): t.T.Type<string> {
    return ['null', {}]
}

export function boolean(): t.T.Type<string> {
    return ['boolean', {}]
}

export function string(): t.T.Type<string> {
    return ['string', {}]
}

export function number(): t.T.Type<string> {
    return ['number', {}]
}

export function types($: RawDictionary<t.T.Type<string>>) {
    return d($)
}

export function taggedUnion($: RawDictionary<t.T.Type<string>>): t.T.Type<string> {
    return ['taggedUnion', d($)]
}

export function dictionary($: t.T.Type<string>): t.T.Type<string> {
    return ['dictionary', $]
}

export function parametrizedType(parameters: RawDictionary<{}>, type: t.T.Type<string>): t.T.Glossary.types.D<string> {
    return {
        'parameters': d(parameters),
        'type': type,
    }
}

export function type(type: t.T.Type<string>): t.T.Glossary.types.D<string> {
    return {
        'parameters': d({}),
        'type': type,
    }
}

export function typeParameter($: string): t.T.Type<string> {
    return ['type parameter', $]
}

export function glossaryParameter($: string): t.T.Type<string> {
    return ['glossary parameter', $]
}

export function array($: t.T.Type<string>): t.T.Type<string> {
    return ['array', $]
}

export function optional($: t.T.Type<string>): t.T.Type<string> {
    return ['optional', $]
}

export function computed($: t.T.Type<string>): t.T.Type<string> {
    return ['computed', $]
}

export function nested($: t.T.Type<string>): t.T.Type<string> {
    return ['nested', $]
}

export function group($: {
    [key: string]: {
        type: t.T.Type<string>
        optional: boolean
    }
}): t.T.Type<string> {
    return ['group', d($)]
}

export function member($: t.T.Type<string>, optional?: boolean): { type: t.T.Type<string>, optional: boolean } {
    return {
        optional: optional === undefined ? false : optional,
        type: $
    }
}

export function reference(contextOrType: string, type?: string): t.T.Type<string> {
    return ['reference', typeReference(contextOrType, type)]
}

export function context(glossary?: string, args?: RawDictionary<t.T.TypeReference<string>>): t.T.Context<string> {
    if (glossary === undefined) {
        return ['local', {}]
    } else {
        return ['import', {
            'glossary': glossary,
            'arguments': d(args === undefined ? {} : args)
        }]
    }
}

export function parametrizedReference(
    contextOrType: string,
    glossaryArgsOrTypeArgs: RawDictionary<t.T.TypeReference<string>>,
    type?: string,
    typeArgs?: RawDictionary<t.T.TypeReference<string>>
): t.T.Type<string> {
    return ['reference', parametrizedTypeReference(
        contextOrType,
        glossaryArgsOrTypeArgs,
        type,
        typeArgs
    )]
}

export function parametrizedTypeReference(
    contextOrType: string,
    glossaryArgsOrTypeArgs: RawDictionary<t.T.TypeReference<string>>,
    type?: string,
    typeArgs?: RawDictionary<t.T.TypeReference<string>>
): t.T.TypeReference<string> {
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
            'arguments': d(typeArgs === undefined ? {} : typeArgs),
        }
    }
}

export function typeReference(
    contextOrType: string,
    type?: string,
): t.T.TypeReference<string> {
    if (type === undefined) {
        return parametrizedTypeReference(contextOrType, {})
    } else {
        return parametrizedTypeReference(contextOrType, {}, type, {})
    }
}

export function interfaceReference(contextOrInterface: string, inf?: string): t.T.InterfaceReference<string> {
    if (inf === undefined) {
        return {
            'context': ['local', {}],
            'interface': contextOrInterface,
        }
    } else {
        return {
            'context': context(contextOrInterface),
            'interface': inf,
        }
    }
}

export function parametrizedInterfaceReference(contextOrInterface: string, args: RawDictionary<t.T.TypeReference<string>>, inf: string): t.T.InterfaceReference<string> {
    return {
        'context': context(contextOrInterface, args),
        'interface': inf,
    }
}

export function nothing(): t.T.Glossary.functions.D.return__type<string> {
    return ['nothing', {}]
}

export function data($: t.T.TypeReference<string>, async: boolean): t.T.Glossary.functions.D.return__type<string> {
    return ['data', {
        'type': $,
        'asynchronous': async,
    }]
}

export function inf($: t.T.InterfaceReference<string>): t.T.Glossary.functions.D.return__type<string> {
    return ['interface', $]
}

export function func(data: t.T.TypeReference<string>, mii: t.T.InterfaceReference<string> | null, oi: t.T.InterfaceReference<string> | null, returnType: null | t.T.Glossary.functions.D.return__type<string>): t.T.Glossary.functions.D<string> {
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

export function method(data: null | t.T.TypeReference<string>, inf?: null | t.T.Interface<string>, managed?: boolean): t.T.Interface<string> {
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