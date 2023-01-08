import * as pt from "pareto-core-types"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../glossary"

export type TCallbackReference = {
    readonly "async"?: boolean
    readonly "callback": string
    readonly "context"?: 
        | [ "import", string ]
        | [ "local", null ]
}

export type TFunctionReference = {
    readonly "async"?: boolean
    readonly "context"?: 
        | [ "import", string ]
        | [ "local", null ]
    readonly "function": string
}

export type TModuleDefinition = {
    readonly "api": {
        readonly "algorithms": pt.Dictionary<
            | [ "callback", TCallbackReference ]
            | [ "callback constructor", {
                readonly "callback": TCallbackReference
                readonly "configuration data": mglossary.TLeafTypeOrNull
                readonly "dependencies": {
                    readonly "callbacks": pt.Dictionary<TCallbackReference>
                    readonly "functions": pt.Dictionary<TFunctionReference>
                    readonly "side effects": pt.Dictionary<mglossary.TLeafTypeOrNull>
                }
            } ]
            | [ "function", TFunctionReference ]
            | [ "function constructor", {
                readonly "configuration data": mglossary.TLeafTypeOrNull
                readonly "dependencies": {
                    readonly "functions": pt.Dictionary<TFunctionReference>
                    readonly "side effects"?: pt.Dictionary<mglossary.TLeafTypeOrNull>
                }
                readonly "function": TFunctionReference
            } ]
            | [ "procedure", mglossary.TLeafTypeOrNull ]
            | [ "procedure constructor", {
                readonly "configuration data": mglossary.TLeafTypeOrNull
                readonly "dependencies": {
                    readonly "callbacks": pt.Dictionary<TCallbackReference>
                    readonly "downstreams": pt.Dictionary<mglossary.TLeafTypeOrNull>
                    readonly "functions": pt.Dictionary<TFunctionReference>
                }
                readonly "type": mglossary.TLeafTypeOrNull
            } ]
        >
        readonly "imports": pt.Dictionary<string>
    }
    readonly "glossary": mglossary.TGlossary
}

export type XSerializeModuleDefinition = ($: TModuleDefinition, $i: mfp.IWriter) => void