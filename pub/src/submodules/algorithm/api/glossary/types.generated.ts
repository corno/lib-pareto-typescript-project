import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace T {
    
    export namespace AsynchronousExpression {
        
        export namespace call {
            
            export type _lfunction = string
        }
        
        export type call = {
            readonly 'function': string
        }
    }
    
    export type AsynchronousExpression = 
        | ['call', {
            readonly 'function': string
        }]
    
    export namespace AsynchronousFunctionBlock {
        
        export namespace innerFunctions {
            
            export namespace D {
                
                export type block = T.AsynchronousFunctionBlock
            }
            
            export type D = {
                readonly 'block': T.AsynchronousFunctionBlock
            }
        }
        
        export type innerFunctions = pt.Dictionary<{
            readonly 'block': T.AsynchronousFunctionBlock
        }>
        
        export type returnExpression = T.AsynchronousExpression
    }
    
    export type AsynchronousFunctionBlock = {
        readonly 'innerFunctions'?: pt.Dictionary<{
            readonly 'block': T.AsynchronousFunctionBlock
        }>
        readonly 'returnExpression': T.AsynchronousExpression
    }
    
    export namespace Implementation {
        
        export namespace implementations {
            
            export namespace D {
                
                export type _lconstructor = boolean
                
                export type _ltype = T.ImplementationType
            }
            
            export type D = {
                readonly 'constructor': boolean
                readonly 'type': T.ImplementationType
            }
        }
        
        export type implementations = pt.Dictionary<{
            readonly 'constructor': boolean
            readonly 'type': T.ImplementationType
        }>
    }
    
    export type Implementation = {
        readonly 'implementations': pt.Dictionary<{
            readonly 'constructor': boolean
            readonly 'type': T.ImplementationType
        }>
    }
    
    export namespace ImplementationType {
        
        export namespace asynchronous__function {
            
            export type block = T.AsynchronousFunctionBlock
        }
        
        export type asynchronous__function = {
            readonly 'block': T.AsynchronousFunctionBlock
        }
        
        export namespace interface__initializer {
            
            export type block = T.InterfaceInitializerBlock
        }
        
        export type interface__initializer = {
            readonly 'block': T.InterfaceInitializerBlock
        }
        
        export namespace procedure {
            
            export type block = T.ProcedureBlock
        }
        
        export type procedure = {
            readonly 'block': T.ProcedureBlock
        }
        
        export namespace synchronous__function {
            
            export type block = T.SynchronousFunctionBlock
        }
        
        export type synchronous__function = {
            readonly 'block': T.SynchronousFunctionBlock
        }
    }
    
    export type ImplementationType = 
        | ['asynchronous function', {
            readonly 'block': T.AsynchronousFunctionBlock
        }]
        | ['interface initializer', {
            readonly 'block': T.InterfaceInitializerBlock
        }]
        | ['procedure', {
            readonly 'block': T.ProcedureBlock
        }]
        | ['synchronous function', {
            readonly 'block': T.SynchronousFunctionBlock
        }]
    
    export namespace InterfaceInitializerBlock {
        
        export namespace call {
            
            export type _lfunction = string
        }
        
        export type call = {
            readonly 'function': string
        }
    }
    
    export type InterfaceInitializerBlock = 
        | ['call', {
            readonly 'function': string
        }]
    
    export namespace ProcedureBlock {
        
        export namespace innerFunctions {
            
            export namespace D {
                
                export type _ltype = T.ImplementationType
            }
            
            export type D = {
                readonly 'type': T.ImplementationType
            }
        }
        
        export type innerFunctions = pt.Dictionary<{
            readonly 'type': T.ImplementationType
        }>
        
        export namespace statements {
            
            export namespace A {
                
                export namespace dependencyCall {
                    
                    export type callback = T.ProcedureBlock
                    
                    export type data = string
                }
                
                export type dependencyCall = {
                    readonly 'callback'?: T.ProcedureBlock
                    readonly 'data'?: string
                }
                
                export namespace innerCallbackCall {
                    
                    export type data = T.SynchronousExpression
                    
                    export type innerCallback = string
                    
                    export type _linterface = string
                }
                
                export type innerCallbackCall = {
                    readonly 'data'?: T.SynchronousExpression
                    readonly 'innerCallback': string
                    readonly 'interface'?: string
                }
                
                export namespace interfaceCall {
                    
                    export namespace callback {
                        
                        export namespace not__set {}
                        
                        export type not__set = {}
                        
                        export type _lset = T.ProcedureBlock
                    }
                    
                    export type callback = 
                        | ['not set', {}]
                        | ['set', T.ProcedureBlock]
                    
                    export namespace child__path {
                        
                        export type A = string
                    }
                    
                    export type child__path = pt.Array<string>
                    
                    export namespace data {
                        
                        export namespace not__set {}
                        
                        export type not__set = {}
                        
                        export type _lset = T.SynchronousExpression
                    }
                    
                    export type data = 
                        | ['not set', {}]
                        | ['set', T.SynchronousExpression]
                }
                
                export type interfaceCall = {
                    readonly 'callback': 
                        | ['not set', {}]
                        | ['set', T.ProcedureBlock]
                    readonly 'child path': pt.Array<string>
                    readonly 'data': 
                        | ['not set', {}]
                        | ['set', T.SynchronousExpression]
                }
                
                export namespace _lswitch {
                    
                    export namespace cases {
                        
                        export type D = T.ProcedureBlock
                    }
                    
                    export type cases = pt.Dictionary<T.ProcedureBlock>
                    
                    export namespace path {
                        
                        export type A = string
                    }
                    
                    export type path = pt.Array<string>
                }
                
                export type _lswitch = {
                    readonly 'cases': pt.Dictionary<T.ProcedureBlock>
                    readonly 'path': pt.Array<string>
                }
            }
            
            export type A = 
                | ['dependencyCall', {
                    readonly 'callback'?: T.ProcedureBlock
                    readonly 'data'?: string
                }]
                | ['innerCallbackCall', {
                    readonly 'data'?: T.SynchronousExpression
                    readonly 'innerCallback': string
                    readonly 'interface'?: string
                }]
                | ['interfaceCall', {
                    readonly 'callback': 
                        | ['not set', {}]
                        | ['set', T.ProcedureBlock]
                    readonly 'child path': pt.Array<string>
                    readonly 'data': 
                        | ['not set', {}]
                        | ['set', T.SynchronousExpression]
                }]
                | ['switch', {
                    readonly 'cases': pt.Dictionary<T.ProcedureBlock>
                    readonly 'path': pt.Array<string>
                }]
        }
        
        export type statements = pt.Array<
            | ['dependencyCall', {
                readonly 'callback'?: T.ProcedureBlock
                readonly 'data'?: string
            }]
            | ['innerCallbackCall', {
                readonly 'data'?: T.SynchronousExpression
                readonly 'innerCallback': string
                readonly 'interface'?: string
            }]
            | ['interfaceCall', {
                readonly 'callback': 
                    | ['not set', {}]
                    | ['set', T.ProcedureBlock]
                readonly 'child path': pt.Array<string>
                readonly 'data': 
                    | ['not set', {}]
                    | ['set', T.SynchronousExpression]
            }]
            | ['switch', {
                readonly 'cases': pt.Dictionary<T.ProcedureBlock>
                readonly 'path': pt.Array<string>
            }]
        >
    }
    
    export type ProcedureBlock = {
        readonly 'innerFunctions'?: pt.Dictionary<{
            readonly 'type': T.ImplementationType
        }>
        readonly 'statements': pt.Array<
            | ['dependencyCall', {
                readonly 'callback'?: T.ProcedureBlock
                readonly 'data'?: string
            }]
            | ['innerCallbackCall', {
                readonly 'data'?: T.SynchronousExpression
                readonly 'innerCallback': string
                readonly 'interface'?: string
            }]
            | ['interfaceCall', {
                readonly 'callback': 
                    | ['not set', {}]
                    | ['set', T.ProcedureBlock]
                readonly 'child path': pt.Array<string>
                readonly 'data': 
                    | ['not set', {}]
                    | ['set', T.SynchronousExpression]
            }]
            | ['switch', {
                readonly 'cases': pt.Dictionary<T.ProcedureBlock>
                readonly 'path': pt.Array<string>
            }]
        >
    }
    
    export namespace States {
        
        export type D = T.Type
    }
    
    export type States = pt.Dictionary<T.Type>
    
    export namespace SynchronousExpression {
        
        export namespace call {
            
            export type _lfunction = string
        }
        
        export type call = {
            readonly 'function': string
        }
        
        export namespace contextChange {
            
            export type block = T.SynchronousFunctionBlock
            
            export type property = string
        }
        
        export type contextChange = {
            readonly 'block': T.SynchronousFunctionBlock
            readonly 'property': string
        }
        
        export namespace groupInitializer {
            
            export namespace properties {
                
                export type D = T.SynchronousExpression
            }
            
            export type properties = pt.Dictionary<T.SynchronousExpression>
        }
        
        export type groupInitializer = {
            readonly 'properties': pt.Dictionary<T.SynchronousExpression>
        }
        
        export type implementMe = string
        
        export namespace mapArray {
            
            export type block = T.SynchronousFunctionBlock
        }
        
        export type mapArray = {
            readonly 'block': T.SynchronousFunctionBlock
        }
        
        export namespace mapDictionary {
            
            export type block = T.SynchronousFunctionBlock
        }
        
        export type mapDictionary = {
            readonly 'block': T.SynchronousFunctionBlock
        }
        
        export namespace propertySelection {
            
            export type name = string
        }
        
        export type propertySelection = {
            readonly 'name': string
        }
        
        export type string__literal = string
        
        export namespace _lswitch {
            
            export namespace cases {
                
                export type D = T.SynchronousFunctionBlock
            }
            
            export type cases = pt.Dictionary<T.SynchronousFunctionBlock>
        }
        
        export type _lswitch = {
            readonly 'cases': pt.Dictionary<T.SynchronousFunctionBlock>
        }
    }
    
    export type SynchronousExpression = 
        | ['call', {
            readonly 'function': string
        }]
        | ['contextChange', {
            readonly 'block': T.SynchronousFunctionBlock
            readonly 'property': string
        }]
        | ['groupInitializer', {
            readonly 'properties': pt.Dictionary<T.SynchronousExpression>
        }]
        | ['implementMe', string]
        | ['mapArray', {
            readonly 'block': T.SynchronousFunctionBlock
        }]
        | ['mapDictionary', {
            readonly 'block': T.SynchronousFunctionBlock
        }]
        | ['propertySelection', {
            readonly 'name': string
        }]
        | ['string literal', string]
        | ['switch', {
            readonly 'cases': pt.Dictionary<T.SynchronousFunctionBlock>
        }]
    
    export namespace SynchronousFunctionBlock {
        
        export namespace innerFunctions {
            
            export namespace D {
                
                export type block = T.SynchronousFunctionBlock
            }
            
            export type D = {
                readonly 'block': T.SynchronousFunctionBlock
            }
        }
        
        export type innerFunctions = pt.Dictionary<{
            readonly 'block': T.SynchronousFunctionBlock
        }>
        
        export type returnExpression = T.SynchronousExpression
    }
    
    export type SynchronousFunctionBlock = {
        readonly 'innerFunctions'?: pt.Dictionary<{
            readonly 'block': T.SynchronousFunctionBlock
        }>
        readonly 'returnExpression': T.SynchronousExpression
    }
    
    export namespace Type {
        
        export type array = T.Type
        
        export namespace _lboolean {}
        
        export type _lboolean = {}
        
        export type dictionary = T.Type
        
        export namespace group {
            
            export namespace D {
                
                export type _ltype = T.Type
            }
            
            export type D = {
                readonly 'type': T.Type
            }
        }
        
        export type group = pt.Dictionary<{
            readonly 'type': T.Type
        }>
        
        export namespace _lnull {}
        
        export type _lnull = {}
        
        export namespace _lnumber {}
        
        export type _lnumber = {}
        
        export type optional = T.Type
        
        export type parameter = string
        
        export type reference = string
        
        export namespace _lstring {}
        
        export type _lstring = {}
        
        export namespace taggedUnion {
            
            export type D = T.Type
        }
        
        export type taggedUnion = pt.Dictionary<T.Type>
    }
    
    export type Type = 
        | ['array', T.Type]
        | ['boolean', {}]
        | ['dictionary', T.Type]
        | ['group', pt.Dictionary<{
            readonly 'type': T.Type
        }>]
        | ['null', {}]
        | ['number', {}]
        | ['optional', T.Type]
        | ['parameter', string]
        | ['reference', string]
        | ['string', {}]
        | ['taggedUnion', pt.Dictionary<T.Type>]
}