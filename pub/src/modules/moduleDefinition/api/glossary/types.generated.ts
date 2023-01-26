import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"

export namespace G_$AlgorithmType {
    
    export namespace G {
        
        export namespace Oconstructor {
            
            export namespace Pdependencies {
                export type $ = pt.Dictionary<GDefinitionReference.$>
            }
            export type $ = {
                readonly 'configuration data': null | mglossary.TTypeReference
                readonly 'dependencies': Pdependencies.$
            }
        }
        export type $ = 
            | ['constructor', Oconstructor.$]
            | ['reference', null]
    }
    export type $ = G.$
}

export namespace GContext {
    
    export namespace G {
        export type $ = 
            | ['import', string]
            | ['local', null]
    }
    export type $ = G.$
}

export namespace GDefinitionReference {
    
    export namespace G {
        export type $ = {
            readonly 'context'?: GContext.$
            readonly 'function': string
        }
    }
    export type $ = G.$
}

export namespace GModuleDefinition {
    
    export namespace G {
        
        export namespace Papi {
            
            export namespace Palgorithms {
                
                export namespace D {
                    export type $ = {
                        readonly 'definition': GDefinitionReference.$
                        readonly 'type': G_$AlgorithmType.$
                    }
                }
                export type $ = pt.Dictionary<D.$>
            }
            
            export namespace Pimports {
                export type $ = pt.Dictionary<string>
            }
            export type $ = {
                readonly 'algorithms': Palgorithms.$
                readonly 'imports': Pimports.$
            }
        }
        export type $ = {
            readonly 'api': Papi.$
            readonly 'glossary': mglossary.TGlossary
        }
    }
    export type $ = G.$
}