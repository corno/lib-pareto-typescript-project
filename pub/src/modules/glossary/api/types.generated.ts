import * as pt from 'pareto-core-types'
import * as mfp from "lib-fountain-pen"

export type T_$Function = {
    readonly 'data': TTypeReference
    readonly 'managed input interface': null | TInterfaceReference
    readonly 'output interface': null | TInterfaceReference
    readonly 'return type': 
        | ['data', {
            readonly 'asynchronous': boolean
            readonly 'type': TTypeReference
        }]
        | ['interface', TInterfaceReference]
        | ['nothing', null]
}

export type T_$MethodInterface = {
    readonly 'interface': TInterface
    readonly 'managed': boolean
}

export type T_$Parameters = pt.Dictionary<null>

export type TContext = 
    | ['import', string]
    | ['local', null]

export type TGlossary = {
    readonly 'functions': pt.Dictionary<T_$Function>
    readonly 'imports': pt.Dictionary<string>
    readonly 'interfaces': pt.Dictionary<TInterface>
    readonly 'parameters': T_$Parameters
    readonly 'templates'?: pt.Dictionary<{
        readonly 'parameters': pt.Dictionary<null>
        readonly 'type': TType
    }>
    readonly 'types': pt.Dictionary<TType>
}

export type TInterface = 
    | ['group', {
        readonly 'members': pt.Dictionary<TInterface>
    }]
    | ['method', {
        readonly 'data': null | TTypeReference
        readonly 'interface': null | T_$MethodInterface
    }]
    | ['reference', {
        readonly 'context': TContext
        readonly 'interface': string
    }]

export type TInterfaceReference = {
    readonly 'context': TContext
    readonly 'interface': string
}

export type TType = 
    | ['array', TType]
    | ['boolean', null]
    | ['computed', TType]
    | ['dictionary', TType]
    | ['group', pt.Dictionary<{
        readonly 'optional': boolean
        readonly 'type': TType
    }>]
    | ['nested', TType]
    | ['null', null]
    | ['number', null]
    | ['optional', TType]
    | ['parameter', string]
    | ['reference', TTypeReference]
    | ['string', null]
    | ['taggedUnion', pt.Dictionary<TType>]
    | ['template', {
        readonly 'arguments': pt.Dictionary<TType>
        readonly 'context': TContext
        readonly 'template': string
    }]

export type TTypeReference = {
    readonly 'context': TContext
    readonly 'type': string
}

export type FSerialize = ($: TGlossary, $i: mfp.ILine,) => void