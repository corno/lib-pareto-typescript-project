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

export namespace G_$Reference {
    
    export namespace G {}
    export type G = {
        readonly 'annotation': string
        readonly 'name': string
    }
}
export type G_$Reference = G_$Reference.G

export namespace GGlobalType {
    
    export namespace G {}
    export type G = {
        readonly 'parameters': GParameters
        readonly 'type': GLocalType
    }
}
export type GGlobalType = GGlobalType.G

export namespace GLocalType {
    
    export namespace G {
        
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
    export type G = 
        | ['array', G.Oarray]
        | ['boolean', null]
        | ['component', G.Ocomponent]
        | ['dictionary', G.Odictionary]
        | ['group', G.Ogroup]
        | ['string', GString]
        | ['taggedUnion', G.OtaggedUnion]
}
export type GLocalType = GLocalType.G

export namespace GModel {
    
    export namespace G {
        
        export namespace PglobalTypes {}
        export type PglobalTypes = MDictionary<GGlobalType>
        
        export namespace PstringTypes {}
        export type PstringTypes = MDictionary<null>
    }
    export type G = {
        readonly 'globalTypes': G.PglobalTypes
        readonly 'root': G_$Reference
        readonly 'stringTypes': G.PstringTypes
    }
}
export type GModel = GModel.G

export namespace GParameter {}
export type GParameter = G_$Reference

export namespace GParameters {
    
    export namespace G {}
    export type G = MDictionary<GParameter>
}
export type GParameters = GParameters.G

export namespace GPossibleModel {
    
    export namespace G {
        
        export namespace TPType {}
        export type TPType = {
            readonly 'has errors': boolean
            readonly 'model': GXModel
        }
    }
    export type G = MPossibly<G.TPType>
}
export type GPossibleModel = GPossibleModel.G

export namespace GProperties {
    
    export namespace G {}
    export type G = MDictionary<GProperty>
}
export type GProperties = GProperties.G

export namespace GProperty {
    
    export namespace G {
        
        export namespace Psibling__dependencies {}
        export type Psibling__dependencies = MDictionary<null>
    }
    export type G = {
        readonly 'sibling dependencies': G.Psibling__dependencies
        readonly 'type': GLocalType
    }
}
export type GProperty = GProperty.G

export namespace GReference {
    
    export namespace G {
        
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
    export type G = {
        readonly 'steps': G.Psteps
        readonly 'type': G.Ptype
    }
}
export type GReference = GReference.G

export namespace GString {
    
    export namespace G {
        
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
    export type G = {
        readonly 'constrained': G.Pconstrained
    }
}
export type GString = GString.G

export namespace GXArgument {
    
    export namespace G {}
    export type G = MComputedReference<GXGlobalType>
}
export type GXArgument = GXArgument.G

export namespace GXGlobalType {
    
    export namespace G {}
    export type G = {
        readonly 'parameters': GXParameters
        readonly 'type': GXLocalType
    }
}
export type GXGlobalType = GXGlobalType.G

export namespace GXLocalType {
    
    export namespace G {
        
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
    export type G = 
        | ['array', G.Oarray]
        | ['boolean', null]
        | ['component', G.Ocomponent]
        | ['dictionary', G.Odictionary]
        | ['group', G.Ogroup]
        | ['string', GXString]
        | ['taggedUnion', G.OtaggedUnion]
}
export type GXLocalType = GXLocalType.G

export namespace GXModel {
    
    export namespace G {
        
        export namespace PglobalTypes {}
        export type PglobalTypes = MDictionary<GXGlobalType>
        
        export namespace Proot {}
        export type Proot = MReference<GXGlobalType>
        
        export namespace PstringTypes {}
        export type PstringTypes = MDictionary<GXStringType>
    }
    export type G = {
        readonly 'globalTypes': G.PglobalTypes
        readonly 'root': G.Proot
        readonly 'stringTypes': G.PstringTypes
    }
}
export type GXModel = GXModel.G

export namespace GXOption {
    
    export namespace G {}
    export type G = {
        readonly 'type': GXLocalType
    }
}
export type GXOption = GXOption.G

export namespace GXParameter {}
export type GXParameter = null

export namespace GXParameters {
    
    export namespace G {}
    export type G = MDictionary<GXParameter>
}
export type GXParameters = GXParameters.G

export namespace GXProperties {
    
    export namespace G {}
    export type G = MDictionary<GXProperty>
}
export type GXProperties = GXProperties.G

export namespace GXProperty {
    
    export namespace G {}
    export type G = {
        readonly 'type': GXLocalType
    }
}
export type GXProperty = GXProperty.G

export namespace GXReference {
    
    export namespace G {
        
        export namespace Presolved__type {}
        export type Presolved__type = null | GLocalType
    }
    export type G = {
        readonly 'resolved type': G.Presolved__type
    }
}
export type GXReference = GXReference.G

export namespace GXString {
    
    export namespace G {
        
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
    export type G = {
        readonly 'constrained': G.Pconstrained
    }
}
export type GXString = GXString.G

export namespace GXStringType {}
export type GXStringType = null