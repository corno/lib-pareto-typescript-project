import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace GCallbackBlock {
    
    export namespace G {
        
        export namespace PinnerCallbacks {
            
            export namespace D {
                export type $ = {
                    readonly 'block': GCallbackBlock.$
                }
            }
            export type $ = pt.Dictionary<D.$>
        }
        
        export namespace Pstatements {
            
            export namespace A {
                
                export namespace OdependencyCall {
                    export type $ = {
                        readonly 'callback'?: GCallbackBlock.$
                        readonly 'data'?: string
                    }
                }
                
                export namespace OinnerCallbackCall {
                    export type $ = {
                        readonly 'data'?: GExpression.$
                        readonly 'innerCallback': string
                        readonly 'interface'?: string
                    }
                }
                
                export namespace OinterfaceCall {
                    export type $ = {
                        readonly 'callback'?: GCallbackBlock.$
                        readonly 'data'?: string
                        readonly 'property': string
                    }
                }
                
                export namespace Oswitch {
                    
                    export namespace Pcases {
                        export type $ = pt.Dictionary<GCallbackBlock.$>
                    }
                    
                    export namespace Ppath {
                        export type $ = pt.Array<string>
                    }
                    export type $ = {
                        readonly 'cases': Pcases.$
                        readonly 'path': Ppath.$
                    }
                }
                export type $ = 
                    | ['dependencyCall', OdependencyCall.$]
                    | ['innerCallbackCall', OinnerCallbackCall.$]
                    | ['interfaceCall', OinterfaceCall.$]
                    | ['switch', Oswitch.$]
            }
            export type $ = pt.Array<A.$>
        }
        export type $ = {
            readonly 'innerCallbacks'?: PinnerCallbacks.$
            readonly 'statements': Pstatements.$
        }
    }
    export type $ = G.$
}

export namespace GExpression {
    
    export namespace G {
        
        export namespace Ocall {
            export type $ = {
                readonly 'function': string
            }
        }
        
        export namespace OcontextChange {
            export type $ = {
                readonly 'block': GFunctionBlock.$
                readonly 'property': string
            }
        }
        
        export namespace OgroupInitializer {
            
            export namespace Pproperties {
                export type $ = pt.Dictionary<GExpression.$>
            }
            export type $ = {
                readonly 'properties': Pproperties.$
            }
        }
        
        export namespace OmapArray {
            export type $ = {
                readonly 'block': GFunctionBlock.$
            }
        }
        
        export namespace OmapDictionary {
            export type $ = {
                readonly 'block': GFunctionBlock.$
            }
        }
        
        export namespace OpropertySelection {
            export type $ = {
                readonly 'name': string
            }
        }
        
        export namespace Oswitch {
            
            export namespace Pcases {
                export type $ = pt.Dictionary<GFunctionBlock.$>
            }
            export type $ = {
                readonly 'cases': Pcases.$
            }
        }
        export type $ = 
            | ['call', Ocall.$]
            | ['contextChange', OcontextChange.$]
            | ['groupInitializer', OgroupInitializer.$]
            | ['implementMe', string]
            | ['mapArray', OmapArray.$]
            | ['mapDictionary', OmapDictionary.$]
            | ['propertySelection', OpropertySelection.$]
            | ['switch', Oswitch.$]
    }
    export type $ = G.$
}

export namespace GFunctionBlock {
    
    export namespace G {
        
        export namespace PinnerFunctions {
            
            export namespace D {
                export type $ = {
                    readonly 'block': GFunctionBlock.$
                }
            }
            export type $ = pt.Dictionary<D.$>
        }
        export type $ = {
            readonly 'innerFunctions'?: PinnerFunctions.$
            readonly 'returnExpression': GExpression.$
        }
    }
    export type $ = G.$
}

export namespace GImplementation {
    
    export namespace G {
        
        export namespace Pimplementations {
            
            export namespace D {
                
                export namespace Ptype {
                    
                    export namespace Ocallback {
                        export type $ = {
                            readonly 'block': GCallbackBlock.$
                        }
                    }
                    
                    export namespace Ofunction {
                        export type $ = {
                            readonly 'block': GFunctionBlock.$
                        }
                    }
                    export type $ = 
                        | ['callback', Ocallback.$]
                        | ['function', Ofunction.$]
                }
                export type $ = {
                    readonly 'constructor': boolean
                    readonly 'type': Ptype.$
                }
            }
            export type $ = pt.Dictionary<D.$>
        }
        export type $ = {
            readonly 'implementations': Pimplementations.$
        }
    }
    export type $ = G.$
}

export namespace GStates {
    
    export namespace G {
        export type $ = pt.Dictionary<GType.$>
    }
    export type $ = G.$
}

export namespace GType {
    
    export namespace G {
        
        export namespace Ogroup {
            
            export namespace D {
                export type $ = {
                    readonly 'type': GType.$
                }
            }
            export type $ = pt.Dictionary<D.$>
        }
        
        export namespace OtaggedUnion {
            export type $ = pt.Dictionary<GType.$>
        }
        export type $ = 
            | ['array', GType.$]
            | ['boolean', null]
            | ['dictionary', GType.$]
            | ['group', Ogroup.$]
            | ['null', null]
            | ['number', null]
            | ['optional', GType.$]
            | ['parameter', string]
            | ['reference', string]
            | ['string', null]
            | ['taggedUnion', OtaggedUnion.$]
    }
    export type $ = G.$
}