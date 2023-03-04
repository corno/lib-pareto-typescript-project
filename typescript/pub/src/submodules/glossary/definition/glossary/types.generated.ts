import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace Builder {
        
        export namespace group {
            
            export namespace members {
                
                export type D<GPAnnotation> = T.Builder<GPAnnotation>
            }
            
            export type members<GPAnnotation> = pt.Dictionary<T.Builder<GPAnnotation>>
        }
        
        export type group<GPAnnotation> = {
            readonly 'members': pt.Dictionary<T.Builder<GPAnnotation>>
        }
        
        export namespace method {
            
            export namespace builder {
                
                export type O<GPAnnotation> = T.Builder<GPAnnotation>
            }
            
            export type builder<GPAnnotation> = [ false ] | [ true, T.Builder<GPAnnotation>]
            
            export namespace data {
                
                export type O<GPAnnotation> = T.TypeReference<GPAnnotation>
            }
            
            export type data<GPAnnotation> = [ false ] | [ true, T.TypeReference<GPAnnotation>]
        }
        
        export type method<GPAnnotation> = {
            readonly 'builder': [ false ] | [ true, T.Builder<GPAnnotation>]
            readonly 'data': [ false ] | [ true, T.TypeReference<GPAnnotation>]
        }
        
        export type reference<GPAnnotation> = T.BuilderReference<GPAnnotation>
    }
    
    export type Builder<GPAnnotation> = 
        | ['group', {
            readonly 'members': pt.Dictionary<T.Builder<GPAnnotation>>
        }]
        | ['method', {
            readonly 'builder': [ false ] | [ true, T.Builder<GPAnnotation>]
            readonly 'data': [ false ] | [ true, T.TypeReference<GPAnnotation>]
        }]
        | ['reference', T.BuilderReference<GPAnnotation>]
    
    export namespace BuilderReference {
        
        export type builder<GPAnnotation> = string
        
        export type context<GPAnnotation> = T.Context<GPAnnotation>
    }
    
    export type BuilderReference<GPAnnotation> = {
        readonly 'builder': string
        readonly 'context': T.Context<GPAnnotation>
    }
    
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
        
        export type local<GPAnnotation> = null
    }
    
    export type Context<GPAnnotation> = 
        | ['import', {
            readonly 'arguments': pt.Dictionary<T.TypeReference<GPAnnotation>>
            readonly 'glossary': string
        }]
        | ['local', null]
    
    export namespace Glossary {
        
        export namespace builders {
            
            export type D<GPAnnotation> = T.Builder<GPAnnotation>
        }
        
        export type builders<GPAnnotation> = pt.Dictionary<T.Builder<GPAnnotation>>
        
        export namespace functions {
            
            export namespace D {
                
                export type data<GPAnnotation> = T.TypeReference<GPAnnotation>
                
                export namespace input__builder {
                    
                    export type O<GPAnnotation> = T.BuilderReference<GPAnnotation>
                }
                
                export type input__builder<GPAnnotation> = [ false ] | [ true, T.BuilderReference<GPAnnotation>]
                
                export namespace output__builder {
                    
                    export type O<GPAnnotation> = T.BuilderReference<GPAnnotation>
                }
                
                export type output__builder<GPAnnotation> = [ false ] | [ true, T.BuilderReference<GPAnnotation>]
                
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
                    
                    export type nothing<GPAnnotation> = null
                }
                
                export type return__type<GPAnnotation> = 
                    | ['data', {
                        readonly 'asynchronous': boolean
                        readonly 'type': T.TypeReference<GPAnnotation>
                    }]
                    | ['interface', T.InterfaceReference<GPAnnotation>]
                    | ['nothing', null]
            }
            
            export type D<GPAnnotation> = {
                readonly 'data': T.TypeReference<GPAnnotation>
                readonly 'input builder': [ false ] | [ true, T.BuilderReference<GPAnnotation>]
                readonly 'output builder': [ false ] | [ true, T.BuilderReference<GPAnnotation>]
                readonly 'return type': 
                    | ['data', {
                        readonly 'asynchronous': boolean
                        readonly 'type': T.TypeReference<GPAnnotation>
                    }]
                    | ['interface', T.InterfaceReference<GPAnnotation>]
                    | ['nothing', null]
            }
        }
        
        export type functions<GPAnnotation> = pt.Dictionary<{
            readonly 'data': T.TypeReference<GPAnnotation>
            readonly 'input builder': [ false ] | [ true, T.BuilderReference<GPAnnotation>]
            readonly 'output builder': [ false ] | [ true, T.BuilderReference<GPAnnotation>]
            readonly 'return type': 
                | ['data', {
                    readonly 'asynchronous': boolean
                    readonly 'type': T.TypeReference<GPAnnotation>
                }]
                | ['interface', T.InterfaceReference<GPAnnotation>]
                | ['nothing', null]
        }>
        
        export namespace interfaces {
            
            export type D<GPAnnotation> = T.Interface<GPAnnotation>
        }
        
        export type interfaces<GPAnnotation> = pt.Dictionary<T.Interface<GPAnnotation>>
        
        export namespace parameters {
            
            export namespace D {}
            
            export type D<GPAnnotation> = null
        }
        
        export type parameters<GPAnnotation> = pt.Dictionary<null>
        
        export namespace types {
            
            export namespace D {
                
                export namespace parameters {
                    
                    export namespace D {}
                    
                    export type D<GPAnnotation> = null
                }
                
                export type parameters<GPAnnotation> = pt.Dictionary<null>
                
                export type _ltype<GPAnnotation> = T.Type<GPAnnotation>
            }
            
            export type D<GPAnnotation> = {
                readonly 'parameters': pt.Dictionary<null>
                readonly 'type': T.Type<GPAnnotation>
            }
        }
        
        export type types<GPAnnotation> = pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<null>
            readonly 'type': T.Type<GPAnnotation>
        }>
    }
    
    export type Glossary<GPAnnotation> = {
        readonly 'builders': pt.Dictionary<T.Builder<GPAnnotation>>
        readonly 'functions': pt.Dictionary<{
            readonly 'data': T.TypeReference<GPAnnotation>
            readonly 'input builder': [ false ] | [ true, T.BuilderReference<GPAnnotation>]
            readonly 'output builder': [ false ] | [ true, T.BuilderReference<GPAnnotation>]
            readonly 'return type': 
                | ['data', {
                    readonly 'asynchronous': boolean
                    readonly 'type': T.TypeReference<GPAnnotation>
                }]
                | ['interface', T.InterfaceReference<GPAnnotation>]
                | ['nothing', null]
        }>
        readonly 'interfaces': pt.Dictionary<T.Interface<GPAnnotation>>
        readonly 'parameters': pt.Dictionary<null>
        readonly 'types': pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<null>
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
                
                export type O<GPAnnotation> = T.TypeReference<GPAnnotation>
            }
            
            export type data<GPAnnotation> = [ false ] | [ true, T.TypeReference<GPAnnotation>]
            
            export namespace _linterface {
                
                export type O<GPAnnotation> = T.Interface<GPAnnotation>
            }
            
            export type _linterface<GPAnnotation> = [ false ] | [ true, T.Interface<GPAnnotation>]
        }
        
        export type method<GPAnnotation> = {
            readonly 'data': [ false ] | [ true, T.TypeReference<GPAnnotation>]
            readonly 'interface': [ false ] | [ true, T.Interface<GPAnnotation>]
        }
        
        export type reference<GPAnnotation> = T.InterfaceReference<GPAnnotation>
    }
    
    export type Interface<GPAnnotation> = 
        | ['group', {
            readonly 'members': pt.Dictionary<T.Interface<GPAnnotation>>
        }]
        | ['method', {
            readonly 'data': [ false ] | [ true, T.TypeReference<GPAnnotation>]
            readonly 'interface': [ false ] | [ true, T.Interface<GPAnnotation>]
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
        
        export type _lboolean<GPAnnotation> = null
        
        export type computed<GPAnnotation> = T.Type<GPAnnotation>
        
        export type dictionary<GPAnnotation> = T.Type<GPAnnotation>
        
        export type glossary__parameter<GPAnnotation> = string
        
        export namespace group {
            
            export namespace D {
                
                export type _ltype<GPAnnotation> = T.Type<GPAnnotation>
            }
            
            export type D<GPAnnotation> = {
                readonly 'type': T.Type<GPAnnotation>
            }
        }
        
        export type group<GPAnnotation> = pt.Dictionary<{
            readonly 'type': T.Type<GPAnnotation>
        }>
        
        export type nested<GPAnnotation> = T.Type<GPAnnotation>
        
        export namespace _lnull {}
        
        export type _lnull<GPAnnotation> = null
        
        export namespace _lnumber {}
        
        export type _lnumber<GPAnnotation> = null
        
        export type optional<GPAnnotation> = T.Type<GPAnnotation>
        
        export type reference<GPAnnotation> = T.TypeReference<GPAnnotation>
        
        export namespace _lstring {}
        
        export type _lstring<GPAnnotation> = null
        
        export namespace taggedUnion {
            
            export type D<GPAnnotation> = T.Type<GPAnnotation>
        }
        
        export type taggedUnion<GPAnnotation> = pt.Dictionary<T.Type<GPAnnotation>>
        
        export type type__parameter<GPAnnotation> = string
    }
    
    export type Type<GPAnnotation> = 
        | ['array', T.Type<GPAnnotation>]
        | ['boolean', null]
        | ['computed', T.Type<GPAnnotation>]
        | ['dictionary', T.Type<GPAnnotation>]
        | ['glossary parameter', string]
        | ['group', pt.Dictionary<{
            readonly 'type': T.Type<GPAnnotation>
        }>]
        | ['nested', T.Type<GPAnnotation>]
        | ['null', null]
        | ['number', null]
        | ['optional', T.Type<GPAnnotation>]
        | ['reference', T.TypeReference<GPAnnotation>]
        | ['string', null]
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