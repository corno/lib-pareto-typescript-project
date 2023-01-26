import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace GContext {
    
    export namespace G {
        export type $ = 
            | ['import', string]
            | ['local', null]
    }
    export type $ = G.$
}

export namespace GFunction {
    
    export namespace G {
        
        export namespace Pmanaged__input__interface {
            export type $ = null | GInterfaceReference.$
        }
        
        export namespace Poutput__interface {
            export type $ = null | GInterfaceReference.$
        }
        
        export namespace Preturn__type {
            
            export namespace Odata {
                export type $ = {
                    readonly 'asynchronous': boolean
                    readonly 'type': GTypeReference.$
                }
            }
            export type $ = 
                | ['data', Odata.$]
                | ['interface', GInterfaceReference.$]
                | ['nothing', null]
        }
        export type $ = {
            readonly 'data': GTypeReference.$
            readonly 'managed input interface': Pmanaged__input__interface.$
            readonly 'output interface': Poutput__interface.$
            readonly 'return type': Preturn__type.$
        }
    }
    export type $ = G.$
}

export namespace GGlossary {
    
    export namespace G {
        
        export namespace Pfunctions {
            export type $ = pt.Dictionary<GFunction.$>
        }
        
        export namespace Pimports {
            export type $ = pt.Dictionary<string>
        }
        export type $ = {
            readonly 'functions': Pfunctions.$
            readonly 'imports': Pimports.$
            readonly 'namespace': GNamespace.$
            readonly 'parameters'?: GParameters.$
        }
    }
    export type $ = G.$
}

export namespace GInterface {
    
    export namespace G {
        
        export namespace Ogroup {
            
            export namespace Pmembers {
                export type $ = pt.Dictionary<GInterface.$>
            }
            export type $ = {
                readonly 'members': Pmembers.$
            }
        }
        
        export namespace Omethod {
            
            export namespace Pdata {
                export type $ = null | GTypeReference.$
            }
            
            export namespace Pinterface {
                export type $ = null | GInterface.$
            }
            export type $ = {
                readonly 'data': Pdata.$
                readonly 'interface': Pinterface.$
            }
        }
        export type $ = 
            | ['group', Ogroup.$]
            | ['method', Omethod.$]
            | ['reference', GInterfaceReference.$]
    }
    export type $ = G.$
}

export namespace GInterfaceReference {
    
    export namespace G {
        export type $ = {
            readonly 'context'?: GContext.$
            readonly 'interface': string
        }
    }
    export type $ = G.$
}

export namespace GNamespace {
    
    export namespace G {
        
        export namespace Pinterfaces {
            export type $ = pt.Dictionary<GInterface.$>
        }
        
        export namespace Pnamespaces {
            export type $ = pt.Dictionary<GNamespace.$>
        }
        
        export namespace Ptemplates {
            export type $ = pt.Dictionary<GTemplate.$>
        }
        
        export namespace Ptypes {
            export type $ = pt.Dictionary<GType.$>
        }
        export type $ = {
            readonly 'interfaces': Pinterfaces.$
            readonly 'namespaces'?: Pnamespaces.$
            readonly 'templates'?: Ptemplates.$
            readonly 'types': Ptypes.$
        }
    }
    export type $ = G.$
}

export namespace GParameters {
    
    export namespace G {
        export type $ = pt.Dictionary<null>
    }
    export type $ = G.$
}

export namespace GTemplate {
    
    export namespace G {
        
        export namespace Pparameters {
            export type $ = pt.Dictionary<null>
        }
        export type $ = {
            readonly 'parameters': Pparameters.$
            readonly 'type': GType.$
        }
    }
    export type $ = G.$
}

export namespace GType {
    
    export namespace G {
        
        export namespace Ogroup {
            
            export namespace D {
                export type $ = {
                    readonly 'optional'?: boolean
                    readonly 'type': GType.$
                }
            }
            export type $ = pt.Dictionary<D.$>
        }
        
        export namespace OtaggedUnion {
            export type $ = pt.Dictionary<GType.$>
        }
        
        export namespace Otemplate {
            
            export namespace Parguments {
                export type $ = pt.Dictionary<GType.$>
            }
            export type $ = {
                readonly 'arguments': Parguments.$
                readonly 'context'?: GContext.$
                readonly 'template': string
            }
        }
        export type $ = 
            | ['array', GType.$]
            | ['boolean', null]
            | ['computed', GType.$]
            | ['dictionary', GType.$]
            | ['group', Ogroup.$]
            | ['nested', GType.$]
            | ['null', null]
            | ['number', null]
            | ['optional', GType.$]
            | ['parameter', string]
            | ['reference', GTypeReference.$]
            | ['string', null]
            | ['taggedUnion', OtaggedUnion.$]
            | ['template', Otemplate.$]
    }
    export type $ = G.$
}

export namespace GTypeReference {
    
    export namespace G {
        
        export namespace Pnamespaces {
            export type $ = pt.Array<string>
        }
        export type $ = {
            readonly 'context': GContext.$
            readonly 'namespaces': Pnamespaces.$
            readonly 'type': string
        }
    }
    export type $ = G.$
}