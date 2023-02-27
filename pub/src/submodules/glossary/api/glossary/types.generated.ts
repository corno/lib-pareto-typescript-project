import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Context {
        
        export namespace _limport {
            
            export namespace arguments {
                
                export type D<GPAnnotation> = T.TypeReference<GPAnnotation>
            }
            
            export type arguments<GPAnnotation> = pt.Dictionary<T.TypeReference<GPAnnotation>>
            
            export type glossary<GPAnnotation> = string
        }
        
        export type _limport<GPAnnotation> = {
            readonly 'arguments': pt.Dictionary<T.TypeReference<GPAnnotation>>
            readonly 'glossary': string
        }
        
        export namespace local {}
        
        export type local<GPAnnotation> = {}
    }
    
    export type Context<GPAnnotation> = 
        | ['import', {
            readonly 'arguments': pt.Dictionary<T.TypeReference<GPAnnotation>>
            readonly 'glossary': string
        }]
        | ['local', {}]
    
    export namespace Glossary {
        
        export namespace functions {
            
            export namespace D {
                
                export type data<GPAnnotation> = T.TypeReference<GPAnnotation>
                
                export namespace managed__input__interface {
                    
                    export namespace not__set {}
                    
                    export type not__set<GPAnnotation> = {}
                    
                    export type _lset<GPAnnotation> = T.InterfaceReference<GPAnnotation>
                }
                
                export type managed__input__interface<GPAnnotation> = 
                    | ['not set', {}]
                    | ['set', T.InterfaceReference<GPAnnotation>]
                
                export namespace output__interface {
                    
                    export namespace not__set {}
                    
                    export type not__set<GPAnnotation> = {}
                    
                    export type _lset<GPAnnotation> = T.InterfaceReference<GPAnnotation>
                }
                
                export type output__interface<GPAnnotation> = 
                    | ['not set', {}]
                    | ['set', T.InterfaceReference<GPAnnotation>]
                
                export namespace return__type {
                    
                    export namespace data {
                        
                        export type asynchronous<GPAnnotation> = boolean
                        
                        export type _ltype<GPAnnotation> = T.TypeReference<GPAnnotation>
                    }
                    
                    export type data<GPAnnotation> = {
                        readonly 'asynchronous': boolean
                        readonly 'type': T.TypeReference<GPAnnotation>
                    }
                    
                    export type _linterface<GPAnnotation> = T.InterfaceReference<GPAnnotation>
                    
                    export namespace nothing {}
                    
                    export type nothing<GPAnnotation> = {}
                }
                
                export type return__type<GPAnnotation> = 
                    | ['data', {
                        readonly 'asynchronous': boolean
                        readonly 'type': T.TypeReference<GPAnnotation>
                    }]
                    | ['interface', T.InterfaceReference<GPAnnotation>]
                    | ['nothing', {}]
            }
            
            export type D<GPAnnotation> = {
                readonly 'data': T.TypeReference<GPAnnotation>
                readonly 'managed input interface': 
                    | ['not set', {}]
                    | ['set', T.InterfaceReference<GPAnnotation>]
                readonly 'output interface': 
                    | ['not set', {}]
                    | ['set', T.InterfaceReference<GPAnnotation>]
                readonly 'return type': 
                    | ['data', {
                        readonly 'asynchronous': boolean
                        readonly 'type': T.TypeReference<GPAnnotation>
                    }]
                    | ['interface', T.InterfaceReference<GPAnnotation>]
                    | ['nothing', {}]
            }
        }
        
        export type functions<GPAnnotation> = pt.Dictionary<{
            readonly 'data': T.TypeReference<GPAnnotation>
            readonly 'managed input interface': 
                | ['not set', {}]
                | ['set', T.InterfaceReference<GPAnnotation>]
            readonly 'output interface': 
                | ['not set', {}]
                | ['set', T.InterfaceReference<GPAnnotation>]
            readonly 'return type': 
                | ['data', {
                    readonly 'asynchronous': boolean
                    readonly 'type': T.TypeReference<GPAnnotation>
                }]
                | ['interface', T.InterfaceReference<GPAnnotation>]
                | ['nothing', {}]
        }>
        
        export namespace imports {
            
            export namespace D {}
            
            export type D<GPAnnotation> = {}
        }
        
        export type imports<GPAnnotation> = pt.Dictionary<{}>
        
        export namespace interfaces {
            
            export type D<GPAnnotation> = T.Interface<GPAnnotation>
        }
        
        export type interfaces<GPAnnotation> = pt.Dictionary<T.Interface<GPAnnotation>>
        
        export namespace parameters {
            
            export namespace D {}
            
            export type D<GPAnnotation> = {}
        }
        
        export type parameters<GPAnnotation> = pt.Dictionary<{}>
        
        export namespace types {
            
            export namespace D {
                
                export namespace parameters {
                    
                    export namespace D {}
                    
                    export type D<GPAnnotation> = {}
                }
                
                export type parameters<GPAnnotation> = pt.Dictionary<{}>
                
                export type _ltype<GPAnnotation> = T.Type<GPAnnotation>
            }
            
            export type D<GPAnnotation> = {
                readonly 'parameters': pt.Dictionary<{}>
                readonly 'type': T.Type<GPAnnotation>
            }
        }
        
        export type types<GPAnnotation> = pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<{}>
            readonly 'type': T.Type<GPAnnotation>
        }>
    }
    
    export type Glossary<GPAnnotation> = {
        readonly 'functions': pt.Dictionary<{
            readonly 'data': T.TypeReference<GPAnnotation>
            readonly 'managed input interface': 
                | ['not set', {}]
                | ['set', T.InterfaceReference<GPAnnotation>]
            readonly 'output interface': 
                | ['not set', {}]
                | ['set', T.InterfaceReference<GPAnnotation>]
            readonly 'return type': 
                | ['data', {
                    readonly 'asynchronous': boolean
                    readonly 'type': T.TypeReference<GPAnnotation>
                }]
                | ['interface', T.InterfaceReference<GPAnnotation>]
                | ['nothing', {}]
        }>
        readonly 'imports': pt.Dictionary<{}>
        readonly 'interfaces': pt.Dictionary<T.Interface<GPAnnotation>>
        readonly 'parameters': pt.Dictionary<{}>
        readonly 'types': pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<{}>
            readonly 'type': T.Type<GPAnnotation>
        }>
    }
    
    export namespace Interface {
        
        export namespace group {
            
            export namespace members {
                
                export type D<GPAnnotation> = T.Interface<GPAnnotation>
            }
            
            export type members<GPAnnotation> = pt.Dictionary<T.Interface<GPAnnotation>>
        }
        
        export type group<GPAnnotation> = {
            readonly 'members': pt.Dictionary<T.Interface<GPAnnotation>>
        }
        
        export namespace method {
            
            export namespace data {
                
                export namespace not__set {}
                
                export type not__set<GPAnnotation> = {}
                
                export type _lset<GPAnnotation> = T.TypeReference<GPAnnotation>
            }
            
            export type data<GPAnnotation> = 
                | ['not set', {}]
                | ['set', T.TypeReference<GPAnnotation>]
            
            export namespace _linterface {
                
                export namespace not__set {}
                
                export type not__set<GPAnnotation> = {}
                
                export namespace _lset {
                    
                    export type _linterface<GPAnnotation> = T.Interface<GPAnnotation>
                    
                    export type managed<GPAnnotation> = boolean
                }
                
                export type _lset<GPAnnotation> = {
                    readonly 'interface': T.Interface<GPAnnotation>
                    readonly 'managed': boolean
                }
            }
            
            export type _linterface<GPAnnotation> = 
                | ['not set', {}]
                | ['set', {
                    readonly 'interface': T.Interface<GPAnnotation>
                    readonly 'managed': boolean
                }]
        }
        
        export type method<GPAnnotation> = {
            readonly 'data': 
                | ['not set', {}]
                | ['set', T.TypeReference<GPAnnotation>]
            readonly 'interface': 
                | ['not set', {}]
                | ['set', {
                    readonly 'interface': T.Interface<GPAnnotation>
                    readonly 'managed': boolean
                }]
        }
        
        export type reference<GPAnnotation> = T.InterfaceReference<GPAnnotation>
    }
    
    export type Interface<GPAnnotation> = 
        | ['group', {
            readonly 'members': pt.Dictionary<T.Interface<GPAnnotation>>
        }]
        | ['method', {
            readonly 'data': 
                | ['not set', {}]
                | ['set', T.TypeReference<GPAnnotation>]
            readonly 'interface': 
                | ['not set', {}]
                | ['set', {
                    readonly 'interface': T.Interface<GPAnnotation>
                    readonly 'managed': boolean
                }]
        }]
        | ['reference', T.InterfaceReference<GPAnnotation>]
    
    export namespace InterfaceReference {
        
        export type context<GPAnnotation> = T.Context<GPAnnotation>
        
        export type _linterface<GPAnnotation> = string
    }
    
    export type InterfaceReference<GPAnnotation> = {
        readonly 'context': T.Context<GPAnnotation>
        readonly 'interface': string
    }
    
    export namespace Type {
        
        export type array<GPAnnotation> = T.Type<GPAnnotation>
        
        export namespace _lboolean {}
        
        export type _lboolean<GPAnnotation> = {}
        
        export type computed<GPAnnotation> = T.Type<GPAnnotation>
        
        export type dictionary<GPAnnotation> = T.Type<GPAnnotation>
        
        export type glossary__parameter<GPAnnotation> = string
        
        export namespace group {
            
            export namespace D {
                
                export type optional<GPAnnotation> = boolean
                
                export type _ltype<GPAnnotation> = T.Type<GPAnnotation>
            }
            
            export type D<GPAnnotation> = {
                readonly 'optional': boolean
                readonly 'type': T.Type<GPAnnotation>
            }
        }
        
        export type group<GPAnnotation> = pt.Dictionary<{
            readonly 'optional': boolean
            readonly 'type': T.Type<GPAnnotation>
        }>
        
        export type nested<GPAnnotation> = T.Type<GPAnnotation>
        
        export namespace _lnull {}
        
        export type _lnull<GPAnnotation> = {}
        
        export namespace _lnumber {}
        
        export type _lnumber<GPAnnotation> = {}
        
        export type optional<GPAnnotation> = T.Type<GPAnnotation>
        
        export type reference<GPAnnotation> = T.TypeReference<GPAnnotation>
        
        export namespace _lstring {}
        
        export type _lstring<GPAnnotation> = {}
        
        export namespace taggedUnion {
            
            export type D<GPAnnotation> = T.Type<GPAnnotation>
        }
        
        export type taggedUnion<GPAnnotation> = pt.Dictionary<T.Type<GPAnnotation>>
        
        export type type__parameter<GPAnnotation> = string
    }
    
    export type Type<GPAnnotation> = 
        | ['array', T.Type<GPAnnotation>]
        | ['boolean', {}]
        | ['computed', T.Type<GPAnnotation>]
        | ['dictionary', T.Type<GPAnnotation>]
        | ['glossary parameter', string]
        | ['group', pt.Dictionary<{
            readonly 'optional': boolean
            readonly 'type': T.Type<GPAnnotation>
        }>]
        | ['nested', T.Type<GPAnnotation>]
        | ['null', {}]
        | ['number', {}]
        | ['optional', T.Type<GPAnnotation>]
        | ['reference', T.TypeReference<GPAnnotation>]
        | ['string', {}]
        | ['taggedUnion', pt.Dictionary<T.Type<GPAnnotation>>]
        | ['type parameter', string]
    
    export namespace TypeReference {
        
        export namespace arguments {
            
            export type D<GPAnnotation> = T.TypeReference<GPAnnotation>
        }
        
        export type arguments<GPAnnotation> = pt.Dictionary<T.TypeReference<GPAnnotation>>
        
        export type context<GPAnnotation> = T.Context<GPAnnotation>
        
        export type _ltype<GPAnnotation> = string
    }
    
    export type TypeReference<GPAnnotation> = {
        readonly 'arguments': pt.Dictionary<T.TypeReference<GPAnnotation>>
        readonly 'context': T.Context<GPAnnotation>
        readonly 'type': string
    }
}