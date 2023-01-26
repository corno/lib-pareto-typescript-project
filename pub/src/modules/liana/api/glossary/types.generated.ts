import * as pt from 'pareto-core-types'


export namespace VComputedReference {
    
    export namespace Preferenced__value {
        export type $<AReferencedType> = () => AReferencedType
    }
    export type $<AReferencedType> = {
        readonly 'annotation': string
        readonly 'name': string
        readonly 'referenced value': Preferenced__value.$<AReferencedType>
    }
}

export type MComputedReference<AReferencedType> = VComputedReference.$<AReferencedType>

export namespace VConstrainedDictionary {
    
    export namespace Pdictionary {
        
        export namespace D {
            export type $<AReferencedType, AType> = MConstrainedDictionaryEntry<GXGlobalType.$, GXArgument.$>
        }
        export type $<AReferencedType, AType> = pt.Dictionary<D.$<AReferencedType, AType>>
    }
    export type $<AReferencedType, AType> = {
        readonly 'annotation': string
        readonly 'dictionary': Pdictionary.$<AReferencedType, AType>
    }
}

export type MConstrainedDictionary<AReferencedType, AType> = VConstrainedDictionary.$<AReferencedType, AType>

export namespace VConstrainedDictionaryEntry {
    export type $<AReferencedType, AType> = {
        readonly 'referenced value': AReferencedType
        readonly 'value': AType
    }
}

export type MConstrainedDictionaryEntry<AReferencedType, AType> = VConstrainedDictionaryEntry.$<AReferencedType, AType>

export namespace VDictionary {
    
    export namespace Pdictionary {
        export type $<AType> = pt.Dictionary<AType>
    }
    export type $<AType> = {
        readonly 'annotation': string
        readonly 'dictionary': Pdictionary.$<AType>
    }
}

export type MDictionary<AType> = VDictionary.$<AType>

export namespace VPossibly {
    export type $<AType> = 
        | ['not set', null]
        | ['set', AType]
}

export type MPossibly<AType> = VPossibly.$<AType>

export namespace VReference {
    export type $<AReferencedType> = {
        readonly 'annotation': string
        readonly 'name': string
        readonly 'referenced value': AReferencedType
    }
}

export type MReference<AReferencedType> = VReference.$<AReferencedType>

export namespace G_$Reference {
    
    export namespace G {
        export type $ = {
            readonly 'annotation': string
            readonly 'name': string
        }
    }
    export type $ = G.$
}

export namespace GGlobalType {
    
    export namespace G {
        export type $ = {
            readonly 'parameters': GParameters.$
            readonly 'type': GLocalType.$
        }
    }
    export type $ = G.$
}

export namespace GLocalType {
    
    export namespace G {
        
        export namespace Oarray {
            export type $ = {
                readonly 'type': GLocalType.$
            }
        }
        
        export namespace Ocomponent {
            
            export namespace Parguments {
                export type $ = MDictionary<null>
            }
            export type $ = {
                readonly 'arguments': Parguments.$
                readonly 'type': G_$Reference.$
            }
        }
        
        export namespace Odictionary {
            export type $ = {
                readonly 'key': GString.$
                readonly 'type': GLocalType.$
            }
        }
        
        export namespace Ogroup {
            export type $ = {
                readonly 'properties': GProperties.$
            }
        }
        
        export namespace OtaggedUnion {
            
            export namespace Poptions {
                
                export namespace TPType {
                    export type $ = {
                        readonly 'type': GLocalType.$
                    }
                }
                export type $ = MDictionary<TPType.$>
            }
            export type $ = {
                readonly 'default': G_$Reference.$
                readonly 'options': Poptions.$
            }
        }
        export type $ = 
            | ['array', Oarray.$]
            | ['boolean', null]
            | ['component', Ocomponent.$]
            | ['dictionary', Odictionary.$]
            | ['group', Ogroup.$]
            | ['string', GString.$]
            | ['taggedUnion', OtaggedUnion.$]
    }
    export type $ = G.$
}

export namespace GModel {
    
    export namespace G {
        
        export namespace PglobalTypes {
            export type $ = MDictionary<GGlobalType.$>
        }
        
        export namespace PstringTypes {
            export type $ = MDictionary<null>
        }
        export type $ = {
            readonly 'globalTypes': PglobalTypes.$
            readonly 'root': G_$Reference.$
            readonly 'stringTypes': PstringTypes.$
        }
    }
    export type $ = G.$
}

export namespace GParameter {
    export type $ = G_$Reference.$
}

export namespace GParameters {
    
    export namespace G {
        export type $ = MDictionary<GParameter.$>
    }
    export type $ = G.$
}

export namespace GPossibleModel {
    
    export namespace G {
        
        export namespace TPType {
            export type $ = {
                readonly 'has errors': boolean
                readonly 'model': GXModel.$
            }
        }
        export type $ = MPossibly<TPType.$>
    }
    export type $ = G.$
}

export namespace GProperties {
    
    export namespace G {
        export type $ = MDictionary<GProperty.$>
    }
    export type $ = G.$
}

export namespace GProperty {
    
    export namespace G {
        
        export namespace Psibling__dependencies {
            export type $ = MDictionary<null>
        }
        export type $ = {
            readonly 'sibling dependencies': Psibling__dependencies.$
            readonly 'type': GLocalType.$
        }
    }
    export type $ = G.$
}

export namespace GReference {
    
    export namespace G {
        
        export namespace Psteps {
            
            export namespace A {
                export type $ = 
                    | ['array', null]
                    | ['group', G_$Reference.$]
                    | ['reference', null]
                    | ['tagged union', G_$Reference.$]
            }
            export type $ = pt.Array<A.$>
        }
        
        export namespace Ptype {
            export type $ = 
                | ['other', null]
                | ['parameter', G_$Reference.$]
                | ['sibling', G_$Reference.$]
        }
        export type $ = {
            readonly 'steps': Psteps.$
            readonly 'type': Ptype.$
        }
    }
    export type $ = G.$
}

export namespace GString {
    
    export namespace G {
        
        export namespace Pconstrained {
            
            export namespace Ono {
                export type $ = {
                    readonly 'type': G_$Reference.$
                }
            }
            export type $ = 
                | ['no', Ono.$]
                | ['yes', GReference.$]
        }
        export type $ = {
            readonly 'constrained': Pconstrained.$
        }
    }
    export type $ = G.$
}

export namespace GXArgument {
    
    export namespace G {
        export type $ = MComputedReference<GXGlobalType.$>
    }
    export type $ = G.$
}

export namespace GXGlobalType {
    
    export namespace G {
        export type $ = {
            readonly 'parameters': GXParameters.$
            readonly 'type': GXLocalType.$
        }
    }
    export type $ = G.$
}

export namespace GXLocalType {
    
    export namespace G {
        
        export namespace Oarray {
            export type $ = {
                readonly 'type': GXLocalType.$
            }
        }
        
        export namespace Ocomponent {
            
            export namespace Parguments {
                export type $ = MConstrainedDictionary<GXParameter.$, GXArgument.$>
            }
            
            export namespace Ptype {
                export type $ = MComputedReference<GXGlobalType.$>
            }
            export type $ = {
                readonly 'arguments': Parguments.$
                readonly 'type': Ptype.$
            }
        }
        
        export namespace Odictionary {
            export type $ = {
                readonly 'key': GXString.$
                readonly 'type': GXLocalType.$
            }
        }
        
        export namespace Ogroup {
            export type $ = {
                readonly 'properties': GXProperties.$
            }
        }
        
        export namespace OtaggedUnion {
            
            export namespace Pdefault {
                export type $ = MReference<GXOption.$>
            }
            
            export namespace Poptions {
                export type $ = MDictionary<GXOption.$>
            }
            export type $ = {
                readonly 'default': Pdefault.$
                readonly 'options': Poptions.$
            }
        }
        export type $ = 
            | ['array', Oarray.$]
            | ['boolean', null]
            | ['component', Ocomponent.$]
            | ['dictionary', Odictionary.$]
            | ['group', Ogroup.$]
            | ['string', GXString.$]
            | ['taggedUnion', OtaggedUnion.$]
    }
    export type $ = G.$
}

export namespace GXModel {
    
    export namespace G {
        
        export namespace PglobalTypes {
            export type $ = MDictionary<GXGlobalType.$>
        }
        
        export namespace Proot {
            export type $ = MReference<GXGlobalType.$>
        }
        
        export namespace PstringTypes {
            export type $ = MDictionary<GXStringType.$>
        }
        export type $ = {
            readonly 'globalTypes': PglobalTypes.$
            readonly 'root': Proot.$
            readonly 'stringTypes': PstringTypes.$
        }
    }
    export type $ = G.$
}

export namespace GXOption {
    
    export namespace G {
        export type $ = {
            readonly 'type': GXLocalType.$
        }
    }
    export type $ = G.$
}

export namespace GXParameter {
    export type $ = null
}

export namespace GXParameters {
    
    export namespace G {
        export type $ = MDictionary<GXParameter.$>
    }
    export type $ = G.$
}

export namespace GXProperties {
    
    export namespace G {
        export type $ = MDictionary<GXProperty.$>
    }
    export type $ = G.$
}

export namespace GXProperty {
    
    export namespace G {
        export type $ = {
            readonly 'type': GXLocalType.$
        }
    }
    export type $ = G.$
}

export namespace GXReference {
    
    export namespace G {
        
        export namespace Presolved__type {
            export type $ = null | GLocalType.$
        }
        export type $ = {
            readonly 'resolved type': Presolved__type.$
        }
    }
    export type $ = G.$
}

export namespace GXString {
    
    export namespace G {
        
        export namespace Pconstrained {
            
            export namespace Ono {
                
                export namespace Ptype {
                    export type $ = MReference<GXStringType.$>
                }
                export type $ = {
                    readonly 'type': Ptype.$
                }
            }
            export type $ = 
                | ['no', Ono.$]
                | ['yes', GXReference.$]
        }
        export type $ = {
            readonly 'constrained': Pconstrained.$
        }
    }
    export type $ = G.$
}

export namespace GXStringType {
    export type $ = null
}