import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"

export namespace G_$AlgorithmType {
    
    export namespace G {
        
        export namespace Oconstructor {
            
            export namespace Pconfiguration__data {
                export type /*FIXME REMOVE*/$ = null | mglossary.TTypeReference
            }
            export type Pconfiguration__data = Pconfiguration__data.$
            
            export namespace Pdependencies {
                export type /*FIXME REMOVE*/$ = pt.Dictionary<GDefinitionReference>
            }
            export type Pdependencies = Pdependencies.$
            export type /*FIXME REMOVE*/$ = {
                readonly 'configuration data': Pconfiguration__data
                readonly 'dependencies': Pdependencies
            }
        }
        export type Oconstructor = Oconstructor.$
        export type /*FIXME REMOVE*/$ = 
            | ['constructor', Oconstructor]
            | ['reference', null]
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type G_$AlgorithmType = G_$AlgorithmType.$

export namespace GContext {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = 
            | ['import', string]
            | ['local', null]
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GContext = GContext.$

export namespace GDefinitionReference {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {
            readonly 'context'?: GContext
            readonly 'function': string
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GDefinitionReference = GDefinitionReference.$

export namespace GModuleDefinition {
    
    export namespace G {
        
        export namespace Papi {
            
            export namespace Palgorithms {
                
                export namespace D {
                    export type /*FIXME REMOVE*/$ = {
                        readonly 'definition': GDefinitionReference
                        readonly 'type': G_$AlgorithmType
                    }
                }
                export type D = D.$
                export type /*FIXME REMOVE*/$ = pt.Dictionary<D>
            }
            export type Palgorithms = Palgorithms.$
            
            export namespace Pimports {
                export type /*FIXME REMOVE*/$ = pt.Dictionary<string>
            }
            export type Pimports = Pimports.$
            export type /*FIXME REMOVE*/$ = {
                readonly 'algorithms': Palgorithms
                readonly 'imports': Pimports
            }
        }
        export type Papi = Papi.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'api': Papi
            readonly 'glossary': mglossary.TGlossary
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GModuleDefinition = GModuleDefinition.$