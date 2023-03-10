import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace Builder {
        
        export namespace group {
            
            export namespace members {
                
                export type D<GAnnotation> = T.Builder<GAnnotation>
            }
            
            export type members<GAnnotation> = pt.Dictionary<T.Builder<GAnnotation>>
        }
        
        export type group<GAnnotation> = {
            readonly 'members': pt.Dictionary<T.Builder<GAnnotation>>
        }
        
        export namespace method {
            
            export namespace builder {
                
                export type O<GAnnotation> = T.Builder<GAnnotation>
            }
            
            export type builder<GAnnotation> = [ false ] | [ true, T.Builder<GAnnotation>]
            
            export namespace data {
                
                export type O<GAnnotation> = T.TypeReference<GAnnotation>
            }
            
            export type data<GAnnotation> = [ false ] | [ true, T.TypeReference<GAnnotation>]
        }
        
        export type method<GAnnotation> = {
            readonly 'builder': [ false ] | [ true, T.Builder<GAnnotation>]
            readonly 'data': [ false ] | [ true, T.TypeReference<GAnnotation>]
        }
        
        export type reference<GAnnotation> = T.BuilderReference<GAnnotation>
    }
    
    export type Builder<GAnnotation> = 
        | ['group', {
            readonly 'members': pt.Dictionary<T.Builder<GAnnotation>>
        }]
        | ['method', {
            readonly 'builder': [ false ] | [ true, T.Builder<GAnnotation>]
            readonly 'data': [ false ] | [ true, T.TypeReference<GAnnotation>]
        }]
        | ['reference', T.BuilderReference<GAnnotation>]
    
    export namespace BuilderReference {
        
        export type builder<GAnnotation> = string
        
        export type context<GAnnotation> = T.Context<GAnnotation>
    }
    
    export type BuilderReference<GAnnotation> = {
        readonly 'builder': string
        readonly 'context': T.Context<GAnnotation>
    }
    
    export namespace Context {
        
        export namespace _limport {
            
            export namespace arguments {
                
                export type D<GAnnotation> = T.TypeReference<GAnnotation>
            }
            
            export type arguments<GAnnotation> = pt.Dictionary<T.TypeReference<GAnnotation>>
            
            export type glossary<GAnnotation> = string
        }
        
        export type _limport<GAnnotation> = {
            readonly 'arguments': pt.Dictionary<T.TypeReference<GAnnotation>>
            readonly 'glossary': string
        }
        
        export namespace local {}
        
        export type local<GAnnotation> = null
    }
    
    export type Context<GAnnotation> = 
        | ['import', {
            readonly 'arguments': pt.Dictionary<T.TypeReference<GAnnotation>>
            readonly 'glossary': string
        }]
        | ['local', null]
    
    export namespace Glossary {
        
        export namespace parameters {
            
            export namespace D {}
            
            export type D<GAnnotation> = null
        }
        
        export type parameters<GAnnotation> = pt.Dictionary<null>
        
        export namespace _ltype {
            
            export namespace asynchronous {
                
                export namespace functions {
                    
                    export namespace D {
                        
                        export type data<GAnnotation> = T.TypeReference<GAnnotation>
                        
                        export namespace output__interface {
                            
                            export type O<GAnnotation> = T.InterfaceReference<GAnnotation>
                        }
                        
                        export type output__interface<GAnnotation> = [ false ] | [ true, T.InterfaceReference<GAnnotation>]
                        
                        export namespace return__type {
                            
                            export namespace data {
                                
                                export type _ltype<GAnnotation> = T.TypeReference<GAnnotation>
                            }
                            
                            export type data<GAnnotation> = {
                                readonly 'type': T.TypeReference<GAnnotation>
                            }
                            
                            export type _linterface<GAnnotation> = T.InterfaceReference<GAnnotation>
                            
                            export namespace nothing {}
                            
                            export type nothing<GAnnotation> = null
                        }
                        
                        export type return__type<GAnnotation> = 
                            | ['data', {
                                readonly 'type': T.TypeReference<GAnnotation>
                            }]
                            | ['interface', T.InterfaceReference<GAnnotation>]
                            | ['nothing', null]
                    }
                    
                    export type D<GAnnotation> = {
                        readonly 'data': T.TypeReference<GAnnotation>
                        readonly 'output interface': [ false ] | [ true, T.InterfaceReference<GAnnotation>]
                        readonly 'return type': 
                            | ['data', {
                                readonly 'type': T.TypeReference<GAnnotation>
                            }]
                            | ['interface', T.InterfaceReference<GAnnotation>]
                            | ['nothing', null]
                    }
                }
                
                export type functions<GAnnotation> = pt.Dictionary<{
                    readonly 'data': T.TypeReference<GAnnotation>
                    readonly 'output interface': [ false ] | [ true, T.InterfaceReference<GAnnotation>]
                    readonly 'return type': 
                        | ['data', {
                            readonly 'type': T.TypeReference<GAnnotation>
                        }]
                        | ['interface', T.InterfaceReference<GAnnotation>]
                        | ['nothing', null]
                }>
                
                export namespace interfaces {
                    
                    export type D<GAnnotation> = T.Interface<GAnnotation>
                }
                
                export type interfaces<GAnnotation> = pt.Dictionary<T.Interface<GAnnotation>>
            }
            
            export type asynchronous<GAnnotation> = {
                readonly 'functions': pt.Dictionary<{
                    readonly 'data': T.TypeReference<GAnnotation>
                    readonly 'output interface': [ false ] | [ true, T.InterfaceReference<GAnnotation>]
                    readonly 'return type': 
                        | ['data', {
                            readonly 'type': T.TypeReference<GAnnotation>
                        }]
                        | ['interface', T.InterfaceReference<GAnnotation>]
                        | ['nothing', null]
                }>
                readonly 'interfaces': pt.Dictionary<T.Interface<GAnnotation>>
            }
            
            export namespace synchronous {
                
                export namespace builders {
                    
                    export type D<GAnnotation> = T.Builder<GAnnotation>
                }
                
                export type builders<GAnnotation> = pt.Dictionary<T.Builder<GAnnotation>>
                
                export namespace functions {
                    
                    export namespace D {
                        
                        export type data<GAnnotation> = T.TypeReference<GAnnotation>
                        
                        export namespace input__builder {
                            
                            export type O<GAnnotation> = T.BuilderReference<GAnnotation>
                        }
                        
                        export type input__builder<GAnnotation> = [ false ] | [ true, T.BuilderReference<GAnnotation>]
                        
                        export namespace output__builder {
                            
                            export type O<GAnnotation> = T.BuilderReference<GAnnotation>
                        }
                        
                        export type output__builder<GAnnotation> = [ false ] | [ true, T.BuilderReference<GAnnotation>]
                        
                        export namespace return__type {
                            
                            export namespace data {
                                
                                export type _ltype<GAnnotation> = T.TypeReference<GAnnotation>
                            }
                            
                            export type data<GAnnotation> = {
                                readonly 'type': T.TypeReference<GAnnotation>
                            }
                            
                            export namespace nothing {}
                            
                            export type nothing<GAnnotation> = null
                        }
                        
                        export type return__type<GAnnotation> = 
                            | ['data', {
                                readonly 'type': T.TypeReference<GAnnotation>
                            }]
                            | ['nothing', null]
                    }
                    
                    export type D<GAnnotation> = {
                        readonly 'data': T.TypeReference<GAnnotation>
                        readonly 'input builder': [ false ] | [ true, T.BuilderReference<GAnnotation>]
                        readonly 'output builder': [ false ] | [ true, T.BuilderReference<GAnnotation>]
                        readonly 'return type': 
                            | ['data', {
                                readonly 'type': T.TypeReference<GAnnotation>
                            }]
                            | ['nothing', null]
                    }
                }
                
                export type functions<GAnnotation> = pt.Dictionary<{
                    readonly 'data': T.TypeReference<GAnnotation>
                    readonly 'input builder': [ false ] | [ true, T.BuilderReference<GAnnotation>]
                    readonly 'output builder': [ false ] | [ true, T.BuilderReference<GAnnotation>]
                    readonly 'return type': 
                        | ['data', {
                            readonly 'type': T.TypeReference<GAnnotation>
                        }]
                        | ['nothing', null]
                }>
            }
            
            export type synchronous<GAnnotation> = {
                readonly 'builders': pt.Dictionary<T.Builder<GAnnotation>>
                readonly 'functions': pt.Dictionary<{
                    readonly 'data': T.TypeReference<GAnnotation>
                    readonly 'input builder': [ false ] | [ true, T.BuilderReference<GAnnotation>]
                    readonly 'output builder': [ false ] | [ true, T.BuilderReference<GAnnotation>]
                    readonly 'return type': 
                        | ['data', {
                            readonly 'type': T.TypeReference<GAnnotation>
                        }]
                        | ['nothing', null]
                }>
            }
        }
        
        export type _ltype<GAnnotation> = 
            | ['asynchronous', {
                readonly 'functions': pt.Dictionary<{
                    readonly 'data': T.TypeReference<GAnnotation>
                    readonly 'output interface': [ false ] | [ true, T.InterfaceReference<GAnnotation>]
                    readonly 'return type': 
                        | ['data', {
                            readonly 'type': T.TypeReference<GAnnotation>
                        }]
                        | ['interface', T.InterfaceReference<GAnnotation>]
                        | ['nothing', null]
                }>
                readonly 'interfaces': pt.Dictionary<T.Interface<GAnnotation>>
            }]
            | ['synchronous', {
                readonly 'builders': pt.Dictionary<T.Builder<GAnnotation>>
                readonly 'functions': pt.Dictionary<{
                    readonly 'data': T.TypeReference<GAnnotation>
                    readonly 'input builder': [ false ] | [ true, T.BuilderReference<GAnnotation>]
                    readonly 'output builder': [ false ] | [ true, T.BuilderReference<GAnnotation>]
                    readonly 'return type': 
                        | ['data', {
                            readonly 'type': T.TypeReference<GAnnotation>
                        }]
                        | ['nothing', null]
                }>
            }]
        
        export namespace types {
            
            export namespace D {
                
                export namespace parameters {
                    
                    export namespace D {}
                    
                    export type D<GAnnotation> = null
                }
                
                export type parameters<GAnnotation> = pt.Dictionary<null>
                
                export type _ltype<GAnnotation> = T.Type<GAnnotation>
            }
            
            export type D<GAnnotation> = {
                readonly 'parameters': pt.Dictionary<null>
                readonly 'type': T.Type<GAnnotation>
            }
        }
        
        export type types<GAnnotation> = pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<null>
            readonly 'type': T.Type<GAnnotation>
        }>
    }
    
    export type Glossary<GAnnotation> = {
        readonly 'parameters': pt.Dictionary<null>
        readonly 'type': 
            | ['asynchronous', {
                readonly 'functions': pt.Dictionary<{
                    readonly 'data': T.TypeReference<GAnnotation>
                    readonly 'output interface': [ false ] | [ true, T.InterfaceReference<GAnnotation>]
                    readonly 'return type': 
                        | ['data', {
                            readonly 'type': T.TypeReference<GAnnotation>
                        }]
                        | ['interface', T.InterfaceReference<GAnnotation>]
                        | ['nothing', null]
                }>
                readonly 'interfaces': pt.Dictionary<T.Interface<GAnnotation>>
            }]
            | ['synchronous', {
                readonly 'builders': pt.Dictionary<T.Builder<GAnnotation>>
                readonly 'functions': pt.Dictionary<{
                    readonly 'data': T.TypeReference<GAnnotation>
                    readonly 'input builder': [ false ] | [ true, T.BuilderReference<GAnnotation>]
                    readonly 'output builder': [ false ] | [ true, T.BuilderReference<GAnnotation>]
                    readonly 'return type': 
                        | ['data', {
                            readonly 'type': T.TypeReference<GAnnotation>
                        }]
                        | ['nothing', null]
                }>
            }]
        readonly 'types': pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<null>
            readonly 'type': T.Type<GAnnotation>
        }>
    }
    
    export namespace Interface {
        
        export namespace choice {
            
            export namespace options {
                
                export type D<GAnnotation> = T.Interface<GAnnotation>
            }
            
            export type options<GAnnotation> = pt.Dictionary<T.Interface<GAnnotation>>
        }
        
        export type choice<GAnnotation> = {
            readonly 'options': pt.Dictionary<T.Interface<GAnnotation>>
        }
        
        export namespace method {
            
            export namespace data {
                
                export type O<GAnnotation> = T.TypeReference<GAnnotation>
            }
            
            export type data<GAnnotation> = [ false ] | [ true, T.TypeReference<GAnnotation>]
            
            export namespace _linterface {
                
                export type O<GAnnotation> = T.Interface<GAnnotation>
            }
            
            export type _linterface<GAnnotation> = [ false ] | [ true, T.Interface<GAnnotation>]
        }
        
        export type method<GAnnotation> = {
            readonly 'data': [ false ] | [ true, T.TypeReference<GAnnotation>]
            readonly 'interface': [ false ] | [ true, T.Interface<GAnnotation>]
        }
        
        export type reference<GAnnotation> = T.InterfaceReference<GAnnotation>
        
        export namespace stream {
            
            export type data<GAnnotation> = T.Interface<GAnnotation>
            
            export type end<GAnnotation> = T.Interface<GAnnotation>
        }
        
        export type stream<GAnnotation> = {
            readonly 'data': T.Interface<GAnnotation>
            readonly 'end': T.Interface<GAnnotation>
        }
    }
    
    export type Interface<GAnnotation> = 
        | ['choice', {
            readonly 'options': pt.Dictionary<T.Interface<GAnnotation>>
        }]
        | ['method', {
            readonly 'data': [ false ] | [ true, T.TypeReference<GAnnotation>]
            readonly 'interface': [ false ] | [ true, T.Interface<GAnnotation>]
        }]
        | ['reference', T.InterfaceReference<GAnnotation>]
        | ['stream', {
            readonly 'data': T.Interface<GAnnotation>
            readonly 'end': T.Interface<GAnnotation>
        }]
    
    export namespace InterfaceReference {
        
        export type context<GAnnotation> = T.Context<GAnnotation>
        
        export type _linterface<GAnnotation> = string
    }
    
    export type InterfaceReference<GAnnotation> = {
        readonly 'context': T.Context<GAnnotation>
        readonly 'interface': string
    }
    
    export namespace Type {
        
        export type array<GAnnotation> = T.Type<GAnnotation>
        
        export namespace _lboolean {}
        
        export type _lboolean<GAnnotation> = null
        
        export type computed<GAnnotation> = T.Type<GAnnotation>
        
        export type dictionary<GAnnotation> = T.Type<GAnnotation>
        
        export type glossary__parameter<GAnnotation> = string
        
        export namespace group {
            
            export namespace D {
                
                export type _ltype<GAnnotation> = T.Type<GAnnotation>
            }
            
            export type D<GAnnotation> = {
                readonly 'type': T.Type<GAnnotation>
            }
        }
        
        export type group<GAnnotation> = pt.Dictionary<{
            readonly 'type': T.Type<GAnnotation>
        }>
        
        export type nested<GAnnotation> = T.Type<GAnnotation>
        
        export namespace _lnull {}
        
        export type _lnull<GAnnotation> = null
        
        export namespace _lnumber {}
        
        export type _lnumber<GAnnotation> = null
        
        export type optional<GAnnotation> = T.Type<GAnnotation>
        
        export type reference<GAnnotation> = T.TypeReference<GAnnotation>
        
        export namespace _lstring {}
        
        export type _lstring<GAnnotation> = null
        
        export namespace taggedUnion {
            
            export type D<GAnnotation> = T.Type<GAnnotation>
        }
        
        export type taggedUnion<GAnnotation> = pt.Dictionary<T.Type<GAnnotation>>
        
        export type type__parameter<GAnnotation> = string
    }
    
    export type Type<GAnnotation> = 
        | ['array', T.Type<GAnnotation>]
        | ['boolean', null]
        | ['computed', T.Type<GAnnotation>]
        | ['dictionary', T.Type<GAnnotation>]
        | ['glossary parameter', string]
        | ['group', pt.Dictionary<{
            readonly 'type': T.Type<GAnnotation>
        }>]
        | ['nested', T.Type<GAnnotation>]
        | ['null', null]
        | ['number', null]
        | ['optional', T.Type<GAnnotation>]
        | ['reference', T.TypeReference<GAnnotation>]
        | ['string', null]
        | ['taggedUnion', pt.Dictionary<T.Type<GAnnotation>>]
        | ['type parameter', string]
    
    export namespace TypeReference {
        
        export namespace arguments {
            
            export type D<GAnnotation> = T.TypeReference<GAnnotation>
        }
        
        export type arguments<GAnnotation> = pt.Dictionary<T.TypeReference<GAnnotation>>
        
        export type context<GAnnotation> = T.Context<GAnnotation>
        
        export type _ltype<GAnnotation> = string
    }
    
    export type TypeReference<GAnnotation> = {
        readonly 'arguments': pt.Dictionary<T.TypeReference<GAnnotation>>
        readonly 'context': T.Context<GAnnotation>
        readonly 'type': string
    }
}