import * as pt from 'pareto-core-types'

export type MPossibly<AType> = 
    | ['not set', null]
    | ['set', AType]

export type MReference<AReferencedType> = {
    readonly 'annotation': string
    readonly 'name': string
    readonly 'referenced type': AReferencedType
}

export type T_Reference = {
    readonly 'annotation': string
    readonly 'name': string
}

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
        readonly 'default': T_Reference
        readonly 'options': pt.Dictionary<{
            readonly 'type': TLocalType
        }>
    }]

export type TModel = {
    readonly 'globalTypes': pt.Dictionary<TGlobalType>
    readonly 'root': T_Reference
    readonly 'stringTypes': pt.Dictionary<null>
}

export type TParameters = pt.Dictionary<null>

export type TPossibleModel = MPossibly<TXModel>

export type TProperties = pt.Dictionary<TProperty>

export type TProperty = {
    readonly 'sibling dependencies': pt.Dictionary<null>
    readonly 'type': TLocalType
}

export type TReference = {
    readonly 'annotation': string
    readonly 'steps': pt.Array<
        | ['array', null]
        | ['group', T_Reference]
        | ['reference', null]
        | ['tagged union', T_Reference]
    >
    readonly 'type': 
        | ['other', null]
        | ['parameter', string]
        | ['sibling', string]
}

export type TString = {
    readonly 'constrained': 
        | ['no', {
            readonly 'type': T_Reference
        }]
        | ['yes', TReference]
}

export type TXGlobalType = {
    readonly 'parameters': TXParameters
    readonly 'type': TXLocalType
}

export type TXLocalType = 
    | ['array', {
        readonly 'type': TXLocalType
    }]
    | ['boolean', null]
    | ['component', {
        readonly 'arguments': pt.Dictionary<null>
        readonly 'type': string
    }]
    | ['dictionary', {
        readonly 'key': TXString
        readonly 'type': TXLocalType
    }]
    | ['group', {
        readonly 'properties': TXProperties
    }]
    | ['string', TXString]
    | ['taggedUnion', {
        readonly 'default': MReference<TXOption>
        readonly 'options': pt.Dictionary<TXOption>
    }]

export type TXModel = {
    readonly 'globalTypes': pt.Dictionary<TXGlobalType>
    readonly 'root': MReference<TXGlobalType>
    readonly 'stringTypes': pt.Dictionary<TXStringType>
}

export type TXOption = {
    readonly 'type': TXLocalType
}

export type TXParameters = pt.Dictionary<null>

export type TXProperties = pt.Dictionary<TXProperty>

export type TXProperty = {
    readonly 'type': TXLocalType
}

export type TXReference = {}

export type TXString = {
    readonly 'constrained': 
        | ['no', {
            readonly 'type': MReference<TXStringType>
        }]
        | ['yes', TXReference]
}

export type TXStringType = null

export type IOnResolved = ($: TXModel, ) => void

export type FResolve = ($: TModel) => TPossibleModel