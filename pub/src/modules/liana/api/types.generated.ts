import * as pt from 'pareto-core-types'

export type TGlobalType = {
    readonly 'type': TLocalType
}

export type TLocalType = 
    | ['array', {
        readonly 'type': TLocalType
    }]
    | ['boolean', null]
    | ['component', {
        readonly 'type': string
    }]
    | ['dictionary', {
        readonly 'key': TString
        readonly 'type': TLocalType
    }]
    | ['group', {
        readonly 'properties': pt.Dictionary<{
            readonly 'sibling dependencies': pt.Dictionary<null>
            readonly 'type': TLocalType
        }>
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

export type TString = {
    readonly 'constrained': 
        | ['no', {
            readonly 'type': string
        }]
        | ['yes', {
            readonly 'referenced type': string
        }]
}