import * as pt from 'pareto-core-types'

import * as malgorithm from "../../../algorithm"
import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"
import * as mmoduleDefinition from "../../../moduleDefinition"

export namespace T {
    
    export namespace AlgorithmImplementation {}
    
    export type AlgorithmImplementation<GPAnnotation> = {}
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace Implementation {
        
        export type D<GPAnnotation> = T.AlgorithmImplementation<GPAnnotation>
    }
    
    export type Implementation<GPAnnotation> = pt.Dictionary<T.AlgorithmImplementation<GPAnnotation>>
    
    export namespace Module {
        
        export type definition<GPAnnotation> = mmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>
        
        export type implementation<GPAnnotation> = malgorithm.T.Implementation<T.Annotation<GPAnnotation>>
        
        export type states<GPAnnotation> = malgorithm.T.States<T.Annotation<GPAnnotation>>
    }
    
    export type Module<GPAnnotation> = {
        readonly 'definition': mmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>
        readonly 'implementation'?: malgorithm.T.Implementation<T.Annotation<GPAnnotation>>
        readonly 'states'?: malgorithm.T.States<T.Annotation<GPAnnotation>>
    }
    
    export namespace Project {
        
        export type author<GPAnnotation> = string
        
        export namespace dependencies {
            
            export namespace D {}
            
            export type D<GPAnnotation> = {}
        }
        
        export type dependencies<GPAnnotation> = pt.Dictionary<{}>
        
        export type description<GPAnnotation> = string
        
        export type license<GPAnnotation> = string
        
        export namespace _ltype {
            
            export namespace glossary {
                
                export type glossary<GPAnnotation> = mglossary.T.Glossary<T.Annotation<GPAnnotation>>
            }
            
            export type glossary<GPAnnotation> = {
                readonly 'glossary': mglossary.T.Glossary<T.Annotation<GPAnnotation>>
            }
            
            export namespace library {
                
                export namespace executables {
                    
                    export namespace D {}
                    
                    export type D<GPAnnotation> = {}
                }
                
                export type executables<GPAnnotation> = pt.Dictionary<{}>
                
                export type main<GPAnnotation> = T.Module<GPAnnotation>
                
                export namespace submodules {
                    
                    export type D<GPAnnotation> = T.Module<GPAnnotation>
                }
                
                export type submodules<GPAnnotation> = pt.Dictionary<T.Module<GPAnnotation>>
                
                export type test<GPAnnotation> = T.Test<GPAnnotation>
            }
            
            export type library<GPAnnotation> = {
                readonly 'executables': pt.Dictionary<{}>
                readonly 'main': T.Module<GPAnnotation>
                readonly 'submodules': pt.Dictionary<T.Module<GPAnnotation>>
                readonly 'test': T.Test<GPAnnotation>
            }
            
            export namespace resource {
                
                export type definition<GPAnnotation> = mmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>
                
                export namespace devDependencies {
                    
                    export namespace D {}
                    
                    export type D<GPAnnotation> = {}
                }
                
                export type devDependencies<GPAnnotation> = pt.Dictionary<{}>
                
                export namespace nativeDependencies {
                    
                    export namespace D {}
                    
                    export type D<GPAnnotation> = {}
                }
                
                export type nativeDependencies<GPAnnotation> = pt.Dictionary<{}>
                
                export type test<GPAnnotation> = T.Test<GPAnnotation>
            }
            
            export type resource<GPAnnotation> = {
                readonly 'definition': mmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>
                readonly 'devDependencies': pt.Dictionary<{}>
                readonly 'nativeDependencies': pt.Dictionary<{}>
                readonly 'test': T.Test<GPAnnotation>
            }
        }
        
        export type _ltype<GPAnnotation> = 
            | ['glossary', {
                readonly 'glossary': mglossary.T.Glossary<T.Annotation<GPAnnotation>>
            }]
            | ['library', {
                readonly 'executables': pt.Dictionary<{}>
                readonly 'main': T.Module<GPAnnotation>
                readonly 'submodules': pt.Dictionary<T.Module<GPAnnotation>>
                readonly 'test': T.Test<GPAnnotation>
            }]
            | ['resource', {
                readonly 'definition': mmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>
                readonly 'devDependencies': pt.Dictionary<{}>
                readonly 'nativeDependencies': pt.Dictionary<{}>
                readonly 'test': T.Test<GPAnnotation>
            }]
    }
    
    export type Project<GPAnnotation> = {
        readonly 'author': string
        readonly 'dependencies': pt.Dictionary<{}>
        readonly 'description': string
        readonly 'license': string
        readonly 'type': 
            | ['glossary', {
                readonly 'glossary': mglossary.T.Glossary<T.Annotation<GPAnnotation>>
            }]
            | ['library', {
                readonly 'executables': pt.Dictionary<{}>
                readonly 'main': T.Module<GPAnnotation>
                readonly 'submodules': pt.Dictionary<T.Module<GPAnnotation>>
                readonly 'test': T.Test<GPAnnotation>
            }]
            | ['resource', {
                readonly 'definition': mmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>
                readonly 'devDependencies': pt.Dictionary<{}>
                readonly 'nativeDependencies': pt.Dictionary<{}>
                readonly 'test': T.Test<GPAnnotation>
            }]
    }
    
    export namespace Test {
        
        export namespace dependencies {
            
            export namespace D {}
            
            export type D<GPAnnotation> = {}
        }
        
        export type dependencies<GPAnnotation> = pt.Dictionary<{}>
        
        export type glossary<GPAnnotation> = mglossary.T.Glossary<T.Annotation<GPAnnotation>>
    }
    
    export type Test<GPAnnotation> = {
        readonly 'dependencies': pt.Dictionary<{}>
        readonly 'glossary': mglossary.T.Glossary<T.Annotation<GPAnnotation>>
    }
}