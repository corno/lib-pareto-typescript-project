
import * as pr from 'pareto-core-raw'

import * as api from "./api"

import * as mglossary from "../glossary"

// import { Function, Glossary, LeafType, Type } from "./types.p"


const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

type RawDictionary<T> = { [key: string]: T }

export function definitionReference(contextOrDefinition: string, definition?: string, args?: RawDictionary<mglossary.TTypeReference>): api.TDefinitionReference {
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

export function constructor(data: null | mglossary.TTypeReference, deps: RawDictionary<api.TDefinitionReference>): api.GModuleDefinition.Papi.Palgorithms.D.Ptype {
    return ['constructor', {
        'configuration data': data === null
            ? ['not set', {}]
            : ['set', data],
        'dependencies': d(deps),
    }]
}

export function algorithm(def: api.TDefinitionReference, type?: api.GModuleDefinition.Papi.Palgorithms.D.Ptype): api.GModuleDefinition.Papi.Palgorithms.D {
    return {
        'definition': def,
        'type': type === undefined
            ? ['reference', {}]
            : type,
    }
}