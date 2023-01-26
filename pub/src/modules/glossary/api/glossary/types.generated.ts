import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace GContext {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = 
            | ['import', string]
            | ['local', null]
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GContext = GContext.$

export namespace GGlossary {
    
    export namespace G {
        
        export namespace Pfunctions {
            
            export namespace D {
                
                export namespace Pmanaged__input__interface {
                    export type /*FIXME REMOVE*/$ = null | GInterfaceReference
                }
                export type Pmanaged__input__interface = Pmanaged__input__interface.$
                
                export namespace Poutput__interface {
                    export type /*FIXME REMOVE*/$ = null | GInterfaceReference
                }
                export type Poutput__interface = Poutput__interface.$
                
                export namespace Preturn__type {
                    
                    export namespace Odata {
                        export type /*FIXME REMOVE*/$ = {
                            readonly 'asynchronous': boolean
                            readonly 'type': GTypeReference
                        }
                    }
                    export type Odata = Odata.$
                    export type /*FIXME REMOVE*/$ = 
                        | ['data', Odata]
                        | ['interface', GInterfaceReference]
                        | ['nothing', null]
                }
                export type Preturn__type = Preturn__type.$
                export type /*FIXME REMOVE*/$ = {
                    readonly 'data': GTypeReference
                    readonly 'managed input interface': Pmanaged__input__interface
                    readonly 'output interface': Poutput__interface
                    readonly 'return type': Preturn__type
                }
            }
            export type D = D.$
            export type /*FIXME REMOVE*/$ = pt.Dictionary<D>
        }
        export type Pfunctions = Pfunctions.$
        
        export namespace Pimports {
            export type /*FIXME REMOVE*/$ = pt.Dictionary<string>
        }
        export type Pimports = Pimports.$
        
        export namespace Pinterfaces {
            export type /*FIXME REMOVE*/$ = pt.Dictionary<GInterface>
        }
        export type Pinterfaces = Pinterfaces.$
        
        export namespace Pparameters {
            export type /*FIXME REMOVE*/$ = pt.Dictionary<null>
        }
        export type Pparameters = Pparameters.$
        
        export namespace Ptemplates {
            
            export namespace D {
                
                export namespace Pparameters {
                    export type /*FIXME REMOVE*/$ = pt.Dictionary<null>
                }
                export type Pparameters = Pparameters.$
                export type /*FIXME REMOVE*/$ = {
                    readonly 'parameters': Pparameters
                    readonly 'type': GType
                }
            }
            export type D = D.$
            export type /*FIXME REMOVE*/$ = pt.Dictionary<D>
        }
        export type Ptemplates = Ptemplates.$
        
        export namespace Ptypes {
            export type /*FIXME REMOVE*/$ = pt.Dictionary<GType>
        }
        export type Ptypes = Ptypes.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'functions': Pfunctions
            readonly 'imports': Pimports
            readonly 'interfaces': Pinterfaces
            readonly 'parameters': Pparameters
            readonly 'templates'?: Ptemplates
            readonly 'types': Ptypes
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GGlossary = GGlossary.$

export namespace GInterface {
    
    export namespace G {
        
        export namespace Ogroup {
            
            export namespace Pmembers {
                export type /*FIXME REMOVE*/$ = pt.Dictionary<GInterface>
            }
            export type Pmembers = Pmembers.$
            export type /*FIXME REMOVE*/$ = {
                readonly 'members': Pmembers
            }
        }
        export type Ogroup = Ogroup.$
        
        export namespace Omethod {
            
            export namespace Pdata {
                export type /*FIXME REMOVE*/$ = null | GTypeReference
            }
            export type Pdata = Pdata.$
            
            export namespace Pinterface {
                
                export namespace O {
                    export type /*FIXME REMOVE*/$ = {
                        readonly 'interface': GInterface
                        readonly 'managed': boolean
                    }
                }
                export type O = O.$
                export type /*FIXME REMOVE*/$ = null | O
            }
            export type Pinterface = Pinterface.$
            export type /*FIXME REMOVE*/$ = {
                readonly 'data': Pdata
                readonly 'interface': Pinterface
            }
        }
        export type Omethod = Omethod.$
        
        export namespace Oreference {
            export type /*FIXME REMOVE*/$ = {
                readonly 'context': GContext
                readonly 'interface': string
            }
        }
        export type Oreference = Oreference.$
        export type /*FIXME REMOVE*/$ = 
            | ['group', Ogroup]
            | ['method', Omethod]
            | ['reference', Oreference]
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GInterface = GInterface.$

export namespace GInterfaceReference {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {
            readonly 'context': GContext
            readonly 'interface': string
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GInterfaceReference = GInterfaceReference.$

export namespace GType {
    
    export namespace G {
        
        export namespace Ogroup {
            
            export namespace D {
                export type /*FIXME REMOVE*/$ = {
                    readonly 'optional': boolean
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
        
        export namespace Otemplate {
            
            export namespace Parguments {
                export type /*FIXME REMOVE*/$ = pt.Dictionary<GType>
            }
            export type Parguments = Parguments.$
            export type /*FIXME REMOVE*/$ = {
                readonly 'arguments': Parguments
                readonly 'context': GContext
                readonly 'template': string
            }
        }
        export type Otemplate = Otemplate.$
        export type /*FIXME REMOVE*/$ = 
            | ['array', GType]
            | ['boolean', null]
            | ['computed', GType]
            | ['dictionary', GType]
            | ['group', Ogroup]
            | ['nested', GType]
            | ['null', null]
            | ['number', null]
            | ['optional', GType]
            | ['parameter', string]
            | ['reference', GTypeReference]
            | ['string', null]
            | ['taggedUnion', OtaggedUnion]
            | ['template', Otemplate]
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GType = GType.$

export namespace GTypeReference {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {
            readonly 'context': GContext
            readonly 'type': string
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GTypeReference = GTypeReference.$