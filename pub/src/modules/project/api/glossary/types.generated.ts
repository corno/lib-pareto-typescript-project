import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mmoduleDefinition from "../../../moduleDefinition"

export namespace GAlgorithmImplementation {
    
    export namespace G {
        export type $ = {}
    }
    export type $ = G.$
}

export namespace GImplementation {
    
    export namespace G {
        export type $ = pt.Dictionary<GAlgorithmImplementation.$>
    }
    export type $ = G.$
}

export namespace GModule {
    
    export namespace G {
        export type $ = {
            readonly 'definition': mmoduleDefinition.TModuleDefinition
            readonly 'implementation'?: malgorithm.TImplementation
            readonly 'states'?: malgorithm.TStates
        }
    }
    export type $ = G.$
}

export namespace GProject {
    
    export namespace G {
        
        export namespace Pmodules {
            export type $ = pt.Dictionary<GModule.$>
        }
        
        export namespace Ptype {
            export type $ = 
                | ['glossary', null]
                | ['library', null]
                | ['resource', null]
        }
        export type $ = {
            readonly 'main': string
            readonly 'modules': Pmodules.$
            readonly 'type': Ptype.$
        }
    }
    export type $ = G.$
}