
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
export function main(): g_this.T.ModuleDefinition.glossary.imports.D<pd.SourceLocation> {
    return ['main', null]
}


export function typeReference(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.configuration__data.O<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': definition
    }
}

export function aFunctionReference(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.dependencies.D<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['async', ['function', {
            'function': definition,
        }]]
    }
}

export function aSideEffect(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.side__effects.D<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['async', {
            'interface': definition,
        }]
    }
}

export function aConstructorReference(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.dependencies.D<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['async', ['constructor', {
            'constructor': definition,
        }]]
    }
}

export function sFunctionReference(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.dependencies.D<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['sync', ['function', {
            'function': definition,
        }]]
    }
}

export function sSideEffect(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.side__effects.D<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['sync', {
            'interface': definition,
        }]
    }
}

export function sConstructorReference(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.dependencies.D<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['sync', ['constructor', {
            'constructor': definition,
        }]]
    }
}

export function sconstructor(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D.definition<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['sync', ['constructor', {
            'constructor': definition
        }]]
    }
}

export function sfunction(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D.definition<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['sync', ['function', {
            'function': definition
        }]]
    }
}

export function sinterface(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D.definition<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['sync', ['interface', {
            'interface': definition
        }]]
    }
}

export function afunction(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D.definition<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['async', ['function', {
            'function': definition
        }]]
    }
}

export function aconstructor(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D.definition<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['async', ['constructor', {
            'constructor': definition
        }]]
    }
}

export function ainterface(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D.definition<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['async', ['interface', {
            'interface': definition
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

export function algorithm(def: g_this.T.ModuleDefinition.api.root.algorithms.D.definition<pd.SourceLocation>, type?: g_this.T.ModuleDefinition.api.root.algorithms.D._ltype<pd.SourceLocation>): g_this.T.ModuleDefinition.api.root.algorithms.D<pd.SourceLocation> {
    return {
        'definition': def,
        'type': type === undefined
            ? ['independent', null]
            : type,
    }
}