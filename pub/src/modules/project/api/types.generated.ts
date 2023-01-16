import * as pt from "pareto-core-types"
import * as mmoduleDefinition from "../../moduleDefinition"

export type TAlgorithmImplementation = {}

export type TImplementation = pt.Dictionary<TAlgorithmImplementation>

export type TProject = {
    readonly "main": string
    readonly "modules": pt.Dictionary<{
        readonly "definition": mmoduleDefinition.TModuleDefinition
    }>
    readonly "type"?: 
        | ["glossary", null]
        | ["library", null]
        | ["resource", null]
}