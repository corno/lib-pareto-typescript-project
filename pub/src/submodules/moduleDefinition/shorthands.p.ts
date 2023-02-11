
import * as pr from 'pareto-core-raw'

import * as api from "./api"

import * as mglossary from "../glossary"

// import { Function, Glossary, LeafType, Type } from "./types.p"


const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

type RawDictionary<T> = { [key: string]: T }

export function definitionReference(contextOrDefinition: string, args?: RawDictionary<mglossary.T.TypeReference<string>>, definition?: string): api.T.DefinitionReference {
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

export function constructor(data: null | mglossary.T.TypeReference<string>, deps: RawDictionary<api.T.DefinitionReference>): api.T.ModuleDefinition.api.algorithms.D._ltype {
    return ['constructor', {
        'configuration data': data === null
            ? [false]
            : [true, data],
        'dependencies': d(deps),
    }]
}

export function algorithm(def: api.T.DefinitionReference, type?: api.T.ModuleDefinition.api.algorithms.D._ltype): api.T.ModuleDefinition.api.algorithms.D {
    return {
        'definition': def,
        'type': type === undefined
            ? ['reference', {}]
            : type,
    }
}