import * as pt from 'pareto-core-types'

import * as g_algorithm from "../../algorithm"
import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_glossary from "../../glossary"

export namespace T {
    
    export type Annotation<GAnnotation> = GAnnotation
    
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
                    
                    export type sibling<GAnnotation> = string
                    
                    export type submodule<GAnnotation> = string
                    
                    export namespace _lthis {}
                    
                    export type _lthis<GAnnotation> = null
                }
                
                export type D<GAnnotation> = 
                    | ['external', string]
                    | ['sibling', string]
                    | ['submodule', string]
                    | ['this', null]
            }
            
            export type imports<GAnnotation> = pt.Dictionary<
                | ['external', string]
                | ['sibling', string]
                | ['submodule', string]
                | ['this', null]
            >
            
            export namespace root {
                
                export namespace algorithms {
                    
                    export namespace D {
                        
                        export namespace definition {
                            
                            export type context<GAnnotation> = T.Context<GAnnotation>
                            
                            export namespace _ltype {
                                
                                export namespace async {
                                    
                                    export namespace _lclass {
                                        
                                        export type _lclass<GAnnotation> = string
                                    }
                                    
                                    export type _lclass<GAnnotation> = {
                                        readonly 'class': string
                                    }
                                    
                                    export namespace _lfunction {
                                        
                                        export type _lfunction<GAnnotation> = string
                                    }
                                    
                                    export type _lfunction<GAnnotation> = {
                                        readonly 'function': string
                                    }
                                }
                                
                                export type async<GAnnotation> = 
                                    | ['class', {
                                        readonly 'class': string
                                    }]
                                    | ['function', {
                                        readonly 'function': string
                                    }]
                                
                                export namespace sync {
                                    
                                    export namespace builder {
                                        
                                        export type builder<GAnnotation> = string
                                    }
                                    
                                    export type builder<GAnnotation> = {
                                        readonly 'builder': string
                                    }
                                    
                                    export namespace _lfunction {
                                        
                                        export type _lfunction<GAnnotation> = string
                                    }
                                    
                                    export type _lfunction<GAnnotation> = {
                                        readonly 'function': string
                                    }
                                }
                                
                                export type sync<GAnnotation> = 
                                    | ['builder', {
                                        readonly 'builder': string
                                    }]
                                    | ['function', {
                                        readonly 'function': string
                                    }]
                            }
                            
                            export type _ltype<GAnnotation> = 
                                | ['async', 
                                    | ['class', {
                                        readonly 'class': string
                                    }]
                                    | ['function', {
                                        readonly 'function': string
                                    }]
                                ]
                                | ['sync', 
                                    | ['builder', {
                                        readonly 'builder': string
                                    }]
                                    | ['function', {
                                        readonly 'function': string
                                    }]
                                ]
                        }
                        
                        export type definition<GAnnotation> = {
                            readonly 'context': T.Context<GAnnotation>
                            readonly 'type': 
                                | ['async', 
                                    | ['class', {
                                        readonly 'class': string
                                    }]
                                    | ['function', {
                                        readonly 'function': string
                                    }]
                                ]
                                | ['sync', 
                                    | ['builder', {
                                        readonly 'builder': string
                                    }]
                                    | ['function', {
                                        readonly 'function': string
                                    }]
                                ]
                        }
                        
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
                                    
                                    export namespace D {
                                        
                                        export type context<GAnnotation> = T.Context<GAnnotation>
                                        
                                        export namespace _ltype {
                                            
                                            export namespace async {
                                                
                                                export namespace _lfunction {
                                                    
                                                    export type _lfunction<GAnnotation> = string
                                                }
                                                
                                                export type _lfunction<GAnnotation> = {
                                                    readonly 'function': string
                                                }
                                                
                                                export namespace _linterface {
                                                    
                                                    export type _linterface<GAnnotation> = string
                                                }
                                                
                                                export type _linterface<GAnnotation> = {
                                                    readonly 'interface': string
                                                }
                                            }
                                            
                                            export type async<GAnnotation> = 
                                                | ['function', {
                                                    readonly 'function': string
                                                }]
                                                | ['interface', {
                                                    readonly 'interface': string
                                                }]
                                            
                                            export namespace sync {
                                                
                                                export namespace _lfunction {
                                                    
                                                    export type _lfunction<GAnnotation> = string
                                                }
                                                
                                                export type _lfunction<GAnnotation> = {
                                                    readonly 'function': string
                                                }
                                                
                                                export namespace _linterface {
                                                    
                                                    export type _linterface<GAnnotation> = string
                                                }
                                                
                                                export type _linterface<GAnnotation> = {
                                                    readonly 'interface': string
                                                }
                                            }
                                            
                                            export type sync<GAnnotation> = 
                                                | ['function', {
                                                    readonly 'function': string
                                                }]
                                                | ['interface', {
                                                    readonly 'interface': string
                                                }]
                                        }
                                        
                                        export type _ltype<GAnnotation> = 
                                            | ['async', 
                                                | ['function', {
                                                    readonly 'function': string
                                                }]
                                                | ['interface', {
                                                    readonly 'interface': string
                                                }]
                                            ]
                                            | ['sync', 
                                                | ['function', {
                                                    readonly 'function': string
                                                }]
                                                | ['interface', {
                                                    readonly 'interface': string
                                                }]
                                            ]
                                    }
                                    
                                    export type D<GAnnotation> = {
                                        readonly 'context': T.Context<GAnnotation>
                                        readonly 'type': 
                                            | ['async', 
                                                | ['function', {
                                                    readonly 'function': string
                                                }]
                                                | ['interface', {
                                                    readonly 'interface': string
                                                }]
                                            ]
                                            | ['sync', 
                                                | ['function', {
                                                    readonly 'function': string
                                                }]
                                                | ['interface', {
                                                    readonly 'interface': string
                                                }]
                                            ]
                                    }
                                }
                                
                                export type dependencies<GAnnotation> = pt.Dictionary<{
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': 
                                        | ['async', 
                                            | ['function', {
                                                readonly 'function': string
                                            }]
                                            | ['interface', {
                                                readonly 'interface': string
                                            }]
                                        ]
                                        | ['sync', 
                                            | ['function', {
                                                readonly 'function': string
                                            }]
                                            | ['interface', {
                                                readonly 'interface': string
                                            }]
                                        ]
                                }>
                            }
                            
                            export type dependent<GAnnotation> = {
                                readonly 'configuration data': [ false ] | [ true, {
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': string
                                }]
                                readonly 'dependencies': pt.Dictionary<{
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': 
                                        | ['async', 
                                            | ['function', {
                                                readonly 'function': string
                                            }]
                                            | ['interface', {
                                                readonly 'interface': string
                                            }]
                                        ]
                                        | ['sync', 
                                            | ['function', {
                                                readonly 'function': string
                                            }]
                                            | ['interface', {
                                                readonly 'interface': string
                                            }]
                                        ]
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
                                readonly 'dependencies': pt.Dictionary<{
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': 
                                        | ['async', 
                                            | ['function', {
                                                readonly 'function': string
                                            }]
                                            | ['interface', {
                                                readonly 'interface': string
                                            }]
                                        ]
                                        | ['sync', 
                                            | ['function', {
                                                readonly 'function': string
                                            }]
                                            | ['interface', {
                                                readonly 'interface': string
                                            }]
                                        ]
                                }>
                            }]
                            | ['independent', null]
                    }
                    
                    export type D<GAnnotation> = {
                        readonly 'definition': {
                            readonly 'context': T.Context<GAnnotation>
                            readonly 'type': 
                                | ['async', 
                                    | ['class', {
                                        readonly 'class': string
                                    }]
                                    | ['function', {
                                        readonly 'function': string
                                    }]
                                ]
                                | ['sync', 
                                    | ['builder', {
                                        readonly 'builder': string
                                    }]
                                    | ['function', {
                                        readonly 'function': string
                                    }]
                                ]
                        }
                        readonly 'type': 
                            | ['dependent', {
                                readonly 'configuration data': [ false ] | [ true, {
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': string
                                }]
                                readonly 'dependencies': pt.Dictionary<{
                                    readonly 'context': T.Context<GAnnotation>
                                    readonly 'type': 
                                        | ['async', 
                                            | ['function', {
                                                readonly 'function': string
                                            }]
                                            | ['interface', {
                                                readonly 'interface': string
                                            }]
                                        ]
                                        | ['sync', 
                                            | ['function', {
                                                readonly 'function': string
                                            }]
                                            | ['interface', {
                                                readonly 'interface': string
                                            }]
                                        ]
                                }>
                            }]
                            | ['independent', null]
                    }
                }
                
                export type algorithms<GAnnotation> = pt.Dictionary<{
                    readonly 'definition': {
                        readonly 'context': T.Context<GAnnotation>
                        readonly 'type': 
                            | ['async', 
                                | ['class', {
                                    readonly 'class': string
                                }]
                                | ['function', {
                                    readonly 'function': string
                                }]
                            ]
                            | ['sync', 
                                | ['builder', {
                                    readonly 'builder': string
                                }]
                                | ['function', {
                                    readonly 'function': string
                                }]
                            ]
                    }
                    readonly 'type': 
                        | ['dependent', {
                            readonly 'configuration data': [ false ] | [ true, {
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': string
                            }]
                            readonly 'dependencies': pt.Dictionary<{
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': 
                                    | ['async', 
                                        | ['function', {
                                            readonly 'function': string
                                        }]
                                        | ['interface', {
                                            readonly 'interface': string
                                        }]
                                    ]
                                    | ['sync', 
                                        | ['function', {
                                            readonly 'function': string
                                        }]
                                        | ['interface', {
                                            readonly 'interface': string
                                        }]
                                    ]
                            }>
                        }]
                        | ['independent', null]
                }>
            }
            
            export type root<GAnnotation> = {
                readonly 'algorithms': pt.Dictionary<{
                    readonly 'definition': {
                        readonly 'context': T.Context<GAnnotation>
                        readonly 'type': 
                            | ['async', 
                                | ['class', {
                                    readonly 'class': string
                                }]
                                | ['function', {
                                    readonly 'function': string
                                }]
                            ]
                            | ['sync', 
                                | ['builder', {
                                    readonly 'builder': string
                                }]
                                | ['function', {
                                    readonly 'function': string
                                }]
                            ]
                    }
                    readonly 'type': 
                        | ['dependent', {
                            readonly 'configuration data': [ false ] | [ true, {
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': string
                            }]
                            readonly 'dependencies': pt.Dictionary<{
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': 
                                    | ['async', 
                                        | ['function', {
                                            readonly 'function': string
                                        }]
                                        | ['interface', {
                                            readonly 'interface': string
                                        }]
                                    ]
                                    | ['sync', 
                                        | ['function', {
                                            readonly 'function': string
                                        }]
                                        | ['interface', {
                                            readonly 'interface': string
                                        }]
                                    ]
                            }>
                        }]
                        | ['independent', null]
                }>
            }
        }
        
        export type api<GAnnotation> = {
            readonly 'imports': pt.Dictionary<
                | ['external', string]
                | ['sibling', string]
                | ['submodule', string]
                | ['this', null]
            >
            readonly 'root': {
                readonly 'algorithms': pt.Dictionary<{
                    readonly 'definition': {
                        readonly 'context': T.Context<GAnnotation>
                        readonly 'type': 
                            | ['async', 
                                | ['class', {
                                    readonly 'class': string
                                }]
                                | ['function', {
                                    readonly 'function': string
                                }]
                            ]
                            | ['sync', 
                                | ['builder', {
                                    readonly 'builder': string
                                }]
                                | ['function', {
                                    readonly 'function': string
                                }]
                            ]
                    }
                    readonly 'type': 
                        | ['dependent', {
                            readonly 'configuration data': [ false ] | [ true, {
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': string
                            }]
                            readonly 'dependencies': pt.Dictionary<{
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': 
                                    | ['async', 
                                        | ['function', {
                                            readonly 'function': string
                                        }]
                                        | ['interface', {
                                            readonly 'interface': string
                                        }]
                                    ]
                                    | ['sync', 
                                        | ['function', {
                                            readonly 'function': string
                                        }]
                                        | ['interface', {
                                            readonly 'interface': string
                                        }]
                                    ]
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
            
            export type root<GAnnotation> = g_glossary.T.Glossary<T.Annotation<GAnnotation>>
        }
        
        export type glossary<GAnnotation> = {
            readonly 'imports': pt.Dictionary<
                | ['external', string]
                | ['main', null]
                | ['sibling', string]
                | ['temp submodule', string]
            >
            readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
        }
    }
    
    export type ModuleDefinition<GAnnotation> = {
        readonly 'api': {
            readonly 'imports': pt.Dictionary<
                | ['external', string]
                | ['sibling', string]
                | ['submodule', string]
                | ['this', null]
            >
            readonly 'root': {
                readonly 'algorithms': pt.Dictionary<{
                    readonly 'definition': {
                        readonly 'context': T.Context<GAnnotation>
                        readonly 'type': 
                            | ['async', 
                                | ['class', {
                                    readonly 'class': string
                                }]
                                | ['function', {
                                    readonly 'function': string
                                }]
                            ]
                            | ['sync', 
                                | ['builder', {
                                    readonly 'builder': string
                                }]
                                | ['function', {
                                    readonly 'function': string
                                }]
                            ]
                    }
                    readonly 'type': 
                        | ['dependent', {
                            readonly 'configuration data': [ false ] | [ true, {
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': string
                            }]
                            readonly 'dependencies': pt.Dictionary<{
                                readonly 'context': T.Context<GAnnotation>
                                readonly 'type': 
                                    | ['async', 
                                        | ['function', {
                                            readonly 'function': string
                                        }]
                                        | ['interface', {
                                            readonly 'interface': string
                                        }]
                                    ]
                                    | ['sync', 
                                        | ['function', {
                                            readonly 'function': string
                                        }]
                                        | ['interface', {
                                            readonly 'interface': string
                                        }]
                                    ]
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
            readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
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
                
                export type root<GAnnotation> = g_glossary.T.Glossary<T.Annotation<GAnnotation>>
            }
            
            export type glossary<GAnnotation> = {
                readonly 'imports': pt.Dictionary<
                    | ['external', string]
                >
                readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
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
                
                export type test<GAnnotation> = T.Test<GAnnotation>
            }
            
            export type resource<GAnnotation> = {
                readonly 'definition': T.ModuleDefinition<GAnnotation>
                readonly 'devDependencies': pt.Dictionary<null>
                readonly 'nativeDependencies': pt.Dictionary<null>
                readonly 'test': T.Test<GAnnotation>
            }
        }
        
        export type _ltype<GAnnotation> = 
            | ['glossary', {
                readonly 'imports': pt.Dictionary<
                    | ['external', string]
                >
                readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
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
                readonly 'devDependencies': pt.Dictionary<null>
                readonly 'nativeDependencies': pt.Dictionary<null>
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
                readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
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
                readonly 'devDependencies': pt.Dictionary<null>
                readonly 'nativeDependencies': pt.Dictionary<null>
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