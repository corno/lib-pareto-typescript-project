import * as pt from 'pareto-core-types'

import * as g_algorithm from "../../algorithm"
import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_glossary from "../../glossary"

export namespace T {
    
    export namespace AlgorithmImplementation {}
    
    export type AlgorithmImplementation<GAnnotation> = null
    
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
    
    export namespace DefinitionReference {
        
        export type context<GAnnotation> = T.Context<GAnnotation>
        
        export namespace _ltype {
            
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
            
            export namespace _linterface {
                
                export type _linterface<GAnnotation> = string
            }
            
            export type _linterface<GAnnotation> = {
                readonly 'interface': string
            }
            
            export namespace resource {
                
                export type resource<GAnnotation> = string
            }
            
            export type resource<GAnnotation> = {
                readonly 'resource': string
            }
        }
        
        export type _ltype<GAnnotation> = 
            | ['builder', {
                readonly 'builder': string
            }]
            | ['function', {
                readonly 'function': string
            }]
            | ['interface', {
                readonly 'interface': string
            }]
            | ['resource', {
                readonly 'resource': string
            }]
    }
    
    export type DefinitionReference<GAnnotation> = {
        readonly 'context': T.Context<GAnnotation>
        readonly 'type': 
            | ['builder', {
                readonly 'builder': string
            }]
            | ['function', {
                readonly 'function': string
            }]
            | ['interface', {
                readonly 'interface': string
            }]
            | ['resource', {
                readonly 'resource': string
            }]
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
    
    export namespace Module {
        
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
                        
                        export type definition<GAnnotation> = T.DefinitionReference<GAnnotation>
                        
                        export namespace _ltype {
                            
                            export namespace _lconstructor {
                                
                                export namespace configuration__data {
                                    
                                    export type O<GAnnotation> = T.TypeReference<GAnnotation>
                                }
                                
                                export type configuration__data<GAnnotation> = [ false ] | [ true, T.TypeReference<GAnnotation>]
                                
                                export namespace dependencies {
                                    
                                    export type D<GAnnotation> = T.DefinitionReference<GAnnotation>
                                }
                                
                                export type dependencies<GAnnotation> = pt.Dictionary<T.DefinitionReference<GAnnotation>>
                            }
                            
                            export type _lconstructor<GAnnotation> = {
                                readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                                readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                            }
                            
                            export namespace reference {}
                            
                            export type reference<GAnnotation> = null
                        }
                        
                        export type _ltype<GAnnotation> = 
                            | ['constructor', {
                                readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                                readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                            }]
                            | ['reference', null]
                    }
                    
                    export type D<GAnnotation> = {
                        readonly 'definition': T.DefinitionReference<GAnnotation>
                        readonly 'type': 
                            | ['constructor', {
                                readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                                readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                            }]
                            | ['reference', null]
                    }
                }
                
                export type algorithms<GAnnotation> = pt.Dictionary<{
                    readonly 'definition': T.DefinitionReference<GAnnotation>
                    readonly 'type': 
                        | ['constructor', {
                            readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                            readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                        }]
                        | ['reference', null]
                }>
            }
            
            export type root<GAnnotation> = {
                readonly 'algorithms': pt.Dictionary<{
                    readonly 'definition': T.DefinitionReference<GAnnotation>
                    readonly 'type': 
                        | ['constructor', {
                            readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                            readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                        }]
                        | ['reference', null]
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
                    readonly 'definition': T.DefinitionReference<GAnnotation>
                    readonly 'type': 
                        | ['constructor', {
                            readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                            readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                        }]
                        | ['reference', null]
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
        
        export type implementation<GAnnotation> = T.Implementation<GAnnotation>
    }
    
    export type Module<GAnnotation> = {
        readonly 'api': {
            readonly 'imports': pt.Dictionary<
                | ['external', string]
                | ['sibling', string]
                | ['submodule', string]
                | ['this', null]
            >
            readonly 'root': {
                readonly 'algorithms': pt.Dictionary<{
                    readonly 'definition': T.DefinitionReference<GAnnotation>
                    readonly 'type': 
                        | ['constructor', {
                            readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                            readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                        }]
                        | ['reference', null]
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
        readonly 'implementation': T.Implementation<GAnnotation>
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
                            
                            export namespace root {
                                
                                export namespace algorithms {
                                    
                                    export namespace D {
                                        
                                        export type definition<GAnnotation> = T.DefinitionReference<GAnnotation>
                                        
                                        export namespace parameters {
                                            
                                            export namespace D {}
                                            
                                            export type D<GAnnotation> = null
                                        }
                                        
                                        export type parameters<GAnnotation> = pt.Dictionary<null>
                                    }
                                    
                                    export type D<GAnnotation> = {
                                        readonly 'definition': T.DefinitionReference<GAnnotation>
                                        readonly 'parameters': pt.Dictionary<null>
                                    }
                                }
                                
                                export type algorithms<GAnnotation> = pt.Dictionary<{
                                    readonly 'definition': T.DefinitionReference<GAnnotation>
                                    readonly 'parameters': pt.Dictionary<null>
                                }>
                            }
                            
                            export type root<GAnnotation> = {
                                readonly 'algorithms': pt.Dictionary<{
                                    readonly 'definition': T.DefinitionReference<GAnnotation>
                                    readonly 'parameters': pt.Dictionary<null>
                                }>
                            }
                        }
                        
                        export type api<GAnnotation> = {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                                | ['this', null]
                            >
                            readonly 'root': {
                                readonly 'algorithms': pt.Dictionary<{
                                    readonly 'definition': T.DefinitionReference<GAnnotation>
                                    readonly 'parameters': pt.Dictionary<null>
                                }>
                            }
                        }
                        
                        export type implementation<GAnnotation> = T.Implementation<GAnnotation>
                    }
                    
                    export type O<GAnnotation> = {
                        readonly 'api': {
                            readonly 'imports': pt.Dictionary<
                                | ['external', string]
                                | ['submodule', string]
                                | ['this', null]
                            >
                            readonly 'root': {
                                readonly 'algorithms': pt.Dictionary<{
                                    readonly 'definition': T.DefinitionReference<GAnnotation>
                                    readonly 'parameters': pt.Dictionary<null>
                                }>
                            }
                        }
                        readonly 'implementation': T.Implementation<GAnnotation>
                    }
                }
                
                export type bindings<GAnnotation> = [ false ] | [ true, {
                    readonly 'api': {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                            | ['submodule', string]
                            | ['this', null]
                        >
                        readonly 'root': {
                            readonly 'algorithms': pt.Dictionary<{
                                readonly 'definition': T.DefinitionReference<GAnnotation>
                                readonly 'parameters': pt.Dictionary<null>
                            }>
                        }
                    }
                    readonly 'implementation': T.Implementation<GAnnotation>
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
                    readonly 'api': {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                            | ['submodule', string]
                            | ['this', null]
                        >
                        readonly 'root': {
                            readonly 'algorithms': pt.Dictionary<{
                                readonly 'definition': T.DefinitionReference<GAnnotation>
                                readonly 'parameters': pt.Dictionary<null>
                            }>
                        }
                    }
                    readonly 'implementation': T.Implementation<GAnnotation>
                }]
                readonly 'executables': pt.Dictionary<null>
                readonly 'main': T.Module<GAnnotation>
                readonly 'submodules': pt.Dictionary<T.Module<GAnnotation>>
                readonly 'test': T.Test<GAnnotation>
            }
            
            export namespace resource {
                
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
                                
                                export type definition<GAnnotation> = T.DefinitionReference<GAnnotation>
                                
                                export namespace _ltype {
                                    
                                    export namespace _lconstructor {
                                        
                                        export namespace configuration__data {
                                            
                                            export type O<GAnnotation> = T.TypeReference<GAnnotation>
                                        }
                                        
                                        export type configuration__data<GAnnotation> = [ false ] | [ true, T.TypeReference<GAnnotation>]
                                        
                                        export namespace dependencies {
                                            
                                            export type D<GAnnotation> = T.DefinitionReference<GAnnotation>
                                        }
                                        
                                        export type dependencies<GAnnotation> = pt.Dictionary<T.DefinitionReference<GAnnotation>>
                                    }
                                    
                                    export type _lconstructor<GAnnotation> = {
                                        readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                                        readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                                    }
                                    
                                    export namespace reference {}
                                    
                                    export type reference<GAnnotation> = null
                                }
                                
                                export type _ltype<GAnnotation> = 
                                    | ['constructor', {
                                        readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                                        readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                                    }]
                                    | ['reference', null]
                            }
                            
                            export type D<GAnnotation> = {
                                readonly 'definition': T.DefinitionReference<GAnnotation>
                                readonly 'type': 
                                    | ['constructor', {
                                        readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                                        readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                                    }]
                                    | ['reference', null]
                            }
                        }
                        
                        export type algorithms<GAnnotation> = pt.Dictionary<{
                            readonly 'definition': T.DefinitionReference<GAnnotation>
                            readonly 'type': 
                                | ['constructor', {
                                    readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                                    readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                                }]
                                | ['reference', null]
                        }>
                    }
                    
                    export type root<GAnnotation> = {
                        readonly 'algorithms': pt.Dictionary<{
                            readonly 'definition': T.DefinitionReference<GAnnotation>
                            readonly 'type': 
                                | ['constructor', {
                                    readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                                    readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                                }]
                                | ['reference', null]
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
                            readonly 'definition': T.DefinitionReference<GAnnotation>
                            readonly 'type': 
                                | ['constructor', {
                                    readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                                    readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                                }]
                                | ['reference', null]
                        }>
                    }
                }
                
                export namespace devDependencies {
                    
                    export namespace D {}
                    
                    export type D<GAnnotation> = null
                }
                
                export type devDependencies<GAnnotation> = pt.Dictionary<null>
                
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
                
                export namespace nativeDependencies {
                    
                    export namespace D {}
                    
                    export type D<GAnnotation> = null
                }
                
                export type nativeDependencies<GAnnotation> = pt.Dictionary<null>
                
                export type test<GAnnotation> = T.Test<GAnnotation>
            }
            
            export type resource<GAnnotation> = {
                readonly 'api': {
                    readonly 'imports': pt.Dictionary<
                        | ['external', string]
                        | ['this', null]
                    >
                    readonly 'root': {
                        readonly 'algorithms': pt.Dictionary<{
                            readonly 'definition': T.DefinitionReference<GAnnotation>
                            readonly 'type': 
                                | ['constructor', {
                                    readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                                    readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                                }]
                                | ['reference', null]
                        }>
                    }
                }
                readonly 'devDependencies': pt.Dictionary<null>
                readonly 'glossary': {
                    readonly 'imports': pt.Dictionary<
                        | ['external', string]
                    >
                    readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                }
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
                    readonly 'api': {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                            | ['submodule', string]
                            | ['this', null]
                        >
                        readonly 'root': {
                            readonly 'algorithms': pt.Dictionary<{
                                readonly 'definition': T.DefinitionReference<GAnnotation>
                                readonly 'parameters': pt.Dictionary<null>
                            }>
                        }
                    }
                    readonly 'implementation': T.Implementation<GAnnotation>
                }]
                readonly 'executables': pt.Dictionary<null>
                readonly 'main': T.Module<GAnnotation>
                readonly 'submodules': pt.Dictionary<T.Module<GAnnotation>>
                readonly 'test': T.Test<GAnnotation>
            }]
            | ['resource', {
                readonly 'api': {
                    readonly 'imports': pt.Dictionary<
                        | ['external', string]
                        | ['this', null]
                    >
                    readonly 'root': {
                        readonly 'algorithms': pt.Dictionary<{
                            readonly 'definition': T.DefinitionReference<GAnnotation>
                            readonly 'type': 
                                | ['constructor', {
                                    readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                                    readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                                }]
                                | ['reference', null]
                        }>
                    }
                }
                readonly 'devDependencies': pt.Dictionary<null>
                readonly 'glossary': {
                    readonly 'imports': pt.Dictionary<
                        | ['external', string]
                    >
                    readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                }
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
                    readonly 'api': {
                        readonly 'imports': pt.Dictionary<
                            | ['external', string]
                            | ['submodule', string]
                            | ['this', null]
                        >
                        readonly 'root': {
                            readonly 'algorithms': pt.Dictionary<{
                                readonly 'definition': T.DefinitionReference<GAnnotation>
                                readonly 'parameters': pt.Dictionary<null>
                            }>
                        }
                    }
                    readonly 'implementation': T.Implementation<GAnnotation>
                }]
                readonly 'executables': pt.Dictionary<null>
                readonly 'main': T.Module<GAnnotation>
                readonly 'submodules': pt.Dictionary<T.Module<GAnnotation>>
                readonly 'test': T.Test<GAnnotation>
            }]
            | ['resource', {
                readonly 'api': {
                    readonly 'imports': pt.Dictionary<
                        | ['external', string]
                        | ['this', null]
                    >
                    readonly 'root': {
                        readonly 'algorithms': pt.Dictionary<{
                            readonly 'definition': T.DefinitionReference<GAnnotation>
                            readonly 'type': 
                                | ['constructor', {
                                    readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                                    readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GAnnotation>>
                                }]
                                | ['reference', null]
                        }>
                    }
                }
                readonly 'devDependencies': pt.Dictionary<null>
                readonly 'glossary': {
                    readonly 'imports': pt.Dictionary<
                        | ['external', string]
                    >
                    readonly 'root': g_glossary.T.Glossary<T.Annotation<GAnnotation>>
                }
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