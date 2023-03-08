
import * as pd from 'pareto-core-data'

import * as gapi from "./definition/glossary"

type RawDictionary<T> = { [key: string]: T }

export function tempSubmodule($: string): gapi.T.Module.glossary.imports.D<pd.SourceLocation> {
    return ['temp submodule', $]
}
export function submodule($: string): ['submodule', string] {
    return ['submodule', $]
}
export function this_(): ['this', null] {
    return ['this', null]
}
export function pub(): ['pub', null] {
    return ['pub', null]
}
export function sibling($: string): ['sibling', string] {
    return ['sibling', $]
}
export function external($: string): ['external', string] {
    return ['external', $]
}
export function main(): gapi.T.Module.glossary.imports.D<pd.SourceLocation> {
    return ['main', null]
}