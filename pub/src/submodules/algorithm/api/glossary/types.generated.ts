import * as pt from 'pareto-core-types'

import * as gfp from "lib-fountain-pen"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace AsynchronousExpression {
        
        export namespace call {
            
            export type _lfunction<GPAnnotation> = string
        }
        
        export type call<GPAnnotation> = {
            readonly 'function': string
        }
    }
    
    export type AsynchronousExpression<GPAnnotation> = 
        | ['call', {
            readonly 'function': string
        }]
    
    export namespace AsynchronousFunctionBlock {
        
        export namespace innerFunctions {
            
            export namespace D {
                
                export type block<GPAnnotation> = T.AsynchronousFunctionBlock<GPAnnotation>
            }
            
            export type D<GPAnnotation> = {
                readonly 'block': T.AsynchronousFunctionBlock<GPAnnotation>
            }
        }
        
        export type innerFunctions<GPAnnotation> = pt.Dictionary<{
            readonly 'block': T.AsynchronousFunctionBlock<GPAnnotation>
        }>
        
        export type returnExpression<GPAnnotation> = T.AsynchronousExpression<GPAnnotation>
    }
    
    export type AsynchronousFunctionBlock<GPAnnotation> = {
        readonly 'innerFunctions': pt.Dictionary<{
            readonly 'block': T.AsynchronousFunctionBlock<GPAnnotation>
        }>
        readonly 'returnExpression': T.AsynchronousExpression<GPAnnotation>
    }
    
    export namespace Implementation {
        
        export namespace implementations {
            
            export namespace D {
                
                export type _lconstructor<GPAnnotation> = boolean
                
                export type _ltype<GPAnnotation> = T.ImplementationType<GPAnnotation>
            }
            
            export type D<GPAnnotation> = {
                readonly 'constructor': boolean
                readonly 'type': T.ImplementationType<GPAnnotation>
            }
        }
        
        export type implementations<GPAnnotation> = pt.Dictionary<{
            readonly 'constructor': boolean
            readonly 'type': T.ImplementationType<GPAnnotation>
        }>
    }
    
    export type Implementation<GPAnnotation> = {
        readonly 'implementations': pt.Dictionary<{
            readonly 'constructor': boolean
            readonly 'type': T.ImplementationType<GPAnnotation>
        }>
    }
    
    export namespace ImplementationType {
        
        export namespace asynchronous__function {
            
            export type block<GPAnnotation> = T.AsynchronousFunctionBlock<GPAnnotation>
        }
        
        export type asynchronous__function<GPAnnotation> = {
            readonly 'block': T.AsynchronousFunctionBlock<GPAnnotation>
        }
        
        export namespace interface__initializer {
            
            export type block<GPAnnotation> = T.InterfaceInitializerBlock<GPAnnotation>
        }
        
        export type interface__initializer<GPAnnotation> = {
            readonly 'block': T.InterfaceInitializerBlock<GPAnnotation>
        }
        
        export namespace procedure {
            
            export type block<GPAnnotation> = T.ProcedureBlock<GPAnnotation>
        }
        
        export type procedure<GPAnnotation> = {
            readonly 'block': T.ProcedureBlock<GPAnnotation>
        }
        
        export namespace synchronous__function {
            
            export type block<GPAnnotation> = T.SynchronousFunctionBlock<GPAnnotation>
        }
        
        export type synchronous__function<GPAnnotation> = {
            readonly 'block': T.SynchronousFunctionBlock<GPAnnotation>
        }
    }
    
    export type ImplementationType<GPAnnotation> = 
        | ['asynchronous function', {
            readonly 'block': T.AsynchronousFunctionBlock<GPAnnotation>
        }]
        | ['interface initializer', {
            readonly 'block': T.InterfaceInitializerBlock<GPAnnotation>
        }]
        | ['procedure', {
            readonly 'block': T.ProcedureBlock<GPAnnotation>
        }]
        | ['synchronous function', {
            readonly 'block': T.SynchronousFunctionBlock<GPAnnotation>
        }]
    
    export namespace InterfaceInitializerBlock {
        
        export namespace call {
            
            export type _lfunction<GPAnnotation> = string
        }
        
        export type call<GPAnnotation> = {
            readonly 'function': string
        }
    }
    
    export type InterfaceInitializerBlock<GPAnnotation> = 
        | ['call', {
            readonly 'function': string
        }]
    
    export namespace ProcedureBlock {
        
        export namespace innerFunctions {
            
            export namespace D {
                
                export type _ltype<GPAnnotation> = T.ImplementationType<GPAnnotation>
            }
            
            export type D<GPAnnotation> = {
                readonly 'type': T.ImplementationType<GPAnnotation>
            }
        }
        
        export type innerFunctions<GPAnnotation> = pt.Dictionary<{
            readonly 'type': T.ImplementationType<GPAnnotation>
        }>
        
        export namespace statements {
            
            export namespace A {
                
                export namespace dependencyCall {
                    
                    export type callback<GPAnnotation> = T.ProcedureBlock<GPAnnotation>
                    
                    export type data<GPAnnotation> = string
                }
                
                export type dependencyCall<GPAnnotation> = {
                    readonly 'callback': T.ProcedureBlock<GPAnnotation>
                    readonly 'data': string
                }
                
                export namespace innerCallbackCall {
                    
                    export type data<GPAnnotation> = T.SynchronousExpression<GPAnnotation>
                    
                    export type innerCallback<GPAnnotation> = string
                    
                    export type _linterface<GPAnnotation> = string
                }
                
                export type innerCallbackCall<GPAnnotation> = {
                    readonly 'data': T.SynchronousExpression<GPAnnotation>
                    readonly 'innerCallback': string
                    readonly 'interface': string
                }
                
                export namespace interfaceCall {
                    
                    export namespace callback {
                        
                        export type O<GPAnnotation> = T.ProcedureBlock<GPAnnotation>
                    }
                    
                    export type callback<GPAnnotation> = [ false ] | [ true, T.ProcedureBlock<GPAnnotation>]
                    
                    export namespace child__path {
                        
                        export type A<GPAnnotation> = string
                    }
                    
                    export type child__path<GPAnnotation> = pt.Array<string>
                    
                    export namespace data {
                        
                        export type O<GPAnnotation> = T.SynchronousExpression<GPAnnotation>
                    }
                    
                    export type data<GPAnnotation> = [ false ] | [ true, T.SynchronousExpression<GPAnnotation>]
                }
                
                export type interfaceCall<GPAnnotation> = {
                    readonly 'callback': [ false ] | [ true, T.ProcedureBlock<GPAnnotation>]
                    readonly 'child path': pt.Array<string>
                    readonly 'data': [ false ] | [ true, T.SynchronousExpression<GPAnnotation>]
                }
                
                export namespace _lswitch {
                    
                    export namespace cases {
                        
                        export type D<GPAnnotation> = T.ProcedureBlock<GPAnnotation>
                    }
                    
                    export type cases<GPAnnotation> = pt.Dictionary<T.ProcedureBlock<GPAnnotation>>
                    
                    export namespace path {
                        
                        export type A<GPAnnotation> = string
                    }
                    
                    export type path<GPAnnotation> = pt.Array<string>
                }
                
                export type _lswitch<GPAnnotation> = {
                    readonly 'cases': pt.Dictionary<T.ProcedureBlock<GPAnnotation>>
                    readonly 'path': pt.Array<string>
                }
            }
            
            export type A<GPAnnotation> = 
                | ['dependencyCall', {
                    readonly 'callback': T.ProcedureBlock<GPAnnotation>
                    readonly 'data': string
                }]
                | ['innerCallbackCall', {
                    readonly 'data': T.SynchronousExpression<GPAnnotation>
                    readonly 'innerCallback': string
                    readonly 'interface': string
                }]
                | ['interfaceCall', {
                    readonly 'callback': [ false ] | [ true, T.ProcedureBlock<GPAnnotation>]
                    readonly 'child path': pt.Array<string>
                    readonly 'data': [ false ] | [ true, T.SynchronousExpression<GPAnnotation>]
                }]
                | ['switch', {
                    readonly 'cases': pt.Dictionary<T.ProcedureBlock<GPAnnotation>>
                    readonly 'path': pt.Array<string>
                }]
        }
        
        export type statements<GPAnnotation> = pt.Array<
            | ['dependencyCall', {
                readonly 'callback': T.ProcedureBlock<GPAnnotation>
                readonly 'data': string
            }]
            | ['innerCallbackCall', {
                readonly 'data': T.SynchronousExpression<GPAnnotation>
                readonly 'innerCallback': string
                readonly 'interface': string
            }]
            | ['interfaceCall', {
                readonly 'callback': [ false ] | [ true, T.ProcedureBlock<GPAnnotation>]
                readonly 'child path': pt.Array<string>
                readonly 'data': [ false ] | [ true, T.SynchronousExpression<GPAnnotation>]
            }]
            | ['switch', {
                readonly 'cases': pt.Dictionary<T.ProcedureBlock<GPAnnotation>>
                readonly 'path': pt.Array<string>
            }]
        >
    }
    
    export type ProcedureBlock<GPAnnotation> = {
        readonly 'innerFunctions': pt.Dictionary<{
            readonly 'type': T.ImplementationType<GPAnnotation>
        }>
        readonly 'statements': pt.Array<
            | ['dependencyCall', {
                readonly 'callback': T.ProcedureBlock<GPAnnotation>
                readonly 'data': string
            }]
            | ['innerCallbackCall', {
                readonly 'data': T.SynchronousExpression<GPAnnotation>
                readonly 'innerCallback': string
                readonly 'interface': string
            }]
            | ['interfaceCall', {
                readonly 'callback': [ false ] | [ true, T.ProcedureBlock<GPAnnotation>]
                readonly 'child path': pt.Array<string>
                readonly 'data': [ false ] | [ true, T.SynchronousExpression<GPAnnotation>]
            }]
            | ['switch', {
                readonly 'cases': pt.Dictionary<T.ProcedureBlock<GPAnnotation>>
                readonly 'path': pt.Array<string>
            }]
        >
    }
    
    export namespace States {
        
        export type D<GPAnnotation> = T.Type<GPAnnotation>
    }
    
    export type States<GPAnnotation> = pt.Dictionary<T.Type<GPAnnotation>>
    
    export namespace SynchronousExpression {
        
        export namespace call {
            
            export type _lfunction<GPAnnotation> = string
        }
        
        export type call<GPAnnotation> = {
            readonly 'function': string
        }
        
        export namespace contextChange {
            
            export type block<GPAnnotation> = T.SynchronousFunctionBlock<GPAnnotation>
            
            export type property<GPAnnotation> = string
        }
        
        export type contextChange<GPAnnotation> = {
            readonly 'block': T.SynchronousFunctionBlock<GPAnnotation>
            readonly 'property': string
        }
        
        export namespace groupInitializer {
            
            export namespace properties {
                
                export type D<GPAnnotation> = T.SynchronousExpression<GPAnnotation>
            }
            
            export type properties<GPAnnotation> = pt.Dictionary<T.SynchronousExpression<GPAnnotation>>
        }
        
        export type groupInitializer<GPAnnotation> = {
            readonly 'properties': pt.Dictionary<T.SynchronousExpression<GPAnnotation>>
        }
        
        export type implementMe<GPAnnotation> = string
        
        export namespace mapArray {
            
            export type block<GPAnnotation> = T.SynchronousFunctionBlock<GPAnnotation>
        }
        
        export type mapArray<GPAnnotation> = {
            readonly 'block': T.SynchronousFunctionBlock<GPAnnotation>
        }
        
        export namespace mapDictionary {
            
            export type block<GPAnnotation> = T.SynchronousFunctionBlock<GPAnnotation>
        }
        
        export type mapDictionary<GPAnnotation> = {
            readonly 'block': T.SynchronousFunctionBlock<GPAnnotation>
        }
        
        export namespace propertySelection {
            
            export type name<GPAnnotation> = string
        }
        
        export type propertySelection<GPAnnotation> = {
            readonly 'name': string
        }
        
        export type string__literal<GPAnnotation> = string
        
        export namespace _lswitch {
            
            export namespace cases {
                
                export type D<GPAnnotation> = T.SynchronousFunctionBlock<GPAnnotation>
            }
            
            export type cases<GPAnnotation> = pt.Dictionary<T.SynchronousFunctionBlock<GPAnnotation>>
        }
        
        export type _lswitch<GPAnnotation> = {
            readonly 'cases': pt.Dictionary<T.SynchronousFunctionBlock<GPAnnotation>>
        }
    }
    
    export type SynchronousExpression<GPAnnotation> = 
        | ['call', {
            readonly 'function': string
        }]
        | ['contextChange', {
            readonly 'block': T.SynchronousFunctionBlock<GPAnnotation>
            readonly 'property': string
        }]
        | ['groupInitializer', {
            readonly 'properties': pt.Dictionary<T.SynchronousExpression<GPAnnotation>>
        }]
        | ['implementMe', string]
        | ['mapArray', {
            readonly 'block': T.SynchronousFunctionBlock<GPAnnotation>
        }]
        | ['mapDictionary', {
            readonly 'block': T.SynchronousFunctionBlock<GPAnnotation>
        }]
        | ['propertySelection', {
            readonly 'name': string
        }]
        | ['string literal', string]
        | ['switch', {
            readonly 'cases': pt.Dictionary<T.SynchronousFunctionBlock<GPAnnotation>>
        }]
    
    export namespace SynchronousFunctionBlock {
        
        export namespace innerFunctions {
            
            export namespace D {
                
                export type block<GPAnnotation> = T.SynchronousFunctionBlock<GPAnnotation>
            }
            
            export type D<GPAnnotation> = {
                readonly 'block': T.SynchronousFunctionBlock<GPAnnotation>
            }
        }
        
        export type innerFunctions<GPAnnotation> = pt.Dictionary<{
            readonly 'block': T.SynchronousFunctionBlock<GPAnnotation>
        }>
        
        export type returnExpression<GPAnnotation> = T.SynchronousExpression<GPAnnotation>
    }
    
    export type SynchronousFunctionBlock<GPAnnotation> = {
        readonly 'innerFunctions': pt.Dictionary<{
            readonly 'block': T.SynchronousFunctionBlock<GPAnnotation>
        }>
        readonly 'returnExpression': T.SynchronousExpression<GPAnnotation>
    }
    
    export namespace Type {
        
        export type array<GPAnnotation> = T.Type<GPAnnotation>
        
        export namespace _lboolean {}
        
        export type _lboolean<GPAnnotation> = {}
        
        export type dictionary<GPAnnotation> = T.Type<GPAnnotation>
        
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
        
        export namespace _lnull {}
        
        export type _lnull<GPAnnotation> = {}
        
        export namespace _lnumber {}
        
        export type _lnumber<GPAnnotation> = {}
        
        export type optional<GPAnnotation> = T.Type<GPAnnotation>
        
        export type parameter<GPAnnotation> = string
        
        export type reference<GPAnnotation> = string
        
        export namespace _lstring {}
        
        export type _lstring<GPAnnotation> = {}
        
        export namespace taggedUnion {
            
            export type D<GPAnnotation> = T.Type<GPAnnotation>
        }
        
        export type taggedUnion<GPAnnotation> = pt.Dictionary<T.Type<GPAnnotation>>
    }
    
    export type Type<GPAnnotation> = 
        | ['array', T.Type<GPAnnotation>]
        | ['boolean', {}]
        | ['dictionary', T.Type<GPAnnotation>]
        | ['group', pt.Dictionary<{
            readonly 'type': T.Type<GPAnnotation>
        }>]
        | ['null', {}]
        | ['number', {}]
        | ['optional', T.Type<GPAnnotation>]
        | ['parameter', string]
        | ['reference', string]
        | ['string', {}]
        | ['taggedUnion', pt.Dictionary<T.Type<GPAnnotation>>]
}