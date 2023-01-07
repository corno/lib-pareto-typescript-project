
import * as pr from "pareto-core-raw"

import * as NGlossary from "./types.generated"

type Type = NGlossary.TType
type LeafType = NGlossary.TLeafType


const wd = pr.wrapRawDictionary


export function boolean(): Type {
    return ["leaf", ["boolean", null]]
}
export function string(): Type {
    return ["leaf", ["string", null]]
}
export function number(): Type {
    return ["leaf", ["number", null]]
}
export function _null(): Type {
    return ["leaf", ["null", null]]
}

export function types($: { [key: string]: Type }) {
    return wd($)
}
export function taggedUnion($: { [key: string]: Type }): Type {
    return ["taggedUnion", wd($)]
}
export function dictionary($: Type): Type {
    return ["dictionary", $]
}
export function array($: Type): Type {
    return ["array", $]
}
export function group($: {
    [key: string]: {
        type: Type
        optional?: boolean
    }
}): Type {
    return ["group", wd($)]
}

export function member($: Type, optional?: boolean): { type: Type, optional?: boolean } {
    return {
        optional: optional,
        type: $
    }
}

export function reference(type: string): Type {
    return ["leaf", ["reference", type]]
}

export function externalReference(context: string, type: string): Type {
    return ["leaf", ["external reference", {
        type: type,
        context: context,
    }]]
}

export function _function(data: LeafType, returnValue: LeafType, async?: boolean): NGlossary.TFunction {
    return {
        "async": async === undefined ? false : async,
        "data": data,
        "return value": returnValue,
    }
}