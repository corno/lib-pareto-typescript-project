import * as pt from "pareto-core-types"
import * as mfp from "lib-fountain-pen"

export type TCallback = {
    readonly "context"?: 
        | [ "import", string ]
        | [ "local", null ]
    readonly "data": TLeafTypeOrNull
    readonly "interface": string
}

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
    readonly "types": pt.Dictionary<TType>
}

export type TInterface = {
    readonly "members": pt.Dictionary<
        | [ "interface", {
            readonly "context"?: 
                | [ "import", string ]
                | [ "local", null ]
            readonly "interface": string
        } ]
        | [ "procedure", TLeafTypeOrNull ]
    >
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
    | [ "dictionary", TType ]
    | [ "group", pt.Dictionary<{
        readonly "optional"?: boolean
        readonly "type": TType
    }> ]
    | [ "leaf", TLeafType ]
    | [ "nested", TType ]
    | [ "optional", TType ]
    | [ "taggedUnion", pt.Dictionary<TType> ]

export type XSerializeGlossary = ($: TGlossary, $i: mfp.IBlock) => void

export type XSerializeLeafType = ($: TLeafType, $i: mfp.ILine) => void