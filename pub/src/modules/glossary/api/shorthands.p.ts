
import * as pr from "pareto-core-raw"

import * as api from "./types.generated"



const wd = pr.wrapRawDictionary


export function nullType(): api.TTypeOrNull {
    return ['null', null]
}
export function type($: api.TType): api.TTypeOrNull {
    return ['type', $]
}
export function boolean(): api.TType {
    return ['leaf', ['boolean', null]]
}
export function string(): api.TType {
    return ['leaf', ['string', null]]
}
export function number(): api.TType {
    return ['leaf', ['number', null]]
}
export function types($: { [key: string]: api.TType }) {
    return wd($)
}
export function taggedUnion($: { [key: string]: api.TTypeOrNull }): api.TType {
    return ['taggedUnion', wd($)]
}
export function dictionary($: api.TType): api.TType {
    return ['dictionary', ['type', $]]
}
export function nullDictionary(): api.TType {
    return ['dictionary', ['null', null]]
}
export function parameter($: string): api.TType {
    return ['parameter', $]
}
export function template(template: string, $: { [key: string]: api.TTypeOrNull }): api.TType {
    return ['template', {
        'template': template,
        'arguments': wd($),
    }]
}
export function array($: api.TType): api.TType {
    return ['array', $]
}
export function nested($: api.TType): api.TType {
    return ['nested', $]
}
export function optional($: api.TType): api.TType {
    return ['optional', $]
}
export function group($: {
    [key: string]: {
        type: api.TType
        optional?: boolean
    }
}): api.TType {
    return ['group', wd($)]
}

export function member($: api.TType, optional?: boolean): { type: api.TType, optional?: boolean } {
    return {
        optional: optional,
        type: $
    }
}

export function reference(type: string): api.TType {
    return ['leaf', ['reference', type]]
}

export function externalReference(context: string, type: string): api.TType {
    return ['leaf', ['external reference', {
        type: type,
        context: context,
    }]]
}

export function _function(data: api.TLeafType, returnValue: api.TLeafType, async?: boolean): api.TFunction {
    return {
        "async": async === undefined ? false : async,
        "data": data,
        "return value": returnValue,
    }
}