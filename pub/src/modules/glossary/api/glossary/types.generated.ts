import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace VOptional {}
export type VOptional<AType> = 
    | ['not set', null]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

export namespace GContext {}
export type GContext = 
    | ['import', string]
    | ['local', null]
export type UContext = GContext

export namespace GGlossary {
    
    export namespace Pfunctions {
        
        export namespace D {
            
            export namespace Pmanaged__input__interface {}
            export type Pmanaged__input__interface = null | UInterfaceReference
            
            export namespace Poutput__interface {}
            export type Poutput__interface = null | UInterfaceReference
            
            export namespace Preturn__type {
                
                export namespace Odata {}
                export type Odata = {
                    readonly 'asynchronous': boolean
                    readonly 'type': UTypeReference
                }
            }
            export type Preturn__type = 
                | ['data', Preturn__type.Odata]
                | ['interface', UInterfaceReference]
                | ['nothing', null]
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
    
    export namespace Pparameters {}
    export type Pparameters = pt.Dictionary<null>
    
    export namespace Ptemplates {
        
        export namespace D {
            
            export namespace Pparameters {}
            export type Pparameters = pt.Dictionary<null>
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
        export type Pdata = null | UTypeReference
        
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
    
    export namespace Ogroup {
        
        export namespace D {}
        export type D = {
            readonly 'optional': boolean
            readonly 'type': UType
        }
    }
    export type Ogroup = pt.Dictionary<Ogroup.D>
    
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
    | ['boolean', null]
    | ['computed', UType]
    | ['dictionary', UType]
    | ['group', GType.Ogroup]
    | ['nested', UType]
    | ['null', null]
    | ['number', null]
    | ['optional', UType]
    | ['parameter', string]
    | ['reference', UTypeReference]
    | ['string', null]
    | ['taggedUnion', GType.OtaggedUnion]
    | ['template', GType.Otemplate]
export type UType = GType

export namespace GTypeReference {}
export type GTypeReference = {
    readonly 'context': UContext
    readonly 'type': string
}
export type UTypeReference = GTypeReference