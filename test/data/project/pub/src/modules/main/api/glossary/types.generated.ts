import * as pt from 'pareto-core-types'

import * as mfp from "lib-fountain-pen"

export namespace GContext {}
export type GContext = 
    | ['import', string]
    | ['local', null]
export type UContext = GContext

export namespace GFunction {
    
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
export type GFunction = {
    readonly 'data': UTypeReference
    readonly 'managed input interface': GFunction.Pmanaged__input__interface
    readonly 'output interface': GFunction.Poutput__interface
    readonly 'return type': GFunction.Preturn__type
}
export type UFunction = GFunction

export namespace GGlossary {
    
    export namespace Pfunctions {}
    export type Pfunctions = pt.Dictionary<UFunction>
    
    export namespace Pimports {}
    export type Pimports = pt.Dictionary<string>
}
export type GGlossary = {
    readonly 'functions': GGlossary.Pfunctions
    readonly 'imports': GGlossary.Pimports
    readonly 'namespace': UNamespace
    readonly 'parameters'?: UParameters
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
        
        export namespace Pinterface {}
        export type Pinterface = null | UInterface
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
    readonly 'context'?: UContext
    readonly 'interface': string
}
export type UInterfaceReference = GInterfaceReference

export namespace GNamespace {
    
    export namespace Pinterfaces {}
    export type Pinterfaces = pt.Dictionary<UInterface>
    
    export namespace Pnamespaces {}
    export type Pnamespaces = pt.Dictionary<UNamespace>
    
    export namespace Ptemplates {}
    export type Ptemplates = pt.Dictionary<UTemplate>
    
    export namespace Ptypes {}
    export type Ptypes = pt.Dictionary<UType>
}
export type GNamespace = {
    readonly 'interfaces': GNamespace.Pinterfaces
    readonly 'namespaces'?: GNamespace.Pnamespaces
    readonly 'templates'?: GNamespace.Ptemplates
    readonly 'types': GNamespace.Ptypes
}
export type UNamespace = GNamespace

export namespace GParameters {}
export type GParameters = pt.Dictionary<null>
export type UParameters = GParameters

export namespace GTemplate {
    
    export namespace Pparameters {}
    export type Pparameters = pt.Dictionary<null>
}
export type GTemplate = {
    readonly 'parameters': GTemplate.Pparameters
    readonly 'type': UType
}
export type UTemplate = GTemplate

export namespace GType {
    
    export namespace Ogroup {
        
        export namespace D {}
        export type D = {
            readonly 'optional'?: boolean
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
        readonly 'context'?: UContext
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

export namespace GTypeReference {
    
    export namespace Pnamespaces {}
    export type Pnamespaces = pt.Array<string>
}
export type GTypeReference = {
    readonly 'context': UContext
    readonly 'namespaces': GTypeReference.Pnamespaces
    readonly 'type': string
}
export type UTypeReference = GTypeReference