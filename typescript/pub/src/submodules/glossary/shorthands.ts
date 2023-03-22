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
    return ['reference', typeReference]
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

export function sInterfaceReference(contextOrSynchronousInterface: string, inf?: string): t.T.SynchronousInterfaceReference<pd.SourceLocation> {
    if (inf === undefined) {
        return {
            'context': ['local', null],
            'interface': contextOrSynchronousInterface,
        }
    } else {
        return {
            'context': context(contextOrSynchronousInterface, pd.getLocationInfo(1)),
            'interface': inf,
        }
    }
}

export function aInterfaceReference(contextOrAsynchronousInterface: string, inf?: string): t.T.AsynchronousInterfaceReference<pd.SourceLocation> {
    if (inf === undefined) {
        return {
            'context': ['local', null],
            'interface': contextOrAsynchronousInterface,
        }
    } else {
        return {
            'context': context(contextOrAsynchronousInterface, pd.getLocationInfo(1)),
            'interface': inf,
        }
    }
}

export function nothing(): ['nothing', null] {
    return ['nothing', null]
}

export function data($: t.T.TypeReference<pd.SourceLocation>): ['data', t.T.TypeReference<pd.SourceLocation>] {
    return ['data', $]
}

export function inf($: t.T.AsynchronousInterfaceReference<pd.SourceLocation>): ['interface', t.T.AsynchronousInterfaceReference<pd.SourceLocation>] {
    return ['interface', $]
}

export function constructor(inf: t.T.AsynchronousInterfaceReference<pd.SourceLocation>, downstreams: RawDictionary<t.T.AsynchronousInterfaceReference<pd.SourceLocation>>): t.T.Glossary.asynchronous.algorithms.D<pd.SourceLocation> {
    return ['constructor', {
        'interface': inf,
        'downstreams': pd.d(downstreams),
    }]
}

export function afunction(out: t.T.Glossary.asynchronous.algorithms.D._lfunction.out<pd.SourceLocation>, in_: t.T.Glossary.asynchronous.algorithms.D._lfunction._lin<pd.SourceLocation>): t.T.Glossary.asynchronous.algorithms.D<pd.SourceLocation> {
    return ['function', {
        'in': in_,
        'out': out,
    }]
}

export function procedure(in_: t.T.DataOrSynchronousInterface<pd.SourceLocation>, out: t.T.SynchronousInterfaceReference<pd.SourceLocation>): t.T.Glossary.synchronous.algorithms.D<pd.SourceLocation> {
    return ['procedure', {
        'in': in_,
        'out': out,
    }]
}

export function sfunction(out: t.T.TypeReference<pd.SourceLocation>, in_: t.T.DataOrSynchronousInterface<pd.SourceLocation>): t.T.Glossary.synchronous.algorithms.D<pd.SourceLocation> {
    return ['function', {
        'in': in_,
        'out': out,
    }]
}

export function sInterfaceMethod(data: null | t.T.TypeReference<pd.SourceLocation>, inf?: null | t.T.SynchronousInterface<pd.SourceLocation>): t.T.SynchronousInterface<pd.SourceLocation> {
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

export function aInterfaceMethod(data: null | t.T.TypeReference<pd.SourceLocation>, inf?: null | t.T.AsynchronousInterface<pd.SourceLocation>): t.T.AsynchronousInterface<pd.SourceLocation> {
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

export function infref($: t.T.AsynchronousInterfaceReference<pd.SourceLocation>): t.T.AsynchronousInterface<pd.SourceLocation> {
    return ['reference', $]
}

export function choice(options: RawDictionary<t.T.AsynchronousInterface<pd.SourceLocation>>): t.T.AsynchronousInterface<pd.SourceLocation> {
    return ['choice', {
        'options': pd.d(options),
    }]
}

export function streamconsumer(data: t.T.AsynchronousInterface<pd.SourceLocation>, end: t.T.AsynchronousInterface<pd.SourceLocation>): t.T.AsynchronousInterface<pd.SourceLocation> {
    return ['streamconsumer', {
        'data': data,
        'end': end
    }]
}