import * as pt from 'pareto-core-types'

import * as g_algorithm from "../../algorithm"
import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_glossary from "../../glossary"

export namespace N {}

export namespace T {
    
    export namespace AlgorithmTypeReference {
        
        export type context<GAnnotation> = T.Context<GAnnotation>
        
        export namespace _ltype {
            
            export namespace asynchronous {
                
                export namespace _lconstructor {
                    
                    export type _lconstructor<GAnnotation> = string
                }
                
                export type _lconstructor<GAnnotation> = {
                    readonly 'constructor': string
                }
                
                export namespace _lfunction {
                    
                    export type _lfunction<GAnnotation> = string
                }
                
                export type _lfunction<GAnnotation> = {
                    readonly 'function': string
                }
            }
            
            export type asynchronous<GAnnotation> = 
                | ['constructor', {
                    readonly 'constructor': string
                }]
                | ['function', {
                    readonly 'function': string
                }]
            
            export namespace synchronous {
                
                export namespace _lfunction {
                    
                    export type _lfunction<GAnnotation> = string
                }
                
                export type _lfunction<GAnnotation> = {
                    readonly 'function': string
                }
                
                export namespace procedure {
                    
                    export type procedure<GAnnotation> = string
                }
                
                export type procedure<GAnnotation> = {
                    readonly 'procedure': string
                }
            }
            
            export type synchronous<GAnnotation> = 
                | ['function', {
                    readonly 'function': string
                }]
                | ['procedure', {
                    readonly 'procedure': string
                }]
        }
        
        export type _ltype<GAnnotation> = 
            | ['asynchronous', 
                | ['constructor', {
                    readonly 'constructor': string
                }]
                | ['function', {
                    readonly 'function': string
                }]
            ]
            | ['synchronous', 
                | ['function', {
                    readonly 'function': string
                }]
                | ['procedure', {
                    readonly 'procedure': string
                }]
            ]
    }
    
    export type AlgorithmTypeReference<GAnnotation> = {
        readonly 'context': T.Context<GAnnotation>
        readonly 'type': 
            | ['asynchronous', 
                | ['constructor', {
                    readonly 'constructor': string
                }]
                | ['function', {
                    readonly 'function': string
                }]
            ]
            | ['synchronous', 
                | ['function', {
                    readonly 'function': string
                }]
                | ['procedure', {
                    readonly 'procedure': string
                }]
            ]
    }
    
    export namespace Context {
        
        export namespace arguments {
            
            export type D<GAnnotation> = string
        }
        
        export type arguments<GAnnotation> = pt.Dictionary<string>
        
        export type glossary<GAnnotation> = string
    }
    
    export type Context<GAnnotation> = {
        readonly 'arguments': pt.Dictionary<string>
        readonly 'glossary': string
    }
    
    export namespace Module {
        
        export type definition<GAnnotation> = T.ModuleDefinition<GAnnotation>
        
        export namespace implementation {
            
            export namespace pareto {}
            
            export type pareto<GAnnotation> = null
            
            export namespace typescript {}
            
            export type typescript<GAnnotation> = null
        }
        
        export type implementation<GAnnotation> = 
            | ['pareto', null]
            | ['typescript', null]
    }
    
    export type Module<GAnnotation> = {
        readonly 'definition': T.ModuleDefinition<GAnnotation>
        readonly 'implementation': 
            | ['pareto', null]
            | ['typescript', null]
    }
    
    export namespace ModuleDefinition {
        
        export namespace api {
            
            export namespace imports {
                
                export namespace D {
                    
                    export type external<GAnnotation> = string
                    
                    export namespace main {}
                    
                    export type main<GAnnotation> = null
                    
                    export type sibling<GAnnotation> = string
                    
                    export type submodule<GAnnotation> = string
                    
                    export namespace _lthis {}
                    
                    export type _lthis<GAnnotation> = null
                }
                
                export type D<GAnnotation> = 
                    | ['external', string]
                    | ['main', null]
                    | ['sibling', string]
                    | ['submodule', string]
                    | ['this', null]
            }
            
            export type imports<GAnnotation> = pt.Dictionary<
                | ['external', string]
                | ['main', null]
                | ['sibling', string]
                | ['submodule', string]
                | ['this', null]
            >
            
            export namespace root {
                
                export namespace algorithms {
                    
                    export namespace D {
                        
                        export type definition<GAnnotation> = T.AlgorithmTypeReference<GAnnotation>
                        
                        export namespace parameters {
                            
                            export type D<GAnnotation> = string
                        }
                        
                        export type parameters<GAnnotation> = pt.Dictionary<string>
                        
                        export namespace _ltype {
                            
                            export namespace dependent {
                                
                                export namespace configuration__data {
                                    
                                    export namespace O {
                                        
                                        export type context<GAnnotation> = T.Context<GAnnotation>
                                        
                                        export type _ltype<GAnnotation> = string
                                    }
                                    
                                    export type O<GAnnotation> = {
                                        readonly 'context': T.Context<GAnnotation>
                                        readonly 'type': string
                                    }
                                }
                                
                                export type configuration__data<GAnnotation> = [ false ] | [ true, {
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': string
                                }]
                                
                                export namespace dependencies {
                                    
                                    export type D<GAnnotation> = T.AlgorithmTypeReference<GAnnotation>
                                }
                                
                                export type dependencies<GAnnotation> = pt.Dictionary<T.AlgorithmTypeReference<GAnnotation>>
                                
                                export namespace side__effects {
                                    
                                    export namespace D {
                                        
                                        export type context<GAnnotation> = T.Context<GAnnotation>
                                        
                                        export namespace _ltype {
                                            
                                            export namespace asynchronous {
                                                
                                                export type _linterface<GAnnotation> = string
                                            }
                                            
                                            export type asynchronous<GAnnotation> = {
                                                readonly 'interface': string
                                            }
                                            
                                            export namespace synchronous {
                                                
                                                export type _linterface<GAnnotation> = string
                                            }
                                            
                                            export type synchronous<GAnnotation> = {
                                                readonly 'interface': string
                                            }
                                        }
                                        
                                        export type _ltype<GAnnotation> = 
                                            | ['asynchronous', {
                                                readonly 'interface': string
                                            }]
                                            | ['synchronous', {
                                                readonly 'interface': string
                                            }]
                                    }
                                    
                                    export type D<GAnnotation> = {
                                        readonly 'context': T.Context<GAnnotation>
                                        readonly 'type': 
                                            | ['asynchronous', {
                                                readonly 'interface': string
                                            }]
                                            | ['synchronous', {
                                                readonly 'interface': string
                                            }]
                                    }
                                }
                                
                                export type side__effects<GAnnotation> = pt.Dictionary<{
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': 
                                        | ['asynchronous', {
                                            readonly 'interface': string
                                        }]
                                        | ['synchronous', {
                                            readonly 'interface': string
                                        }]
                                }>
                            }
                            
                            export type dependent<GAnnotation> = {
                                readonly 'configuration data': [ false ] | [ true, {
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': string
                                }]
                                readonly 'dependencies': pt.Dictionary<T.AlgorithmTypeReference<GAnnotation>>
                                readonly 'side effects': pt.Dictionary<{
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': 
                                        | ['asynchronous', {
                                            readonly 'interface': string
                                        }]
                                        | ['synchronous', {
                                            readonly 'interface': string
                                        }]
                                }>
                            }
                            
                            export namespace independent {}
                            
                            export type independent<GAnnotation> = null
                        }
                        
                        export type _ltype<GAnnotation> = 
                            | ['dependent', {
                                readonly 'configuration data': [ false ] | [ true, {
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': string
                                }]
                                readonly 'dependencies': pt.Dictionary<T.AlgorithmTypeReference<GAnnotation>>
                                readonly 'side effects': pt.Dictionary<{
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': 
                                        | ['asynchronous', {
                                            readonly 'interface': string
                                        }]
                                        | ['synchronous', {
                                            readonly 'interface': string
                                        }]
                                }>
                            }]
                            | ['independent', null]
                    }
                    
                    export type D<GAnnotation> = {
                        readonly 'definition': T.AlgorithmTypeReference<GAnnotation>
                        readonly 'parameters': pt.Dictionary<string>
                        readonly 'type': 
                            | ['dependent', {
                                readonly 'configuration data': [ false ] | [ true, {
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': string
                                }]
                                readonly 'dependencies': pt.Dictionary<T.AlgorithmTypeReference<GAnnotation>>
                                readonly 'side effects': pt.Dictionary<{
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': 
                                        | ['asynchronous', {
                                            readonly 'interface': string
                                        }]
                                        | ['synchronous', {
                                            readonly 'interface': string
                                        }]
                                }>
                            }]
                            | ['independent', null]
                    }
                }
                
                export type algorithms<GAnnotation> = pt.Dictionary<{
                    readonly 'definition': T.AlgorithmTypeReference<GAnnotation>
                    readonly 'parameters': pt.Dictionary<string>
                    readonly 'type': 
                        | ['dependent', {
                            readonly 'configuration data': [ false ] | [ true, {
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': string
                            }]
                            readonly 'dependencies': pt.Dictionary<T.AlgorithmTypeReference<GAnnotation>>
                            readonly 'side effects': pt.Dictionary<{
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': 
                                    | ['asynchronous', {
                                        readonly 'interface': string
                                    }]
                                    | ['synchronous', {
                                        readonly 'interface': string
                                    }]
                            }>
                        }]
                        | ['independent', null]
                }>
            }
            
            export type root<GAnnotation> = {
                readonly 'algorithms': pt.Dictionary<{
                    readonly 'definition': T.AlgorithmTypeReference<GAnnotation>
                    readonly 'parameters': pt.Dictionary<string>
                    readonly 'type': 
                        | ['dependent', {
                            readonly 'configuration data': [ false ] | [ true, {
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': string
                            }]
                            readonly 'dependencies': pt.Dictionary<T.AlgorithmTypeReference<GAnnotation>>
                            readonly 'side effects': pt.Dictionary<{
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': 
                                    | ['asynchronous', {
                                        readonly 'interface': string
                                    }]
                                    | ['synchronous', {
                                        readonly 'interface': string
                                    }]
                            }>
                        }]
                        | ['independent', null]
                }>
            }
        }
        
        export type api<GAnnotation> = {
            readonly 'imports': pt.Dictionary<
                | ['external', string]
                | ['main', null]
                | ['sibling', string]
                | ['submodule', string]
                | ['this', null]
            >
            readonly 'root': {
                readonly 'algorithms': pt.Dictionary<{
                    readonly 'definition': T.AlgorithmTypeReference<GAnnotation>
                    readonly 'parameters': pt.Dictionary<string>
                    readonly 'type': 
                        | ['dependent', {
                            readonly 'configuration data': [ false ] | [ true, {
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': string
                            }]
                            readonly 'dependencies': pt.Dictionary<T.AlgorithmTypeReference<GAnnotation>>
                            readonly 'side effects': pt.Dictionary<{
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': 
                                    | ['asynchronous', {
                                        readonly 'interface': string
                                    }]
                                    | ['synchronous', {
                                        readonly 'interface': string
                                    }]
                            }>
                        }]
                        | ['independent', null]
                }>
            }
        }
        
        export namespace glossary {
            
            export namespace imports {
                
                export namespace D {
                    
                    export type external<GAnnotation> = string
                    
                    export namespace main {}
                    
                    export type main<GAnnotation> = null
                    
                    export type sibling<GAnnotation> = string
                    
                    export type temp__submodule<GAnnotation> = string
                }
                
                export type D<GAnnotation> = 
                    | ['external', string]
                    | ['main', null]
                    | ['sibling', string]
                    | ['temp submodule', string]
            }
            
            export type imports<GAnnotation> = pt.Dictionary<
                | ['external', string]
                | ['main', null]
                | ['sibling', string]
                | ['temp submodule', string]
            >
            
            export type root<GAnnotation> = g_glossary.T.Glossary<GAnnotation>
        }
        
        export type glossary<GAnnotation> = {
            readonly 'imports': pt.Dictionary<
                | ['external', string]
                | ['main', null]
                | ['sibling', string]
                | ['temp submodule', string]
            >
            readonly 'root': g_glossary.T.Glossary<GAnnotation>
        }
    }
    
    export type ModuleDefinition<GAnnotation> = {
        readonly 'api': {
            readonly 'imports': pt.Dictionary<
                | ['external', string]
                | ['main', null]
                | ['sibling', string]
                | ['submodule', string]
                | ['this', null]
            >
            readonly 'root': {
                readonly 'algorithms': pt.Dictionary<{
                    readonly 'definition': T.AlgorithmTypeReference<GAnnotation>
                    readonly 'parameters': pt.Dictionary<string>
                    readonly 'type': 
                        | ['dependent', {
                            readonly 'configuration data': [ false ] | [ true, {
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': string
                            }]
                            readonly 'dependencies': pt.Dictionary<T.AlgorithmTypeReference<GAnnotation>>
                            readonly 'side effects': pt.Dictionary<{
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': 
                                    | ['asynchronous', {
                                        readonly 'interface': string
                                    }]
                                    | ['synchronous', {
                                        readonly 'interface': string
                                    }]
                            }>
                        }]
                        | ['independent', null]
                }>
            }
        }
        readonly 'glossary': {
            readonly 'imports': pt.Dictionary<
                | ['external', string]
                | ['main', null]
                | ['sibling', string]
                | ['temp submodule', string]
            >
            readonly 'root': g_glossary.T.Glossary<GAnnotation>
        }
    }
    
    export namespace Project {
        
        export type author<GAnnotation> = string
        
        export namespace dependencies {
            
            export namespace D {}
            
            export type D<GAnnotation> = null
        }
        
        export type dependencies<GAnnotation> = pt.Dictionary<null>
        
        export type description<GAnnotation> = string
        
        export type license<GAnnotation> = string
        
        export namespace _ltype {
            
            export namespace glossary {
                
                export namespace imports {
                    
                    export namespace D {
                        
                        export type external<GAnnotation> = string
                    }
                    
                    export type D<GAnnotation> = 
                        | ['external', string]
                }
                
                export type imports<GAnnotation> = pt.Dictionary<
                    | ['external', string]
                >
                
                export type root<GAnnotation> = g_glossary.T.Glossary<GAnnotation>
            }
            
            export type glossary<GAnnotation> = {
                readonly 'imports': pt.Dictionary<
                    | ['external', string]
                >
                readonly 'root': g_glossary.T.Glossary<GAnnotation>
            }
            
            export namespace library {
                
                export namespace bindings {
                    
                    export namespace O {
                        
                        export type definition<GAnnotation> = T.ModuleDefinition<GAnnotation>
                        
                        export namespace implementation {
                            
                            export namespace pareto {}
                            
                            export type pareto<GAnnotation> = null
                            
                            export namespace typescript {}
                            
                            export type typescript<GAnnotation> = null
                        }
                        
                        export type implementation<GAnnotation> = 
                            | ['pareto', null]
                            | ['typescript', null]
                    }
                    
                    export type O<GAnnotation> = {
                        readonly 'definition': T.ModuleDefinition<GAnnotation>
                        readonly 'implementation': 
                            | ['pareto', null]
                            | ['typescript', null]
                    }
                }
                
                export type bindings<GAnnotation> = [ false ] | [ true, {
                    readonly 'definition': T.ModuleDefinition<GAnnotation>
                    readonly 'implementation': 
                        | ['pareto', null]
                        | ['typescript', null]
                }]
                
                export namespace executables {
                    
                    export namespace D {}
                    
                    export type D<GAnnotation> = null
                }
                
                export type executables<GAnnotation> = pt.Dictionary<null>
                
                export type main<GAnnotation> = T.Module<GAnnotation>
                
                export namespace submodules {
                    
                    export type D<GAnnotation> = T.Module<GAnnotation>
                }
                
                export type submodules<GAnnotation> = pt.Dictionary<T.Module<GAnnotation>>
                
                export type test<GAnnotation> = T.Test<GAnnotation>
            }
            
            export type library<GAnnotation> = {
                readonly 'bindings': [ false ] | [ true, {
                    readonly 'definition': T.ModuleDefinition<GAnnotation>
                    readonly 'implementation': 
                        | ['pareto', null]
                        | ['typescript', null]
                }]
                readonly 'executables': pt.Dictionary<null>
                readonly 'main': T.Module<GAnnotation>
                readonly 'submodules': pt.Dictionary<T.Module<GAnnotation>>
                readonly 'test': T.Test<GAnnotation>
            }
            
            export namespace resource {
                
                export type definition<GAnnotation> = T.ModuleDefinition<GAnnotation>
                
                export namespace temp {
                    
                    export namespace devDependencies {
                        
                        export namespace D {}
                        
                        export type D<GAnnotation> = null
                    }
                    
                    export type devDependencies<GAnnotation> = pt.Dictionary<null>
                    
                    export namespace nativeDependencies {
                        
                        export namespace D {}
                        
                        export type D<GAnnotation> = null
                    }
                    
                    export type nativeDependencies<GAnnotation> = pt.Dictionary<null>
                }
                
                export type temp<GAnnotation> = {
                    readonly 'devDependencies': pt.Dictionary<null>
                    readonly 'nativeDependencies': pt.Dictionary<null>
                }
                
                export type test<GAnnotation> = T.Test<GAnnotation>
            }
            
            export type resource<GAnnotation> = {
                readonly 'definition': T.ModuleDefinition<GAnnotation>
                readonly 'temp': {
                    readonly 'devDependencies': pt.Dictionary<null>
                    readonly 'nativeDependencies': pt.Dictionary<null>
                }
                readonly 'test': T.Test<GAnnotation>
            }
        }
        
        export type _ltype<GAnnotation> = 
            | ['glossary', {
                readonly 'imports': pt.Dictionary<
                    | ['external', string]
                >
                readonly 'root': g_glossary.T.Glossary<GAnnotation>
            }]
            | ['library', {
                readonly 'bindings': [ false ] | [ true, {
                    readonly 'definition': T.ModuleDefinition<GAnnotation>
                    readonly 'implementation': 
                        | ['pareto', null]
                        | ['typescript', null]
                }]
                readonly 'executables': pt.Dictionary<null>
                readonly 'main': T.Module<GAnnotation>
                readonly 'submodules': pt.Dictionary<T.Module<GAnnotation>>
                readonly 'test': T.Test<GAnnotation>
            }]
            | ['resource', {
                readonly 'definition': T.ModuleDefinition<GAnnotation>
                readonly 'temp': {
                    readonly 'devDependencies': pt.Dictionary<null>
                    readonly 'nativeDependencies': pt.Dictionary<null>
                }
                readonly 'test': T.Test<GAnnotation>
            }]
    }
    
    export type Project<GAnnotation> = {
        readonly 'author': string
        readonly 'dependencies': pt.Dictionary<null>
        readonly 'description': string
        readonly 'license': string
        readonly 'type': 
            | ['glossary', {
                readonly 'imports': pt.Dictionary<
                    | ['external', string]
                >
                readonly 'root': g_glossary.T.Glossary<GAnnotation>
            }]
            | ['library', {
                readonly 'bindings': [ false ] | [ true, {
                    readonly 'definition': T.ModuleDefinition<GAnnotation>
                    readonly 'implementation': 
                        | ['pareto', null]
                        | ['typescript', null]
                }]
                readonly 'executables': pt.Dictionary<null>
                readonly 'main': T.Module<GAnnotation>
                readonly 'submodules': pt.Dictionary<T.Module<GAnnotation>>
                readonly 'test': T.Test<GAnnotation>
            }]
            | ['resource', {
                readonly 'definition': T.ModuleDefinition<GAnnotation>
                readonly 'temp': {
                    readonly 'devDependencies': pt.Dictionary<null>
                    readonly 'nativeDependencies': pt.Dictionary<null>
                }
                readonly 'test': T.Test<GAnnotation>
            }]
    }
    
    export namespace Test {
        
        export type definition<GAnnotation> = T.ModuleDefinition<GAnnotation>
        
        export namespace dependencies {
            
            export namespace D {}
            
            export type D<GAnnotation> = null
        }
        
        export type dependencies<GAnnotation> = pt.Dictionary<null>
        
        export namespace imports {
            
            export namespace D {
                
                export type external<GAnnotation> = string
                
                export type pub<GAnnotation> = string
                
                export namespace _lthis {}
                
                export type _lthis<GAnnotation> = null
            }
            
            export type D<GAnnotation> = 
                | ['external', string]
                | ['pub', string]
                | ['this', null]
        }
        
        export type imports<GAnnotation> = pt.Dictionary<
            | ['external', string]
            | ['pub', string]
            | ['this', null]
        >
    }
    
    export type Test<GAnnotation> = {
        readonly 'definition': T.ModuleDefinition<GAnnotation>
        readonly 'dependencies': pt.Dictionary<null>
        readonly 'imports': pt.Dictionary<
            | ['external', string]
            | ['pub', string]
            | ['this', null]
        >
    }
}