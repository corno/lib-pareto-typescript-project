import * as pt from 'pareto-core-types'
import * as mfp from "lib-fountain-pen"

export type T_Function = {
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

export type T_Parameters = pt.Dictionary<null>

export type TContext = 
    | ['import', string]
    | ['local', null]

export type TGlossary = {
    readonly 'functions': pt.Dictionary<T_Function>
    readonly 'imports': pt.Dictionary<string>
    readonly 'namespace': TNamespace
    readonly 'parameters'?: T_Parameters
}

export type TInterface = 
    | ['group', {
        readonly 'members': pt.Dictionary<TInterface>
    }]
    | ['method', {
        readonly 'data': null | TNamespacedTypeReference
        readonly 'interface': null | TInterface
    }]
    | ['reference', {
        readonly 'context'?: TContext
        readonly 'interface': string
        readonly 'namespaces': pt.Array<string>
    }]

export type TInterfaceReference = {
    readonly 'context'?: TContext
    readonly 'interface': string
}

export type TNamespace = {
    readonly 'interfaces': pt.Dictionary<TInterface>
    readonly 'namespaces'?: pt.Dictionary<TNamespace>
    readonly 'templates'?: pt.Dictionary<{
        readonly 'parameters': pt.Dictionary<null>
        readonly 'type': TType
    }>
    readonly 'types': pt.Dictionary<TType>
}

export type TNamespacedTypeReference = {
    readonly 'context': TContext
    readonly 'namespaces': pt.Array<string>
    readonly 'type': string
}

export type TType = 
    | ['array', TType]
    | ['boolean', null]
    | ['computed', TType]
    | ['dictionary', TType]
    | ['group', pt.Dictionary<{
        readonly 'optional'?: boolean
        readonly 'type': TType
    }>]
    | ['nested', TType]
    | ['null', null]
    | ['number', null]
    | ['optional', TType]
    | ['parameter', string]
    | ['reference', TNamespacedTypeReference]
    | ['string', null]
    | ['taggedUnion', pt.Dictionary<TType>]
    | ['template', {
        readonly 'arguments': pt.Dictionary<TType>
        readonly 'context'?: TContext
        readonly 'template': string
    }]

export type TTypeReference = {
    readonly 'context': TContext
    readonly 'type': string
}

export type FSerialize = ($: TGlossary,$i: mfp.ILine,) => void