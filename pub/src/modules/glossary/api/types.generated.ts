import * as pt from "pareto-core-types"
import * as mfp from "lib-fountain-pen"

export type TCallback = {
    readonly "context"?: TContext
    readonly "data": TLeafTypeOrNull
    readonly "interface": string
}

export type TContext = 
    | [ "import", string ]
    | [ "local", null ]

export type TFunction = {
    readonly "async"?: boolean
    readonly "data": TLeafType
    readonly "return value": TLeafType
}

export type TGlossary = {
    readonly "callbacks": pt.Dictionary<TCallback>
    readonly "functions": pt.Dictionary<TFunction>
    readonly "imports": pt.Dictionary<string>
    readonly "interfaces": pt.Dictionary<TInterface>
    readonly "pipes": pt.Dictionary<{
        readonly "in": TInterfaceReference
        readonly "out": TInterfaceReference
    }>
    readonly "types": pt.Dictionary<TType>
}

export type TInterface = 
    | [ "group", {
        readonly "members": pt.Dictionary<TInterface>
    } ]
    | [ "method", {
        readonly "data": TLeafTypeOrNull
        readonly "interface": 
            | [ "null", null ]
            | [ "set", {
                readonly "interface": string
            } ]
    } ]
    | [ "reference", TInterfaceReference ]

export type TInterfaceReference = {
    readonly "context"?: TContext
    readonly "interface": string
}

export type TLeafType = 
    | [ "boolean", null ]
    | [ "external reference", {
        readonly "context": string
        readonly "type": string
    } ]
    | [ "number", null ]
    | [ "reference", string ]
    | [ "string", null ]

export type TLeafTypeOrNull = 
    | [ "null", null ]
    | [ "type", TLeafType ]

export type TType = 
    | [ "array", TType ]
    | [ "dictionary", TTypeOrNull ]
    | [ "group", pt.Dictionary<{
        readonly "optional"?: boolean
        readonly "type": TType
    }> ]
    | [ "leaf", TLeafType ]
    | [ "nested", TType ]
    | [ "optional", TType ]
    | [ "taggedUnion", pt.Dictionary<TTypeOrNull> ]

export type TTypeOrNull = 
    | [ "null", null ]
    | [ "type", TType ]

export type XSerializeGlossary = ($: TGlossary, $i: mfp.IBlock) => void

export type XSerializeLeafType = ($: TLeafType, $i: mfp.ILine) => void