
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

export function asyncFunctionReference(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.dependencies.D<pd.SourceLocation> {
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

export function syncFunctionReference(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.dependencies.D<pd.SourceLocation> {
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

export function interfaceReference(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.dependencies.D<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['async', ['interface', {
            'interface': definition,
        }]]
    }
}

// export function infRef(context: string, args: RawDictionary<string>, definition: string): g_this.T.DefinitionReference<pd.SourceLocation> {
//     return {
//         'context': {
//             'glossary': context,
//             'arguments': pd.d(args === undefined ? {} : args)
//         },
//         'type': ['interface', {
//             'interface': definition,
//         }]
//     }
// }

// export function rsrcRef(context: string, args: RawDictionary<string>, definition: string): g_this.T.DefinitionReference<pd.SourceLocation> {
//     return {
//         'context': {
//             'glossary': context,
//             'arguments': pd.d(args === undefined ? {} : args)
//         },
//         'type': ['resource', {
//             'resource': definition,
//         }]
//     }
// }

// export function bldrRef(context: string, args: RawDictionary<string>, definition: string): g_this.T.DefinitionReference<pd.SourceLocation> {
//     return {
//         'context': {
//             'glossary': context,
//             'arguments': pd.d(args === undefined ? {} : args)
//         },
//         'type': ['builder', {
//             'builder': definition,
//         }]
//     }
// }

export function builder(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D.definition<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['sync', ['builder', {
            'builder': definition
        }]]
    }
}

export function asyncFunc(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D.definition<pd.SourceLocation> {
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

export function syncFunc(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D.definition<pd.SourceLocation> {
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

export function clss(context: string, args: RawDictionary<string>, definition: string): g_this.T.ModuleDefinition.api.root.algorithms.D.definition<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': ['async', ['class', {
            'class': definition
        }]]
    }
}
export function dependent(data: null | g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.configuration__data.O<pd.SourceLocation>, deps: RawDictionary<g_this.T.ModuleDefinition.api.root.algorithms.D._ltype.dependent.dependencies.D<pd.SourceLocation>>): g_this.T.ModuleDefinition.api.root.algorithms.D._ltype<pd.SourceLocation> {
    return ['dependent', {
        'configuration data': data === null
            ? [false]
            : [true, data],
        'dependencies': pd.d(deps),
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