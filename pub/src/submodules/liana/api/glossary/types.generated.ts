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
        export type D<AReferencedType, AType> = MConstrainedDictionaryEntry<UXGlobalType<AReferencedType, AType>, UXArgument<AReferencedType, AType>>
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

export namespace VOptional {
    
    export namespace Onot__set {}
    export type Onot__set<AType> = {}
}
export type VOptional<AType> = 
    | ['not set', VOptional.Onot__set<AType>]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

export namespace VPossibly {
    
    export namespace Onot__set {}
    export type Onot__set<AType> = {}
}
export type VPossibly<AType> = 
    | ['not set', VPossibly.Onot__set<AType>]
    | ['set', AType]

export type MPossibly<AType> = VPossibly<AType>

export namespace VReference {}
export type VReference<AReferencedType> = {
    readonly 'annotation': string
    readonly 'name': string
    readonly 'referenced value': AReferencedType
}

export type MReference<AReferencedType> = VReference<AReferencedType>

export namespace G_$Reference {}
export type G_$Reference = {
    readonly 'annotation': string
    readonly 'name': string
}
export type U_$Reference = G_$Reference

export namespace GGlobalType {}
export type GGlobalType = {
    readonly 'parameters': UParameters
    readonly 'type': ULocalType
}
export type UGlobalType = GGlobalType

export namespace GLocalType {
    
    export namespace Oarray {}
    export type Oarray = {
        readonly 'type': ULocalType
    }
    
    export namespace Oboolean {}
    export type Oboolean = {}
    
    export namespace Ocomponent {
        
        export namespace Parguments {
            
            export namespace TPType {}
            export type TPType = {}
        }
        export type Parguments = MDictionary<Parguments.TPType>
    }
    export type Ocomponent = {
        readonly 'arguments': Ocomponent.Parguments
        readonly 'type': U_$Reference
    }
    
    export namespace Odictionary {}
    export type Odictionary = {
        readonly 'key': UString
        readonly 'type': ULocalType
    }
    
    export namespace Ogroup {}
    export type Ogroup = {
        readonly 'properties': UProperties
    }
    
    export namespace OtaggedUnion {
        
        export namespace Poptions {
            
            export namespace TPType {}
            export type TPType = {
                readonly 'type': ULocalType
            }
        }
        export type Poptions = MDictionary<Poptions.TPType>
    }
    export type OtaggedUnion = {
        readonly 'default': U_$Reference
        readonly 'options': OtaggedUnion.Poptions
    }
}
export type GLocalType = 
    | ['array', GLocalType.Oarray]
    | ['boolean', GLocalType.Oboolean]
    | ['component', GLocalType.Ocomponent]
    | ['dictionary', GLocalType.Odictionary]
    | ['group', GLocalType.Ogroup]
    | ['string', UString]
    | ['taggedUnion', GLocalType.OtaggedUnion]
export type ULocalType = GLocalType

export namespace GModel {
    
    export namespace PglobalTypes {}
    export type PglobalTypes = MDictionary<UGlobalType>
    
    export namespace PstringTypes {
        
        export namespace TPType {}
        export type TPType = {}
    }
    export type PstringTypes = MDictionary<PstringTypes.TPType>
}
export type GModel = {
    readonly 'globalTypes': GModel.PglobalTypes
    readonly 'root': U_$Reference
    readonly 'stringTypes': GModel.PstringTypes
}
export type UModel = GModel
export type UParameter = U_$Reference

export namespace GParameters {}
export type GParameters = MDictionary<UParameter>
export type UParameters = GParameters

export namespace GPossibleModel {
    
    export namespace TPType {}
    export type TPType = {
        readonly 'has errors': boolean
        readonly 'model': UXModel
    }
}
export type GPossibleModel = MPossibly<GPossibleModel.TPType>
export type UPossibleModel = GPossibleModel

export namespace GProperties {}
export type GProperties = MDictionary<UProperty>
export type UProperties = GProperties

export namespace GProperty {
    
    export namespace Psibling__dependencies {
        
        export namespace TPType {}
        export type TPType = {}
    }
    export type Psibling__dependencies = MDictionary<Psibling__dependencies.TPType>
}
export type GProperty = {
    readonly 'sibling dependencies': GProperty.Psibling__dependencies
    readonly 'type': ULocalType
}
export type UProperty = GProperty

export namespace GReference {
    
    export namespace Psteps {
        
        export namespace A {
            
            export namespace Oarray {}
            export type Oarray = {}
            
            export namespace Oreference {}
            export type Oreference = {}
        }
        export type A = 
            | ['array', A.Oarray]
            | ['group', U_$Reference]
            | ['reference', A.Oreference]
            | ['tagged union', U_$Reference]
    }
    export type Psteps = pt.Array<Psteps.A>
    
    export namespace Ptype {
        
        export namespace Oother {}
        export type Oother = {}
    }
    export type Ptype = 
        | ['other', Ptype.Oother]
        | ['parameter', U_$Reference]
        | ['sibling', U_$Reference]
}
export type GReference = {
    readonly 'steps': GReference.Psteps
    readonly 'type': GReference.Ptype
}
export type UReference = GReference

export namespace GString {
    
    export namespace Pconstrained {
        
        export namespace Ono {}
        export type Ono = {
            readonly 'type': U_$Reference
        }
    }
    export type Pconstrained = 
        | ['no', Pconstrained.Ono]
        | ['yes', UReference]
}
export type GString = {
    readonly 'constrained': GString.Pconstrained
}
export type UString = GString

export namespace GXArgument {}
export type GXArgument = MComputedReference<UXGlobalType>
export type UXArgument = GXArgument

export namespace GXGlobalType {}
export type GXGlobalType = {
    readonly 'parameters': UXParameters
    readonly 'type': UXLocalType
}
export type UXGlobalType = GXGlobalType

export namespace GXLocalType {
    
    export namespace Oarray {}
    export type Oarray = {
        readonly 'type': UXLocalType
    }
    
    export namespace Oboolean {}
    export type Oboolean = {}
    
    export namespace Ocomponent {
        
        export namespace Parguments {}
        export type Parguments = MConstrainedDictionary<UXParameter, UXArgument>
        
        export namespace Ptype {}
        export type Ptype = MComputedReference<UXGlobalType>
    }
    export type Ocomponent = {
        readonly 'arguments': Ocomponent.Parguments
        readonly 'type': Ocomponent.Ptype
    }
    
    export namespace Odictionary {}
    export type Odictionary = {
        readonly 'key': UXString
        readonly 'type': UXLocalType
    }
    
    export namespace Ogroup {}
    export type Ogroup = {
        readonly 'properties': UXProperties
    }
    
    export namespace OtaggedUnion {
        
        export namespace Pdefault {}
        export type Pdefault = MReference<UXOption>
        
        export namespace Poptions {}
        export type Poptions = MDictionary<UXOption>
    }
    export type OtaggedUnion = {
        readonly 'default': OtaggedUnion.Pdefault
        readonly 'options': OtaggedUnion.Poptions
    }
}
export type GXLocalType = 
    | ['array', GXLocalType.Oarray]
    | ['boolean', GXLocalType.Oboolean]
    | ['component', GXLocalType.Ocomponent]
    | ['dictionary', GXLocalType.Odictionary]
    | ['group', GXLocalType.Ogroup]
    | ['string', UXString]
    | ['taggedUnion', GXLocalType.OtaggedUnion]
export type UXLocalType = GXLocalType

export namespace GXModel {
    
    export namespace PglobalTypes {}
    export type PglobalTypes = MDictionary<UXGlobalType>
    
    export namespace Proot {}
    export type Proot = MReference<UXGlobalType>
    
    export namespace PstringTypes {}
    export type PstringTypes = MDictionary<UXStringType>
}
export type GXModel = {
    readonly 'globalTypes': GXModel.PglobalTypes
    readonly 'root': GXModel.Proot
    readonly 'stringTypes': GXModel.PstringTypes
}
export type UXModel = GXModel

export namespace GXOption {}
export type GXOption = {
    readonly 'type': UXLocalType
}
export type UXOption = GXOption

export namespace GXParameter {}
export type GXParameter = {}
export type UXParameter = GXParameter

export namespace GXParameters {}
export type GXParameters = MDictionary<UXParameter>
export type UXParameters = GXParameters

export namespace GXProperties {}
export type GXProperties = MDictionary<UXProperty>
export type UXProperties = GXProperties

export namespace GXProperty {}
export type GXProperty = {
    readonly 'type': UXLocalType
}
export type UXProperty = GXProperty

export namespace GXReference {
    
    export namespace Presolved__type {}
    export type Presolved__type = MOptional<ULocalType>
}
export type GXReference = {
    readonly 'resolved type': GXReference.Presolved__type
}
export type UXReference = GXReference

export namespace GXString {
    
    export namespace Pconstrained {
        
        export namespace Ono {
            
            export namespace Ptype {}
            export type Ptype = MReference<UXStringType>
        }
        export type Ono = {
            readonly 'type': Ono.Ptype
        }
    }
    export type Pconstrained = 
        | ['no', Pconstrained.Ono]
        | ['yes', UXReference]
}
export type GXString = {
    readonly 'constrained': GXString.Pconstrained
}
export type UXString = GXString

export namespace GXStringType {}
export type GXStringType = {}
export type UXStringType = GXStringType