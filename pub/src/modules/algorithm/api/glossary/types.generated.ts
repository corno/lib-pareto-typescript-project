import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace GCallbackBlock {
    
    export namespace G {
        
        export namespace PinnerCallbacks {
            
            export namespace D {
                export type /*FIXME REMOVE*/$ = {
                    readonly 'block': GCallbackBlock
                }
            }
            export type D = D.$
            export type /*FIXME REMOVE*/$ = pt.Dictionary<D>
        }
        export type PinnerCallbacks = PinnerCallbacks.$
        
        export namespace Pstatements {
            
            export namespace A {
                
                export namespace OdependencyCall {
                    export type /*FIXME REMOVE*/$ = {
                        readonly 'callback'?: GCallbackBlock
                        readonly 'data'?: string
                    }
                }
                export type OdependencyCall = OdependencyCall.$
                
                export namespace OinnerCallbackCall {
                    export type /*FIXME REMOVE*/$ = {
                        readonly 'data'?: GExpression
                        readonly 'innerCallback': string
                        readonly 'interface'?: string
                    }
                }
                export type OinnerCallbackCall = OinnerCallbackCall.$
                
                export namespace OinterfaceCall {
                    export type /*FIXME REMOVE*/$ = {
                        readonly 'callback'?: GCallbackBlock
                        readonly 'data'?: string
                        readonly 'property': string
                    }
                }
                export type OinterfaceCall = OinterfaceCall.$
                
                export namespace Oswitch {
                    
                    export namespace Pcases {
                        export type /*FIXME REMOVE*/$ = pt.Dictionary<GCallbackBlock>
                    }
                    export type Pcases = Pcases.$
                    
                    export namespace Ppath {
                        export type /*FIXME REMOVE*/$ = pt.Array<string>
                    }
                    export type Ppath = Ppath.$
                    export type /*FIXME REMOVE*/$ = {
                        readonly 'cases': Pcases
                        readonly 'path': Ppath
                    }
                }
                export type Oswitch = Oswitch.$
                export type /*FIXME REMOVE*/$ = 
                    | ['dependencyCall', OdependencyCall]
                    | ['innerCallbackCall', OinnerCallbackCall]
                    | ['interfaceCall', OinterfaceCall]
                    | ['switch', Oswitch]
            }
            export type A = A.$
            export type /*FIXME REMOVE*/$ = pt.Array<A>
        }
        export type Pstatements = Pstatements.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'innerCallbacks'?: PinnerCallbacks
            readonly 'statements': Pstatements
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GCallbackBlock = GCallbackBlock.$

export namespace GExpression {
    
    export namespace G {
        
        export namespace Ocall {
            export type /*FIXME REMOVE*/$ = {
                readonly 'function': string
            }
        }
        export type Ocall = Ocall.$
        
        export namespace OcontextChange {
            export type /*FIXME REMOVE*/$ = {
                readonly 'block': GFunctionBlock
                readonly 'property': string
            }
        }
        export type OcontextChange = OcontextChange.$
        
        export namespace OgroupInitializer {
            
            export namespace Pproperties {
                export type /*FIXME REMOVE*/$ = pt.Dictionary<GExpression>
            }
            export type Pproperties = Pproperties.$
            export type /*FIXME REMOVE*/$ = {
                readonly 'properties': Pproperties
            }
        }
        export type OgroupInitializer = OgroupInitializer.$
        
        export namespace OmapArray {
            export type /*FIXME REMOVE*/$ = {
                readonly 'block': GFunctionBlock
            }
        }
        export type OmapArray = OmapArray.$
        
        export namespace OmapDictionary {
            export type /*FIXME REMOVE*/$ = {
                readonly 'block': GFunctionBlock
            }
        }
        export type OmapDictionary = OmapDictionary.$
        
        export namespace OpropertySelection {
            export type /*FIXME REMOVE*/$ = {
                readonly 'name': string
            }
        }
        export type OpropertySelection = OpropertySelection.$
        
        export namespace Oswitch {
            
            export namespace Pcases {
                export type /*FIXME REMOVE*/$ = pt.Dictionary<GFunctionBlock>
            }
            export type Pcases = Pcases.$
            export type /*FIXME REMOVE*/$ = {
                readonly 'cases': Pcases
            }
        }
        export type Oswitch = Oswitch.$
        export type /*FIXME REMOVE*/$ = 
            | ['call', Ocall]
            | ['contextChange', OcontextChange]
            | ['groupInitializer', OgroupInitializer]
            | ['implementMe', string]
            | ['mapArray', OmapArray]
            | ['mapDictionary', OmapDictionary]
            | ['propertySelection', OpropertySelection]
            | ['switch', Oswitch]
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GExpression = GExpression.$

export namespace GFunctionBlock {
    
    export namespace G {
        
        export namespace PinnerFunctions {
            
            export namespace D {
                export type /*FIXME REMOVE*/$ = {
                    readonly 'block': GFunctionBlock
                }
            }
            export type D = D.$
            export type /*FIXME REMOVE*/$ = pt.Dictionary<D>
        }
        export type PinnerFunctions = PinnerFunctions.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'innerFunctions'?: PinnerFunctions
            readonly 'returnExpression': GExpression
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GFunctionBlock = GFunctionBlock.$

export namespace GImplementation {
    
    export namespace G {
        
        export namespace Pimplementations {
            
            export namespace D {
                
                export namespace Ptype {
                    
                    export namespace Ocallback {
                        export type /*FIXME REMOVE*/$ = {
                            readonly 'block': GCallbackBlock
                        }
                    }
                    export type Ocallback = Ocallback.$
                    
                    export namespace Ofunction {
                        export type /*FIXME REMOVE*/$ = {
                            readonly 'block': GFunctionBlock
                        }
                    }
                    export type Ofunction = Ofunction.$
                    export type /*FIXME REMOVE*/$ = 
                        | ['callback', Ocallback]
                        | ['function', Ofunction]
                }
                export type Ptype = Ptype.$
                export type /*FIXME REMOVE*/$ = {
                    readonly 'constructor': boolean
                    readonly 'type': Ptype
                }
            }
            export type D = D.$
            export type /*FIXME REMOVE*/$ = pt.Dictionary<D>
        }
        export type Pimplementations = Pimplementations.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'implementations': Pimplementations
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GImplementation = GImplementation.$

export namespace GStates {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = pt.Dictionary<GType>
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GStates = GStates.$

export namespace GType {
    
    export namespace G {
        
        export namespace Ogroup {
            
            export namespace D {
                export type /*FIXME REMOVE*/$ = {
                    readonly 'type': GType
                }
            }
            export type D = D.$
            export type /*FIXME REMOVE*/$ = pt.Dictionary<D>
        }
        export type Ogroup = Ogroup.$
        
        export namespace OtaggedUnion {
            export type /*FIXME REMOVE*/$ = pt.Dictionary<GType>
        }
        export type OtaggedUnion = OtaggedUnion.$
        export type /*FIXME REMOVE*/$ = 
            | ['array', GType]
            | ['boolean', null]
            | ['dictionary', GType]
            | ['group', Ogroup]
            | ['null', null]
            | ['number', null]
            | ['optional', GType]
            | ['parameter', string]
            | ['reference', string]
            | ['string', null]
            | ['taggedUnion', OtaggedUnion]
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GType = GType.$