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
        readonly 'type': TLocalType
    }]
    | ['group', {
        readonly 'properties': pt.Dictionary<{
            readonly 'type': TLocalType
        }>
    }]
    | ['string', {
        readonly 'constrained': 
            | ['no', null]
            | ['yes', {
                readonly 'type': string
            }]
    }]
    | ['taggedUnion', {
        readonly 'options': pt.Dictionary<{
            readonly 'type': TLocalType
        }>
    }]

export type TModel = {
    readonly 'globalTypes': pt.Dictionary<TGlobalType>
    readonly 'root': string
}