import * as pt from 'pareto-core-types'

export type TLocalType = 
    | ['array', {
        readonly 'type': TLocalType
    }]
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
    | ['string', {}]
    | ['taggedUnion', {
        readonly 'options': pt.Dictionary<{
            readonly 'type': TLocalType
        }>
    }]

export type TModel = {
    readonly 'root': string
    readonly 'types': pt.Dictionary<{
        readonly 'type': TLocalType
    }>
}