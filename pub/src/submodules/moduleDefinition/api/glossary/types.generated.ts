import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"
import * as gglossary from "../../../glossary"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace API {
        
        export namespace algorithms {
            
            export namespace D {
                
                export type definition<GPAnnotation> = T.FunctionReference<GPAnnotation>
                
                export namespace _ltype {
                    
                    export namespace _lconstructor {
                        
                        export namespace configuration__data {
                            
                            export type O<GPAnnotation> = T.TypeReference<GPAnnotation>
                        }
                        
                        export type configuration__data<GPAnnotation> = [ false ] | [ true, T.TypeReference<GPAnnotation>]
                        
                        export namespace dependencies {
                            
                            export type D<GPAnnotation> = T.FunctionReference<GPAnnotation>
                        }
                        
                        export type dependencies<GPAnnotation> = pt.Dictionary<T.FunctionReference<GPAnnotation>>
                    }
                    
                    export type _lconstructor<GPAnnotation> = {
                        readonly 'configuration data': [ false ] | [ true, T.TypeReference<GPAnnotation>]
                        readonly 'dependencies': pt.Dictionary<T.FunctionReference<GPAnnotation>>
                    }
                    
                    export namespace reference {}
                    
                    export type reference<GPAnnotation> = {}
                }
                
                export type _ltype<GPAnnotation> = 
                    | ['constructor', {
                        readonly 'configuration data': [ false ] | [ true, T.TypeReference<GPAnnotation>]
                        readonly 'dependencies': pt.Dictionary<T.FunctionReference<GPAnnotation>>
                    }]
                    | ['reference', {}]
            }
            
            export type D<GPAnnotation> = {
                readonly 'definition': T.FunctionReference<GPAnnotation>
                readonly 'type': 
                    | ['constructor', {
                        readonly 'configuration data': [ false ] | [ true, T.TypeReference<GPAnnotation>]
                        readonly 'dependencies': pt.Dictionary<T.FunctionReference<GPAnnotation>>
                    }]
                    | ['reference', {}]
            }
        }
        
        export type algorithms<GPAnnotation> = pt.Dictionary<{
            readonly 'definition': T.FunctionReference<GPAnnotation>
            readonly 'type': 
                | ['constructor', {
                    readonly 'configuration data': [ false ] | [ true, T.TypeReference<GPAnnotation>]
                    readonly 'dependencies': pt.Dictionary<T.FunctionReference<GPAnnotation>>
                }]
                | ['reference', {}]
        }>
        
        export namespace imports {
            
            export type D<GPAnnotation> = string
        }
        
        export type imports<GPAnnotation> = pt.Dictionary<string>
    }
    
    export type API<GPAnnotation> = {
        readonly 'algorithms': pt.Dictionary<{
            readonly 'definition': T.FunctionReference<GPAnnotation>
            readonly 'type': 
                | ['constructor', {
                    readonly 'configuration data': [ false ] | [ true, T.TypeReference<GPAnnotation>]
                    readonly 'dependencies': pt.Dictionary<T.FunctionReference<GPAnnotation>>
                }]
                | ['reference', {}]
        }>
        readonly 'imports': pt.Dictionary<string>
    }
    
    export namespace Context {
        
        export namespace arguments {
            
            export type D<GPAnnotation> = T.TypeReference<GPAnnotation>
        }
        
        export type arguments<GPAnnotation> = pt.Dictionary<T.TypeReference<GPAnnotation>>
        
        export type glossary<GPAnnotation> = string
    }
    
    export type Context<GPAnnotation> = {
        readonly 'arguments': pt.Dictionary<T.TypeReference<GPAnnotation>>
        readonly 'glossary': string
    }
    
    export namespace FunctionReference {
        
        export type context<GPAnnotation> = T.Context<GPAnnotation>
        
        export type _lfunction<GPAnnotation> = string
    }
    
    export type FunctionReference<GPAnnotation> = {
        readonly 'context': T.Context<GPAnnotation>
        readonly 'function': string
    }
    
    export namespace TypeReference {
        
        export type context<GPAnnotation> = T.Context<GPAnnotation>
        
        export type _ltype<GPAnnotation> = string
    }
    
    export type TypeReference<GPAnnotation> = {
        readonly 'context': T.Context<GPAnnotation>
        readonly 'type': string
    }
}