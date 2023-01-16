
import * as pr from "pareto-core-raw"
import * as mglossary from "../../glossary"

// import { Function, Glossary, LeafType, Type } from "./types.p"


const wd = pr.wrapRawDictionary

export function boolean(): mglossary.TLeafType {
    return ['boolean', null]
}

export function string(): mglossary.TLeafType {
    return ['string', null]
}
export function reference(type: string): mglossary.TLeafType {
    return ['reference', type]
}
export function externalReference(context: string, type: string): mglossary.TLeafType {
    return ['external reference', {
        type: type,
        context: context,
    }]
}

export function number(): mglossary.TLeafType {
    return ['number', null]
}
