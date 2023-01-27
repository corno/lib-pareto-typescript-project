
import * as pr from 'pareto-core-raw'

import * as api from "../api"

import * as mglossary from "../../glossary"

// import { Function, Glossary, LeafType, Type } from "./types.p"


const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

export function definitionReference(func: string): api.TDefinitionReference {
    return {
        'context': ['local', {}],
        'function': func
    }
}

export function externalDefinitionReference(context: string, func: string): api.TDefinitionReference {
    return {
        'context': ['import', context],
        'function': func
    }
}

export function constructor(data: null | mglossary.TTypeReference, deps: { [key: string]: api.TDefinitionReference }): api.GModuleDefinition.Papi.Palgorithms.D.Ptype {
    return ['constructor', {
        'configuration data': data === null
            ? ['not set', {}]
            : ['set', data],
        'dependencies': d(deps),
    }]
}

export function algorithm(def: api.TDefinitionReference, type: undefined | api.GModuleDefinition.Papi.Palgorithms.D.Ptype): api.GModuleDefinition.Papi.Palgorithms.D {
    return {
        'definition': def,
        'type': type === undefined
            ? ['reference', {}]
            : type,
    }
}