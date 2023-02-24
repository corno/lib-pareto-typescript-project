import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"
import * as gglossary from "../../../glossary"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace Context {
        
        export namespace _limport {
            
            export namespace arguments {
                
                export type D<GPAnnotation> = gglossary.T.TypeReference<T.Annotation<GPAnnotation>>
            }
            
            export type arguments<GPAnnotation> = pt.Dictionary<gglossary.T.TypeReference<T.Annotation<GPAnnotation>>>
            
            export type glossary<GPAnnotation> = string
        }
        
        export type _limport<GPAnnotation> = {
            readonly 'arguments': pt.Dictionary<gglossary.T.TypeReference<T.Annotation<GPAnnotation>>>
            readonly 'glossary': string
        }
        
        export namespace local {}
        
        export type local<GPAnnotation> = {}
    }
    
    export type Context<GPAnnotation> = 
        | ['import', {
            readonly 'arguments': pt.Dictionary<gglossary.T.TypeReference<T.Annotation<GPAnnotation>>>
            readonly 'glossary': string
        }]
        | ['local', {}]
    
    export namespace DefinitionReference {
        
        export type context<GPAnnotation> = T.Context<GPAnnotation>
        
        export type _lfunction<GPAnnotation> = string
    }
    
    export type DefinitionReference<GPAnnotation> = {
        readonly 'context'?: T.Context<GPAnnotation>
        readonly 'function': string
    }
    
    export namespace ModuleDefinition {
        
        export namespace api {
            
            export namespace algorithms {
                
                export namespace D {
                    
                    export type definition<GPAnnotation> = T.DefinitionReference<GPAnnotation>
                    
                    export namespace _ltype {
                        
                        export namespace _lconstructor {
                            
                            export namespace configuration__data {
                                
                                export type O<GPAnnotation> = gglossary.T.TypeReference<T.Annotation<GPAnnotation>>
                            }
                            
                            export type configuration__data<GPAnnotation> = [ false ] | [ true, gglossary.T.TypeReference<T.Annotation<GPAnnotation>>]
                            
                            export namespace dependencies {
                                
                                export type D<GPAnnotation> = T.DefinitionReference<GPAnnotation>
                            }
                            
                            export type dependencies<GPAnnotation> = pt.Dictionary<T.DefinitionReference<GPAnnotation>>
                        }
                        
                        export type _lconstructor<GPAnnotation> = {
                            readonly 'configuration data': [ false ] | [ true, gglossary.T.TypeReference<T.Annotation<GPAnnotation>>]
                            readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GPAnnotation>>
                        }
                        
                        export namespace reference {}
                        
                        export type reference<GPAnnotation> = {}
                    }
                    
                    export type _ltype<GPAnnotation> = 
                        | ['constructor', {
                            readonly 'configuration data': [ false ] | [ true, gglossary.T.TypeReference<T.Annotation<GPAnnotation>>]
                            readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GPAnnotation>>
                        }]
                        | ['reference', {}]
                }
                
                export type D<GPAnnotation> = {
                    readonly 'definition': T.DefinitionReference<GPAnnotation>
                    readonly 'type': 
                        | ['constructor', {
                            readonly 'configuration data': [ false ] | [ true, gglossary.T.TypeReference<T.Annotation<GPAnnotation>>]
                            readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GPAnnotation>>
                        }]
                        | ['reference', {}]
                }
            }
            
            export type algorithms<GPAnnotation> = pt.Dictionary<{
                readonly 'definition': T.DefinitionReference<GPAnnotation>
                readonly 'type': 
                    | ['constructor', {
                        readonly 'configuration data': [ false ] | [ true, gglossary.T.TypeReference<T.Annotation<GPAnnotation>>]
                        readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GPAnnotation>>
                    }]
                    | ['reference', {}]
            }>
            
            export namespace imports {
                
                export type D<GPAnnotation> = string
            }
            
            export type imports<GPAnnotation> = pt.Dictionary<string>
        }
        
        export type api<GPAnnotation> = {
            readonly 'algorithms': pt.Dictionary<{
                readonly 'definition': T.DefinitionReference<GPAnnotation>
                readonly 'type': 
                    | ['constructor', {
                        readonly 'configuration data': [ false ] | [ true, gglossary.T.TypeReference<T.Annotation<GPAnnotation>>]
                        readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GPAnnotation>>
                    }]
                    | ['reference', {}]
            }>
            readonly 'imports': pt.Dictionary<string>
        }
        
        export type glossary<GPAnnotation> = gglossary.T.Glossary<T.Annotation<GPAnnotation>>
    }
    
    export type ModuleDefinition<GPAnnotation> = {
        readonly 'api': {
            readonly 'algorithms': pt.Dictionary<{
                readonly 'definition': T.DefinitionReference<GPAnnotation>
                readonly 'type': 
                    | ['constructor', {
                        readonly 'configuration data': [ false ] | [ true, gglossary.T.TypeReference<T.Annotation<GPAnnotation>>]
                        readonly 'dependencies': pt.Dictionary<T.DefinitionReference<GPAnnotation>>
                    }]
                    | ['reference', {}]
            }>
            readonly 'imports': pt.Dictionary<string>
        }
        readonly 'glossary': gglossary.T.Glossary<T.Annotation<GPAnnotation>>
    }
}