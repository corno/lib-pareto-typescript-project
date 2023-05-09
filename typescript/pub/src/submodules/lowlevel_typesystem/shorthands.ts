import * as pd from 'pareto-core-data'

import { data } from "../glossary/shorthands"
import * as t from "./glossary"

type RawDictionary<T> = { [key: string]: T }

export function ns(
    namespaces: RawDictionary<t.T.Namespace<pd.SourceLocation>>,
    typeParameters: RawDictionary<t.T.Type__Parameters.D<pd.SourceLocation>>,
    types: RawDictionary<t.T.Type<pd.SourceLocation>>
): t.T.Namespace<pd.SourceLocation> {
    return {
        'namespaces': pd.d(namespaces),
        'parameters': pd.d(typeParameters),
        'types': pd.d(types),
    }
}

export function funcDecl(
    typeParameters: RawDictionary<t.T.Type__Parameters.D<pd.SourceLocation>>,
    context: t.T.Type<pd.SourceLocation>,
    parameters: RawDictionary<t.T.Function__Declaration.parameters.D<pd.SourceLocation>>,
): t.T.Function__Declaration<pd.SourceLocation> {
    return {
        'type parameters': pd.d(typeParameters),
        'context': context,
        'parameters': pd.d(parameters),
    }
}

export function valueFunction(
    declaration: t.T.Function__Declaration<pd.SourceLocation>,
    returnType: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['value function', {
        'declaration': declaration,
        'return type': returnType,
    }]
}

export function addressFunction(
    declaration: t.T.Function__Declaration<pd.SourceLocation>,
    returnType: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['address function', {
        'declaration': declaration,
        'return type': returnType,
    }]
}

export function procedure(
    declaration: t.T.Function__Declaration<pd.SourceLocation>,
    returnType: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['procedure', {
        'declaration': declaration,
    }]
}

export function null_(
): t.T.Type<pd.SourceLocation> {
    return ['null', null]
}

export function string(
): t.T.Type<pd.SourceLocation> {
    return ['string', null]
}

export function number(
): t.T.Type<pd.SourceLocation> {
    return ['number', null]
}

export function boolean(
): t.T.Type<pd.SourceLocation> {
    return ['boolean', null]
}

export function group(
    properties: RawDictionary<t.T.Type.group.D<pd.SourceLocation>>,
): t.T.Type<pd.SourceLocation> {
    return ['group', pd.d(properties)]
}

export function array(
    type: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['array', type]
}

export function optional(
    type: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['optional', type]
}

export function dictionary(
    type: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['dictionary', type]
}