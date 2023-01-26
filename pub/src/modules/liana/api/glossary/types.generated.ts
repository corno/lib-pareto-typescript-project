import * as pt from 'pareto-core-types'


export namespace VComputedReference {
    
    export namespace Preferenced__value {}
    export type Preferenced__value<AReferencedType> = () => AReferencedType
}
export type VComputedReference<AReferencedType> = {
    readonly 'annotation': string
    readonly 'name': string
    readonly 'referenced value': VComputedReference.Preferenced__value<AReferencedType>
}

export type MComputedReference<AReferencedType> = VComputedReference<AReferencedType>

export namespace VConstrainedDictionary {
    
    export namespace Pdictionary {
        
        export namespace D {}
        export type D<AReferencedType, AType> = MConstrainedDictionaryEntry<GXGlobalType, GXArgument>
    }
    export type Pdictionary<AReferencedType, AType> = pt.Dictionary<Pdictionary.D<AReferencedType, AType>>
}
export type VConstrainedDictionary<AReferencedType, AType> = {
    readonly 'annotation': string
    readonly 'dictionary': VConstrainedDictionary.Pdictionary<AReferencedType, AType>
}

export type MConstrainedDictionary<AReferencedType, AType> = VConstrainedDictionary<AReferencedType, AType>

export namespace VConstrainedDictionaryEntry {}
export type VConstrainedDictionaryEntry<AReferencedType, AType> = {
    readonly 'referenced value': AReferencedType
    readonly 'value': AType
}

export type MConstrainedDictionaryEntry<AReferencedType, AType> = VConstrainedDictionaryEntry<AReferencedType, AType>

export namespace VDictionary {
    
    export namespace Pdictionary {}
    export type Pdictionary<AType> = pt.Dictionary<AType>
}
export type VDictionary<AType> = {
    readonly 'annotation': string
    readonly 'dictionary': VDictionary.Pdictionary<AType>
}

export type MDictionary<AType> = VDictionary<AType>

export namespace VPossibly {}
export type VPossibly<AType> = 
    | ['not set', null]
    | ['set', AType]

export type MPossibly<AType> = VPossibly<AType>

export namespace VReference {}
export type VReference<AReferencedType> = {
    readonly 'annotation': string
    readonly 'name': string
    readonly 'referenced value': AReferencedType
}

export type MReference<AReferencedType> = VReference<AReferencedType>

export namespace U_$Reference {}
export type U_$Reference = {
    readonly 'annotation': string
    readonly 'name': string
}
export type G_$Reference = U_$Reference

export namespace UGlobalType {}
export type UGlobalType = {
    readonly 'parameters': GParameters
    readonly 'type': GLocalType
}
export type GGlobalType = UGlobalType

export namespace ULocalType {
    
    export namespace Oarray {}
    export type Oarray = {
        readonly 'type': GLocalType
    }
    
    export namespace Ocomponent {
        
        export namespace Parguments {}
        export type Parguments = MDictionary<null>
    }
    export type Ocomponent = {
        readonly 'arguments': Ocomponent.Parguments
        readonly 'type': G_$Reference
    }
    
    export namespace Odictionary {}
    export type Odictionary = {
        readonly 'key': GString
        readonly 'type': GLocalType
    }
    
    export namespace Ogroup {}
    export type Ogroup = {
        readonly 'properties': GProperties
    }
    
    export namespace OtaggedUnion {
        
        export namespace Poptions {
            
            export namespace TPType {}
            export type TPType = {
                readonly 'type': GLocalType
            }
        }
        export type Poptions = MDictionary<Poptions.TPType>
    }
    export type OtaggedUnion = {
        readonly 'default': G_$Reference
        readonly 'options': OtaggedUnion.Poptions
    }
}
export type ULocalType = 
    | ['array', ULocalType.Oarray]
    | ['boolean', null]
    | ['component', ULocalType.Ocomponent]
    | ['dictionary', ULocalType.Odictionary]
    | ['group', ULocalType.Ogroup]
    | ['string', GString]
    | ['taggedUnion', ULocalType.OtaggedUnion]
export type GLocalType = ULocalType

export namespace UModel {
    
    export namespace PglobalTypes {}
    export type PglobalTypes = MDictionary<GGlobalType>
    
    export namespace PstringTypes {}
    export type PstringTypes = MDictionary<null>
}
export type UModel = {
    readonly 'globalTypes': UModel.PglobalTypes
    readonly 'root': G_$Reference
    readonly 'stringTypes': UModel.PstringTypes
}
export type GModel = UModel
export type GParameter = G_$Reference

export namespace UParameters {}
export type UParameters = MDictionary<GParameter>
export type GParameters = UParameters

export namespace UPossibleModel {
    
    export namespace TPType {}
    export type TPType = {
        readonly 'has errors': boolean
        readonly 'model': GXModel
    }
}
export type UPossibleModel = MPossibly<UPossibleModel.TPType>
export type GPossibleModel = UPossibleModel

export namespace UProperties {}
export type UProperties = MDictionary<GProperty>
export type GProperties = UProperties

export namespace UProperty {
    
    export namespace Psibling__dependencies {}
    export type Psibling__dependencies = MDictionary<null>
}
export type UProperty = {
    readonly 'sibling dependencies': UProperty.Psibling__dependencies
    readonly 'type': GLocalType
}
export type GProperty = UProperty

export namespace UReference {
    
    export namespace Psteps {
        
        export namespace A {}
        export type A = 
            | ['array', null]
            | ['group', G_$Reference]
            | ['reference', null]
            | ['tagged union', G_$Reference]
    }
    export type Psteps = pt.Array<Psteps.A>
    
    export namespace Ptype {}
    export type Ptype = 
        | ['other', null]
        | ['parameter', G_$Reference]
        | ['sibling', G_$Reference]
}
export type UReference = {
    readonly 'steps': UReference.Psteps
    readonly 'type': UReference.Ptype
}
export type GReference = UReference

export namespace UString {
    
    export namespace Pconstrained {
        
        export namespace Ono {}
        export type Ono = {
            readonly 'type': G_$Reference
        }
    }
    export type Pconstrained = 
        | ['no', Pconstrained.Ono]
        | ['yes', GReference]
}
export type UString = {
    readonly 'constrained': UString.Pconstrained
}
export type GString = UString

export namespace UXArgument {}
export type UXArgument = MComputedReference<GXGlobalType>
export type GXArgument = UXArgument

export namespace UXGlobalType {}
export type UXGlobalType = {
    readonly 'parameters': GXParameters
    readonly 'type': GXLocalType
}
export type GXGlobalType = UXGlobalType

export namespace UXLocalType {
    
    export namespace Oarray {}
    export type Oarray = {
        readonly 'type': GXLocalType
    }
    
    export namespace Ocomponent {
        
        export namespace Parguments {}
        export type Parguments = MConstrainedDictionary<GXParameter, GXArgument>
        
        export namespace Ptype {}
        export type Ptype = MComputedReference<GXGlobalType>
    }
    export type Ocomponent = {
        readonly 'arguments': Ocomponent.Parguments
        readonly 'type': Ocomponent.Ptype
    }
    
    export namespace Odictionary {}
    export type Odictionary = {
        readonly 'key': GXString
        readonly 'type': GXLocalType
    }
    
    export namespace Ogroup {}
    export type Ogroup = {
        readonly 'properties': GXProperties
    }
    
    export namespace OtaggedUnion {
        
        export namespace Pdefault {}
        export type Pdefault = MReference<GXOption>
        
        export namespace Poptions {}
        export type Poptions = MDictionary<GXOption>
    }
    export type OtaggedUnion = {
        readonly 'default': OtaggedUnion.Pdefault
        readonly 'options': OtaggedUnion.Poptions
    }
}
export type UXLocalType = 
    | ['array', UXLocalType.Oarray]
    | ['boolean', null]
    | ['component', UXLocalType.Ocomponent]
    | ['dictionary', UXLocalType.Odictionary]
    | ['group', UXLocalType.Ogroup]
    | ['string', GXString]
    | ['taggedUnion', UXLocalType.OtaggedUnion]
export type GXLocalType = UXLocalType

export namespace UXModel {
    
    export namespace PglobalTypes {}
    export type PglobalTypes = MDictionary<GXGlobalType>
    
    export namespace Proot {}
    export type Proot = MReference<GXGlobalType>
    
    export namespace PstringTypes {}
    export type PstringTypes = MDictionary<GXStringType>
}
export type UXModel = {
    readonly 'globalTypes': UXModel.PglobalTypes
    readonly 'root': UXModel.Proot
    readonly 'stringTypes': UXModel.PstringTypes
}
export type GXModel = UXModel

export namespace UXOption {}
export type UXOption = {
    readonly 'type': GXLocalType
}
export type GXOption = UXOption
export type GXParameter = null

export namespace UXParameters {}
export type UXParameters = MDictionary<GXParameter>
export type GXParameters = UXParameters

export namespace UXProperties {}
export type UXProperties = MDictionary<GXProperty>
export type GXProperties = UXProperties

export namespace UXProperty {}
export type UXProperty = {
    readonly 'type': GXLocalType
}
export type GXProperty = UXProperty

export namespace UXReference {
    
    export namespace Presolved__type {}
    export type Presolved__type = null | GLocalType
}
export type UXReference = {
    readonly 'resolved type': UXReference.Presolved__type
}
export type GXReference = UXReference

export namespace UXString {
    
    export namespace Pconstrained {
        
        export namespace Ono {
            
            export namespace Ptype {}
            export type Ptype = MReference<GXStringType>
        }
        export type Ono = {
            readonly 'type': Ono.Ptype
        }
    }
    export type Pconstrained = 
        | ['no', Pconstrained.Ono]
        | ['yes', GXReference]
}
export type UXString = {
    readonly 'constrained': UXString.Pconstrained
}
export type GXString = UXString
export type GXStringType = null