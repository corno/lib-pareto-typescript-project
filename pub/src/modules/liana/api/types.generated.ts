import * as pt from 'pareto-core-types'

export type MComputedReference<AReferencedType> = {
    readonly 'annotation': string
    readonly 'name': string
    readonly 'referenced value': () => AReferencedType
}

export type MConstrainedDictionary<AReferencedType, AType> = {
    readonly 'annotation': string
    readonly 'dictionary': pt.Dictionary<MConstrainedDictionaryEntry<TXGlobalType, TXArgument>>
}

export type MConstrainedDictionaryEntry<AReferencedType, AType> = {
    readonly 'referenced value': AReferencedType
    readonly 'value': AType
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

export type T_$Reference = {
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
        readonly 'type': T_$Reference
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
        readonly 'default': T_$Reference
        readonly 'options': MDictionary<{
            readonly 'type': TLocalType
        }>
    }]

export type TModel = {
    readonly 'globalTypes': MDictionary<TGlobalType>
    readonly 'root': T_$Reference
    readonly 'stringTypes': MDictionary<null>
}

export type TParameter = T_$Reference

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
    readonly 'steps': pt.Array<
        | ['array', null]
        | ['group', T_$Reference]
        | ['reference', null]
        | ['tagged union', T_$Reference]
    >
    readonly 'type': 
        | ['other', null]
        | ['parameter', T_$Reference]
        | ['sibling', T_$Reference]
}

export type TString = {
    readonly 'constrained': 
        | ['no', {
            readonly 'type': T_$Reference
        }]
        | ['yes', TReference]
}

export type TXArgument = MComputedReference<TXGlobalType>

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
        readonly 'arguments': MConstrainedDictionary<TXParameter, TXArgument>
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

export type FResolve = ($: TModel,) => TPossibleModel