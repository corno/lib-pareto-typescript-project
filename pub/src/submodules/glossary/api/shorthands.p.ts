
import * as pr from 'pareto-core-raw'

import * as t from "./glossary"

const d = pr.wrapRawDictionary
const wa = pr.wrapRawArray

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
    return ['dictionary', ['null', {}]]
}

export function parameter($: string): t.TType {
    return ['parameter', $]
}

export function template(template: string, $: { [key: string]: t.TType }): t.TType {
    return ['template', {
        'template': template,
        'context': ['local', {}],
        'arguments': d($),
    }]
}

export function array($: t.TType): t.TType {
    return ['array', $]
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

export function reference(a: string, b?: string): t.TType {
    if (b === undefined) {
        return ['reference', {
            'context': ['local', {}],
            'type': a,
            // 'type': {
            //     'annotation': "SSDF",
            //     'name': a
            // },
        }]
    } else {
        return ['reference', typeReference(a, b)]

    }
}


export function typeReference(a: string, b?: string): t.TTypeReference {
    if (b === undefined) {
        return {
            'context': ['local', {}],
            'type': a,
            // 'type': {
            //     'annotation': "SSDF",
            //     'name': a
            // },
        }
    } else {
        return {
            'context': ['import', a],
            'type': b,
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

export function _function(data: t.TTypeReference, returnValue: t.TTypeReference, async?: boolean): t.GGlossary.Pfunctions.D {
    return {
        'return type': ['data', {
            'type': returnValue,
            'asynchronous': async === undefined ? false : async,
        }],
        'data': data,
        'managed input interface': ['not set', {}],
        'output interface': ['not set', {}],
    }
}

export function procedure(data: t.TTypeReference): t.GGlossary.Pfunctions.D {
    return {
        'return type': ['nothing', {}],
        'data': data,
        'managed input interface': ['not set', {}],
        'output interface': ['not set', {}],
    }
}

export function callback(data: t.TTypeReference, inf: t.TInterfaceReference): t.GGlossary.Pfunctions.D {
    return {
        'return type': ['nothing', {}],
        'data': data,
        'managed input interface': ['not set', {}],
        'output interface': ['set', inf],
    }
}

export function managedPipe(data: t.TTypeReference, in_inf: t.TInterfaceReference, out_inf: t.TInterfaceReference): t.GGlossary.Pfunctions.D {
    return {
        'return type': ['nothing', {}],
        'data': data,
        'managed input interface': ['set', in_inf],
        'output interface': ['set', out_inf],
    }
}

export function unmanagedPipe(data: t.TTypeReference, in_inf: t.TInterfaceReference, out_inf: t.TInterfaceReference): t.GGlossary.Pfunctions.D {
    return {
        'return type': ['interface', in_inf],
        'data': data,
        'managed input interface': ['not set', {}],
        'output interface': ['set', out_inf],
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