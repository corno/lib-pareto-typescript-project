import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace AsynchronousInterface {
        
        export namespace choice {
            
            export namespace options {
                
                export type D<GAnnotation> = T.AsynchronousInterface<GAnnotation>
            }
            
            export type options<GAnnotation> = pt.Dictionary<T.AsynchronousInterface<GAnnotation>>
        }
        
        export type choice<GAnnotation> = {
            readonly 'options': pt.Dictionary<T.AsynchronousInterface<GAnnotation>>
        }
        
        export namespace method {
            
            export namespace data {
                
                export type O<GAnnotation> = T.TypeReference<GAnnotation>
            }
            
            export type data<GAnnotation> = [ false ] | [ true, T.TypeReference<GAnnotation>]
            
            export namespace _linterface {
                
                export type O<GAnnotation> = T.AsynchronousInterface<GAnnotation>
            }
            
            export type _linterface<GAnnotation> = [ false ] | [ true, T.AsynchronousInterface<GAnnotation>]
        }
        
        export type method<GAnnotation> = {
            readonly 'data': [ false ] | [ true, T.TypeReference<GAnnotation>]
            readonly 'interface': [ false ] | [ true, T.AsynchronousInterface<GAnnotation>]
        }
        
        export type reference<GAnnotation> = T.AsynchronousInterfaceReference<GAnnotation>
        
        export namespace stream {
            
            export type data<GAnnotation> = T.AsynchronousInterface<GAnnotation>
            
            export type end<GAnnotation> = T.AsynchronousInterface<GAnnotation>
        }
        
        export type stream<GAnnotation> = {
            readonly 'data': T.AsynchronousInterface<GAnnotation>
            readonly 'end': T.AsynchronousInterface<GAnnotation>
        }
    }
    
    export type AsynchronousInterface<GAnnotation> = 
        | ['choice', {
            readonly 'options': pt.Dictionary<T.AsynchronousInterface<GAnnotation>>
        }]
        | ['method', {
            readonly 'data': [ false ] | [ true, T.TypeReference<GAnnotation>]
            readonly 'interface': [ false ] | [ true, T.AsynchronousInterface<GAnnotation>]
        }]
        | ['reference', T.AsynchronousInterfaceReference<GAnnotation>]
        | ['stream', {
            readonly 'data': T.AsynchronousInterface<GAnnotation>
            readonly 'end': T.AsynchronousInterface<GAnnotation>
        }]
    
    export namespace AsynchronousInterfaceReference {
        
        export type context<GAnnotation> = T.Context<GAnnotation>
        
        export type _linterface<GAnnotation> = string
    }
    
    export type AsynchronousInterfaceReference<GAnnotation> = {
        readonly 'context': T.Context<GAnnotation>
        readonly 'interface': string
    }
    
    export namespace Context {
        
        export namespace _limport {
            
            export namespace glossary {
                
                export type annotation<GAnnotation> = GAnnotation
                
                export type key<GAnnotation> = string
            }
            
            export type glossary<GAnnotation> = {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
        }
        
        export type _limport<GAnnotation> = {
            readonly 'glossary': {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
        }
        
        export namespace local {}
        
        export type local<GAnnotation> = null
    }
    
    export type Context<GAnnotation> = 
        | ['import', {
            readonly 'glossary': {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
        }]
        | ['local', null]
    
    export namespace DataOrSynchronousInterface {
        
        export type data<GAnnotation> = T.TypeReference<GAnnotation>
        
        export type _linterface<GAnnotation> = T.SynchronousInterfaceReference<GAnnotation>
    }
    
    export type DataOrSynchronousInterface<GAnnotation> = 
        | ['data', T.TypeReference<GAnnotation>]
        | ['interface', T.SynchronousInterfaceReference<GAnnotation>]
    
    export namespace Glossary {
        
        export namespace asynchronous {
            
            export namespace constructors {
                
                export namespace D {
                    
                    export namespace downstreams {
                        
                        export type D<GAnnotation> = T.AsynchronousInterfaceReference<GAnnotation>
                    }
                    
                    export type downstreams<GAnnotation> = pt.Dictionary<T.AsynchronousInterfaceReference<GAnnotation>>
                    
                    export type _linterface<GAnnotation> = T.AsynchronousInterfaceReference<GAnnotation>
                }
                
                export type D<GAnnotation> = {
                    readonly 'downstreams': pt.Dictionary<T.AsynchronousInterfaceReference<GAnnotation>>
                    readonly 'interface': T.AsynchronousInterfaceReference<GAnnotation>
                }
            }
            
            export type constructors<GAnnotation> = pt.Dictionary<{
                readonly 'downstreams': pt.Dictionary<T.AsynchronousInterfaceReference<GAnnotation>>
                readonly 'interface': T.AsynchronousInterfaceReference<GAnnotation>
            }>
            
            export namespace functions {
                
                export namespace D {
                    
                    export namespace _lin {
                        
                        export type data<GAnnotation> = T.TypeReference<GAnnotation>
                    }
                    
                    export type _lin<GAnnotation> = 
                        | ['data', T.TypeReference<GAnnotation>]
                    
                    export type out<GAnnotation> = T.TypeReference<GAnnotation>
                }
                
                export type D<GAnnotation> = {
                    readonly 'in': 
                        | ['data', T.TypeReference<GAnnotation>]
                    readonly 'out': T.TypeReference<GAnnotation>
                }
            }
            
            export type functions<GAnnotation> = pt.Dictionary<{
                readonly 'in': 
                    | ['data', T.TypeReference<GAnnotation>]
                readonly 'out': T.TypeReference<GAnnotation>
            }>
            
            export namespace interfaces {
                
                export type D<GAnnotation> = T.AsynchronousInterface<GAnnotation>
            }
            
            export type interfaces<GAnnotation> = pt.Dictionary<T.AsynchronousInterface<GAnnotation>>
        }
        
        export type asynchronous<GAnnotation> = {
            readonly 'constructors': pt.Dictionary<{
                readonly 'downstreams': pt.Dictionary<T.AsynchronousInterfaceReference<GAnnotation>>
                readonly 'interface': T.AsynchronousInterfaceReference<GAnnotation>
            }>
            readonly 'functions': pt.Dictionary<{
                readonly 'in': 
                    | ['data', T.TypeReference<GAnnotation>]
                readonly 'out': T.TypeReference<GAnnotation>
            }>
            readonly 'interfaces': pt.Dictionary<T.AsynchronousInterface<GAnnotation>>
        }
        
        export namespace imports {
            
            export namespace D {
                
                export namespace arguments {
                    
                    export type D<GAnnotation> = T.TypeReference<GAnnotation>
                }
                
                export type arguments<GAnnotation> = pt.Dictionary<T.TypeReference<GAnnotation>>
            }
            
            export type D<GAnnotation> = {
                readonly 'arguments': pt.Dictionary<T.TypeReference<GAnnotation>>
            }
        }
        
        export type imports<GAnnotation> = pt.Dictionary<{
            readonly 'arguments': pt.Dictionary<T.TypeReference<GAnnotation>>
        }>
        
        export namespace parameters {
            
            export namespace D {}
            
            export type D<GAnnotation> = null
        }
        
        export type parameters<GAnnotation> = pt.Dictionary<null>
        
        export namespace synchronous {
            
            export namespace constructors {
                
                export namespace D {
                    
                    export namespace downstreams {
                        
                        export type D<GAnnotation> = T.SynchronousInterfaceReference<GAnnotation>
                    }
                    
                    export type downstreams<GAnnotation> = pt.Dictionary<T.SynchronousInterfaceReference<GAnnotation>>
                    
                    export type _linterface<GAnnotation> = T.SynchronousInterfaceReference<GAnnotation>
                }
                
                export type D<GAnnotation> = {
                    readonly 'downstreams': pt.Dictionary<T.SynchronousInterfaceReference<GAnnotation>>
                    readonly 'interface': T.SynchronousInterfaceReference<GAnnotation>
                }
            }
            
            export type constructors<GAnnotation> = pt.Dictionary<{
                readonly 'downstreams': pt.Dictionary<T.SynchronousInterfaceReference<GAnnotation>>
                readonly 'interface': T.SynchronousInterfaceReference<GAnnotation>
            }>
            
            export namespace functions {
                
                export namespace D {
                    
                    export type _lin<GAnnotation> = T.DataOrSynchronousInterface<GAnnotation>
                    
                    export type out<GAnnotation> = T.TypeReference<GAnnotation>
                }
                
                export type D<GAnnotation> = {
                    readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                    readonly 'out': T.TypeReference<GAnnotation>
                }
            }
            
            export type functions<GAnnotation> = pt.Dictionary<{
                readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                readonly 'out': T.TypeReference<GAnnotation>
            }>
            
            export namespace interfaces {
                
                export type D<GAnnotation> = T.SynchronousInterface<GAnnotation>
            }
            
            export type interfaces<GAnnotation> = pt.Dictionary<T.SynchronousInterface<GAnnotation>>
        }
        
        export type synchronous<GAnnotation> = {
            readonly 'constructors': pt.Dictionary<{
                readonly 'downstreams': pt.Dictionary<T.SynchronousInterfaceReference<GAnnotation>>
                readonly 'interface': T.SynchronousInterfaceReference<GAnnotation>
            }>
            readonly 'functions': pt.Dictionary<{
                readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                readonly 'out': T.TypeReference<GAnnotation>
            }>
            readonly 'interfaces': pt.Dictionary<T.SynchronousInterface<GAnnotation>>
        }
        
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
        readonly 'asynchronous': {
            readonly 'constructors': pt.Dictionary<{
                readonly 'downstreams': pt.Dictionary<T.AsynchronousInterfaceReference<GAnnotation>>
                readonly 'interface': T.AsynchronousInterfaceReference<GAnnotation>
            }>
            readonly 'functions': pt.Dictionary<{
                readonly 'in': 
                    | ['data', T.TypeReference<GAnnotation>]
                readonly 'out': T.TypeReference<GAnnotation>
            }>
            readonly 'interfaces': pt.Dictionary<T.AsynchronousInterface<GAnnotation>>
        }
        readonly 'imports': pt.Dictionary<{
            readonly 'arguments': pt.Dictionary<T.TypeReference<GAnnotation>>
        }>
        readonly 'parameters': pt.Dictionary<null>
        readonly 'synchronous': {
            readonly 'constructors': pt.Dictionary<{
                readonly 'downstreams': pt.Dictionary<T.SynchronousInterfaceReference<GAnnotation>>
                readonly 'interface': T.SynchronousInterfaceReference<GAnnotation>
            }>
            readonly 'functions': pt.Dictionary<{
                readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                readonly 'out': T.TypeReference<GAnnotation>
            }>
            readonly 'interfaces': pt.Dictionary<T.SynchronousInterface<GAnnotation>>
        }
        readonly 'types': pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<null>
            readonly 'type': T.Type<GAnnotation>
        }>
    }
    
    export namespace SynchronousInterface {
        
        export namespace group {
            
            export namespace members {
                
                export type D<GAnnotation> = T.SynchronousInterface<GAnnotation>
            }
            
            export type members<GAnnotation> = pt.Dictionary<T.SynchronousInterface<GAnnotation>>
        }
        
        export type group<GAnnotation> = {
            readonly 'members': pt.Dictionary<T.SynchronousInterface<GAnnotation>>
        }
        
        export namespace method {
            
            export namespace data {
                
                export type O<GAnnotation> = T.TypeReference<GAnnotation>
            }
            
            export type data<GAnnotation> = [ false ] | [ true, T.TypeReference<GAnnotation>]
            
            export namespace _linterface {
                
                export type O<GAnnotation> = T.SynchronousInterface<GAnnotation>
            }
            
            export type _linterface<GAnnotation> = [ false ] | [ true, T.SynchronousInterface<GAnnotation>]
        }
        
        export type method<GAnnotation> = {
            readonly 'data': [ false ] | [ true, T.TypeReference<GAnnotation>]
            readonly 'interface': [ false ] | [ true, T.SynchronousInterface<GAnnotation>]
        }
        
        export type reference<GAnnotation> = T.SynchronousInterfaceReference<GAnnotation>
    }
    
    export type SynchronousInterface<GAnnotation> = 
        | ['group', {
            readonly 'members': pt.Dictionary<T.SynchronousInterface<GAnnotation>>
        }]
        | ['method', {
            readonly 'data': [ false ] | [ true, T.TypeReference<GAnnotation>]
            readonly 'interface': [ false ] | [ true, T.SynchronousInterface<GAnnotation>]
        }]
        | ['reference', T.SynchronousInterfaceReference<GAnnotation>]
    
    export namespace SynchronousInterfaceReference {
        
        export type context<GAnnotation> = T.Context<GAnnotation>
        
        export type _linterface<GAnnotation> = string
    }
    
    export type SynchronousInterfaceReference<GAnnotation> = {
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