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

export function parametrizedType(parameters: RawDictionary<t.T.Parameters.D<pd.SourceLocation>>, type: t.T.Type<pd.SourceLocation>): t.T.Namespace.types.D<pd.SourceLocation> {
    return {
        'parameters': pd.d(parameters),
        'type': type,
    }
}

export function ns(types: RawDictionary<t.T.Namespace.types.D<pd.SourceLocation>>, ns: RawDictionary<t.T.Namespace.namespaces.D<pd.SourceLocation>>): t.T.Namespace<pd.SourceLocation> {
    return {
        'namespaces': pd.d(ns),
        'types': pd.d(types),
    }
}
export function type(type: t.T.Type<pd.SourceLocation>): t.T.Namespace.types.D<pd.SourceLocation> {
    return {
        'parameters': pd.d({}),
        'type': type,
    }
}


export function typeParameter($: string): t.T.DataSpecifier<pd.SourceLocation> {
    return ['type parameterXX', $]
}

export function glossaryParameter($: string): t.T.DataSpecifier<pd.SourceLocation> {
    return ['glossary parameterXX', $]
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

export function group($: RawDictionary<t.T.Type.group.D<pd.SourceLocation>>): t.T.Type<pd.SourceLocation> {
    return ['group', pd.d($)]
}

export function member($: t.T.Type<pd.SourceLocation>): t.T.Type.group.D<pd.SourceLocation> {
    return {
        type: $
    }
}

export function ref(typeReference: t.T.DataSpecifier<pd.SourceLocation>): t.T.Type<pd.SourceLocation> {
    return ['reference', typeReference]
}

// export function context(glossary: string, annotation: pd.SourceLocation): t.T.Context<pd.SourceLocation> {
//     if (glossary === undefined) {
//         return ['local', null]
//     } else {
//         return ['import', {
//             // 'glossary': {
//             //     'annotation': annotation,
//             //     'key': glossary,
//             // },
//             'glossaryXX': glossary,
//         }]
//     }
// }

export function imp(): t.T.Imports.D<pd.SourceLocation> {
    return null
}

export function externalTypeReference(
    contextX: string,
    type: string,
    glossArgs?: RawDictionary<t.T.DataSpecifier<pd.SourceLocation>>,
    typeArgs?: RawDictionary<t.T.DataSpecifier<pd.SourceLocation>>
): t.T.DataSpecifier<pd.SourceLocation> {
    return ['type', {
        'context': ['import', {
            // 'glossary': {
            //     'annotation': annotation,
            //     'key': glossary,
            // },
            'glossary': {
                'glossary': {
                    'annotation': pd.getLocationInfo(1),
                    'key': contextX,
                },
                'glossary arguments': pd.d(glossArgs === undefined ? {} : glossArgs),
            },

        }],
        'typeXX': type,
        'tailXX': pd.a([]),
        'type arguments': pd.d(typeArgs === undefined ? {} : typeArgs),
    }]
}

export function typeReference(
    type: string,
    typeArgs?: RawDictionary<t.T.DataSpecifier<pd.SourceLocation>>
): t.T.DataSpecifier<pd.SourceLocation> {
    return ['type', {
        'context': ['local', null],
        'typeXX': type,
        'tailXX': pd.a([]),
        'type arguments': pd.d(typeArgs === undefined ? {} : typeArgs),
    }]
}

export function sExternalInterfaceReference(
    contextX: string,
    inf: string,

    glossArgs?: RawDictionary<t.T.DataSpecifier<pd.SourceLocation>>,
    typeArgs?: RawDictionary<t.T.DataSpecifier<pd.SourceLocation>>
): t.T.SynchronousInterfaceReference<pd.SourceLocation> {

    return {
        'context': ['import', {
            // 'glossary': {
            //     'annotation': annotation,
            //     'key': glossary,
            // },
            'glossary': {
                'glossary': {
                    'annotation': pd.getLocationInfo(1),
                    'key': contextX,
                },
                'glossary arguments': pd.d(glossArgs === undefined ? {} : glossArgs),
            },
            // 'interface FIXME': {
            //     'annotation': pd.getLocationInfo(1),
            //     'key': inf,
            // },
            'interfaceXX': inf
        }],
        'type arguments': pd.d(typeArgs === undefined ? {} : typeArgs),
    }
}

export function sInterfaceReference(inf: string, args?: RawDictionary<t.T.DataSpecifier<pd.SourceLocation>>): t.T.SynchronousInterfaceReference<pd.SourceLocation> {
    return {
        'context': ['local', {
            // 'interface': {
            //     'annotation': pd.getLocationInfo(1),
            //     'key': inf,
            // },
            'interfaceXX': inf
        }],
        'type arguments': pd.d(args === undefined ? {} : args),
    }
}

export function aExternalInterfaceReference(
    contextX: string,
    inf: string,
    glossArgs?: RawDictionary<t.T.DataSpecifier<pd.SourceLocation>>,
    typeArgs?: RawDictionary<t.T.DataSpecifier<pd.SourceLocation>>
): t.T.AsynchronousInterfaceReference<pd.SourceLocation> {
    return {
        'context': ['import', {
            // 'glossary': {
            //     'annotation': annotation,
            //     'key': glossary,
            // },
            'glossary': {
                'glossary': {
                    'annotation': pd.getLocationInfo(1),
                    'key': contextX,
                },
                'glossary arguments': pd.d(glossArgs === undefined ? {} : glossArgs),
            },
        }],
        'interfaceXX': inf,
        'type arguments': pd.d(typeArgs === undefined ? {} : typeArgs),
    }
}

export function aInterfaceReference(inf: string, args?: RawDictionary<t.T.DataSpecifier<pd.SourceLocation>>): t.T.AsynchronousInterfaceReference<pd.SourceLocation> {
    return {
        'context': ['local', null],
        'interfaceXX': inf,
        'type arguments': pd.d(args === undefined ? {} : args),
    }
}

export function nothing(): ['nothing', null] {
    return ['nothing', null]
}

export function data($: t.T.DataSpecifier<pd.SourceLocation>): ['data', t.T.DataSpecifier<pd.SourceLocation>] {
    return ['data', $]
}

export function inf($: t.T.AsynchronousInterfaceReference<pd.SourceLocation>): ['interface', t.T.AsynchronousInterfaceReference<pd.SourceLocation>] {
    return ['interface', $]
}

export function aInterface(inf: t.T.AsynchronousInterface<pd.SourceLocation>, params?: RawDictionary<t.T.Parameters.D<pd.SourceLocation>>): t.T.Glossary.asynchronous.interfaces.D<pd.SourceLocation> {
    return {
        'parameters': pd.d(params === undefined ? {} : params),
        'interface': inf,
    }
}

export function sInterface(inf: t.T.Synchronous__Interface<pd.SourceLocation>, params?: RawDictionary<t.T.Parameters.D<pd.SourceLocation>>): t.T.Glossary.synchronous.interfaces.D<pd.SourceLocation> {
    return {
        'parameters': pd.d(params === undefined ? {} : params),
        'interface': inf,
    }
}

export function constructor(inf: t.T.AsynchronousInterfaceReference<pd.SourceLocation>, downstreams: RawDictionary<t.T.AsynchronousInterfaceReference<pd.SourceLocation>>, params?: RawDictionary<t.T.Parameters.D<pd.SourceLocation>>): t.T.Glossary.asynchronous.algorithms.D<pd.SourceLocation> {
    return {
        'parameters': pd.d(params === undefined ? {} : params),
        'type': ['constructor', {
            'interface': inf,
            'downstreams': pd.d(downstreams),
        }]
    }
}

export function resource(request: t.T.DataSpecifier<pd.SourceLocation>, consumer: t.T.AsynchronousInterfaceReference<pd.SourceLocation>, params?: RawDictionary<t.T.Parameters.D<pd.SourceLocation>>): t.T.Glossary.asynchronous.algorithms.D<pd.SourceLocation> {
    return {
        'parameters': pd.d(params === undefined ? {} : params),
        'type': ['resource', {
            'request': request,
            'consumer': consumer,
        }]
    }
}

export function afunction(out: t.T.Glossary.asynchronous.algorithms.D._ltype._lfunction.out<pd.SourceLocation>, in_: t.T.Glossary.asynchronous.algorithms.D._ltype._lfunction._lin<pd.SourceLocation>, params?: RawDictionary<t.T.Parameters.D<pd.SourceLocation>>): t.T.Glossary.asynchronous.algorithms.D<pd.SourceLocation> {
    return {
        'parameters': pd.d(params === undefined ? {} : params),
        'type': ['function', {
            'in': in_,
            'out': out,
        }]
    }
}

export function procedure(in_: t.T.DataOrSynchronousInterface<pd.SourceLocation>, out: t.T.SynchronousInterfaceReference<pd.SourceLocation>, params?: RawDictionary<t.T.Parameters.D<pd.SourceLocation>>): t.T.Glossary.synchronous.algorithms.D<pd.SourceLocation> {
    return {
        'parameters': pd.d(params === undefined ? {} : params),
        'type': ['procedure', {
            'in': in_,
            'out': out,
        }]
    }
}



export function scallbackfunction(out: t.T.DataSpecifier<pd.SourceLocation>, in_: t.T.DataOrSynchronousInterface<pd.SourceLocation>, callbacks: RawDictionary<t.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks.D<pd.SourceLocation>>, params?: RawDictionary<t.T.Parameters.D<pd.SourceLocation>>): t.T.Glossary.synchronous.algorithms.D<pd.SourceLocation> {
    return {
        'parameters': pd.d(params === undefined ? {} : params),
        'type': ['function', {
            'in': in_,
            'out': out,
            'callbacks': pd.d(callbacks)
        }]
    }
}

export function scallback(out: t.T.DataSpecifier<pd.SourceLocation>, in_: t.T.DataSpecifier<pd.SourceLocation>, lookups?: RawDictionary<t.T.DataSpecifier<pd.SourceLocation>>): t.T.Glossary.synchronous.algorithms.D._ltype._lfunction.callbacks.D<pd.SourceLocation> {
    return {
        'in': in_,
        'out': out,
        'lookups': pd.d(lookups === undefined ? {} : lookups)
    }
}

export function sfunction(out: t.T.DataSpecifier<pd.SourceLocation>, in_: t.T.DataOrSynchronousInterface<pd.SourceLocation>, params?: RawDictionary<t.T.Parameters.D<pd.SourceLocation>>): t.T.Glossary.synchronous.algorithms.D<pd.SourceLocation> {
    return {
        'parameters': pd.d(params === undefined ? {} : params),
        'type': ['function', {
            'in': in_,
            'out': out,
            'callbacks': pd.d({}),
        }]
    }
}

export function sInterfaceMethod(data: null | t.T.DataSpecifier<pd.SourceLocation>, inf?: null | t.T.Synchronous__Interface<pd.SourceLocation>): t.T.Synchronous__Interface<pd.SourceLocation> {
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

export function aInterfaceMethod(data: null | t.T.DataSpecifier<pd.SourceLocation>, inf?: null | t.T.AsynchronousInterface<pd.SourceLocation>): t.T.AsynchronousInterface<pd.SourceLocation> {
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