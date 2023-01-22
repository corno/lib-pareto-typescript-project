import * as pt from 'pareto-core-types'

export type TGlobalType = {
    readonly 'parameters': TParameters
    readonly 'type': TLocalType
}

export type TLocalType = 
    | ['array', {
        readonly 'type': TLocalType
    }]
    | ['boolean', null]
    | ['component', {
        readonly 'arguments': pt.Dictionary<null>
        readonly 'type': string
    }]
    | ['dictionary', {
        readonly 'key': TString
        readonly 'type': TLocalType
    }]
    | ['group', {
        readonly 'properties': TProperties
    }]
    | ['string', TString]
    | ['taggedUnion', {
        readonly 'default': string
        readonly 'options': pt.Dictionary<{
            readonly 'type': TLocalType
        }>
    }]

export type TModel = {
    readonly 'globalTypes': pt.Dictionary<TGlobalType>
    readonly 'root': string
    readonly 'stringTypes': pt.Dictionary<null>
}

export type TParameters = pt.Dictionary<null>

export type TProperties = pt.Dictionary<TProperty>

export type TProperty = {
    readonly 'sibling dependencies': pt.Dictionary<null>
    readonly 'type': TLocalType
}

export type TReference = {
    readonly 'annotation': string
    readonly 'steps': pt.Array<
        | ['array', null]
        | ['group', string]
        | ['reference', null]
        | ['tagged union', string]
    >
    readonly 'type': 
        | ['other', null]
        | ['parameter', string]
        | ['sibling', string]
}

export type TString = {
    readonly 'constrained': 
        | ['no', {
            readonly 'type': string
        }]
        | ['yes', TReference]
}