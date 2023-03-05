import * as pd from 'pareto-core-data'

import * as t from "./definition/glossary"

type RawDictionary<T> = { [key: string]: T }

export function null_(): t.T.Type<pd.SourceLocation> {
    return ['null', null]
}

export function boolean(): t.T.Type<pd.SourceLocation> {
    return ['boolean', null]
}

export function string(): t.T.Type<pd.SourceLocation> {
    return ['string', null]
}

export function number(): t.T.Type<pd.SourceLocation> {
    return ['number', null]
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
        return ['local', null]
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

export function builderReference(contextOrBuilder: string, builder?: string): t.T.BuilderReference<pd.SourceLocation> {
    if (builder === undefined) {
        return {
            'context': ['local', null],
            'builder': contextOrBuilder,
        }
    } else {
        return {
            'context': context(contextOrBuilder),
            'builder': builder,
        }
    }
}

export function interfaceReference(contextOrInterface: string, inf?: string): t.T.InterfaceReference<pd.SourceLocation> {
    if (inf === undefined) {
        return {
            'context': ['local', null],
            'interface': contextOrInterface,
        }
    } else {
        return {
            'context': context(contextOrInterface),
            'interface': inf,
        }
    }
}

export function parametrizedBuilderReference(contextOrBuilder: string, args: RawDictionary<t.T.TypeReference<pd.SourceLocation>>, builder: string): t.T.BuilderReference<pd.SourceLocation> {
    return {
        'context': context(contextOrBuilder, args),
        'builder': builder,
    }
}
export function parametrizedInterfaceReference(contextOrInterface: string, args: RawDictionary<t.T.TypeReference<pd.SourceLocation>>, inf: string): t.T.InterfaceReference<pd.SourceLocation> {
    return {
        'context': context(contextOrInterface, args),
        'interface': inf,
    }
}

export function nothing(): t.T.Glossary.functions.D.return__type<pd.SourceLocation> {
    return ['nothing', null]
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

export function func(data: t.T.TypeReference<pd.SourceLocation>, mii: t.T.BuilderReference<pd.SourceLocation> | null, oi: t.T.BuilderReference<pd.SourceLocation> | null, returnType: null | t.T.Glossary.functions.D.return__type<pd.SourceLocation>): t.T.Glossary.functions.D<pd.SourceLocation> {
    return {
        'return type': returnType === null
            ? ['nothing', null]
            : returnType,
        'data': data,
        'input builder': mii === null
            ? [false]
            : [true, mii],
        'output builder': oi === null
            ? [false]
            : [true, oi],
    }
}

export function builderMethod(data: null | t.T.TypeReference<pd.SourceLocation>, inf?: null | t.T.Builder<pd.SourceLocation>): t.T.Builder<pd.SourceLocation> {
    return ['method', {
        'data': data === null
            ? [false]
            : [true, data],
        'builder': inf === undefined
            ? [false]
            : inf === null
                ? [false]
                : [true, inf],
    }]
}

export function interfaceMethod(data: null | t.T.TypeReference<pd.SourceLocation>, inf?: null | t.T.Interface<pd.SourceLocation>): t.T.Interface<pd.SourceLocation> {
    return ['method', {
        'data': data === null
            ? [false]
            : [true, data],
        'interface': inf === undefined
            ? [false]
            : inf === null
                ? [false]
                : [true, inf],
    }]
}

export function choice(options: RawDictionary<t.T.Interface<pd.SourceLocation>>): t.T.Interface<pd.SourceLocation> {
    return ['choice', {
        'options': pd.d(options),
    }]
}

export function stream(data: t.T.Interface<pd.SourceLocation>, end: t.T.Interface<pd.SourceLocation>): t.T.Interface<pd.SourceLocation> {
    return ['stream', {
        'data': data,
        'end': end
    }]
}