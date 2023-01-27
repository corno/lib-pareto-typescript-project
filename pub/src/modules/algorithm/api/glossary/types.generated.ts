import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace GAsynchronousExpression {
    
    export namespace Ocall {}
    export type Ocall = {
        readonly 'function': string
    }
}
export type GAsynchronousExpression = 
    | ['call', GAsynchronousExpression.Ocall]
export type UAsynchronousExpression = GAsynchronousExpression

export namespace GAsynchronousFunctionBlock {
    
    export namespace PinnerFunctions {
        
        export namespace D {}
        export type D = {
            readonly 'block': UAsynchronousFunctionBlock
        }
    }
    export type PinnerFunctions = pt.Dictionary<PinnerFunctions.D>
}
export type GAsynchronousFunctionBlock = {
    readonly 'innerFunctions'?: GAsynchronousFunctionBlock.PinnerFunctions
    readonly 'returnExpression': UAsynchronousExpression
}
export type UAsynchronousFunctionBlock = GAsynchronousFunctionBlock

export namespace GImplementation {
    
    export namespace Pimplementations {
        
        export namespace D {
            
            export namespace Ptype {
                
                export namespace Oasynchronous__function {}
                export type Oasynchronous__function = {
                    readonly 'block': UAsynchronousFunctionBlock
                }
                
                export namespace Ointerface__initializer {}
                export type Ointerface__initializer = {
                    readonly 'block': UInterfaceInitializerBlock
                }
                
                export namespace Oprocedure {}
                export type Oprocedure = {
                    readonly 'block': UProcedureBlock
                }
                
                export namespace Osynchronous__function {}
                export type Osynchronous__function = {
                    readonly 'block': USynchronousFunctionBlock
                }
            }
            export type Ptype = 
                | ['asynchronous function', Ptype.Oasynchronous__function]
                | ['interface initializer', Ptype.Ointerface__initializer]
                | ['procedure', Ptype.Oprocedure]
                | ['synchronous function', Ptype.Osynchronous__function]
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

export namespace GInterfaceInitializerBlock {
    
    export namespace Ocall {}
    export type Ocall = {
        readonly 'function': string
    }
}
export type GInterfaceInitializerBlock = 
    | ['call', GInterfaceInitializerBlock.Ocall]
export type UInterfaceInitializerBlock = GInterfaceInitializerBlock

export namespace GProcedureBlock {
    
    export namespace PinnerCallbacks {
        
        export namespace D {}
        export type D = {
            readonly 'block': UProcedureBlock
        }
    }
    export type PinnerCallbacks = pt.Dictionary<PinnerCallbacks.D>
    
    export namespace Pstatements {
        
        export namespace A {
            
            export namespace OdependencyCall {}
            export type OdependencyCall = {
                readonly 'callback'?: UProcedureBlock
                readonly 'data'?: string
            }
            
            export namespace OinnerCallbackCall {}
            export type OinnerCallbackCall = {
                readonly 'data'?: USynchronousExpression
                readonly 'innerCallback': string
                readonly 'interface'?: string
            }
            
            export namespace OinterfaceCall {}
            export type OinterfaceCall = {
                readonly 'callback'?: UProcedureBlock
                readonly 'data'?: string
                readonly 'property': string
            }
            
            export namespace Oswitch {
                
                export namespace Pcases {}
                export type Pcases = pt.Dictionary<UProcedureBlock>
                
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
export type GProcedureBlock = {
    readonly 'innerCallbacks'?: GProcedureBlock.PinnerCallbacks
    readonly 'statements': GProcedureBlock.Pstatements
}
export type UProcedureBlock = GProcedureBlock

export namespace GStates {}
export type GStates = pt.Dictionary<UType>
export type UStates = GStates

export namespace GSynchronousExpression {
    
    export namespace Ocall {}
    export type Ocall = {
        readonly 'function': string
    }
    
    export namespace OcontextChange {}
    export type OcontextChange = {
        readonly 'block': USynchronousFunctionBlock
        readonly 'property': string
    }
    
    export namespace OgroupInitializer {
        
        export namespace Pproperties {}
        export type Pproperties = pt.Dictionary<USynchronousExpression>
    }
    export type OgroupInitializer = {
        readonly 'properties': OgroupInitializer.Pproperties
    }
    
    export namespace OmapArray {}
    export type OmapArray = {
        readonly 'block': USynchronousFunctionBlock
    }
    
    export namespace OmapDictionary {}
    export type OmapDictionary = {
        readonly 'block': USynchronousFunctionBlock
    }
    
    export namespace OpropertySelection {}
    export type OpropertySelection = {
        readonly 'name': string
    }
    
    export namespace Oswitch {
        
        export namespace Pcases {}
        export type Pcases = pt.Dictionary<USynchronousFunctionBlock>
    }
    export type Oswitch = {
        readonly 'cases': Oswitch.Pcases
    }
}
export type GSynchronousExpression = 
    | ['call', GSynchronousExpression.Ocall]
    | ['contextChange', GSynchronousExpression.OcontextChange]
    | ['groupInitializer', GSynchronousExpression.OgroupInitializer]
    | ['implementMe', string]
    | ['mapArray', GSynchronousExpression.OmapArray]
    | ['mapDictionary', GSynchronousExpression.OmapDictionary]
    | ['propertySelection', GSynchronousExpression.OpropertySelection]
    | ['switch', GSynchronousExpression.Oswitch]
export type USynchronousExpression = GSynchronousExpression

export namespace GSynchronousFunctionBlock {
    
    export namespace PinnerFunctions {
        
        export namespace D {}
        export type D = {
            readonly 'block': USynchronousFunctionBlock
        }
    }
    export type PinnerFunctions = pt.Dictionary<PinnerFunctions.D>
}
export type GSynchronousFunctionBlock = {
    readonly 'innerFunctions'?: GSynchronousFunctionBlock.PinnerFunctions
    readonly 'returnExpression': USynchronousExpression
}
export type USynchronousFunctionBlock = GSynchronousFunctionBlock

export namespace GType {
    
    export namespace Oboolean {}
    export type Oboolean = {}
    
    export namespace Ogroup {
        
        export namespace D {}
        export type D = {
            readonly 'type': UType
        }
    }
    export type Ogroup = pt.Dictionary<Ogroup.D>
    
    export namespace Onull {}
    export type Onull = {}
    
    export namespace Onumber {}
    export type Onumber = {}
    
    export namespace Ostring {}
    export type Ostring = {}
    
    export namespace OtaggedUnion {}
    export type OtaggedUnion = pt.Dictionary<UType>
}
export type GType = 
    | ['array', UType]
    | ['boolean', GType.Oboolean]
    | ['dictionary', UType]
    | ['group', GType.Ogroup]
    | ['null', GType.Onull]
    | ['number', GType.Onumber]
    | ['optional', UType]
    | ['parameter', string]
    | ['reference', string]
    | ['string', GType.Ostring]
    | ['taggedUnion', GType.OtaggedUnion]
export type UType = GType