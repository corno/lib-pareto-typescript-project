import * as pt from 'pareto-core-types'
import * as mfp from "lib-fountain-pen"

export type TContext = 
    | ['import', string]
    | ['local', null]

export type TFunction = {
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

export type TGlossary = {
    readonly 'functions': pt.Dictionary<TFunction>
    readonly 'imports': pt.Dictionary<string>
    readonly 'namespace': TNamespace
    readonly 'parameters'?: TParameters
}

export type TInterface = 
    | ['group', {
        readonly 'members': pt.Dictionary<TInterface>
    }]
    | ['method', {
        readonly 'data': null | TTypeReference
        readonly 'interface': null | TInterface
    }]
    | ['reference', TInterfaceReference]

export type TInterfaceReference = {
    readonly 'context'?: TContext
    readonly 'interface': string
}

export type TNamespace = {
    readonly 'interfaces': pt.Dictionary<TInterface>
    readonly 'namespaces'?: pt.Dictionary<TNamespace>
    readonly 'templates'?: pt.Dictionary<TTemplate>
    readonly 'types': pt.Dictionary<TType>
}

export type TParameters = pt.Dictionary<null>

export type TTemplate = {
    readonly 'parameters': pt.Dictionary<null>
    readonly 'type': TType
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
    | ['reference', TTypeReference]
    | ['string', null]
    | ['taggedUnion', pt.Dictionary<TType>]
    | ['template', {
        readonly 'arguments': pt.Dictionary<TType>
        readonly 'context'?: TContext
        readonly 'template': string
    }]

export type TTypeReference = {
    readonly 'context': TContext
    readonly 'namespaces': pt.Array<string>
    readonly 'type': string
}