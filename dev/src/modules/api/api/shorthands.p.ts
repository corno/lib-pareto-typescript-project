
import * as pr from "pareto-core-raw"
import * as NGlossary from "../../glossary"

// import { Function, Glossary, LeafType, Type } from "./types.p"


const wd = pr.wrapRawDictionary

export function boolean(): NGlossary.TLeafType {
    return ["boolean", null]
}

export function string(): NGlossary.TLeafType {
    return ["string", null]
}
export function reference(type: string): NGlossary.TLeafType {
    return ["reference", type]
}
export function externalReference(context: string, type: string): NGlossary.TLeafType {
    return ["external reference", {
        type: type,
        context: context,
    }]
}

export function number(): NGlossary.TLeafType {
    return ["number", null]
}

export function _null(): NGlossary.TLeafType {
    return ["null", null]
}
