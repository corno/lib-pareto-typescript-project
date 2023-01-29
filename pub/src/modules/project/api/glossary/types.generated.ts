import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"
import * as mmoduleDefinition from "../../../moduleDefinition"

export namespace GModule {
    
    export namespace Parguments {}
    export type Parguments = pt.Dictionary<string>
    
    export namespace Pparameters {}
    export type Pparameters = pt.Dictionary<string>
}
export type GModule = {
    readonly 'arguments': GModule.Parguments
    readonly 'definition': mmoduleDefinition.TModuleDefinition
    readonly 'implementation'?: malgorithm.TImplementation
    readonly 'parameters': GModule.Pparameters
    readonly 'states'?: malgorithm.TStates
}
export type UModule = GModule

export namespace GProject {
    
    export namespace Ppubdependencies {
        
        export namespace D {}
        export type D = {}
    }
    export type Ppubdependencies = pt.Dictionary<Ppubdependencies.D>
    
    export namespace Ptestdependencies {
        
        export namespace D {}
        export type D = {}
    }
    export type Ptestdependencies = pt.Dictionary<Ptestdependencies.D>
    
    export namespace Ptype {
        
        export namespace Oglossary {
            
            export namespace Parguments {}
            export type Parguments = pt.Dictionary<string>
        }
        export type Oglossary = {
            readonly 'arguments': Oglossary.Parguments
            readonly 'definition': mglossary.TGlossary
        }
        
        export namespace Olibrary {
            
            export namespace Psubmodules {
                
                export namespace D {
                    
                    export namespace Parguments {
                        
                        export namespace Omain {}
                        export type Omain = {}
                    }
                    export type Parguments = 
                        | ['external', string]
                        | ['main', Parguments.Omain]
                        | ['sibling', string]
                }
                export type D = {
                    readonly 'arguments': D.Parguments
                    readonly 'module': UModule
                }
            }
            export type Psubmodules = pt.Dictionary<Psubmodules.D>
        }
        export type Olibrary = {
            readonly 'arguments': string
            readonly 'main': UModule
            readonly 'submodules': Olibrary.Psubmodules
        }
        
        export namespace Oresource {
            
            export namespace PdevDependencies {
                
                export namespace D {}
                export type D = {}
            }
            export type PdevDependencies = pt.Dictionary<PdevDependencies.D>
        }
        export type Oresource = {
            readonly 'definition': mmoduleDefinition.TModuleDefinition
            readonly 'devDependencies': Oresource.PdevDependencies
        }
    }
    export type Ptype = 
        | ['glossary', Ptype.Oglossary]
        | ['library', Ptype.Olibrary]
        | ['resource', Ptype.Oresource]
}
export type GProject = {
    readonly 'author': string
    readonly 'description': string
    readonly 'license': string
    readonly 'name': string
    readonly 'pubdependencies': GProject.Ppubdependencies
    readonly 'testdependencies': GProject.Ptestdependencies
    readonly 'type': GProject.Ptype
}
export type UProject = GProject