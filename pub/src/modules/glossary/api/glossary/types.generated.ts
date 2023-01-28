import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace VOptional {
    
    export namespace Onot__set {}
    export type Onot__set<AType> = {}
}
export type VOptional<AType> = 
    | ['not set', VOptional.Onot__set<AType>]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

export namespace GContext {
    
    export namespace Olocal {}
    export type Olocal = {}
}
export type GContext = 
    | ['import', string]
    | ['local', GContext.Olocal]
export type UContext = GContext

export namespace GGlossary {
    
    export namespace Pfunctions {
        
        export namespace D {
            
            export namespace Pmanaged__input__interface {}
            export type Pmanaged__input__interface = MOptional<UInterfaceReference>
            
            export namespace Poutput__interface {}
            export type Poutput__interface = MOptional<UInterfaceReference>
            
            export namespace Preturn__type {
                
                export namespace Odata {}
                export type Odata = {
                    readonly 'asynchronous': boolean
                    readonly 'type': UTypeReference
                }
                
                export namespace Onothing {}
                export type Onothing = {}
            }
            export type Preturn__type = 
                | ['data', Preturn__type.Odata]
                | ['interface', UInterfaceReference]
                | ['nothing', Preturn__type.Onothing]
        }
        export type D = {
            readonly 'data': UTypeReference
            readonly 'managed input interface': D.Pmanaged__input__interface
            readonly 'output interface': D.Poutput__interface
            readonly 'return type': D.Preturn__type
        }
    }
    export type Pfunctions = pt.Dictionary<Pfunctions.D>
    
    export namespace Pimports {}
    export type Pimports = pt.Dictionary<string>
    
    export namespace Pinterfaces {}
    export type Pinterfaces = pt.Dictionary<UInterface>
    
    export namespace Pparameters {
        
        export namespace D {}
        export type D = {}
    }
    export type Pparameters = pt.Dictionary<Pparameters.D>
    
    export namespace Ptemplates {
        
        export namespace D {
            
            export namespace Pparameters {
                
                export namespace D {}
                export type D = {}
            }
            export type Pparameters = pt.Dictionary<Pparameters.D>
        }
        export type D = {
            readonly 'parameters': D.Pparameters
            readonly 'type': UType
        }
    }
    export type Ptemplates = pt.Dictionary<Ptemplates.D>
    
    export namespace Ptypes {}
    export type Ptypes = pt.Dictionary<UType>
}
export type GGlossary = {
    readonly 'functions': GGlossary.Pfunctions
    readonly 'imports': GGlossary.Pimports
    readonly 'interfaces': GGlossary.Pinterfaces
    readonly 'parameters': GGlossary.Pparameters
    readonly 'templates': GGlossary.Ptemplates
    readonly 'types': GGlossary.Ptypes
}
export type UGlossary = GGlossary

export namespace GInterface {
    
    export namespace Ogroup {
        
        export namespace Pmembers {}
        export type Pmembers = pt.Dictionary<UInterface>
    }
    export type Ogroup = {
        readonly 'members': Ogroup.Pmembers
    }
    
    export namespace Omethod {
        
        export namespace Pdata {}
        export type Pdata = MOptional<UTypeReference>
        
        export namespace Pinterface {
            
            export namespace TPType {}
            export type TPType = {
                readonly 'interface': UInterface
                readonly 'managed': boolean
            }
        }
        export type Pinterface = MOptional<Pinterface.TPType>
    }
    export type Omethod = {
        readonly 'data': Omethod.Pdata
        readonly 'interface': Omethod.Pinterface
    }
}
export type GInterface = 
    | ['group', GInterface.Ogroup]
    | ['method', GInterface.Omethod]
    | ['reference', UInterfaceReference]
export type UInterface = GInterface

export namespace GInterfaceReference {}
export type GInterfaceReference = {
    readonly 'context': UContext
    readonly 'interface': string
}
export type UInterfaceReference = GInterfaceReference

export namespace GType {
    
    export namespace Oboolean {}
    export type Oboolean = {}
    
    export namespace Ogroup {
        
        export namespace D {}
        export type D = {
            readonly 'optional': boolean
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
    
    export namespace Otemplate {
        
        export namespace Parguments {}
        export type Parguments = pt.Dictionary<UType>
    }
    export type Otemplate = {
        readonly 'arguments': Otemplate.Parguments
        readonly 'context': UContext
        readonly 'template': string
    }
}
export type GType = 
    | ['array', UType]
    | ['boolean', GType.Oboolean]
    | ['computed', UType]
    | ['dictionary', UType]
    | ['group', GType.Ogroup]
    | ['nested', UType]
    | ['null', GType.Onull]
    | ['number', GType.Onumber]
    | ['parameter', string]
    | ['reference', UTypeReference]
    | ['string', GType.Ostring]
    | ['taggedUnion', GType.OtaggedUnion]
    | ['template', GType.Otemplate]
export type UType = GType

export namespace GTypeReference {}
export type GTypeReference = {
    readonly 'context': UContext
    readonly 'type': string
}
export type UTypeReference = GTypeReference