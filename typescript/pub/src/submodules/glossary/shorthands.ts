import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'

import * as t from "./glossary"

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

export function ref(typeReference: t.T.TypeReference<pd.SourceLocation>): t.T.Type<pd.SourceLocation> {
    return ['reference',typeReference]
}

export function context(glossary: string, annotation: pd.SourceLocation): t.T.Context<pd.SourceLocation> {
    if (glossary === undefined) {
        return ['local', null]
    } else {
        return ['import', {
            'glossary': {
                'annotation': annotation,
                'key': glossary,
            },
        }]
    }
}

export function imp(args: RawDictionary<t.T.TypeReference<pd.SourceLocation>>): t.T.Glossary.imports.D<pd.SourceLocation> {
    return {
        'arguments': pd.d(args)
    }
}

export function externalTypeReference(
    contextX: string,
    type: string,
    typeArgs?: RawDictionary<t.T.TypeReference<pd.SourceLocation>>
): t.T.TypeReference<pd.SourceLocation> {
    return {
        'context': context(contextX, pd.getLocationInfo(1)),
        'type': type,
        'arguments': pd.d(typeArgs === undefined ? {} : typeArgs),
    }
}

export function typeReference(
    type: string,
    typeArgs?: RawDictionary<t.T.TypeReference<pd.SourceLocation>>
): t.T.TypeReference<pd.SourceLocation> {
        return {
            'context': ['local', null],
            'type': type,
            'arguments': pd.d(typeArgs === undefined ? {} : typeArgs),
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
            'context': context(contextOrBuilder, pd.getLocationInfo(1)),
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
            'context': context(contextOrInterface, pd.getLocationInfo(1)),
            'interface': inf,
        }
    }
}

export function nothing(): ['nothing', null] {
    return ['nothing', null]
}

export function sdata($: t.T.TypeReference<pd.SourceLocation>): t.T.DataOrBuilder<pd.SourceLocation> {
    return ['data', $]
}

export function bldr($: t.T.BuilderReference<pd.SourceLocation>): t.T.DataOrBuilder<pd.SourceLocation> {
    return ['builder', $]
}

export function adata($: t.T.TypeReference<pd.SourceLocation>): t.T.Glossary._ltype.asynchronous.functions.D.return__type<pd.SourceLocation> {
    return ['data', {
        'type': $,
    }]
}

export function inf($: t.T.InterfaceReference<pd.SourceLocation>): t.T.Glossary._ltype.asynchronous.functions.D.return__type<pd.SourceLocation> {
    return ['interface', $]
}

export function sfunc(in_: t.T.DataOrBuilder<pd.SourceLocation>, out: t.T.DataOrBuilder<pd.SourceLocation>): t.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation> {
    return {
        'in': in_,
        'out': out,
    }
}

export function afunc(data: t.T.TypeReference<pd.SourceLocation>, oi: t.T.InterfaceReference<pd.SourceLocation> | null, returnType: t.T.Glossary._ltype.asynchronous.functions.D.return__type<pd.SourceLocation>): t.T.Glossary._ltype.asynchronous.functions.D<pd.SourceLocation> {
    return {
        'return type': returnType,
        'data': data,
        'output interface': oi === null
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

export function infref($: t.T.InterfaceReference<pd.SourceLocation>): t.T.Interface<pd.SourceLocation> {
    return ['reference', $]
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