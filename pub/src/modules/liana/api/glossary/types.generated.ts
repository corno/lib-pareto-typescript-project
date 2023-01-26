import * as pt from 'pareto-core-types'


export namespace VComputedReference {
    
    export namespace Preferenced__value {
        export type /*FIXME REMOVE*/$<AReferencedType> = () => AReferencedType
    }
    export type Preferenced__value<AReferencedType> = Preferenced__value.$<AReferencedType>
    export type /*FIXME REMOVE*/$<AReferencedType> = {
        readonly 'annotation': string
        readonly 'name': string
        readonly 'referenced value': Preferenced__value<AReferencedType>
    }
}
export type VComputedReference<AReferencedType> = VComputedReference.$<AReferencedType>

export type MComputedReference<AReferencedType> = VComputedReference<AReferencedType>

export namespace VConstrainedDictionary {
    
    export namespace Pdictionary {
        
        export namespace D {
            export type /*FIXME REMOVE*/$<AReferencedType, AType> = MConstrainedDictionaryEntry<GXGlobalType, GXArgument>
        }
        export type D<AReferencedType, AType> = D.$<AReferencedType, AType>
        export type /*FIXME REMOVE*/$<AReferencedType, AType> = pt.Dictionary<D<AReferencedType, AType>>
    }
    export type Pdictionary<AReferencedType, AType> = Pdictionary.$<AReferencedType, AType>
    export type /*FIXME REMOVE*/$<AReferencedType, AType> = {
        readonly 'annotation': string
        readonly 'dictionary': Pdictionary<AReferencedType, AType>
    }
}
export type VConstrainedDictionary<AReferencedType, AType> = VConstrainedDictionary.$<AReferencedType, AType>

export type MConstrainedDictionary<AReferencedType, AType> = VConstrainedDictionary<AReferencedType, AType>

export namespace VConstrainedDictionaryEntry {
    export type /*FIXME REMOVE*/$<AReferencedType, AType> = {
        readonly 'referenced value': AReferencedType
        readonly 'value': AType
    }
}
export type VConstrainedDictionaryEntry<AReferencedType, AType> = VConstrainedDictionaryEntry.$<AReferencedType, AType>

export type MConstrainedDictionaryEntry<AReferencedType, AType> = VConstrainedDictionaryEntry<AReferencedType, AType>

export namespace VDictionary {
    
    export namespace Pdictionary {
        export type /*FIXME REMOVE*/$<AType> = pt.Dictionary<AType>
    }
    export type Pdictionary<AType> = Pdictionary.$<AType>
    export type /*FIXME REMOVE*/$<AType> = {
        readonly 'annotation': string
        readonly 'dictionary': Pdictionary<AType>
    }
}
export type VDictionary<AType> = VDictionary.$<AType>

export type MDictionary<AType> = VDictionary<AType>

export namespace VPossibly {
    export type /*FIXME REMOVE*/$<AType> = 
        | ['not set', null]
        | ['set', AType]
}
export type VPossibly<AType> = VPossibly.$<AType>

export type MPossibly<AType> = VPossibly<AType>

export namespace VReference {
    export type /*FIXME REMOVE*/$<AReferencedType> = {
        readonly 'annotation': string
        readonly 'name': string
        readonly 'referenced value': AReferencedType
    }
}
export type VReference<AReferencedType> = VReference.$<AReferencedType>

export type MReference<AReferencedType> = VReference<AReferencedType>

export namespace G_$Reference {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {
            readonly 'annotation': string
            readonly 'name': string
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type G_$Reference = G_$Reference.$

export namespace GGlobalType {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {
            readonly 'parameters': GParameters
            readonly 'type': GLocalType
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GGlobalType = GGlobalType.$

export namespace GLocalType {
    
    export namespace G {
        
        export namespace Oarray {
            export type /*FIXME REMOVE*/$ = {
                readonly 'type': GLocalType
            }
        }
        export type Oarray = Oarray.$
        
        export namespace Ocomponent {
            
            export namespace Parguments {
                export type /*FIXME REMOVE*/$ = MDictionary<null>
            }
            export type Parguments = Parguments.$
            export type /*FIXME REMOVE*/$ = {
                readonly 'arguments': Parguments
                readonly 'type': G_$Reference
            }
        }
        export type Ocomponent = Ocomponent.$
        
        export namespace Odictionary {
            export type /*FIXME REMOVE*/$ = {
                readonly 'key': GString
                readonly 'type': GLocalType
            }
        }
        export type Odictionary = Odictionary.$
        
        export namespace Ogroup {
            export type /*FIXME REMOVE*/$ = {
                readonly 'properties': GProperties
            }
        }
        export type Ogroup = Ogroup.$
        
        export namespace OtaggedUnion {
            
            export namespace Poptions {
                
                export namespace TPType {
                    export type /*FIXME REMOVE*/$ = {
                        readonly 'type': GLocalType
                    }
                }
                export type TPType = TPType.$
                export type /*FIXME REMOVE*/$ = MDictionary<TPType>
            }
            export type Poptions = Poptions.$
            export type /*FIXME REMOVE*/$ = {
                readonly 'default': G_$Reference
                readonly 'options': Poptions
            }
        }
        export type OtaggedUnion = OtaggedUnion.$
        export type /*FIXME REMOVE*/$ = 
            | ['array', Oarray]
            | ['boolean', null]
            | ['component', Ocomponent]
            | ['dictionary', Odictionary]
            | ['group', Ogroup]
            | ['string', GString]
            | ['taggedUnion', OtaggedUnion]
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GLocalType = GLocalType.$

export namespace GModel {
    
    export namespace G {
        
        export namespace PglobalTypes {
            export type /*FIXME REMOVE*/$ = MDictionary<GGlobalType>
        }
        export type PglobalTypes = PglobalTypes.$
        
        export namespace PstringTypes {
            export type /*FIXME REMOVE*/$ = MDictionary<null>
        }
        export type PstringTypes = PstringTypes.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'globalTypes': PglobalTypes
            readonly 'root': G_$Reference
            readonly 'stringTypes': PstringTypes
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GModel = GModel.$

export namespace GParameter {
    export type /*FIXME REMOVE*/$ = G_$Reference
}
export type GParameter = GParameter.$

export namespace GParameters {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = MDictionary<GParameter>
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GParameters = GParameters.$

export namespace GPossibleModel {
    
    export namespace G {
        
        export namespace TPType {
            export type /*FIXME REMOVE*/$ = {
                readonly 'has errors': boolean
                readonly 'model': GXModel
            }
        }
        export type TPType = TPType.$
        export type /*FIXME REMOVE*/$ = MPossibly<TPType>
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GPossibleModel = GPossibleModel.$

export namespace GProperties {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = MDictionary<GProperty>
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GProperties = GProperties.$

export namespace GProperty {
    
    export namespace G {
        
        export namespace Psibling__dependencies {
            export type /*FIXME REMOVE*/$ = MDictionary<null>
        }
        export type Psibling__dependencies = Psibling__dependencies.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'sibling dependencies': Psibling__dependencies
            readonly 'type': GLocalType
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GProperty = GProperty.$

export namespace GReference {
    
    export namespace G {
        
        export namespace Psteps {
            
            export namespace A {
                export type /*FIXME REMOVE*/$ = 
                    | ['array', null]
                    | ['group', G_$Reference]
                    | ['reference', null]
                    | ['tagged union', G_$Reference]
            }
            export type A = A.$
            export type /*FIXME REMOVE*/$ = pt.Array<A>
        }
        export type Psteps = Psteps.$
        
        export namespace Ptype {
            export type /*FIXME REMOVE*/$ = 
                | ['other', null]
                | ['parameter', G_$Reference]
                | ['sibling', G_$Reference]
        }
        export type Ptype = Ptype.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'steps': Psteps
            readonly 'type': Ptype
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GReference = GReference.$

export namespace GString {
    
    export namespace G {
        
        export namespace Pconstrained {
            
            export namespace Ono {
                export type /*FIXME REMOVE*/$ = {
                    readonly 'type': G_$Reference
                }
            }
            export type Ono = Ono.$
            export type /*FIXME REMOVE*/$ = 
                | ['no', Ono]
                | ['yes', GReference]
        }
        export type Pconstrained = Pconstrained.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'constrained': Pconstrained
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GString = GString.$

export namespace GXArgument {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = MComputedReference<GXGlobalType>
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GXArgument = GXArgument.$

export namespace GXGlobalType {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {
            readonly 'parameters': GXParameters
            readonly 'type': GXLocalType
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GXGlobalType = GXGlobalType.$

export namespace GXLocalType {
    
    export namespace G {
        
        export namespace Oarray {
            export type /*FIXME REMOVE*/$ = {
                readonly 'type': GXLocalType
            }
        }
        export type Oarray = Oarray.$
        
        export namespace Ocomponent {
            
            export namespace Parguments {
                export type /*FIXME REMOVE*/$ = MConstrainedDictionary<GXParameter, GXArgument>
            }
            export type Parguments = Parguments.$
            
            export namespace Ptype {
                export type /*FIXME REMOVE*/$ = MComputedReference<GXGlobalType>
            }
            export type Ptype = Ptype.$
            export type /*FIXME REMOVE*/$ = {
                readonly 'arguments': Parguments
                readonly 'type': Ptype
            }
        }
        export type Ocomponent = Ocomponent.$
        
        export namespace Odictionary {
            export type /*FIXME REMOVE*/$ = {
                readonly 'key': GXString
                readonly 'type': GXLocalType
            }
        }
        export type Odictionary = Odictionary.$
        
        export namespace Ogroup {
            export type /*FIXME REMOVE*/$ = {
                readonly 'properties': GXProperties
            }
        }
        export type Ogroup = Ogroup.$
        
        export namespace OtaggedUnion {
            
            export namespace Pdefault {
                export type /*FIXME REMOVE*/$ = MReference<GXOption>
            }
            export type Pdefault = Pdefault.$
            
            export namespace Poptions {
                export type /*FIXME REMOVE*/$ = MDictionary<GXOption>
            }
            export type Poptions = Poptions.$
            export type /*FIXME REMOVE*/$ = {
                readonly 'default': Pdefault
                readonly 'options': Poptions
            }
        }
        export type OtaggedUnion = OtaggedUnion.$
        export type /*FIXME REMOVE*/$ = 
            | ['array', Oarray]
            | ['boolean', null]
            | ['component', Ocomponent]
            | ['dictionary', Odictionary]
            | ['group', Ogroup]
            | ['string', GXString]
            | ['taggedUnion', OtaggedUnion]
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GXLocalType = GXLocalType.$

export namespace GXModel {
    
    export namespace G {
        
        export namespace PglobalTypes {
            export type /*FIXME REMOVE*/$ = MDictionary<GXGlobalType>
        }
        export type PglobalTypes = PglobalTypes.$
        
        export namespace Proot {
            export type /*FIXME REMOVE*/$ = MReference<GXGlobalType>
        }
        export type Proot = Proot.$
        
        export namespace PstringTypes {
            export type /*FIXME REMOVE*/$ = MDictionary<GXStringType>
        }
        export type PstringTypes = PstringTypes.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'globalTypes': PglobalTypes
            readonly 'root': Proot
            readonly 'stringTypes': PstringTypes
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GXModel = GXModel.$

export namespace GXOption {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {
            readonly 'type': GXLocalType
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GXOption = GXOption.$

export namespace GXParameter {
    export type /*FIXME REMOVE*/$ = null
}
export type GXParameter = GXParameter.$

export namespace GXParameters {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = MDictionary<GXParameter>
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GXParameters = GXParameters.$

export namespace GXProperties {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = MDictionary<GXProperty>
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GXProperties = GXProperties.$

export namespace GXProperty {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {
            readonly 'type': GXLocalType
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GXProperty = GXProperty.$

export namespace GXReference {
    
    export namespace G {
        
        export namespace Presolved__type {
            export type /*FIXME REMOVE*/$ = null | GLocalType
        }
        export type Presolved__type = Presolved__type.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'resolved type': Presolved__type
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GXReference = GXReference.$

export namespace GXString {
    
    export namespace G {
        
        export namespace Pconstrained {
            
            export namespace Ono {
                
                export namespace Ptype {
                    export type /*FIXME REMOVE*/$ = MReference<GXStringType>
                }
                export type Ptype = Ptype.$
                export type /*FIXME REMOVE*/$ = {
                    readonly 'type': Ptype
                }
            }
            export type Ono = Ono.$
            export type /*FIXME REMOVE*/$ = 
                | ['no', Ono]
                | ['yes', GXReference]
        }
        export type Pconstrained = Pconstrained.$
        export type /*FIXME REMOVE*/$ = {
            readonly 'constrained': Pconstrained
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GXString = GXString.$

export namespace GXStringType {
    export type /*FIXME REMOVE*/$ = null
}
export type GXStringType = GXStringType.$