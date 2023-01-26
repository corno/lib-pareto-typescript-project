import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace UCallbackBlock {
    
    export namespace PinnerCallbacks {
        
        export namespace D {}
        export type D = {
            readonly 'block': GCallbackBlock
        }
    }
    export type PinnerCallbacks = pt.Dictionary<PinnerCallbacks.D>
    
    export namespace Pstatements {
        
        export namespace A {
            
            export namespace OdependencyCall {}
            export type OdependencyCall = {
                readonly 'callback'?: GCallbackBlock
                readonly 'data'?: string
            }
            
            export namespace OinnerCallbackCall {}
            export type OinnerCallbackCall = {
                readonly 'data'?: GExpression
                readonly 'innerCallback': string
                readonly 'interface'?: string
            }
            
            export namespace OinterfaceCall {}
            export type OinterfaceCall = {
                readonly 'callback'?: GCallbackBlock
                readonly 'data'?: string
                readonly 'property': string
            }
            
            export namespace Oswitch {
                
                export namespace Pcases {}
                export type Pcases = pt.Dictionary<GCallbackBlock>
                
                export namespace Ppath {}
                export type Ppath = pt.Array<string>
            }
            export type Oswitch = {
                readonly 'cases': Oswitch.Pcases
                readonly 'path': Oswitch.Ppath
            }
        }
        export type A = 
            | ['dependencyCall', A.OdependencyCall]
            | ['innerCallbackCall', A.OinnerCallbackCall]
            | ['interfaceCall', A.OinterfaceCall]
            | ['switch', A.Oswitch]
    }
    export type Pstatements = pt.Array<Pstatements.A>
}
export type UCallbackBlock = {
    readonly 'innerCallbacks'?: UCallbackBlock.PinnerCallbacks
    readonly 'statements': UCallbackBlock.Pstatements
}
export type GCallbackBlock = UCallbackBlock

export namespace UExpression {
    
    export namespace Ocall {}
    export type Ocall = {
        readonly 'function': string
    }
    
    export namespace OcontextChange {}
    export type OcontextChange = {
        readonly 'block': GFunctionBlock
        readonly 'property': string
    }
    
    export namespace OgroupInitializer {
        
        export namespace Pproperties {}
        export type Pproperties = pt.Dictionary<GExpression>
    }
    export type OgroupInitializer = {
        readonly 'properties': OgroupInitializer.Pproperties
    }
    
    export namespace OmapArray {}
    export type OmapArray = {
        readonly 'block': GFunctionBlock
    }
    
    export namespace OmapDictionary {}
    export type OmapDictionary = {
        readonly 'block': GFunctionBlock
    }
    
    export namespace OpropertySelection {}
    export type OpropertySelection = {
        readonly 'name': string
    }
    
    export namespace Oswitch {
        
        export namespace Pcases {}
        export type Pcases = pt.Dictionary<GFunctionBlock>
    }
    export type Oswitch = {
        readonly 'cases': Oswitch.Pcases
    }
}
export type UExpression = 
    | ['call', UExpression.Ocall]
    | ['contextChange', UExpression.OcontextChange]
    | ['groupInitializer', UExpression.OgroupInitializer]
    | ['implementMe', string]
    | ['mapArray', UExpression.OmapArray]
    | ['mapDictionary', UExpression.OmapDictionary]
    | ['propertySelection', UExpression.OpropertySelection]
    | ['switch', UExpression.Oswitch]
export type GExpression = UExpression

export namespace UFunctionBlock {
    
    export namespace PinnerFunctions {
        
        export namespace D {}
        export type D = {
            readonly 'block': GFunctionBlock
        }
    }
    export type PinnerFunctions = pt.Dictionary<PinnerFunctions.D>
}
export type UFunctionBlock = {
    readonly 'innerFunctions'?: UFunctionBlock.PinnerFunctions
    readonly 'returnExpression': GExpression
}
export type GFunctionBlock = UFunctionBlock

export namespace UImplementation {
    
    export namespace Pimplementations {
        
        export namespace D {
            
            export namespace Ptype {
                
                export namespace Ocallback {}
                export type Ocallback = {
                    readonly 'block': GCallbackBlock
                }
                
                export namespace Ofunction {}
                export type Ofunction = {
                    readonly 'block': GFunctionBlock
                }
            }
            export type Ptype = 
                | ['callback', Ptype.Ocallback]
                | ['function', Ptype.Ofunction]
        }
        export type D = {
            readonly 'constructor': boolean
            readonly 'type': D.Ptype
        }
    }
    export type Pimplementations = pt.Dictionary<Pimplementations.D>
}
export type UImplementation = {
    readonly 'implementations': UImplementation.Pimplementations
}
export type GImplementation = UImplementation

export namespace UStates {}
export type UStates = pt.Dictionary<GType>
export type GStates = UStates

export namespace UType {
    
    export namespace Ogroup {
        
        export namespace D {}
        export type D = {
            readonly 'type': GType
        }
    }
    export type Ogroup = pt.Dictionary<Ogroup.D>
    
    export namespace OtaggedUnion {}
    export type OtaggedUnion = pt.Dictionary<GType>
}
export type UType = 
    | ['array', GType]
    | ['boolean', null]
    | ['dictionary', GType]
    | ['group', UType.Ogroup]
    | ['null', null]
    | ['number', null]
    | ['optional', GType]
    | ['parameter', string]
    | ['reference', string]
    | ['string', null]
    | ['taggedUnion', UType.OtaggedUnion]
export type GType = UType