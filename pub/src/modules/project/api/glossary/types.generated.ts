import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mmoduleDefinition from "../../../moduleDefinition"

export namespace GAlgorithmImplementation {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {}
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GAlgorithmImplementation = GAlgorithmImplementation.$

export namespace GImplementation {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = pt.Dictionary<GAlgorithmImplementation>
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GImplementation = GImplementation.$

export namespace GModule {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {
            readonly 'definition': mmoduleDefinition.TModuleDefinition
            readonly 'implementation'?: malgorithm.TImplementation
            readonly 'states'?: malgorithm.TStates
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GModule = GModule.$

export namespace GProject {
    
    export namespace G {
        
        export namespace Pmodules {
            export type /*FIXME REMOVE*/$ = pt.Dictionary<GModule>
        }
        export type Pmodules = Pmodules.$
        
        export namespace Ptype {
            export type /*FIXME REMOVE*/$ = 
                | ['glossary', null]
                | ['library', null]
                | ['resource', null]
        }
        export type Ptype = Ptype.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'main': string
            readonly 'modules': Pmodules
            readonly 'type': Ptype
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GProject = GProject.$