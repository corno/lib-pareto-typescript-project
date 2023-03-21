
import * as pd from 'pareto-core-data'

import * as g_this from "./glossary"

type RawDictionary<T> = { [key: string]: T }

export function tempSubmodule($: string): g_this.T.ModuleDefinition.glossary.imports.D<pd.SourceLocation> {
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
export function main(): ['main', null] {
    return ['main', null]
}


export function data(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.configuration__data.O<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': definition
    }
}

export function aSideEffect(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.side__effects.D<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['asynchronous', {
            'interface': definition,
        }]
    }
}

export function sSideEffect(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.side__effects.D<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['synchronous', {
            'interface': definition,
        }]
    }
}

export function sconstructor(context: string, args: RawDictionary<string>, definition: string): g_this.T.AlgorithmTypeReference<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['synchronous', ['constructor', {
            'constructor': definition
        }]]
    }
}

export function sbuilder(context: string, args: RawDictionary<string>, definition: string): g_this.T.AlgorithmTypeReference<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['synchronous', ['builder', {
            'builder': definition
        }]]
    }
}

export function sfunction(context: string, args: RawDictionary<string>, definition: string): g_this.T.AlgorithmTypeReference<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['synchronous', ['function', {
            'function': definition
        }]]
    }
}

export function abuilder(context: string, args: RawDictionary<string>, definition: string): g_this.T.AlgorithmTypeReference<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['asynchronous', ['builder', {
            'builder': definition
        }]]
    }
}

export function afunction(context: string, args: RawDictionary<string>, definition: string): g_this.T.AlgorithmTypeReference<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['asynchronous', ['function', {
            'function': definition
        }]]
    }
}

export function aconstructor(context: string, args: RawDictionary<string>, definition: string): g_this.T.AlgorithmTypeReference<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['asynchronous', ['constructor', {
            'constructor': definition
        }]]
    }
}

export function dependent(
    data: null | g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.configuration__data.O<pd.SourceLocation>,
    deps: RawDictionary<g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.dependencies.D<pd.SourceLocation>>,
    se: RawDictionary<g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.side__effects.D<pd.SourceLocation>>,
): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype<pd.SourceLocation> {
    return ['dependent', {
        'configuration data': data === null
            ? [false]
            : [true, data],
        'dependencies': pd.d(deps),
        'side effects': pd.d(se),
    }]
}

export function algorithm(def: g_this.T.AlgorithmTypeReference<pd.SourceLocation>, params?: RawDictionary<string>, type?: g_this.T.ModuleDefinition.api.root.algorithms.D._ltype<pd.SourceLocation>): g_this.T.ModuleDefinition.api.root.algorithms.D<pd.SourceLocation> {
    return {
        'definition': def,
        'parameters': pd.d(params === undefined ? {} : params),
        'type': type === undefined
            ? ['independent', null]
            : type,
    }
}