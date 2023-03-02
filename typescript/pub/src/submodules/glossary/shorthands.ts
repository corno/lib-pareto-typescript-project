import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-data'

import * as t from "./api"

type RawDictionary<T> = { [key: string]: T }

export function null_(): t.T.Type<pd.SourceLocation> {
    return ['null', {}]
}

export function boolean(): t.T.Type<pd.SourceLocation> {
    return ['boolean', {}]
}

export function string(): t.T.Type<pd.SourceLocation> {
    return ['string', {}]
}

export function number(): t.T.Type<pd.SourceLocation> {
    return ['number', {}]
}

export function types($: RawDictionary<t.T.Type<pd.SourceLocation>>) {
    return pd.d($)
}

export function taggedUnion($: RawDictionary<t.T.Type<pd.SourceLocation>>): t.T.Type<pd.SourceLocation> {
    return ['taggedUnion', pd.d($)]
}

export function dictionary($: t.T.Type<pd.SourceLocation>): t.T.Type<pd.SourceLocation> {
    return ['dictionary', $]
}

export function parametrizedType(parameters: RawDictionary<t.T.Glossary.types.D.parameters.D<pd.SourceLocation>>, type: t.T.Type<pd.SourceLocation>): t.T.Glossary.types.D<pd.SourceLocation> {
    return {
        'parameters': pd.d(parameters),
        'type': type,
    }
}

export function type(type: t.T.Type<pd.SourceLocation>): t.T.Glossary.types.D<pd.SourceLocation> {
    return {
        'parameters': pd.d({}),
        'type': type,
    }
}

export function typeParameter($: string): t.T.Type<pd.SourceLocation> {
    return ['type parameter', $]
}

export function glossaryParameter($: string): t.T.Type<pd.SourceLocation> {
    return ['glossary parameter', $]
}

export function array($: t.T.Type<pd.SourceLocation>): t.T.Type<pd.SourceLocation> {
    return ['array', $]
}

export function optional($: t.T.Type<pd.SourceLocation>): t.T.Type<pd.SourceLocation> {
    return ['optional', $]
}

export function computed($: t.T.Type<pd.SourceLocation>): t.T.Type<pd.SourceLocation> {
    return ['computed', $]
}

export function nested($: t.T.Type<pd.SourceLocation>): t.T.Type<pd.SourceLocation> {
    return ['nested', $]
}

export function group($: RawDictionary<t.T.Type.group.D<pd.SourceLocation>>): t.T.Type<pd.SourceLocation> {
    return ['group', pd.d($)]
}

export function member($: t.T.Type<pd.SourceLocation>): t.T.Type.group.D<pd.SourceLocation> {
    return {
        type: $
    }
}

export function reference(contextOrType: string, type?: string): t.T.Type<pd.SourceLocation> {
    return ['reference', typeReference(contextOrType, type)]
}

export function context(glossary?: string, args?: RawDictionary<t.T.TypeReference<pd.SourceLocation>>): t.T.Context<pd.SourceLocation> {
    if (glossary === undefined) {
        return ['local', {}]
    } else {
        return ['import', {
            'glossary': glossary,
            'arguments': pd.d(args === undefined ? {} : args)
        }]
    }
}

export function parametrizedReference(
    contextOrType: string,
    glossaryArgsOrTypeArgs: RawDictionary<t.T.TypeReference<pd.SourceLocation>>,
    type?: string,
    typeArgs?: RawDictionary<t.T.TypeReference<pd.SourceLocation>>
): t.T.Type<pd.SourceLocation> {
    return ['reference', parametrizedTypeReference(
        contextOrType,
        glossaryArgsOrTypeArgs,
        type,
        typeArgs
    )]
}

export function parametrizedTypeReference(
    contextOrType: string,
    glossaryArgsOrTypeArgs: RawDictionary<t.T.TypeReference<pd.SourceLocation>>,
    type?: string,
    typeArgs?: RawDictionary<t.T.TypeReference<pd.SourceLocation>>
): t.T.TypeReference<pd.SourceLocation> {
    if (type === undefined) {
        return {
            'context': context(),
            'type': contextOrType,
            'arguments': pd.d(glossaryArgsOrTypeArgs),
        }
    } else {
        return {
            'context': context(contextOrType, glossaryArgsOrTypeArgs),
            'type': type,
            'arguments': pd.d(typeArgs === undefined ? {} : typeArgs),
        }
    }
}

export function typeReference(
    contextOrType: string,
    type?: string,
): t.T.TypeReference<pd.SourceLocation> {
    if (type === undefined) {
        return parametrizedTypeReference(contextOrType, {})
    } else {
        return parametrizedTypeReference(contextOrType, {}, type, {})
    }
}

export function interfaceReference(contextOrInterface: string, inf?: string): t.T.InterfaceReference<pd.SourceLocation> {
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

export function parametrizedInterfaceReference(contextOrInterface: string, args: RawDictionary<t.T.TypeReference<pd.SourceLocation>>, inf: string): t.T.InterfaceReference<pd.SourceLocation> {
    return {
        'context': context(contextOrInterface, args),
        'interface': inf,
    }
}

export function nothing(): t.T.Glossary.functions.D.return__type<pd.SourceLocation> {
    return ['nothing', {}]
}

export function data($: t.T.TypeReference<pd.SourceLocation>, async: boolean): t.T.Glossary.functions.D.return__type<pd.SourceLocation> {
    return ['data', {
        'type': $,
        'asynchronous': async,
    }]
}

export function inf($: t.T.InterfaceReference<pd.SourceLocation>): t.T.Glossary.functions.D.return__type<pd.SourceLocation> {
    return ['interface', $]
}

export function func(data: t.T.TypeReference<pd.SourceLocation>, mii: t.T.InterfaceReference<pd.SourceLocation> | null, oi: t.T.InterfaceReference<pd.SourceLocation> | null, returnType: null | t.T.Glossary.functions.D.return__type<pd.SourceLocation>): t.T.Glossary.functions.D<pd.SourceLocation> {
    return {
        'return type': returnType === null
            ? ['nothing', {}]
            : returnType,
        'data': data,
        'managed input interface': mii === null
            ? [false]
            : [true, mii],
        'output interface': oi === null
            ? [false]
            : [true, oi],
    }
}

export function method(data: null | t.T.TypeReference<pd.SourceLocation>, inf?: null | t.T.Interface<pd.SourceLocation>, managed?: boolean): t.T.Interface<pd.SourceLocation> {
    return ['method', {
        'data': data === null
            ? [false]
            : [true, data],
        'interface': inf === undefined
            ? [false]
            : inf === null
                ? [false]
                : [true, {
                    'interface': inf,
                    'managed': managed === undefined ? false : managed
                }],
    }]
}