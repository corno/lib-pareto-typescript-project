import * as pt from 'pareto-core-types'
import * as malgorithm from "../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mmoduleDefinition from "../../moduleDefinition"

export type TAlgorithmImplementation = {}

export type TImplementation = pt.Dictionary<TAlgorithmImplementation>

export type TModule = {
    readonly 'definition': mmoduleDefinition.TModuleDefinition
    readonly 'implementation'?: malgorithm.TImplementation
    readonly 'states'?: malgorithm.TStates
}

export type TProject = {
    readonly 'main': string
    readonly 'modules': pt.Dictionary<TModule>
    readonly 'type': 
        | ['glossary', null]
        | ['library', null]
        | ['resource', null]
}

export type FSerialize = ($: TModule, $i: mfp.ILine,) => void

export type FSerializeWithContext = ($: TModule, $i: mfp.IWriter,) => void