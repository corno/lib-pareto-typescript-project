import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mmoduleDefinition from "../../../moduleDefinition"

export namespace UAlgorithmImplementation {}
export type UAlgorithmImplementation = {}
export type GAlgorithmImplementation = UAlgorithmImplementation

export namespace UImplementation {}
export type UImplementation = pt.Dictionary<GAlgorithmImplementation>
export type GImplementation = UImplementation

export namespace UModule {}
export type UModule = {
    readonly 'definition': mmoduleDefinition.TModuleDefinition
    readonly 'implementation'?: malgorithm.TImplementation
    readonly 'states'?: malgorithm.TStates
}
export type GModule = UModule

export namespace UProject {
    
    export namespace Pmodules {}
    export type Pmodules = pt.Dictionary<GModule>
    
    export namespace Ptype {}
    export type Ptype = 
        | ['glossary', null]
        | ['library', null]
        | ['resource', null]
}
export type UProject = {
    readonly 'main': string
    readonly 'modules': UProject.Pmodules
    readonly 'type': UProject.Ptype
}
export type GProject = UProject