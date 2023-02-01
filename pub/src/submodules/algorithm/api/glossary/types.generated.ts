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
        
        export namespace D {}
        export type D = {
            readonly 'constructor': boolean
            readonly 'type': UImplementationType
        }
    }
    export type Pimplementations = pt.Dictionary<Pimplementations.D>
}
export type GImplementation = {
    readonly 'implementations': GImplementation.Pimplementations
}
export type UImplementation = GImplementation

export namespace GImplementationType {
    
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
export type GImplementationType = 
    | ['asynchronous function', GImplementationType.Oasynchronous__function]
    | ['interface initializer', GImplementationType.Ointerface__initializer]
    | ['procedure', GImplementationType.Oprocedure]
    | ['synchronous function', GImplementationType.Osynchronous__function]
export type UImplementationType = GImplementationType

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
    
    export namespace PinnerFunctions {
        
        export namespace D {}
        export type D = {
            readonly 'type': UImplementationType
        }
    }
    export type PinnerFunctions = pt.Dictionary<PinnerFunctions.D>
    
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
            
            export namespace OinterfaceCall {
                
                export namespace Pcallback {
                    
                    export namespace Onot__set {}
                    export type Onot__set = {}
                }
                export type Pcallback = 
                    | ['not set', Pcallback.Onot__set]
                    | ['set', UProcedureBlock]
                
                export namespace Pchild__path {}
                export type Pchild__path = pt.Array<string>
                
                export namespace Pdata {
                    
                    export namespace Onot__set {}
                    export type Onot__set = {}
                }
                export type Pdata = 
                    | ['not set', Pdata.Onot__set]
                    | ['set', USynchronousExpression]
            }
            export type OinterfaceCall = {
                readonly 'callback': OinterfaceCall.Pcallback
                readonly 'child path': OinterfaceCall.Pchild__path
                readonly 'data': OinterfaceCall.Pdata
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
    readonly 'innerFunctions'?: GProcedureBlock.PinnerFunctions
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
    | ['string literal', string]
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