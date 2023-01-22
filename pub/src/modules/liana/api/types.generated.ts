import * as pt from 'pareto-core-types'

export type MComputedReference<AReferencedType> = {
    readonly 'annotation': string
    readonly 'name': string
    readonly 'referenced value': () => AReferencedType
}

export type MDictionary<AType> = {
    readonly 'annotation': string
    readonly 'dictionary': pt.Dictionary<AType>
}

export type MPossibly<AType> = 
    | ['not set', null]
    | ['set', AType]

export type MReference<AReferencedType> = {
    readonly 'annotation': string
    readonly 'name': string
    readonly 'referenced value': AReferencedType
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
        readonly 'arguments': MDictionary<null>
        readonly 'type': T_Reference
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
        readonly 'options': MDictionary<{
            readonly 'type': TLocalType
        }>
    }]

export type TModel = {
    readonly 'globalTypes': MDictionary<TGlobalType>
    readonly 'root': T_Reference
    readonly 'stringTypes': MDictionary<null>
}

export type TParameter = T_Reference

export type TParameters = MDictionary<TParameter>

export type TPossibleModel = MPossibly<{
    readonly 'has errors': boolean
    readonly 'model': TXModel
}>

export type TProperties = MDictionary<TProperty>

export type TProperty = {
    readonly 'sibling dependencies': MDictionary<null>
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

export type TXArgument = null

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
        readonly 'arguments': MDictionary<TXArgument>
        readonly 'type': MComputedReference<TXGlobalType>
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
        readonly 'options': MDictionary<TXOption>
    }]

export type TXModel = {
    readonly 'globalTypes': MDictionary<TXGlobalType>
    readonly 'root': MReference<TXGlobalType>
    readonly 'stringTypes': MDictionary<TXStringType>
}

export type TXOption = {
    readonly 'type': TXLocalType
}

export type TXParameter = null

export type TXParameters = MDictionary<TXParameter>

export type TXProperties = MDictionary<TXProperty>

export type TXProperty = {
    readonly 'type': TXLocalType
}

export type TXReference = {
    readonly 'resolved type': null | TLocalType
}

export type TXString = {
    readonly 'constrained': 
        | ['no', {
            readonly 'type': MReference<TXStringType>
        }]
        | ['yes', TXReference]
}

export type TXStringType = null

export type FResolve = ($: TModel) => TPossibleModel