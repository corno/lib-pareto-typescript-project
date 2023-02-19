
import * as pd from 'pareto-core-data'

import * as api from "./api"

import * as mglossary from "../glossary"

// import { Function, Glossary, LeafType, Type } from "./types.p"


const d = pd.wrapRawDictionary
const a = pd.wrapRawArray

type RawDictionary<T> = { [key: string]: T }

export function definitionReference(contextOrDefinition: string, args?: RawDictionary<mglossary.T.TypeReference<string>>, definition?: string): api.T.DefinitionReference<pd.SourceLocation> {
    if (definition === undefined) {

        return {
            'context': ['local', {}],
            'function': contextOrDefinition
        }
    } else {
        return {
            'context': ['import', {
                'glossary': contextOrDefinition,
                'arguments': d(args === undefined ? {}: args)
            }],
            'function': definition
        }
    }
}

export function constructor(data: null | mglossary.T.TypeReference<string>, deps: RawDictionary<api.T.DefinitionReference<pd.SourceLocation>>): api.T.ModuleDefinition.api.algorithms.D._ltype<pd.SourceLocation> {
    return ['constructor', {
        'configuration data': data === null
            ? [false]
            : [true, data],
        'dependencies': d(deps),
    }]
}

export function algorithm(def: api.T.DefinitionReference<pd.SourceLocation>, type?: api.T.ModuleDefinition.api.algorithms.D._ltype<pd.SourceLocation>): api.T.ModuleDefinition.api.algorithms.D<pd.SourceLocation> {
    return {
        'definition': def,
        'type': type === undefined
            ? ['reference', {}]
            : type,
    }
}