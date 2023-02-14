import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"
import * as mmoduleDefinition from "../../../moduleDefinition"

export namespace T {
    
    export namespace AlgorithmImplementation {}
    
    export type AlgorithmImplementation = {}
    
    export namespace Implementation {
        
        export type D = T.AlgorithmImplementation
    }
    
    export type Implementation = pt.Dictionary<T.AlgorithmImplementation>
    
    export namespace Module {
        
        export type definition = mmoduleDefinition.T.ModuleDefinition
        
        export type implementation = malgorithm.T.Implementation
        
        export type states = malgorithm.T.States
    }
    
    export type Module = {
        readonly 'definition': mmoduleDefinition.T.ModuleDefinition
        readonly 'implementation'?: malgorithm.T.Implementation
        readonly 'states'?: malgorithm.T.States
    }
    
    export namespace Project {
        
        export type author = string
        
        export type description = string
        
        export type license = string
        
        export namespace _ltype {
            
            export namespace glossary {
                
                export namespace dependencies {
                    
                    export namespace D {}
                    
                    export type D = {}
                }
                
                export type dependencies = pt.Dictionary<{}>
                
                export type glossary = mglossary.T.Glossary<mcommon.T.String>
            }
            
            export type glossary = {
                readonly 'dependencies': pt.Dictionary<{}>
                readonly 'glossary': mglossary.T.Glossary<mcommon.T.String>
            }
            
            export namespace library {
                
                export namespace dependencies {
                    
                    export namespace D {}
                    
                    export type D = {}
                }
                
                export type dependencies = pt.Dictionary<{}>
                
                export namespace executables {
                    
                    export namespace D {}
                    
                    export type D = {}
                }
                
                export type executables = pt.Dictionary<{}>
                
                export type main = T.Module
                
                export namespace submodules {
                    
                    export type D = T.Module
                }
                
                export type submodules = pt.Dictionary<T.Module>
                
                export type test = T.Test
            }
            
            export type library = {
                readonly 'dependencies': pt.Dictionary<{}>
                readonly 'executables': pt.Dictionary<{}>
                readonly 'main': T.Module
                readonly 'submodules': pt.Dictionary<T.Module>
                readonly 'test': T.Test
            }
            
            export namespace resource {
                
                export type definition = mmoduleDefinition.T.ModuleDefinition
                
                export namespace dependencies {
                    
                    export namespace D {}
                    
                    export type D = {}
                }
                
                export type dependencies = pt.Dictionary<{}>
                
                export namespace devDependencies {
                    
                    export namespace D {}
                    
                    export type D = {}
                }
                
                export type devDependencies = pt.Dictionary<{}>
                
                export type test = T.Test
            }
            
            export type resource = {
                readonly 'definition': mmoduleDefinition.T.ModuleDefinition
                readonly 'dependencies': pt.Dictionary<{}>
                readonly 'devDependencies': pt.Dictionary<{}>
                readonly 'test': T.Test
            }
        }
        
        export type _ltype = 
            | ['glossary', {
                readonly 'dependencies': pt.Dictionary<{}>
                readonly 'glossary': mglossary.T.Glossary<mcommon.T.String>
            }]
            | ['library', {
                readonly 'dependencies': pt.Dictionary<{}>
                readonly 'executables': pt.Dictionary<{}>
                readonly 'main': T.Module
                readonly 'submodules': pt.Dictionary<T.Module>
                readonly 'test': T.Test
            }]
            | ['resource', {
                readonly 'definition': mmoduleDefinition.T.ModuleDefinition
                readonly 'dependencies': pt.Dictionary<{}>
                readonly 'devDependencies': pt.Dictionary<{}>
                readonly 'test': T.Test
            }]
    }
    
    export type Project = {
        readonly 'author': string
        readonly 'description': string
        readonly 'license': string
        readonly 'type': 
            | ['glossary', {
                readonly 'dependencies': pt.Dictionary<{}>
                readonly 'glossary': mglossary.T.Glossary<mcommon.T.String>
            }]
            | ['library', {
                readonly 'dependencies': pt.Dictionary<{}>
                readonly 'executables': pt.Dictionary<{}>
                readonly 'main': T.Module
                readonly 'submodules': pt.Dictionary<T.Module>
                readonly 'test': T.Test
            }]
            | ['resource', {
                readonly 'definition': mmoduleDefinition.T.ModuleDefinition
                readonly 'dependencies': pt.Dictionary<{}>
                readonly 'devDependencies': pt.Dictionary<{}>
                readonly 'test': T.Test
            }]
    }
    
    export namespace Test {
        
        export namespace dependencies {
            
            export namespace D {}
            
            export type D = {}
        }
        
        export type dependencies = pt.Dictionary<{}>
    }
    
    export type Test = {
        readonly 'dependencies': pt.Dictionary<{}>
    }
}