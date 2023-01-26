import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace gContext {}
export type gContext = 
    | ['import', string]
    | ['local', null]
export type UContext = GContext

export namespace gFunction {
    
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
export type gFunction = {
    readonly 'data': GTypeReference
    readonly 'managed input interface': gFunction.Pmanaged__input__interface
    readonly 'output interface': gFunction.Poutput__interface
    readonly 'return type': gFunction.Preturn__type
}
export type UFunction = GFunction

export namespace gGlossary {
    
    export namespace Pfunctions {}
    export type Pfunctions = pt.Dictionary<GFunction>
    
    export namespace Pimports {}
    export type Pimports = pt.Dictionary<string>
}
export type gGlossary = {
    readonly 'functions': gGlossary.Pfunctions
    readonly 'imports': gGlossary.Pimports
    readonly 'namespace': GNamespace
    readonly 'parameters'?: GParameters
}
export type UGlossary = GGlossary

export namespace gInterface {
    
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
export type gInterface = 
    | ['group', gInterface.Ogroup]
    | ['method', gInterface.Omethod]
    | ['reference', GInterfaceReference]
export type UInterface = GInterface

export namespace gInterfaceReference {}
export type gInterfaceReference = {
    readonly 'context'?: GContext
    readonly 'interface': string
}
export type UInterfaceReference = GInterfaceReference

export namespace gNamespace {
    
    export namespace Pinterfaces {}
    export type Pinterfaces = pt.Dictionary<GInterface>
    
    export namespace Pnamespaces {}
    export type Pnamespaces = pt.Dictionary<GNamespace>
    
    export namespace Ptemplates {}
    export type Ptemplates = pt.Dictionary<GTemplate>
    
    export namespace Ptypes {}
    export type Ptypes = pt.Dictionary<GType>
}
export type gNamespace = {
    readonly 'interfaces': gNamespace.Pinterfaces
    readonly 'namespaces'?: gNamespace.Pnamespaces
    readonly 'templates'?: gNamespace.Ptemplates
    readonly 'types': gNamespace.Ptypes
}
export type UNamespace = GNamespace

export namespace gParameters {}
export type gParameters = pt.Dictionary<null>
export type UParameters = GParameters

export namespace gTemplate {
    
    export namespace Pparameters {}
    export type Pparameters = pt.Dictionary<null>
}
export type gTemplate = {
    readonly 'parameters': gTemplate.Pparameters
    readonly 'type': GType
}
export type UTemplate = GTemplate

export namespace gType {
    
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
export type gType = 
    | ['array', GType]
    | ['boolean', null]
    | ['computed', GType]
    | ['dictionary', GType]
    | ['group', gType.Ogroup]
    | ['nested', GType]
    | ['null', null]
    | ['number', null]
    | ['optional', GType]
    | ['parameter', string]
    | ['reference', GTypeReference]
    | ['string', null]
    | ['taggedUnion', gType.OtaggedUnion]
    | ['template', gType.Otemplate]
export type UType = GType

export namespace gTypeReference {
    
    export namespace Pnamespaces {}
    export type Pnamespaces = pt.Array<string>
}
export type gTypeReference = {
    readonly 'context': GContext
    readonly 'namespaces': gTypeReference.Pnamespaces
    readonly 'type': string
}
export type UTypeReference = GTypeReference