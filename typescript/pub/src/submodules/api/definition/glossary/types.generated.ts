import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_glossary from "../../../glossary"

export namespace T {
    
    export namespace API {
        
        export namespace algorithms {
            
            export namespace D {
                
                export type definition<GAnnotation> = T.FunctionReference<GAnnotation>
                
                export namespace _ltype {
                    
                    export namespace _lconstructor {
                        
                        export namespace configuration__data {
                            
                            export type O<GAnnotation> = T.TypeReference<GAnnotation>
                        }
                        
                        export type configuration__data<GAnnotation> = [ false ] | [ true, T.TypeReference<GAnnotation>]
                        
                        export namespace dependencies {
                            
                            export type D<GAnnotation> = T.FunctionReference<GAnnotation>
                        }
                        
                        export type dependencies<GAnnotation> = pt.Dictionary<T.FunctionReference<GAnnotation>>
                    }
                    
                    export type _lconstructor<GAnnotation> = {
                        readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                        readonly 'dependencies': pt.Dictionary<T.FunctionReference<GAnnotation>>
                    }
                    
                    export namespace reference {}
                    
                    export type reference<GAnnotation> = null
                }
                
                export type _ltype<GAnnotation> = 
                    | ['constructor', {
                        readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                        readonly 'dependencies': pt.Dictionary<T.FunctionReference<GAnnotation>>
                    }]
                    | ['reference', null]
            }
            
            export type D<GAnnotation> = {
                readonly 'definition': T.FunctionReference<GAnnotation>
                readonly 'type': 
                    | ['constructor', {
                        readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                        readonly 'dependencies': pt.Dictionary<T.FunctionReference<GAnnotation>>
                    }]
                    | ['reference', null]
            }
        }
        
        export type algorithms<GAnnotation> = pt.Dictionary<{
            readonly 'definition': T.FunctionReference<GAnnotation>
            readonly 'type': 
                | ['constructor', {
                    readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                    readonly 'dependencies': pt.Dictionary<T.FunctionReference<GAnnotation>>
                }]
                | ['reference', null]
        }>
    }
    
    export type API<GAnnotation> = {
        readonly 'algorithms': pt.Dictionary<{
            readonly 'definition': T.FunctionReference<GAnnotation>
            readonly 'type': 
                | ['constructor', {
                    readonly 'configuration data': [ false ] | [ true, T.TypeReference<GAnnotation>]
                    readonly 'dependencies': pt.Dictionary<T.FunctionReference<GAnnotation>>
                }]
                | ['reference', null]
        }>
    }
    
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
    
    export namespace TypeReference {
        
        export type context<GAnnotation> = T.Context<GAnnotation>
        
        export type _ltype<GAnnotation> = string
    }
    
    export type TypeReference<GAnnotation> = {
        readonly 'context': T.Context<GAnnotation>
        readonly 'type': string
    }
}