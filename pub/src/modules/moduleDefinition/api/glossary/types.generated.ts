import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"

export namespace U_$AlgorithmType {
    
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
export type U_$AlgorithmType = 
    | ['constructor', U_$AlgorithmType.Oconstructor]
    | ['reference', null]
export type G_$AlgorithmType = U_$AlgorithmType

export namespace UContext {}
export type UContext = 
    | ['import', string]
    | ['local', null]
export type GContext = UContext

export namespace UDefinitionReference {}
export type UDefinitionReference = {
    readonly 'context'?: GContext
    readonly 'function': string
}
export type GDefinitionReference = UDefinitionReference

export namespace UModuleDefinition {
    
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
export type UModuleDefinition = {
    readonly 'api': UModuleDefinition.Papi
    readonly 'glossary': mglossary.TGlossary
}
export type GModuleDefinition = UModuleDefinition