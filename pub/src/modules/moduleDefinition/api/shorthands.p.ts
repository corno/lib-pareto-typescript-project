
import * as pr from 'pareto-core-raw'

import * as api from "../api"

import * as mglossary from "../../glossary"

// import { Function, Glossary, LeafType, Type } from "./types.p"


const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

export function definitionReference(a: string, b?: string): api.TDefinitionReference {
    if (b === undefined) {

        return {
            'context': ['local', {}],
            'function': a
        }
    } else {
        return {
            'context': ['import', a],
            'function': b
        }
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

export function algorithm(def: api.TDefinitionReference, type?: api.GModuleDefinition.Papi.Palgorithms.D.Ptype): api.GModuleDefinition.Papi.Palgorithms.D {
    return {
        'definition': def,
        'type': type === undefined
            ? ['reference', {}]
            : type,
    }
}