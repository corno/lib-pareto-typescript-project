import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"

export namespace G_$AlgorithmType {
    
    export namespace G {
        
        export namespace Oconstructor {
            
            export namespace Pconfiguration__data {}
            export type Pconfiguration__data = null | mglossary.TTypeReference
            
            export namespace Pdependencies {}
            export type Pdependencies = pt.Dictionary<GDefinitionReference>
        }
        export type Oconstructor = {
            readonly 'configuration data': Oconstructor.Pconfiguration__data
            readonly 'dependencies': Oconstructor.Pdependencies
        }
    }
    export type G = 
        | ['constructor', G.Oconstructor]
        | ['reference', null]
}
export type G_$AlgorithmType = G_$AlgorithmType.G

export namespace GContext {
    
    export namespace G {}
    export type G = 
        | ['import', string]
        | ['local', null]
}
export type GContext = GContext.G

export namespace GDefinitionReference {
    
    export namespace G {}
    export type G = {
        readonly 'context'?: GContext
        readonly 'function': string
    }
}
export type GDefinitionReference = GDefinitionReference.G

export namespace GModuleDefinition {
    
    export namespace G {
        
        export namespace Papi {
            
            export namespace Palgorithms {
                
                export namespace D {}
                export type D = {
                    readonly 'definition': GDefinitionReference
                    readonly 'type': G_$AlgorithmType
                }
            }
            export type Palgorithms = pt.Dictionary<Palgorithms.D>
            
            export namespace Pimports {}
            export type Pimports = pt.Dictionary<string>
        }
        export type Papi = {
            readonly 'algorithms': Papi.Palgorithms
            readonly 'imports': Papi.Pimports
        }
    }
    export type G = {
        readonly 'api': G.Papi
        readonly 'glossary': mglossary.TGlossary
    }
}
export type GModuleDefinition = GModuleDefinition.G