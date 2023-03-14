
import * as pd from 'pareto-core-data'

import * as g_this from "./glossary"

type RawDictionary<T> = { [key: string]: T }

export function tempSubmodule($: string): g_this.T.Module.glossary.imports.D<pd.SourceLocation> {
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
export function main(): g_this.T.Module.glossary.imports.D<pd.SourceLocation> {
    return ['main', null]
}


export function typeReference(context: string, args: RawDictionary<string>, definition: string): g_this.T.TypeReference<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': definition
    }
}

export function functionReference(context: string, args: RawDictionary<string>, definition: string): g_this.T.DefinitionReference<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['function', {
            'function': definition,
        }]
    }
}

export function infRef(context: string, args: RawDictionary<string>, definition: string): g_this.T.DefinitionReference<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['interface', {
            'interface': definition,
        }]
    }
}

export function bldrRef(context: string, args: RawDictionary<string>, definition: string): g_this.T.DefinitionReference<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['builder', {
            'builder': definition,
        }]
    }
}

export function constructor(data: null | g_this.T.TypeReference<pd.SourceLocation>, deps: RawDictionary<g_this.T.DefinitionReference<pd.SourceLocation>>): g_this.T.Project._ltype.resource.api.root.algorithms.D._ltype<pd.SourceLocation> {
    return ['constructor', {
        'configuration data': data === null
            ? [false]
            : [true, data],
        'dependencies': pd.d(deps),
    }]
}

export function algorithm(def: g_this.T.DefinitionReference<pd.SourceLocation>, type?: g_this.T.Project._ltype.resource.api.root.algorithms.D._ltype<pd.SourceLocation>): g_this.T.Project._ltype.resource.api.root.algorithms.D<pd.SourceLocation> {
    return {
        'definition': def,
        'type': type === undefined
            ? ['reference', null]
            : type,
    }
}