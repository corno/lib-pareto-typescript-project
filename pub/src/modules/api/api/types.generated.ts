import * as pt from "pareto-core-types"
import * as mfp from "../../fp"
import * as mglossary from "../../glossary"

export type TContext = 
    | [ "import", string ]
    | [ "local", null ]

export type TDefinitionReference = 
    | [ "callback", {
        readonly "callback": string
        readonly "context"?: TContext
    } ]
    | [ "function", {
        readonly "async"?: boolean
        readonly "context"?: TContext
        readonly "function": string
    } ]
    | [ "interface", {
        readonly "context"?: TContext
        readonly "interface": string
    } ]
    | [ "pipe", {
        readonly "context"?: TContext
        readonly "pipe": string
    } ]
    | [ "procedure", mglossary.TLeafTypeOrNull ]

export type TModuleDefinition = {
    readonly "api": {
        readonly "algorithms": pt.Dictionary<{
            readonly "definition": TDefinitionReference
            readonly "type": 
                | [ "constructor", {
                    readonly "configuration data": mglossary.TLeafTypeOrNull
                    readonly "dependencies": pt.Dictionary<TDefinitionReference>
                } ]
                | [ "reference", null ]
        }>
        readonly "imports": pt.Dictionary<string>
    }
    readonly "glossary": mglossary.TGlossary
}

export type XSerializeModuleDefinition = ($: TModuleDefinition, $i: mfp.IWriter) => void