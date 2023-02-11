import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"

export namespace T {
    
    export namespace Context {
        
        export namespace _limport {
            
            export namespace arguments {
                
                export type D = mglossary.T.TypeReference<mcommon.T.String>
            }
            
            export type arguments = pt.Dictionary<mglossary.T.TypeReference<mcommon.T.String>>
            
            export type glossary = string
        }
        
        export type _limport = {
            readonly 'arguments': pt.Dictionary<mglossary.T.TypeReference<mcommon.T.String>>
            readonly 'glossary': string
        }
        
        export namespace local {}
        
        export type local = {}
    }
    
    export type Context = 
        | ['import', {
            readonly 'arguments': pt.Dictionary<mglossary.T.TypeReference<mcommon.T.String>>
            readonly 'glossary': string
        }]
        | ['local', {}]
    
    export namespace DefinitionReference {
        
        export type context = T.Context
        
        export type _lfunction = string
    }
    
    export type DefinitionReference = {
        readonly 'context'?: T.Context
        readonly 'function': string
    }
    
    export namespace ModuleDefinition {
        
        export namespace api {
            
            export namespace algorithms {
                
                export namespace D {
                    
                    export type definition = T.DefinitionReference
                    
                    export namespace _ltype {
                        
                        export namespace _lconstructor {
                            
                            export namespace configuration__data {
                                
                                export type O = mglossary.T.TypeReference<mcommon.T.String>
                            }
                            
                            export type configuration__data = [ false ] | [ true, mglossary.T.TypeReference<mcommon.T.String>]
                            
                            export namespace dependencies {
                                
                                export type D = T.DefinitionReference
                            }
                            
                            export type dependencies = pt.Dictionary<T.DefinitionReference>
                        }
                        
                        export type _lconstructor = {
                            readonly 'configuration data': [ false ] | [ true, mglossary.T.TypeReference<mcommon.T.String>]
                            readonly 'dependencies': pt.Dictionary<T.DefinitionReference>
                        }
                        
                        export namespace reference {}
                        
                        export type reference = {}
                    }
                    
                    export type _ltype = 
                        | ['constructor', {
                            readonly 'configuration data': [ false ] | [ true, mglossary.T.TypeReference<mcommon.T.String>]
                            readonly 'dependencies': pt.Dictionary<T.DefinitionReference>
                        }]
                        | ['reference', {}]
                }
                
                export type D = {
                    readonly 'definition': T.DefinitionReference
                    readonly 'type': 
                        | ['constructor', {
                            readonly 'configuration data': [ false ] | [ true, mglossary.T.TypeReference<mcommon.T.String>]
                            readonly 'dependencies': pt.Dictionary<T.DefinitionReference>
                        }]
                        | ['reference', {}]
                }
            }
            
            export type algorithms = pt.Dictionary<{
                readonly 'definition': T.DefinitionReference
                readonly 'type': 
                    | ['constructor', {
                        readonly 'configuration data': [ false ] | [ true, mglossary.T.TypeReference<mcommon.T.String>]
                        readonly 'dependencies': pt.Dictionary<T.DefinitionReference>
                    }]
                    | ['reference', {}]
            }>
            
            export namespace imports {
                
                export type D = string
            }
            
            export type imports = pt.Dictionary<string>
        }
        
        export type api = {
            readonly 'algorithms': pt.Dictionary<{
                readonly 'definition': T.DefinitionReference
                readonly 'type': 
                    | ['constructor', {
                        readonly 'configuration data': [ false ] | [ true, mglossary.T.TypeReference<mcommon.T.String>]
                        readonly 'dependencies': pt.Dictionary<T.DefinitionReference>
                    }]
                    | ['reference', {}]
            }>
            readonly 'imports': pt.Dictionary<string>
        }
        
        export type glossary = mglossary.T.Glossary<mcommon.T.String>
    }
    
    export type ModuleDefinition = {
        readonly 'api': {
            readonly 'algorithms': pt.Dictionary<{
                readonly 'definition': T.DefinitionReference
                readonly 'type': 
                    | ['constructor', {
                        readonly 'configuration data': [ false ] | [ true, mglossary.T.TypeReference<mcommon.T.String>]
                        readonly 'dependencies': pt.Dictionary<T.DefinitionReference>
                    }]
                    | ['reference', {}]
            }>
            readonly 'imports': pt.Dictionary<string>
        }
        readonly 'glossary': mglossary.T.Glossary<mcommon.T.String>
    }
}