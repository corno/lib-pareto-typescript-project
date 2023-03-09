
import * as pd from 'pareto-core-data'

import * as gapi from "./glossary"

type RawDictionary<T> = { [key: string]: T }

export function typeReference(context: string, args: RawDictionary<gapi.T.TypeReference<pd.SourceLocation>>, definition: string): gapi.T.TypeReference<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'type': definition
    }
}

export function functionReference(context: string, args: RawDictionary<gapi.T.TypeReference<pd.SourceLocation>>, definition: string): gapi.T.FunctionReference<pd.SourceLocation> {
    return {
        'context': {
            'glossary': context,
            'arguments': pd.d(args === undefined ? {} : args)
        },
        'function': definition
    }
}

export function constructor(data: null | gapi.T.TypeReference<pd.SourceLocation>, deps: RawDictionary<gapi.T.FunctionReference<pd.SourceLocation>>): gapi.T.API.algorithms.D._ltype<pd.SourceLocation> {
    return ['constructor', {
        'configuration data': data === null
            ? [false]
            : [true, data],
        'dependencies': pd.d(deps),
    }]
}

export function algorithm(def: gapi.T.FunctionReference<pd.SourceLocation>, type?: gapi.T.API.algorithms.D._ltype<pd.SourceLocation>): gapi.T.API.algorithms.D<pd.SourceLocation> {
    return {
        'definition': def,
        'type': type === undefined
            ? ['reference', null]
            : type,
    }
}