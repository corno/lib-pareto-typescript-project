import * as pt from "pareto-core-types"
import * as mapi from "../../api"
import * as mfp from "lib-fountain-pen"

export type TAlgorithmImplementation = {}

export type TImplementation = pt.Dictionary<TAlgorithmImplementation>

export type TProject = {
    readonly "main": string
    readonly "modules": pt.Dictionary<{
        readonly "definition": mapi.TModuleDefinition
    }>
}

export type XserializeProject = ($: TProject, $i: mfp.IWriter) => void