
import * as pd from 'pareto-core-data'

import * as gapi from "./definition/glossary"

type RawDictionary<T> = { [key: string]: T }

export function tempSubmodule($: string): gapi.T.Project._ltype.library.main.definition.glossary.imports.D<pd.SourceLocation> {
    return ['temp submodule', $]
}
export function submodule($: string): gapi.T.Project._ltype.library.main.definition.api.imports.D<pd.SourceLocation> {
    return ['submodule', $]
}
export function sibling($: string): ['sibling', string] {
    return ['sibling', $]
}
export function external($: string): ['external', string] {
    return ['external', $]
}
export function main(): gapi.T.Project._ltype.library.submodules.D.definition.glossary.imports.D<pd.SourceLocation> {
    return ['main', null]
}