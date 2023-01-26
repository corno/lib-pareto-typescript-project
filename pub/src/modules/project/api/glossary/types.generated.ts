import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mmoduleDefinition from "../../../moduleDefinition"

export namespace GAlgorithmImplementation {}
export type GAlgorithmImplementation = {}
export type UAlgorithmImplementation = GAlgorithmImplementation

export namespace GImplementation {}
export type GImplementation = pt.Dictionary<UAlgorithmImplementation>
export type UImplementation = GImplementation

export namespace GModule {}
export type GModule = {
    readonly 'definition': mmoduleDefinition.TModuleDefinition
    readonly 'implementation'?: malgorithm.TImplementation
    readonly 'states'?: malgorithm.TStates
}
export type UModule = GModule

export namespace GProject {
    
    export namespace Pmodules {}
    export type Pmodules = pt.Dictionary<UModule>
    
    export namespace Ptype {}
    export type Ptype = 
        | ['glossary', null]
        | ['library', null]
        | ['resource', null]
}
export type GProject = {
    readonly 'main': string
    readonly 'modules': GProject.Pmodules
    readonly 'type': GProject.Ptype
}
export type UProject = GProject