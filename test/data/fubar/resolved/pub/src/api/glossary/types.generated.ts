import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace VReference {}
export type VReference<GPAnnotation, AReferencedType> = {}

export type MReference<GPAnnotation, AReferencedType> = VReference<GPAnnotation, AReferencedType>

export namespace GContext {
    
    export namespace Olocal {}
    export type Olocal<GPAnnotation> = {}
}
export type GContext<GPAnnotation> = 
    | ['import', string]
    | ['local', GContext.Olocal<GPAnnotation>]
export type UContext<GPAnnotation> = GContext<GPAnnotation>

export namespace GGlossary {
    
    export namespace Pfunctions {
        
        export namespace D {
            
            export namespace Pmanaged__input__interface {
                
                export namespace Onot__set {}
                export type Onot__set<GPAnnotation> = {}
            }
            export type Pmanaged__input__interface<GPAnnotation> = 
                | ['not set', Pmanaged__input__interface.Onot__set<GPAnnotation>]
                | ['set', UInterfaceReference<GPAnnotation>]
            
            export namespace Poutput__interface {
                
                export namespace Onot__set {}
                export type Onot__set<GPAnnotation> = {}
            }
            export type Poutput__interface<GPAnnotation> = 
                | ['not set', Poutput__interface.Onot__set<GPAnnotation>]
                | ['set', UInterfaceReference<GPAnnotation>]
            
            export namespace Preturn__type {
                
                export namespace Odata {}
                export type Odata<GPAnnotation> = {
                    readonly 'asynchronous': boolean
                    readonly 'type': UTypeReference<GPAnnotation>
                }
                
                export namespace Onothing {}
                export type Onothing<GPAnnotation> = {}
            }
            export type Preturn__type<GPAnnotation> = 
                | ['data', Preturn__type.Odata<GPAnnotation>]
                | ['interface', UInterfaceReference<GPAnnotation>]
                | ['nothing', Preturn__type.Onothing<GPAnnotation>]
        }
        export type D<GPAnnotation> = {
            readonly 'data': UTypeReference<GPAnnotation>
            readonly 'managed input interface': D.Pmanaged__input__interface<GPAnnotation>
            readonly 'output interface': D.Poutput__interface<GPAnnotation>
            readonly 'return type': D.Preturn__type<GPAnnotation>
        }
    }
    export type Pfunctions<GPAnnotation> = pt.Dictionary<Pfunctions.D<GPAnnotation>>
    
    export namespace Pimports {
        
        export namespace D {}
        export type D<GPAnnotation> = {}
    }
    export type Pimports<GPAnnotation> = pt.Dictionary<Pimports.D<GPAnnotation>>
    
    export namespace Pinterfaces {}
    export type Pinterfaces<GPAnnotation> = pt.Dictionary<UInterface<GPAnnotation>>
    
    export namespace Pparameters {
        
        export namespace D {}
        export type D<GPAnnotation> = {}
    }
    export type Pparameters<GPAnnotation> = pt.Dictionary<Pparameters.D<GPAnnotation>>
    
    export namespace Ptemplates {
        
        export namespace D {
            
            export namespace Pparameters {
                
                export namespace D {}
                export type D<GPAnnotation> = {}
            }
            export type Pparameters<GPAnnotation> = pt.Dictionary<Pparameters.D<GPAnnotation>>
        }
        export type D<GPAnnotation> = {
            readonly 'parameters': D.Pparameters<GPAnnotation>
            readonly 'type': UType<GPAnnotation>
        }
    }
    export type Ptemplates<GPAnnotation> = pt.Dictionary<Ptemplates.D<GPAnnotation>>
    
    export namespace Ptypes {}
    export type Ptypes<GPAnnotation> = pt.Dictionary<UType<GPAnnotation>>
}
export type GGlossary<GPAnnotation> = {
    readonly 'functions': GGlossary.Pfunctions<GPAnnotation>
    readonly 'imports': GGlossary.Pimports<GPAnnotation>
    readonly 'interfaces': GGlossary.Pinterfaces<GPAnnotation>
    readonly 'parameters': GGlossary.Pparameters<GPAnnotation>
    readonly 'templates': GGlossary.Ptemplates<GPAnnotation>
    readonly 'types': GGlossary.Ptypes<GPAnnotation>
}
export type UGlossary<GPAnnotation> = GGlossary<GPAnnotation>

export namespace GInterface {
    
    export namespace Ogroup {
        
        export namespace Pmembers {}
        export type Pmembers<GPAnnotation> = pt.Dictionary<UInterface<GPAnnotation>>
    }
    export type Ogroup<GPAnnotation> = {
        readonly 'members': Ogroup.Pmembers<GPAnnotation>
    }
    
    export namespace Omethod {
        
        export namespace Pdata {
            
            export namespace Onot__set {}
            export type Onot__set<GPAnnotation> = {}
        }
        export type Pdata<GPAnnotation> = 
            | ['not set', Pdata.Onot__set<GPAnnotation>]
            | ['set', UTypeReference<GPAnnotation>]
        
        export namespace Pinterface {
            
            export namespace Onot__set {}
            export type Onot__set<GPAnnotation> = {}
        }
        export type Pinterface<GPAnnotation> = 
            | ['not set', Pinterface.Onot__set<GPAnnotation>]
            | ['set', UInterfaceReference<GPAnnotation>]
    }
    export type Omethod<GPAnnotation> = {
        readonly 'data': Omethod.Pdata<GPAnnotation>
        readonly 'interface': Omethod.Pinterface<GPAnnotation>
    }
}
export type GInterface<GPAnnotation> = 
    | ['group', GInterface.Ogroup<GPAnnotation>]
    | ['method', GInterface.Omethod<GPAnnotation>]
    | ['reference', UInterfaceReference<GPAnnotation>]
export type UInterface<GPAnnotation> = GInterface<GPAnnotation>

export namespace GInterfaceReference {}
export type GInterfaceReference<GPAnnotation> = {
    readonly 'context': UContext<GPAnnotation>
    readonly 'interface': string
}
export type UInterfaceReference<GPAnnotation> = GInterfaceReference<GPAnnotation>

export namespace GType {
    
    export namespace Oboolean {}
    export type Oboolean<GPAnnotation> = {}
    
    export namespace Ogroup {
        
        export namespace D {}
        export type D<GPAnnotation> = {
            readonly 'optional': boolean
            readonly 'type': UType<GPAnnotation>
        }
    }
    export type Ogroup<GPAnnotation> = pt.Dictionary<Ogroup.D<GPAnnotation>>
    
    export namespace Onull {}
    export type Onull<GPAnnotation> = {}
    
    export namespace Onumber {}
    export type Onumber<GPAnnotation> = {}
    
    export namespace Ostring {}
    export type Ostring<GPAnnotation> = {}
    
    export namespace OtaggedUnion {}
    export type OtaggedUnion<GPAnnotation> = pt.Dictionary<UType<GPAnnotation>>
    
    export namespace Otemplate {
        
        export namespace Parguments {}
        export type Parguments<GPAnnotation> = pt.Dictionary<UType<GPAnnotation>>
    }
    export type Otemplate<GPAnnotation> = {
        readonly 'arguments': Otemplate.Parguments<GPAnnotation>
        readonly 'context': UContext<GPAnnotation>
        readonly 'template': string
    }
}
export type GType<GPAnnotation> = 
    | ['array', UType<GPAnnotation>]
    | ['boolean', GType.Oboolean<GPAnnotation>]
    | ['computed', UType<GPAnnotation>]
    | ['dictionary', UType<GPAnnotation>]
    | ['group', GType.Ogroup<GPAnnotation>]
    | ['nested', UType<GPAnnotation>]
    | ['null', GType.Onull<GPAnnotation>]
    | ['number', GType.Onumber<GPAnnotation>]
    | ['parameter', string]
    | ['reference', UTypeReference<GPAnnotation>]
    | ['string', GType.Ostring<GPAnnotation>]
    | ['taggedUnion', GType.OtaggedUnion<GPAnnotation>]
    | ['template', GType.Otemplate<GPAnnotation>]
export type UType<GPAnnotation> = GType<GPAnnotation>

export namespace GTypeReference {}
export type GTypeReference<GPAnnotation> = {
    readonly 'context': UContext<GPAnnotation>
    readonly 'type': string
}
export type UTypeReference<GPAnnotation> = GTypeReference<GPAnnotation>