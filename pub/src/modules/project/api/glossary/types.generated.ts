import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mmoduleDefinition from "../../../moduleDefinition"

export namespace GAlgorithmImplementation {
    
    export namespace G {}
    export type G = {}
}
export type GAlgorithmImplementation = GAlgorithmImplementation.G

export namespace GImplementation {
    
    export namespace G {}
    export type G = pt.Dictionary<GAlgorithmImplementation>
}
export type GImplementation = GImplementation.G

export namespace GModule {
    
    export namespace G {}
    export type G = {
        readonly 'definition': mmoduleDefinition.TModuleDefinition
        readonly 'implementation'?: malgorithm.TImplementation
        readonly 'states'?: malgorithm.TStates
    }
}
export type GModule = GModule.G

export namespace GProject {
    
    export namespace G {
        
        export namespace Pmodules {}
        export type Pmodules = pt.Dictionary<GModule>
        
        export namespace Ptype {}
        export type Ptype = 
            | ['glossary', null]
            | ['library', null]
            | ['resource', null]
    }
    export type G = {
        readonly 'main': string
        readonly 'modules': G.Pmodules
        readonly 'type': G.Ptype
    }
}
export type GProject = GProject.G