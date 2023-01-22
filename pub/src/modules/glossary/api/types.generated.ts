import * as pt from 'pareto-core-types'
import * as mfp from "lib-fountain-pen"

export type TCallback = {
    readonly 'context'?: TContext
    readonly 'data': TOptionalTypeReference
    readonly 'interface': string
}

export type TContext = 
    | ['import', string]
    | ['local', null]

export type TFunction = {
    readonly 'async'?: boolean
    readonly 'data': TTypeReference
    readonly 'return value': TTypeReference
}

export type TGlossary = {
    readonly 'callbacks': pt.Dictionary<TCallback>
    readonly 'functions': pt.Dictionary<TFunction>
    readonly 'imports': pt.Dictionary<string>
    readonly 'namespace': TNamespace
    readonly 'parameters'?: TParameters
    readonly 'pipes': pt.Dictionary<{
        readonly 'in': TInterfaceReference
        readonly 'out': TInterfaceReference
    }>
}

export type TInterface = 
    | ['group', {
        readonly 'members': pt.Dictionary<TInterface>
    }]
    | ['method', {
        readonly 'data': TOptionalTypeReference
        readonly 'interface': 
            | ['null', null]
            | ['set', {
                readonly 'interface': string
            }]
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

export type TOptionalTypeReference = null | TTypeReference

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

export type XSerialize = ($: TGlossary, $i: mfp.ILine) => void