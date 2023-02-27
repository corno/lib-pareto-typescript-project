import * as pt from 'pareto-core-types'

import * as galgorithm from "../../../algorithm"
import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"
import * as gglossary from "../../../glossary"
import * as gmoduleDefinition from "../../../moduleDefinition"

export namespace T {
    
    export namespace AlgorithmImplementation {}
    
    export type AlgorithmImplementation<GPAnnotation> = {}
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace Implementation {
        
        export type D<GPAnnotation> = T.AlgorithmImplementation<GPAnnotation>
    }
    
    export type Implementation<GPAnnotation> = pt.Dictionary<T.AlgorithmImplementation<GPAnnotation>>
    
    export namespace Module {
        
        export type definition<GPAnnotation> = gmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>
        
        export namespace implementation {
            
            export namespace generated {}
            
            export type generated<GPAnnotation> = {}
            
            export namespace manual {}
            
            export type manual<GPAnnotation> = {}
        }
        
        export type implementation<GPAnnotation> = 
            | ['generated', {}]
            | ['manual', {}]
    }
    
    export type Module<GPAnnotation> = {
        readonly 'definition': gmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>
        readonly 'implementation': 
            | ['generated', {}]
            | ['manual', {}]
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
                
                export type glossary<GPAnnotation> = gglossary.T.Glossary<T.Annotation<GPAnnotation>>
            }
            
            export type glossary<GPAnnotation> = {
                readonly 'glossary': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
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
                
                export type definition<GPAnnotation> = gmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>
                
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
                readonly 'definition': gmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>
                readonly 'devDependencies': pt.Dictionary<{}>
                readonly 'nativeDependencies': pt.Dictionary<{}>
                readonly 'test': T.Test<GPAnnotation>
            }
        }
        
        export type _ltype<GPAnnotation> = 
            | ['glossary', {
                readonly 'glossary': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
            }]
            | ['library', {
                readonly 'executables': pt.Dictionary<{}>
                readonly 'main': T.Module<GPAnnotation>
                readonly 'submodules': pt.Dictionary<T.Module<GPAnnotation>>
                readonly 'test': T.Test<GPAnnotation>
            }]
            | ['resource', {
                readonly 'definition': gmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>
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
                readonly 'glossary': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
            }]
            | ['library', {
                readonly 'executables': pt.Dictionary<{}>
                readonly 'main': T.Module<GPAnnotation>
                readonly 'submodules': pt.Dictionary<T.Module<GPAnnotation>>
                readonly 'test': T.Test<GPAnnotation>
            }]
            | ['resource', {
                readonly 'definition': gmoduleDefinition.T.ModuleDefinition<T.Annotation<GPAnnotation>>
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
        
        export type glossary<GPAnnotation> = gglossary.T.Glossary<T.Annotation<GPAnnotation>>
    }
    
    export type Test<GPAnnotation> = {
        readonly 'dependencies': pt.Dictionary<{}>
        readonly 'glossary': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
    }
}