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
        
        export namespace Preturn_$_$type {
            
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
            readonly 'managed input interface': null | GInterfaceReference.$
            readonly 'output interface': null | GInterfaceReference.$
            readonly 'return type': G.$
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
            readonly 'functions': G.$
            readonly 'imports': G.$
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
                readonly 'members': Ogroup.$
            }
        }
        
        export namespace Omethod {
            export type $ = {
                readonly 'data': null | GTypeReference.$
                readonly 'interface': null | GInterface.$
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
            readonly 'interfaces': G.$
            readonly 'namespaces'?: G.$
            readonly 'templates'?: G.$
            readonly 'types': G.$
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
            readonly 'parameters': G.$
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
                readonly 'arguments': Otemplate.$
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
            readonly 'namespaces': G.$
            readonly 'type': string
        }
    }
    export type $ = G.$
}