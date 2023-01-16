import * as pt from "pareto-core-types"
import * as mfp from "lib-fountain-pen"

export type TCallback = {
    readonly "context"?: TContext
    readonly "data": TLeafTypeOrNull
    readonly "interface": string
}

export type TContext = 
    | ["import", string]
    | ["local", null]

export type TFunction = {
    readonly "async"?: boolean
    readonly "data": TLeafType
    readonly "return value": TLeafType
}

export type TGlossary = {
    readonly "callbacks": pt.Dictionary<TCallback>
    readonly "functions": pt.Dictionary<TFunction>
    readonly "imports": pt.Dictionary<string>
    readonly "namespace": TNamespace
    readonly "parameters"?: TParameters
    readonly "pipes": pt.Dictionary<{
        readonly "in": TInterfaceReference
        readonly "out": TInterfaceReference
    }>
}

export type TInterface = 
    | ["group", {
        readonly "members": pt.Dictionary<TInterface>
    }]
    | ["method", {
        readonly "data": TLeafTypeOrNull
        readonly "interface": 
            | ["null", null]
            | ["set", {
                readonly "interface": string
            }]
    }]
    | ["reference", TInterfaceReference]

export type TInterfaceReference = {
    readonly "context"?: TContext
    readonly "interface": string
}

export type TLeafType = 
    | ["boolean", null]
    | ["number", null]
    | ["reference", {
        readonly "context": TContext
        readonly "namespaces": pt.Array<string>
        readonly "type": string
    }]
    | ["string", null]

export type TLeafTypeOrNull = 
    | ["null", null]
    | ["type", TLeafType]

export type TNamespace = {
    readonly "interfaces": pt.Dictionary<TInterface>
    readonly "namespaces"?: pt.Dictionary<TNamespace>
    readonly "templates"?: pt.Dictionary<TTemplate>
    readonly "types": pt.Dictionary<TType>
}

export type TParameters = pt.Dictionary<null>

export type TTemplate = {
    readonly "parameters": pt.Dictionary<null>
    readonly "type": TType
}

export type TType = 
    | ["array", TType]
    | ["dictionary", TTypeOrNull]
    | ["group", pt.Dictionary<{
        readonly "optional"?: boolean
        readonly "type": TType
    }>]
    | ["leaf", TLeafType]
    | ["nested", TType]
    | ["optional", TType]
    | ["parameter", string]
    | ["taggedUnion", pt.Dictionary<TTypeOrNull>]
    | ["template", {
        readonly "arguments": pt.Dictionary<TTypeOrNull>
        readonly "context"?: TContext
        readonly "template": string
    }]

export type TTypeOrNull = 
    | ["null", null]
    | ["type", TType]

export type XSerialize = ($: TGlossary, $i: mfp.ILine) => void