import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace GContext {}
export type GContext = 
    | ['import', string]
    | ['local', null]

export namespace GFunction {
    
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
export type GFunction = {
    readonly 'data': GTypeReference
    readonly 'managed input interface': GFunction.Pmanaged__input__interface
    readonly 'output interface': GFunction.Poutput__interface
    readonly 'return type': GFunction.Preturn__type
}

export namespace GGlossary {
    
    export namespace Pfunctions {}
    export type Pfunctions = pt.Dictionary<GFunction>
    
    export namespace Pimports {}
    export type Pimports = pt.Dictionary<string>
}
export type GGlossary = {
    readonly 'functions': GGlossary.Pfunctions
    readonly 'imports': GGlossary.Pimports
    readonly 'namespace': GNamespace
    readonly 'parameters'?: GParameters
}

export namespace GInterface {
    
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
        
        export namespace Pinterface {}
        export type Pinterface = null | GInterface
    }
    export type Omethod = {
        readonly 'data': Omethod.Pdata
        readonly 'interface': Omethod.Pinterface
    }
}
export type GInterface = 
    | ['group', GInterface.Ogroup]
    | ['method', GInterface.Omethod]
    | ['reference', GInterfaceReference]

export namespace GInterfaceReference {}
export type GInterfaceReference = {
    readonly 'context'?: GContext
    readonly 'interface': string
}

export namespace GNamespace {
    
    export namespace Pinterfaces {}
    export type Pinterfaces = pt.Dictionary<GInterface>
    
    export namespace Pnamespaces {}
    export type Pnamespaces = pt.Dictionary<GNamespace>
    
    export namespace Ptemplates {}
    export type Ptemplates = pt.Dictionary<GTemplate>
    
    export namespace Ptypes {}
    export type Ptypes = pt.Dictionary<GType>
}
export type GNamespace = {
    readonly 'interfaces': GNamespace.Pinterfaces
    readonly 'namespaces'?: GNamespace.Pnamespaces
    readonly 'templates'?: GNamespace.Ptemplates
    readonly 'types': GNamespace.Ptypes
}

export namespace GParameters {}
export type GParameters = pt.Dictionary<null>

export namespace GTemplate {
    
    export namespace Pparameters {}
    export type Pparameters = pt.Dictionary<null>
}
export type GTemplate = {
    readonly 'parameters': GTemplate.Pparameters
    readonly 'type': GType
}

export namespace GType {
    
    export namespace Ogroup {
        
        export namespace D {}
        export type D = {
            readonly 'optional'?: boolean
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
        readonly 'context'?: GContext
        readonly 'template': string
    }
}
export type GType = 
    | ['array', GType]
    | ['boolean', null]
    | ['computed', GType]
    | ['dictionary', GType]
    | ['group', GType.Ogroup]
    | ['nested', GType]
    | ['null', null]
    | ['number', null]
    | ['optional', GType]
    | ['parameter', string]
    | ['reference', GTypeReference]
    | ['string', null]
    | ['taggedUnion', GType.OtaggedUnion]
    | ['template', GType.Otemplate]

export namespace GTypeReference {
    
    export namespace Pnamespaces {}
    export type Pnamespaces = pt.Array<string>
}
export type GTypeReference = {
    readonly 'context': GContext
    readonly 'namespaces': GTypeReference.Pnamespaces
    readonly 'type': string
}