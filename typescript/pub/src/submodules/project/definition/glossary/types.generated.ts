import * as pt from 'pareto-core-types'

import * as g_algorithm from "../../../algorithm"
import * as g_api from "../../../api"
import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_glossary from "../../../glossary"

export namespace T {
    
    export namespace AlgorithmImplementation {}
    
    export type AlgorithmImplementation<GAnnotation> = null
    
    export type Annotation<GAnnotation> = GAnnotation
    
    export namespace Context {
        
        export namespace arguments {
            
            export type D<GAnnotation> = T.TypeReference<GAnnotation>
        }
        
        export type arguments<GAnnotation> = pt.Dictionary<T.TypeReference<GAnnotation>>
        
        export type glossary<GAnnotation> = string
    }
    
    export type Context<GAnnotation> = {
        readonly 'arguments': pt.Dictionary<T.TypeReference<GAnnotation>>
        readonly 'glossary': string
    }
    
    export namespace FunctionReference {
        
        export type context<GAnnotation> = T.Context<GAnnotation>
        
        export type _lfunction<GAnnotation> = string
    }
    
    export type FunctionReference<GAnnotation> = {
        readonly 'context': T.Context<GAnnotation>
        readonly 'function': string
    }
    
    export namespace Implementation {
        
        export namespace pareto {}
        
        export type pareto<GAnnotation> = null
        
        export namespace typescript {}
        
        export type typescript<GAnnotation> = null
    }
    
    export type Implementation<GAnnotation> = 
        | ['pareto', null]
        | ['typescript', null]
    
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
                
                export namespace executables {
                    
                    export namespace D {}
                    
                    export type D<GAnnotation> = null
                }
                
                export type executables<GAnnotation> = pt.Dictionary<null>
                
                export namespace main {
                    
                    export namespace definition {
                        
                        export namespace api {
                            
                            export namespace imports {
                                
                                export namespace D {
                                    
                                    export type external<GAnnotation> = string
                                    
                                    export type submodule<GAnnotation> = string
                                    
                                    export namespace _lthis {}
                                    
                                    export type _lthis<GAnnotation> = null
                                }
                                
                                export type D<GAnnotation> = 
                                    | ['external', string]
                                    | ['submodule', string]
                                    | ['this', null]
                            }
                            
                            export type imports<GAnnotation> = pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                                | ['this', null]
                            >
                            
                            export type root<GAnnotation> = g_api.T.API<T.Annotation<GAnnotation>>
                        }
                        
                        export type api<GAnnotation> = {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                                | ['this', null]
                            >
                            readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                        }
                        
                        export namespace glossary {
                            
                            export namespace imports {
                                
                                export namespace D {
                                    
                                    export type external<GAnnotation> = string
                                    
                                    export type temp__submodule<GAnnotation> = string
                                }
                                
                                export type D<GAnnotation> = 
                                    | ['external', string]
                                    | ['temp submodule', string]
                            }
                            
                            export type imports<GAnnotation> = pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            
                            export type root<GAnnotation> = g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                        }
                        
                        export type glossary<GAnnotation> = {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                        }
                    }
                    
                    export type definition<GAnnotation> = {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                                | ['this', null]
                            >
                            readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                        }
                    }
                    
                    export type implementation<GAnnotation> = T.Implementation<GAnnotation>
                }
                
                export type main<GAnnotation> = {
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                                | ['this', null]
                            >
                            readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GAnnotation>
                }
                
                export namespace submodules {
                    
                    export namespace D {
                        
                        export namespace definition {
                            
                            export namespace api {
                                
                                export namespace imports {
                                    
                                    export namespace D {
                                        
                                        export type external<GAnnotation> = string
                                        
                                        export type sibling<GAnnotation> = string
                                        
                                        export namespace _lthis {}
                                        
                                        export type _lthis<GAnnotation> = null
                                    }
                                    
                                    export type D<GAnnotation> = 
                                        | ['external', string]
                                        | ['sibling', string]
                                        | ['this', null]
                                }
                                
                                export type imports<GAnnotation> = pt.Dictionary<
                                    | ['external', string]
                                    | ['sibling', string]
                                    | ['this', null]
                                >
                                
                                export type root<GAnnotation> = g_api.T.API<T.Annotation<GAnnotation>>
                            }
                            
                            export type api<GAnnotation> = {
                                readonly 'imports': pt.Dictionary<
                                    | ['external', string]
                                    | ['sibling', string]
                                    | ['this', null]
                                >
                                readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                            }
                            
                            export namespace glossary {
                                
                                export namespace imports {
                                    
                                    export namespace D {
                                        
                                        export type external<GAnnotation> = string
                                        
                                        export namespace main {}
                                        
                                        export type main<GAnnotation> = null
                                        
                                        export type sibling<GAnnotation> = string
                                    }
                                    
                                    export type D<GAnnotation> = 
                                        | ['external', string]
                                        | ['main', null]
                                        | ['sibling', string]
                                }
                                
                                export type imports<GAnnotation> = pt.Dictionary<
                                    | ['external', string]
                                    | ['main', null]
                                    | ['sibling', string]
                                >
                                
                                export type root<GAnnotation> = g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                            }
                            
                            export type glossary<GAnnotation> = {
                                readonly 'imports': pt.Dictionary<
                                    | ['external', string]
                                    | ['main', null]
                                    | ['sibling', string]
                                >
                                readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                            }
                        }
                        
                        export type definition<GAnnotation> = {
                            readonly 'api': {
                                readonly 'imports': pt.Dictionary<
                                    | ['external', string]
                                    | ['sibling', string]
                                    | ['this', null]
                                >
                                readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                            }
                            readonly 'glossary': {
                                readonly 'imports': pt.Dictionary<
                                    | ['external', string]
                                    | ['main', null]
                                    | ['sibling', string]
                                >
                                readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                            }
                        }
                        
                        export type implementation<GAnnotation> = T.Implementation<GAnnotation>
                    }
                    
                    export type D<GAnnotation> = {
                        readonly 'definition': {
                            readonly 'api': {
                                readonly 'imports': pt.Dictionary<
                                    | ['external', string]
                                    | ['sibling', string]
                                    | ['this', null]
                                >
                                readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                            }
                            readonly 'glossary': {
                                readonly 'imports': pt.Dictionary<
                                    | ['external', string]
                                    | ['main', null]
                                    | ['sibling', string]
                                >
                                readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                            }
                        }
                        readonly 'implementation': T.Implementation<GAnnotation>
                    }
                }
                
                export type submodules<GAnnotation> = pt.Dictionary<{
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['sibling', string]
                                | ['this', null]
                            >
                            readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['main', null]
                                | ['sibling', string]
                            >
                            readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GAnnotation>
                }>
                
                export type test<GAnnotation> = T.Test<GAnnotation>
            }
            
            export type library<GAnnotation> = {
                readonly 'executables': pt.Dictionary<null>
                readonly 'main': {
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                                | ['this', null]
                            >
                            readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GAnnotation>
                }
                readonly 'submodules': pt.Dictionary<{
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['sibling', string]
                                | ['this', null]
                            >
                            readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['main', null]
                                | ['sibling', string]
                            >
                            readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GAnnotation>
                }>
                readonly 'test': T.Test<GAnnotation>
            }
            
            export namespace resource {
                
                export namespace definition {
                    
                    export namespace api {
                        
                        export namespace imports {
                            
                            export namespace D {
                                
                                export type external<GAnnotation> = string
                                
                                export namespace _lthis {}
                                
                                export type _lthis<GAnnotation> = null
                            }
                            
                            export type D<GAnnotation> = 
                                | ['external', string]
                                | ['this', null]
                        }
                        
                        export type imports<GAnnotation> = pt.Dictionary<
                            | ['external', string]
                            | ['this', null]
                        >
                        
                        export namespace root {
                            
                            export namespace algorithms {
                                
                                export namespace D {
                                    
                                    export type definition<GAnnotation> = T.FunctionReference<GAnnotation>
                                }
                                
                                export type D<GAnnotation> = {
                                    readonly 'definition': T.FunctionReference<GAnnotation>
                                }
                            }
                            
                            export type algorithms<GAnnotation> = pt.Dictionary<{
                                readonly 'definition': T.FunctionReference<GAnnotation>
                            }>
                        }
                        
                        export type root<GAnnotation> = {
                            readonly 'algorithms': pt.Dictionary<{
                                readonly 'definition': T.FunctionReference<GAnnotation>
                            }>
                        }
                    }
                    
                    export type api<GAnnotation> = {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                            | ['this', null]
                        >
                        readonly 'root': {
                            readonly 'algorithms': pt.Dictionary<{
                                readonly 'definition': T.FunctionReference<GAnnotation>
                            }>
                        }
                    }
                    
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
                }
                
                export type definition<GAnnotation> = {
                    readonly 'api': {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                            | ['this', null]
                        >
                        readonly 'root': {
                            readonly 'algorithms': pt.Dictionary<{
                                readonly 'definition': T.FunctionReference<GAnnotation>
                            }>
                        }
                    }
                    readonly 'glossary': {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                        >
                        readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                    }
                }
                
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
                readonly 'definition': {
                    readonly 'api': {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                            | ['this', null]
                        >
                        readonly 'root': {
                            readonly 'algorithms': pt.Dictionary<{
                                readonly 'definition': T.FunctionReference<GAnnotation>
                            }>
                        }
                    }
                    readonly 'glossary': {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                        >
                        readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                    }
                }
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
                readonly 'executables': pt.Dictionary<null>
                readonly 'main': {
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                                | ['this', null]
                            >
                            readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GAnnotation>
                }
                readonly 'submodules': pt.Dictionary<{
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['sibling', string]
                                | ['this', null]
                            >
                            readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['main', null]
                                | ['sibling', string]
                            >
                            readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GAnnotation>
                }>
                readonly 'test': T.Test<GAnnotation>
            }]
            | ['resource', {
                readonly 'definition': {
                    readonly 'api': {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                            | ['this', null]
                        >
                        readonly 'root': {
                            readonly 'algorithms': pt.Dictionary<{
                                readonly 'definition': T.FunctionReference<GAnnotation>
                            }>
                        }
                    }
                    readonly 'glossary': {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                        >
                        readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                    }
                }
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
                readonly 'executables': pt.Dictionary<null>
                readonly 'main': {
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                                | ['this', null]
                            >
                            readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['temp submodule', string]
                            >
                            readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GAnnotation>
                }
                readonly 'submodules': pt.Dictionary<{
                    readonly 'definition': {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['sibling', string]
                                | ['this', null]
                            >
                            readonly 'root': g_api.T.API<T.Annotation<GAnnotation>>
                        }
                        readonly 'glossary': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['main', null]
                                | ['sibling', string]
                            >
                            readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                        }
                    }
                    readonly 'implementation': T.Implementation<GAnnotation>
                }>
                readonly 'test': T.Test<GAnnotation>
            }]
            | ['resource', {
                readonly 'definition': {
                    readonly 'api': {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                            | ['this', null]
                        >
                        readonly 'root': {
                            readonly 'algorithms': pt.Dictionary<{
                                readonly 'definition': T.FunctionReference<GAnnotation>
                            }>
                        }
                    }
                    readonly 'glossary': {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                        >
                        readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                    }
                }
                readonly 'devDependencies': pt.Dictionary<null>
                readonly 'nativeDependencies': pt.Dictionary<null>
                readonly 'test': T.Test<GAnnotation>
            }]
    }
    
    export namespace Test {
        
        export namespace dependencies {
            
            export namespace D {}
            
            export type D<GAnnotation> = null
        }
        
        export type dependencies<GAnnotation> = pt.Dictionary<null>
        
        export type glossary<GAnnotation> = g_glossary.T.Glossary<T.Annotation<GAnnotation>>
        
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
        readonly 'dependencies': pt.Dictionary<null>
        readonly 'glossary': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
        readonly 'imports': pt.Dictionary<
            | ['external', string]
            | ['pub', string]
            | ['this', null]
        >
    }
    
    export namespace TypeReference {
        
        export type context<GAnnotation> = T.Context<GAnnotation>
        
        export type _ltype<GAnnotation> = string
    }
    
    export type TypeReference<GAnnotation> = {
        readonly 'context': T.Context<GAnnotation>
        readonly 'type': string
    }
}