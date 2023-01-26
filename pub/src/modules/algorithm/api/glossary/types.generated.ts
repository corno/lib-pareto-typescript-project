import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace GCallbackBlock {
    
    export namespace G {
        
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
    export type G = {
        readonly 'innerCallbacks'?: G.PinnerCallbacks
        readonly 'statements': G.Pstatements
    }
}
export type GCallbackBlock = GCallbackBlock.G

export namespace GExpression {
    
    export namespace G {
        
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
    export type G = 
        | ['call', G.Ocall]
        | ['contextChange', G.OcontextChange]
        | ['groupInitializer', G.OgroupInitializer]
        | ['implementMe', string]
        | ['mapArray', G.OmapArray]
        | ['mapDictionary', G.OmapDictionary]
        | ['propertySelection', G.OpropertySelection]
        | ['switch', G.Oswitch]
}
export type GExpression = GExpression.G

export namespace GFunctionBlock {
    
    export namespace G {
        
        export namespace PinnerFunctions {
            
            export namespace D {}
            export type D = {
                readonly 'block': GFunctionBlock
            }
        }
        export type PinnerFunctions = pt.Dictionary<PinnerFunctions.D>
    }
    export type G = {
        readonly 'innerFunctions'?: G.PinnerFunctions
        readonly 'returnExpression': GExpression
    }
}
export type GFunctionBlock = GFunctionBlock.G

export namespace GImplementation {
    
    export namespace G {
        
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
    export type G = {
        readonly 'implementations': G.Pimplementations
    }
}
export type GImplementation = GImplementation.G

export namespace GStates {
    
    export namespace G {}
    export type G = pt.Dictionary<GType>
}
export type GStates = GStates.G

export namespace GType {
    
    export namespace G {
        
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
    export type G = 
        | ['array', GType]
        | ['boolean', null]
        | ['dictionary', GType]
        | ['group', G.Ogroup]
        | ['null', null]
        | ['number', null]
        | ['optional', GType]
        | ['parameter', string]
        | ['reference', string]
        | ['string', null]
        | ['taggedUnion', G.OtaggedUnion]
}
export type GType = GType.G