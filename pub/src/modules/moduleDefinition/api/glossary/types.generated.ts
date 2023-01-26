import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"

export namespace G_$AlgorithmType {
    
    export namespace Oconstructor {
        
        export namespace Pconfiguration__data {}
        export type Pconfiguration__data = null | mglossary.TTypeReference
        
        export namespace Pdependencies {}
        export type Pdependencies = pt.Dictionary<UDefinitionReference>
    }
    export type Oconstructor = {
        readonly 'configuration data': Oconstructor.Pconfiguration__data
        readonly 'dependencies': Oconstructor.Pdependencies
    }
}
export type G_$AlgorithmType = 
    | ['constructor', G_$AlgorithmType.Oconstructor]
    | ['reference', null]
export type U_$AlgorithmType = G_$AlgorithmType

export namespace GContext {}
export type GContext = 
    | ['import', string]
    | ['local', null]
export type UContext = GContext

export namespace GDefinitionReference {}
export type GDefinitionReference = {
    readonly 'context'?: UContext
    readonly 'function': string
}
export type UDefinitionReference = GDefinitionReference

export namespace GModuleDefinition {
    
    export namespace Papi {
        
        export namespace Palgorithms {
            
            export namespace D {}
            export type D = {
                readonly 'definition': UDefinitionReference
                readonly 'type': U_$AlgorithmType
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
export type GModuleDefinition = {
    readonly 'api': GModuleDefinition.Papi
    readonly 'glossary': mglossary.TGlossary
}
export type UModuleDefinition = GModuleDefinition