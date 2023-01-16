
import * as pr from "pareto-core-raw"
import * as mglossary from "../../glossary"

// import { Function, Glossary, LeafType, Type } from "./types.p"


const wd = pr.wrapRawDictionary
const wa = pr.wrapRawArray

export function boolean(): mglossary.TLeafType {
    return ['boolean', null]
}

export function string(): mglossary.TLeafType {
    return ['string', null]
}
export function reference(type: string): mglossary.TLeafType {
    return ['reference', {
        'context': ['local', null],
        'namespaces': wa([]),
        'type': type,
    }]
}
export function externalReference(context: string, type: string): mglossary.TLeafType {
    return ['reference', {
        'context': ['import', context],
        'namespaces': wa([]),
        'type': type,
    }]
}

export function number(): mglossary.TLeafType {
    return ['number', null]
}