import * as pt from 'pareto-core-types'

import * as g_fp from "lib-fountain-pen"

export namespace N {}

export namespace T {
    
    export namespace AsynchronousExpression {
        
        export namespace call {
            
            export type _lfunction<GAnnotation> = string
        }
        
        export type call<GAnnotation> = {
            readonly 'function': string
        }
    }
    
    export type AsynchronousExpression<GAnnotation> = 
        | ['call', {
            readonly 'function': string
        }]
    
    export namespace AsynchronousFunctionBlock {
        
        export namespace innerFunctions {
            
            export namespace D {
                
                export type block<GAnnotation> = T.AsynchronousFunctionBlock<GAnnotation>
            }
            
            export type D<GAnnotation> = {
                readonly 'block': T.AsynchronousFunctionBlock<GAnnotation>
            }
        }
        
        export type innerFunctions<GAnnotation> = pt.Dictionary<{
            readonly 'block': T.AsynchronousFunctionBlock<GAnnotation>
        }>
        
        export type returnExpression<GAnnotation> = T.AsynchronousExpression<GAnnotation>
    }
    
    export type AsynchronousFunctionBlock<GAnnotation> = {
        readonly 'innerFunctions': pt.Dictionary<{
            readonly 'block': T.AsynchronousFunctionBlock<GAnnotation>
        }>
        readonly 'returnExpression': T.AsynchronousExpression<GAnnotation>
    }
    
    export namespace Implementation {
        
        export namespace implementations {
            
            export namespace D {
                
                export type _lconstructor<GAnnotation> = boolean
                
                export type _ltype<GAnnotation> = T.ImplementationType<GAnnotation>
            }
            
            export type D<GAnnotation> = {
                readonly 'constructor': boolean
                readonly 'type': T.ImplementationType<GAnnotation>
            }
        }
        
        export type implementations<GAnnotation> = pt.Dictionary<{
            readonly 'constructor': boolean
            readonly 'type': T.ImplementationType<GAnnotation>
        }>
    }
    
    export type Implementation<GAnnotation> = {
        readonly 'implementations': pt.Dictionary<{
            readonly 'constructor': boolean
            readonly 'type': T.ImplementationType<GAnnotation>
        }>
    }
    
    export namespace ImplementationType {
        
        export namespace asynchronous__function {
            
            export type block<GAnnotation> = T.AsynchronousFunctionBlock<GAnnotation>
        }
        
        export type asynchronous__function<GAnnotation> = {
            readonly 'block': T.AsynchronousFunctionBlock<GAnnotation>
        }
        
        export namespace interface__initializer {
            
            export type block<GAnnotation> = T.InterfaceInitializerBlock<GAnnotation>
        }
        
        export type interface__initializer<GAnnotation> = {
            readonly 'block': T.InterfaceInitializerBlock<GAnnotation>
        }
        
        export namespace procedure {
            
            export type block<GAnnotation> = T.ProcedureBlock<GAnnotation>
        }
        
        export type procedure<GAnnotation> = {
            readonly 'block': T.ProcedureBlock<GAnnotation>
        }
        
        export namespace synchronous__function {
            
            export type block<GAnnotation> = T.SynchronousFunctionBlock<GAnnotation>
        }
        
        export type synchronous__function<GAnnotation> = {
            readonly 'block': T.SynchronousFunctionBlock<GAnnotation>
        }
    }
    
    export type ImplementationType<GAnnotation> = 
        | ['asynchronous function', {
            readonly 'block': T.AsynchronousFunctionBlock<GAnnotation>
        }]
        | ['interface initializer', {
            readonly 'block': T.InterfaceInitializerBlock<GAnnotation>
        }]
        | ['procedure', {
            readonly 'block': T.ProcedureBlock<GAnnotation>
        }]
        | ['synchronous function', {
            readonly 'block': T.SynchronousFunctionBlock<GAnnotation>
        }]
    
    export namespace InterfaceInitializerBlock {
        
        export namespace call {
            
            export type _lfunction<GAnnotation> = string
        }
        
        export type call<GAnnotation> = {
            readonly 'function': string
        }
    }
    
    export type InterfaceInitializerBlock<GAnnotation> = 
        | ['call', {
            readonly 'function': string
        }]
    
    export namespace ProcedureBlock {
        
        export namespace innerFunctions {
            
            export namespace D {
                
                export type _ltype<GAnnotation> = T.ImplementationType<GAnnotation>
            }
            
            export type D<GAnnotation> = {
                readonly 'type': T.ImplementationType<GAnnotation>
            }
        }
        
        export type innerFunctions<GAnnotation> = pt.Dictionary<{
            readonly 'type': T.ImplementationType<GAnnotation>
        }>
        
        export namespace statements {
            
            export namespace A {
                
                export namespace dependencyCall {
                    
                    export type callback<GAnnotation> = T.ProcedureBlock<GAnnotation>
                    
                    export type data<GAnnotation> = string
                }
                
                export type dependencyCall<GAnnotation> = {
                    readonly 'callback': T.ProcedureBlock<GAnnotation>
                    readonly 'data': string
                }
                
                export namespace innerCallbackCall {
                    
                    export type data<GAnnotation> = T.SynchronousExpression<GAnnotation>
                    
                    export type innerCallback<GAnnotation> = string
                    
                    export type _linterface<GAnnotation> = string
                }
                
                export type innerCallbackCall<GAnnotation> = {
                    readonly 'data': T.SynchronousExpression<GAnnotation>
                    readonly 'innerCallback': string
                    readonly 'interface': string
                }
                
                export namespace interfaceCall {
                    
                    export namespace callback {
                        
                        export type O<GAnnotation> = T.ProcedureBlock<GAnnotation>
                    }
                    
                    export type callback<GAnnotation> = [ false ] | [ true, T.ProcedureBlock<GAnnotation>]
                    
                    export namespace child__path {
                        
                        export type A<GAnnotation> = string
                    }
                    
                    export type child__path<GAnnotation> = pt.Array<string>
                    
                    export namespace data {
                        
                        export type O<GAnnotation> = T.SynchronousExpression<GAnnotation>
                    }
                    
                    export type data<GAnnotation> = [ false ] | [ true, T.SynchronousExpression<GAnnotation>]
                }
                
                export type interfaceCall<GAnnotation> = {
                    readonly 'callback': [ false ] | [ true, T.ProcedureBlock<GAnnotation>]
                    readonly 'child path': pt.Array<string>
                    readonly 'data': [ false ] | [ true, T.SynchronousExpression<GAnnotation>]
                }
                
                export namespace _lswitch {
                    
                    export namespace cases {
                        
                        export type D<GAnnotation> = T.ProcedureBlock<GAnnotation>
                    }
                    
                    export type cases<GAnnotation> = pt.Dictionary<T.ProcedureBlock<GAnnotation>>
                    
                    export namespace path {
                        
                        export type A<GAnnotation> = string
                    }
                    
                    export type path<GAnnotation> = pt.Array<string>
                }
                
                export type _lswitch<GAnnotation> = {
                    readonly 'cases': pt.Dictionary<T.ProcedureBlock<GAnnotation>>
                    readonly 'path': pt.Array<string>
                }
            }
            
            export type A<GAnnotation> = 
                | ['dependencyCall', {
                    readonly 'callback': T.ProcedureBlock<GAnnotation>
                    readonly 'data': string
                }]
                | ['innerCallbackCall', {
                    readonly 'data': T.SynchronousExpression<GAnnotation>
                    readonly 'innerCallback': string
                    readonly 'interface': string
                }]
                | ['interfaceCall', {
                    readonly 'callback': [ false ] | [ true, T.ProcedureBlock<GAnnotation>]
                    readonly 'child path': pt.Array<string>
                    readonly 'data': [ false ] | [ true, T.SynchronousExpression<GAnnotation>]
                }]
                | ['switch', {
                    readonly 'cases': pt.Dictionary<T.ProcedureBlock<GAnnotation>>
                    readonly 'path': pt.Array<string>
                }]
        }
        
        export type statements<GAnnotation> = pt.Array<
            | ['dependencyCall', {
                readonly 'callback': T.ProcedureBlock<GAnnotation>
                readonly 'data': string
            }]
            | ['innerCallbackCall', {
                readonly 'data': T.SynchronousExpression<GAnnotation>
                readonly 'innerCallback': string
                readonly 'interface': string
            }]
            | ['interfaceCall', {
                readonly 'callback': [ false ] | [ true, T.ProcedureBlock<GAnnotation>]
                readonly 'child path': pt.Array<string>
                readonly 'data': [ false ] | [ true, T.SynchronousExpression<GAnnotation>]
            }]
            | ['switch', {
                readonly 'cases': pt.Dictionary<T.ProcedureBlock<GAnnotation>>
                readonly 'path': pt.Array<string>
            }]
        >
    }
    
    export type ProcedureBlock<GAnnotation> = {
        readonly 'innerFunctions': pt.Dictionary<{
            readonly 'type': T.ImplementationType<GAnnotation>
        }>
        readonly 'statements': pt.Array<
            | ['dependencyCall', {
                readonly 'callback': T.ProcedureBlock<GAnnotation>
                readonly 'data': string
            }]
            | ['innerCallbackCall', {
                readonly 'data': T.SynchronousExpression<GAnnotation>
                readonly 'innerCallback': string
                readonly 'interface': string
            }]
            | ['interfaceCall', {
                readonly 'callback': [ false ] | [ true, T.ProcedureBlock<GAnnotation>]
                readonly 'child path': pt.Array<string>
                readonly 'data': [ false ] | [ true, T.SynchronousExpression<GAnnotation>]
            }]
            | ['switch', {
                readonly 'cases': pt.Dictionary<T.ProcedureBlock<GAnnotation>>
                readonly 'path': pt.Array<string>
            }]
        >
    }
    
    export namespace States {
        
        export type D<GAnnotation> = T.Type<GAnnotation>
    }
    
    export type States<GAnnotation> = pt.Dictionary<T.Type<GAnnotation>>
    
    export namespace SynchronousExpression {
        
        export namespace call {
            
            export type _lfunction<GAnnotation> = string
        }
        
        export type call<GAnnotation> = {
            readonly 'function': string
        }
        
        export namespace contextChange {
            
            export type block<GAnnotation> = T.SynchronousFunctionBlock<GAnnotation>
            
            export type property<GAnnotation> = string
        }
        
        export type contextChange<GAnnotation> = {
            readonly 'block': T.SynchronousFunctionBlock<GAnnotation>
            readonly 'property': string
        }
        
        export namespace groupInitializer {
            
            export namespace properties {
                
                export type D<GAnnotation> = T.SynchronousExpression<GAnnotation>
            }
            
            export type properties<GAnnotation> = pt.Dictionary<T.SynchronousExpression<GAnnotation>>
        }
        
        export type groupInitializer<GAnnotation> = {
            readonly 'properties': pt.Dictionary<T.SynchronousExpression<GAnnotation>>
        }
        
        export type implementMe<GAnnotation> = string
        
        export namespace mapArray {
            
            export type block<GAnnotation> = T.SynchronousFunctionBlock<GAnnotation>
        }
        
        export type mapArray<GAnnotation> = {
            readonly 'block': T.SynchronousFunctionBlock<GAnnotation>
        }
        
        export namespace mapDictionary {
            
            export type block<GAnnotation> = T.SynchronousFunctionBlock<GAnnotation>
        }
        
        export type mapDictionary<GAnnotation> = {
            readonly 'block': T.SynchronousFunctionBlock<GAnnotation>
        }
        
        export namespace propertySelection {
            
            export type name<GAnnotation> = string
        }
        
        export type propertySelection<GAnnotation> = {
            readonly 'name': string
        }
        
        export type string__literal<GAnnotation> = string
        
        export namespace _lswitch {
            
            export namespace cases {
                
                export type D<GAnnotation> = T.SynchronousFunctionBlock<GAnnotation>
            }
            
            export type cases<GAnnotation> = pt.Dictionary<T.SynchronousFunctionBlock<GAnnotation>>
        }
        
        export type _lswitch<GAnnotation> = {
            readonly 'cases': pt.Dictionary<T.SynchronousFunctionBlock<GAnnotation>>
        }
    }
    
    export type SynchronousExpression<GAnnotation> = 
        | ['call', {
            readonly 'function': string
        }]
        | ['contextChange', {
            readonly 'block': T.SynchronousFunctionBlock<GAnnotation>
            readonly 'property': string
        }]
        | ['groupInitializer', {
            readonly 'properties': pt.Dictionary<T.SynchronousExpression<GAnnotation>>
        }]
        | ['implementMe', string]
        | ['mapArray', {
            readonly 'block': T.SynchronousFunctionBlock<GAnnotation>
        }]
        | ['mapDictionary', {
            readonly 'block': T.SynchronousFunctionBlock<GAnnotation>
        }]
        | ['propertySelection', {
            readonly 'name': string
        }]
        | ['string literal', string]
        | ['switch', {
            readonly 'cases': pt.Dictionary<T.SynchronousFunctionBlock<GAnnotation>>
        }]
    
    export namespace SynchronousFunctionBlock {
        
        export namespace innerFunctions {
            
            export namespace D {
                
                export type block<GAnnotation> = T.SynchronousFunctionBlock<GAnnotation>
            }
            
            export type D<GAnnotation> = {
                readonly 'block': T.SynchronousFunctionBlock<GAnnotation>
            }
        }
        
        export type innerFunctions<GAnnotation> = pt.Dictionary<{
            readonly 'block': T.SynchronousFunctionBlock<GAnnotation>
        }>
        
        export type returnExpression<GAnnotation> = T.SynchronousExpression<GAnnotation>
    }
    
    export type SynchronousFunctionBlock<GAnnotation> = {
        readonly 'innerFunctions': pt.Dictionary<{
            readonly 'block': T.SynchronousFunctionBlock<GAnnotation>
        }>
        readonly 'returnExpression': T.SynchronousExpression<GAnnotation>
    }
    
    export namespace Type {
        
        export type array<GAnnotation> = T.Type<GAnnotation>
        
        export namespace _lboolean {}
        
        export type _lboolean<GAnnotation> = null
        
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
        
        export namespace _lnull {}
        
        export type _lnull<GAnnotation> = null
        
        export namespace _lnumber {}
        
        export type _lnumber<GAnnotation> = null
        
        export type optional<GAnnotation> = T.Type<GAnnotation>
        
        export type parameter<GAnnotation> = string
        
        export type reference<GAnnotation> = string
        
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
        | ['dictionary', T.Type<GAnnotation>]
        | ['group', pt.Dictionary<{
            readonly 'type': T.Type<GAnnotation>
        }>]
        | ['null', null]
        | ['number', null]
        | ['optional', T.Type<GAnnotation>]
        | ['parameter', string]
        | ['reference', string]
        | ['string', null]
        | ['taggedUnion', pt.Dictionary<T.Type<GAnnotation>>]
}