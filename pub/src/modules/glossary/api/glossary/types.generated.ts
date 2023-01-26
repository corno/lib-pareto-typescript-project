import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace GContext {
    
    export namespace G {}
    export type G = 
        | ['import', string]
        | ['local', null]
}
export type GContext = GContext.G

export namespace GGlossary {
    
    export namespace G {
        
        export namespace Pfunctions {
            
            export namespace D {
                
                export namespace Pmanaged__input__interface {}
                export type Pmanaged__input__interface = null | GInterfaceReference
                
                export namespace Poutput__interface {}
                export type Poutput__interface = null | GInterfaceReference
                
                export namespace Preturn__type {
                    
                    export namespace Odata {}
                    export type Odata = {
                        readonly 'asynchronous': boolean
                        readonly 'type': GTypeReference
                    }
                }
                export type Preturn__type = 
                    | ['data', Preturn__type.Odata]
                    | ['interface', GInterfaceReference]
                    | ['nothing', null]
            }
            export type D = {
                readonly 'data': GTypeReference
                readonly 'managed input interface': D.Pmanaged__input__interface
                readonly 'output interface': D.Poutput__interface
                readonly 'return type': D.Preturn__type
            }
        }
        export type Pfunctions = pt.Dictionary<Pfunctions.D>
        
        export namespace Pimports {}
        export type Pimports = pt.Dictionary<string>
        
        export namespace Pinterfaces {}
        export type Pinterfaces = pt.Dictionary<GInterface>
        
        export namespace Pparameters {}
        export type Pparameters = pt.Dictionary<null>
        
        export namespace Ptemplates {
            
            export namespace D {
                
                export namespace Pparameters {}
                export type Pparameters = pt.Dictionary<null>
            }
            export type D = {
                readonly 'parameters': D.Pparameters
                readonly 'type': GType
            }
        }
        export type Ptemplates = pt.Dictionary<Ptemplates.D>
        
        export namespace Ptypes {}
        export type Ptypes = pt.Dictionary<GType>
    }
    export type G = {
        readonly 'functions': G.Pfunctions
        readonly 'imports': G.Pimports
        readonly 'interfaces': G.Pinterfaces
        readonly 'parameters': G.Pparameters
        readonly 'templates'?: G.Ptemplates
        readonly 'types': G.Ptypes
    }
}
export type GGlossary = GGlossary.G

export namespace GInterface {
    
    export namespace G {
        
        export namespace Ogroup {
            
            export namespace Pmembers {}
            export type Pmembers = pt.Dictionary<GInterface>
        }
        export type Ogroup = {
            readonly 'members': Ogroup.Pmembers
        }
        
        export namespace Omethod {
            
            export namespace Pdata {}
            export type Pdata = null | GTypeReference
            
            export namespace Pinterface {
                
                export namespace O {}
                export type O = {
                    readonly 'interface': GInterface
                    readonly 'managed': boolean
                }
            }
            export type Pinterface = null | Pinterface.O
        }
        export type Omethod = {
            readonly 'data': Omethod.Pdata
            readonly 'interface': Omethod.Pinterface
        }
        
        export namespace Oreference {}
        export type Oreference = {
            readonly 'context': GContext
            readonly 'interface': string
        }
    }
    export type G = 
        | ['group', G.Ogroup]
        | ['method', G.Omethod]
        | ['reference', G.Oreference]
}
export type GInterface = GInterface.G

export namespace GInterfaceReference {
    
    export namespace G {}
    export type G = {
        readonly 'context': GContext
        readonly 'interface': string
    }
}
export type GInterfaceReference = GInterfaceReference.G

export namespace GType {
    
    export namespace G {
        
        export namespace Ogroup {
            
            export namespace D {}
            export type D = {
                readonly 'optional': boolean
                readonly 'type': GType
            }
        }
        export type Ogroup = pt.Dictionary<Ogroup.D>
        
        export namespace OtaggedUnion {}
        export type OtaggedUnion = pt.Dictionary<GType>
        
        export namespace Otemplate {
            
            export namespace Parguments {}
            export type Parguments = pt.Dictionary<GType>
        }
        export type Otemplate = {
            readonly 'arguments': Otemplate.Parguments
            readonly 'context': GContext
            readonly 'template': string
        }
    }
    export type G = 
        | ['array', GType]
        | ['boolean', null]
        | ['computed', GType]
        | ['dictionary', GType]
        | ['group', G.Ogroup]
        | ['nested', GType]
        | ['null', null]
        | ['number', null]
        | ['optional', GType]
        | ['parameter', string]
        | ['reference', GTypeReference]
        | ['string', null]
        | ['taggedUnion', G.OtaggedUnion]
        | ['template', G.Otemplate]
}
export type GType = GType.G

export namespace GTypeReference {
    
    export namespace G {}
    export type G = {
        readonly 'context': GContext
        readonly 'type': string
    }
}
export type GTypeReference = GTypeReference.G