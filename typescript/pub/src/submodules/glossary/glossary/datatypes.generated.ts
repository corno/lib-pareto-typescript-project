import * as pt from 'pareto-core-types'


export namespace N {}

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
                
                export type O<GAnnotation> = T.DataSpecifier<GAnnotation>
            }
            
            export type data<GAnnotation> = [ false ] | [ true, T.DataSpecifier<GAnnotation>]
            
            export namespace _linterface {
                
                export type O<GAnnotation> = T.AsynchronousInterface<GAnnotation>
            }
            
            export type _linterface<GAnnotation> = [ false ] | [ true, T.AsynchronousInterface<GAnnotation>]
        }
        
        export type method<GAnnotation> = {
            readonly 'data': [ false ] | [ true, T.DataSpecifier<GAnnotation>]
            readonly 'interface': [ false ] | [ true, T.AsynchronousInterface<GAnnotation>]
        }
        
        export type reference<GAnnotation> = T.AsynchronousInterfaceReference<GAnnotation>
        
        export namespace streamconsumer {
            
            export type data<GAnnotation> = T.AsynchronousInterface<GAnnotation>
            
            export type end<GAnnotation> = T.AsynchronousInterface<GAnnotation>
        }
        
        export type streamconsumer<GAnnotation> = {
            readonly 'data': T.AsynchronousInterface<GAnnotation>
            readonly 'end': T.AsynchronousInterface<GAnnotation>
        }
    }
    
    export type AsynchronousInterface<GAnnotation> = 
        | ['choice', {
            readonly 'options': pt.Dictionary<T.AsynchronousInterface<GAnnotation>>
        }]
        | ['method', {
            readonly 'data': [ false ] | [ true, T.DataSpecifier<GAnnotation>]
            readonly 'interface': [ false ] | [ true, T.AsynchronousInterface<GAnnotation>]
        }]
        | ['reference', T.AsynchronousInterfaceReference<GAnnotation>]
        | ['streamconsumer', {
            readonly 'data': T.AsynchronousInterface<GAnnotation>
            readonly 'end': T.AsynchronousInterface<GAnnotation>
        }]
    
    export namespace AsynchronousInterfaceReference {
        
        export namespace arguments {
            
            export type D<GAnnotation> = T.DataSpecifier<GAnnotation>
        }
        
        export type arguments<GAnnotation> = pt.Dictionary<T.DataSpecifier<GAnnotation>>
        
        export type context<GAnnotation> = T.Context<GAnnotation>
        
        export type _linterface<GAnnotation> = string
    }
    
    export type AsynchronousInterfaceReference<GAnnotation> = {
        readonly 'arguments': pt.Dictionary<T.DataSpecifier<GAnnotation>>
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
        
        export type data<GAnnotation> = T.DataSpecifier<GAnnotation>
        
        export type _linterface<GAnnotation> = T.SynchronousInterfaceReference<GAnnotation>
    }
    
    export type DataOrSynchronousInterface<GAnnotation> = 
        | ['data', T.DataSpecifier<GAnnotation>]
        | ['interface', T.SynchronousInterfaceReference<GAnnotation>]
    
    export namespace DataSpecifier {
        
        export type glossary__parameter<GAnnotation> = string
        
        export namespace _ltype {
            
            export namespace arguments {
                
                export type D<GAnnotation> = T.DataSpecifier<GAnnotation>
            }
            
            export type arguments<GAnnotation> = pt.Dictionary<T.DataSpecifier<GAnnotation>>
            
            export type context<GAnnotation> = T.Context<GAnnotation>
            
            export type _ltype<GAnnotation> = string
        }
        
        export type _ltype<GAnnotation> = {
            readonly 'arguments': pt.Dictionary<T.DataSpecifier<GAnnotation>>
            readonly 'context': T.Context<GAnnotation>
            readonly 'type': string
        }
        
        export type type__parameter<GAnnotation> = string
    }
    
    export type DataSpecifier<GAnnotation> = 
        | ['glossary parameter', string]
        | ['type', {
            readonly 'arguments': pt.Dictionary<T.DataSpecifier<GAnnotation>>
            readonly 'context': T.Context<GAnnotation>
            readonly 'type': string
        }]
        | ['type parameter', string]
    
    export namespace Glossary {
        
        export namespace asynchronous {
            
            export namespace algorithms {
                
                export namespace D {
                    
                    export type parameters<GAnnotation> = T.TypeParameters<GAnnotation>
                    
                    export namespace _ltype {
                        
                        export namespace _lconstructor {
                            
                            export namespace downstreams {
                                
                                export type D<GAnnotation> = T.AsynchronousInterfaceReference<GAnnotation>
                            }
                            
                            export type downstreams<GAnnotation> = pt.Dictionary<T.AsynchronousInterfaceReference<GAnnotation>>
                            
                            export type _linterface<GAnnotation> = T.AsynchronousInterfaceReference<GAnnotation>
                        }
                        
                        export type _lconstructor<GAnnotation> = {
                            readonly 'downstreams': pt.Dictionary<T.AsynchronousInterfaceReference<GAnnotation>>
                            readonly 'interface': T.AsynchronousInterfaceReference<GAnnotation>
                        }
                        
                        export namespace _lfunction {
                            
                            export type _lin<GAnnotation> = T.DataSpecifier<GAnnotation>
                            
                            export type out<GAnnotation> = T.DataSpecifier<GAnnotation>
                        }
                        
                        export type _lfunction<GAnnotation> = {
                            readonly 'in': T.DataSpecifier<GAnnotation>
                            readonly 'out': T.DataSpecifier<GAnnotation>
                        }
                    }
                    
                    export type _ltype<GAnnotation> = 
                        | ['constructor', {
                            readonly 'downstreams': pt.Dictionary<T.AsynchronousInterfaceReference<GAnnotation>>
                            readonly 'interface': T.AsynchronousInterfaceReference<GAnnotation>
                        }]
                        | ['function', {
                            readonly 'in': T.DataSpecifier<GAnnotation>
                            readonly 'out': T.DataSpecifier<GAnnotation>
                        }]
                }
                
                export type D<GAnnotation> = {
                    readonly 'parameters': T.TypeParameters<GAnnotation>
                    readonly 'type': 
                        | ['constructor', {
                            readonly 'downstreams': pt.Dictionary<T.AsynchronousInterfaceReference<GAnnotation>>
                            readonly 'interface': T.AsynchronousInterfaceReference<GAnnotation>
                        }]
                        | ['function', {
                            readonly 'in': T.DataSpecifier<GAnnotation>
                            readonly 'out': T.DataSpecifier<GAnnotation>
                        }]
                }
            }
            
            export type algorithms<GAnnotation> = pt.Dictionary<{
                readonly 'parameters': T.TypeParameters<GAnnotation>
                readonly 'type': 
                    | ['constructor', {
                        readonly 'downstreams': pt.Dictionary<T.AsynchronousInterfaceReference<GAnnotation>>
                        readonly 'interface': T.AsynchronousInterfaceReference<GAnnotation>
                    }]
                    | ['function', {
                        readonly 'in': T.DataSpecifier<GAnnotation>
                        readonly 'out': T.DataSpecifier<GAnnotation>
                    }]
            }>
            
            export namespace interfaces {
                
                export namespace D {
                    
                    export type _linterface<GAnnotation> = T.AsynchronousInterface<GAnnotation>
                    
                    export type parameters<GAnnotation> = T.TypeParameters<GAnnotation>
                }
                
                export type D<GAnnotation> = {
                    readonly 'interface': T.AsynchronousInterface<GAnnotation>
                    readonly 'parameters': T.TypeParameters<GAnnotation>
                }
            }
            
            export type interfaces<GAnnotation> = pt.Dictionary<{
                readonly 'interface': T.AsynchronousInterface<GAnnotation>
                readonly 'parameters': T.TypeParameters<GAnnotation>
            }>
        }
        
        export type asynchronous<GAnnotation> = {
            readonly 'algorithms': pt.Dictionary<{
                readonly 'parameters': T.TypeParameters<GAnnotation>
                readonly 'type': 
                    | ['constructor', {
                        readonly 'downstreams': pt.Dictionary<T.AsynchronousInterfaceReference<GAnnotation>>
                        readonly 'interface': T.AsynchronousInterfaceReference<GAnnotation>
                    }]
                    | ['function', {
                        readonly 'in': T.DataSpecifier<GAnnotation>
                        readonly 'out': T.DataSpecifier<GAnnotation>
                    }]
            }>
            readonly 'interfaces': pt.Dictionary<{
                readonly 'interface': T.AsynchronousInterface<GAnnotation>
                readonly 'parameters': T.TypeParameters<GAnnotation>
            }>
        }
        
        export namespace imports {
            
            export namespace D {
                
                export namespace arguments {
                    
                    export type D<GAnnotation> = T.DataSpecifier<GAnnotation>
                }
                
                export type arguments<GAnnotation> = pt.Dictionary<T.DataSpecifier<GAnnotation>>
            }
            
            export type D<GAnnotation> = {
                readonly 'arguments': pt.Dictionary<T.DataSpecifier<GAnnotation>>
            }
        }
        
        export type imports<GAnnotation> = pt.Dictionary<{
            readonly 'arguments': pt.Dictionary<T.DataSpecifier<GAnnotation>>
        }>
        
        export namespace parameters {
            
            export namespace D {}
            
            export type D<GAnnotation> = null
        }
        
        export type parameters<GAnnotation> = pt.Dictionary<null>
        
        export type root<GAnnotation> = T.Namespace<GAnnotation>
        
        export namespace synchronous {
            
            export namespace algorithms {
                
                export namespace D {
                    
                    export type parameters<GAnnotation> = T.TypeParameters<GAnnotation>
                    
                    export namespace _ltype {
                        
                        export namespace _lfunction {
                            
                            export type _lin<GAnnotation> = T.DataOrSynchronousInterface<GAnnotation>
                            
                            export type out<GAnnotation> = T.DataSpecifier<GAnnotation>
                        }
                        
                        export type _lfunction<GAnnotation> = {
                            readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                            readonly 'out': T.DataSpecifier<GAnnotation>
                        }
                        
                        export namespace procedure {
                            
                            export type _lin<GAnnotation> = T.DataOrSynchronousInterface<GAnnotation>
                            
                            export type out<GAnnotation> = T.SynchronousInterfaceReference<GAnnotation>
                        }
                        
                        export type procedure<GAnnotation> = {
                            readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                            readonly 'out': T.SynchronousInterfaceReference<GAnnotation>
                        }
                    }
                    
                    export type _ltype<GAnnotation> = 
                        | ['function', {
                            readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                            readonly 'out': T.DataSpecifier<GAnnotation>
                        }]
                        | ['procedure', {
                            readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                            readonly 'out': T.SynchronousInterfaceReference<GAnnotation>
                        }]
                }
                
                export type D<GAnnotation> = {
                    readonly 'parameters': T.TypeParameters<GAnnotation>
                    readonly 'type': 
                        | ['function', {
                            readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                            readonly 'out': T.DataSpecifier<GAnnotation>
                        }]
                        | ['procedure', {
                            readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                            readonly 'out': T.SynchronousInterfaceReference<GAnnotation>
                        }]
                }
            }
            
            export type algorithms<GAnnotation> = pt.Dictionary<{
                readonly 'parameters': T.TypeParameters<GAnnotation>
                readonly 'type': 
                    | ['function', {
                        readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                        readonly 'out': T.DataSpecifier<GAnnotation>
                    }]
                    | ['procedure', {
                        readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                        readonly 'out': T.SynchronousInterfaceReference<GAnnotation>
                    }]
            }>
            
            export namespace interfaces {
                
                export namespace D {
                    
                    export type _linterface<GAnnotation> = T.SynchronousInterface<GAnnotation>
                    
                    export type parameters<GAnnotation> = T.TypeParameters<GAnnotation>
                }
                
                export type D<GAnnotation> = {
                    readonly 'interface': T.SynchronousInterface<GAnnotation>
                    readonly 'parameters': T.TypeParameters<GAnnotation>
                }
            }
            
            export type interfaces<GAnnotation> = pt.Dictionary<{
                readonly 'interface': T.SynchronousInterface<GAnnotation>
                readonly 'parameters': T.TypeParameters<GAnnotation>
            }>
        }
        
        export type synchronous<GAnnotation> = {
            readonly 'algorithms': pt.Dictionary<{
                readonly 'parameters': T.TypeParameters<GAnnotation>
                readonly 'type': 
                    | ['function', {
                        readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                        readonly 'out': T.DataSpecifier<GAnnotation>
                    }]
                    | ['procedure', {
                        readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                        readonly 'out': T.SynchronousInterfaceReference<GAnnotation>
                    }]
            }>
            readonly 'interfaces': pt.Dictionary<{
                readonly 'interface': T.SynchronousInterface<GAnnotation>
                readonly 'parameters': T.TypeParameters<GAnnotation>
            }>
        }
    }
    
    export type Glossary<GAnnotation> = {
        readonly 'asynchronous': {
            readonly 'algorithms': pt.Dictionary<{
                readonly 'parameters': T.TypeParameters<GAnnotation>
                readonly 'type': 
                    | ['constructor', {
                        readonly 'downstreams': pt.Dictionary<T.AsynchronousInterfaceReference<GAnnotation>>
                        readonly 'interface': T.AsynchronousInterfaceReference<GAnnotation>
                    }]
                    | ['function', {
                        readonly 'in': T.DataSpecifier<GAnnotation>
                        readonly 'out': T.DataSpecifier<GAnnotation>
                    }]
            }>
            readonly 'interfaces': pt.Dictionary<{
                readonly 'interface': T.AsynchronousInterface<GAnnotation>
                readonly 'parameters': T.TypeParameters<GAnnotation>
            }>
        }
        readonly 'imports': pt.Dictionary<{
            readonly 'arguments': pt.Dictionary<T.DataSpecifier<GAnnotation>>
        }>
        readonly 'parameters': pt.Dictionary<null>
        readonly 'root': T.Namespace<GAnnotation>
        readonly 'synchronous': {
            readonly 'algorithms': pt.Dictionary<{
                readonly 'parameters': T.TypeParameters<GAnnotation>
                readonly 'type': 
                    | ['function', {
                        readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                        readonly 'out': T.DataSpecifier<GAnnotation>
                    }]
                    | ['procedure', {
                        readonly 'in': T.DataOrSynchronousInterface<GAnnotation>
                        readonly 'out': T.SynchronousInterfaceReference<GAnnotation>
                    }]
            }>
            readonly 'interfaces': pt.Dictionary<{
                readonly 'interface': T.SynchronousInterface<GAnnotation>
                readonly 'parameters': T.TypeParameters<GAnnotation>
            }>
        }
    }
    
    export namespace Namespace {
        
        export namespace namespaces {
            
            export type D<GAnnotation> = T.Namespace<GAnnotation>
        }
        
        export type namespaces<GAnnotation> = pt.Dictionary<T.Namespace<GAnnotation>>
        
        export namespace types {
            
            export namespace D {
                
                export type parameters<GAnnotation> = T.TypeParameters<GAnnotation>
                
                export type _ltype<GAnnotation> = T.Type<GAnnotation>
            }
            
            export type D<GAnnotation> = {
                readonly 'parameters': T.TypeParameters<GAnnotation>
                readonly 'type': T.Type<GAnnotation>
            }
        }
        
        export type types<GAnnotation> = pt.Dictionary<{
            readonly 'parameters': T.TypeParameters<GAnnotation>
            readonly 'type': T.Type<GAnnotation>
        }>
    }
    
    export type Namespace<GAnnotation> = {
        readonly 'namespaces': pt.Dictionary<T.Namespace<GAnnotation>>
        readonly 'types': pt.Dictionary<{
            readonly 'parameters': T.TypeParameters<GAnnotation>
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
                
                export type O<GAnnotation> = T.DataSpecifier<GAnnotation>
            }
            
            export type data<GAnnotation> = [ false ] | [ true, T.DataSpecifier<GAnnotation>]
            
            export namespace _linterface {
                
                export type O<GAnnotation> = T.SynchronousInterface<GAnnotation>
            }
            
            export type _linterface<GAnnotation> = [ false ] | [ true, T.SynchronousInterface<GAnnotation>]
        }
        
        export type method<GAnnotation> = {
            readonly 'data': [ false ] | [ true, T.DataSpecifier<GAnnotation>]
            readonly 'interface': [ false ] | [ true, T.SynchronousInterface<GAnnotation>]
        }
        
        export type reference<GAnnotation> = T.SynchronousInterfaceReference<GAnnotation>
    }
    
    export type SynchronousInterface<GAnnotation> = 
        | ['group', {
            readonly 'members': pt.Dictionary<T.SynchronousInterface<GAnnotation>>
        }]
        | ['method', {
            readonly 'data': [ false ] | [ true, T.DataSpecifier<GAnnotation>]
            readonly 'interface': [ false ] | [ true, T.SynchronousInterface<GAnnotation>]
        }]
        | ['reference', T.SynchronousInterfaceReference<GAnnotation>]
    
    export namespace SynchronousInterfaceReference {
        
        export namespace arguments {
            
            export type D<GAnnotation> = T.DataSpecifier<GAnnotation>
        }
        
        export type arguments<GAnnotation> = pt.Dictionary<T.DataSpecifier<GAnnotation>>
        
        export type context<GAnnotation> = T.Context<GAnnotation>
        
        export type _linterface<GAnnotation> = string
    }
    
    export type SynchronousInterfaceReference<GAnnotation> = {
        readonly 'arguments': pt.Dictionary<T.DataSpecifier<GAnnotation>>
        readonly 'context': T.Context<GAnnotation>
        readonly 'interface': string
    }
    
    export namespace Type {
        
        export type array<GAnnotation> = T.Type<GAnnotation>
        
        export namespace _lboolean {}
        
        export type _lboolean<GAnnotation> = null
        
        export type computed<GAnnotation> = T.Type<GAnnotation>
        
        export type dictionary<GAnnotation> = T.Type<GAnnotation>
        
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
        
        export type reference<GAnnotation> = T.DataSpecifier<GAnnotation>
        
        export namespace _lstring {}
        
        export type _lstring<GAnnotation> = null
        
        export namespace taggedUnion {
            
            export type D<GAnnotation> = T.Type<GAnnotation>
        }
        
        export type taggedUnion<GAnnotation> = pt.Dictionary<T.Type<GAnnotation>>
    }
    
    export type Type<GAnnotation> = 
        | ['array', T.Type<GAnnotation>]
        | ['boolean', null]
        | ['computed', T.Type<GAnnotation>]
        | ['dictionary', T.Type<GAnnotation>]
        | ['group', pt.Dictionary<{
            readonly 'type': T.Type<GAnnotation>
        }>]
        | ['nested', T.Type<GAnnotation>]
        | ['null', null]
        | ['number', null]
        | ['optional', T.Type<GAnnotation>]
        | ['reference', T.DataSpecifier<GAnnotation>]
        | ['string', null]
        | ['taggedUnion', pt.Dictionary<T.Type<GAnnotation>>]
    
    export namespace TypeParameters {
        
        export namespace D {}
        
        export type D<GAnnotation> = null
    }
    
    export type TypeParameters<GAnnotation> = pt.Dictionary<null>
}