import * as pt from "pareto-core-types"
import * as mapi from "../../api"
import * as mfp from "../../fp"

export type TAlgorithmImplementation = {}

export type TImplementation = pt.Dictionary<TAlgorithmImplementation>

export type TProject = {
    readonly "main": string
    readonly "modules": pt.Dictionary<{
        readonly "definition": mapi.TModuleDefinition
    }>
    readonly "type"?: 
        | [ "glossary", null ]
        | [ "library", null ]
        | [ "resource", null ]
}

export type XSerializeProject = ($: TProject, $i: mfp.IWriter) => void

export type XSerializeTemplate = ($: TProject, $i: mfp.IWriter) => void