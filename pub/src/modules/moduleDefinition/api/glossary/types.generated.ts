import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"

export namespace VOptional {
    
    export namespace Onot__set {}
    export type Onot__set<AType> = {}
}
export type VOptional<AType> = 
    | ['not set', VOptional.Onot__set<AType>]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

export namespace GContext {
    
    export namespace Olocal {}
    export type Olocal = {}
}
export type GContext = 
    | ['import', string]
    | ['local', GContext.Olocal]
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
            
            export namespace D {
                
                export namespace Ptype {
                    
                    export namespace Oconstructor {
                        
                        export namespace Pconfiguration__data {}
                        export type Pconfiguration__data = MOptional<mglossary.TTypeReference>
                        
                        export namespace Pdependencies {}
                        export type Pdependencies = pt.Dictionary<UDefinitionReference>
                    }
                    export type Oconstructor = {
                        readonly 'configuration data': Oconstructor.Pconfiguration__data
                        readonly 'dependencies': Oconstructor.Pdependencies
                    }
                    
                    export namespace Oreference {}
                    export type Oreference = {}
                }
                export type Ptype = 
                    | ['constructor', Ptype.Oconstructor]
                    | ['reference', Ptype.Oreference]
            }
            export type D = {
                readonly 'definition': UDefinitionReference
                readonly 'type': D.Ptype
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