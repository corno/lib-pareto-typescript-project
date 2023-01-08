import * as pt from "pareto-core-types"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../glossary"

export type TAlgorithmReference = {
    readonly "type": 
        | [ "callback", {
            readonly "callback": string
            readonly "context"?: 
                | [ "import", string ]
                | [ "local", null ]
        } ]
        | [ "function", TFunctionReference ]
        | [ "procedure", mglossary.TLeafTypeOrNull ]
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
            | [ "algorithm", TAlgorithmReference ]
            | [ "constructor", {
                readonly "data": mglossary.TLeafTypeOrNull
                readonly "dependencies": pt.Dictionary<TAlgorithmReference>
                readonly "result": TAlgorithmReference
            } ]
        >
        readonly "imports": pt.Dictionary<string>
    }
    readonly "glossary": mglossary.TGlossary
}

export type XSerializeModuleDefinition = ($: TModuleDefinition, $i: mfp.IWriter) => void