import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace GCallbackBlock {
    
    export namespace PinnerCallbacks {
        
        export namespace D {}
        export type D = {
            readonly 'block': UCallbackBlock
        }
    }
    export type PinnerCallbacks = pt.Dictionary<PinnerCallbacks.D>
    
    export namespace Pstatements {
        
        export namespace A {
            
            export namespace OdependencyCall {}
            export type OdependencyCall = {
                readonly 'callback'?: UCallbackBlock
                readonly 'data'?: string
            }
            
            export namespace OinnerCallbackCall {}
            export type OinnerCallbackCall = {
                readonly 'data'?: UExpression
                readonly 'innerCallback': string
                readonly 'interface'?: string
            }
            
            export namespace OinterfaceCall {}
            export type OinterfaceCall = {
                readonly 'callback'?: UCallbackBlock
                readonly 'data'?: string
                readonly 'property': string
            }
            
            export namespace Oswitch {
                
                export namespace Pcases {}
                export type Pcases = pt.Dictionary<UCallbackBlock>
                
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
export type GCallbackBlock = {
    readonly 'innerCallbacks'?: GCallbackBlock.PinnerCallbacks
    readonly 'statements': GCallbackBlock.Pstatements
}
export type UCallbackBlock = GCallbackBlock

export namespace GExpression {
    
    export namespace Ocall {}
    export type Ocall = {
        readonly 'function': string
    }
    
    export namespace OcontextChange {}
    export type OcontextChange = {
        readonly 'block': UFunctionBlock
        readonly 'property': string
    }
    
    export namespace OgroupInitializer {
        
        export namespace Pproperties {}
        export type Pproperties = pt.Dictionary<UExpression>
    }
    export type OgroupInitializer = {
        readonly 'properties': OgroupInitializer.Pproperties
    }
    
    export namespace OmapArray {}
    export type OmapArray = {
        readonly 'block': UFunctionBlock
    }
    
    export namespace OmapDictionary {}
    export type OmapDictionary = {
        readonly 'block': UFunctionBlock
    }
    
    export namespace OpropertySelection {}
    export type OpropertySelection = {
        readonly 'name': string
    }
    
    export namespace Oswitch {
        
        export namespace Pcases {}
        export type Pcases = pt.Dictionary<UFunctionBlock>
    }
    export type Oswitch = {
        readonly 'cases': Oswitch.Pcases
    }
}
export type GExpression = 
    | ['call', GExpression.Ocall]
    | ['contextChange', GExpression.OcontextChange]
    | ['groupInitializer', GExpression.OgroupInitializer]
    | ['implementMe', string]
    | ['mapArray', GExpression.OmapArray]
    | ['mapDictionary', GExpression.OmapDictionary]
    | ['propertySelection', GExpression.OpropertySelection]
    | ['switch', GExpression.Oswitch]
export type UExpression = GExpression

export namespace GFunctionBlock {
    
    export namespace PinnerFunctions {
        
        export namespace D {}
        export type D = {
            readonly 'block': UFunctionBlock
        }
    }
    export type PinnerFunctions = pt.Dictionary<PinnerFunctions.D>
}
export type GFunctionBlock = {
    readonly 'innerFunctions'?: GFunctionBlock.PinnerFunctions
    readonly 'returnExpression': UExpression
}
export type UFunctionBlock = GFunctionBlock

export namespace GImplementation {
    
    export namespace Pimplementations {
        
        export namespace D {
            
            export namespace Ptype {
                
                export namespace Ocallback {}
                export type Ocallback = {
                    readonly 'block': UCallbackBlock
                }
                
                export namespace Ofunction {}
                export type Ofunction = {
                    readonly 'block': UFunctionBlock
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
export type GImplementation = {
    readonly 'implementations': GImplementation.Pimplementations
}
export type UImplementation = GImplementation

export namespace GStates {}
export type GStates = pt.Dictionary<UType>
export type UStates = GStates

export namespace GType {
    
    export namespace Ogroup {
        
        export namespace D {}
        export type D = {
            readonly 'type': UType
        }
    }
    export type Ogroup = pt.Dictionary<Ogroup.D>
    
    export namespace OtaggedUnion {}
    export type OtaggedUnion = pt.Dictionary<UType>
}
export type GType = 
    | ['array', UType]
    | ['boolean', null]
    | ['dictionary', UType]
    | ['group', GType.Ogroup]
    | ['null', null]
    | ['number', null]
    | ['optional', UType]
    | ['parameter', string]
    | ['reference', string]
    | ['string', null]
    | ['taggedUnion', GType.OtaggedUnion]
export type UType = GType