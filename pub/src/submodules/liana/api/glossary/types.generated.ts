import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace T {
    
    export namespace _$Reference {
        
        export type annotation<GPAnnotation> = GPAnnotation
        
        export type name<GPAnnotation> = string
    }
    
    export type _$Reference<GPAnnotation> = {
        readonly 'annotation': GPAnnotation
        readonly 'name': string
    }
    
    export namespace ComputedReference {
        
        export type annotation<GPAnnotation, AReferencedType> = GPAnnotation
        
        export type name<GPAnnotation, AReferencedType> = string
        
        export namespace referenced__value {
            
            export type C<GPAnnotation, AReferencedType> = AReferencedType
        }
        
        export type referenced__value<GPAnnotation, AReferencedType> = () => AReferencedType
    }
    
    export type ComputedReference<GPAnnotation, AReferencedType> = {
        readonly 'annotation': GPAnnotation
        readonly 'name': string
        readonly 'referenced value': () => AReferencedType
    }
    
    export namespace Dictionary {
        
        export type annotation<GPAnnotation, AType> = GPAnnotation
        
        export namespace dictionary {
            
            export type D<GPAnnotation, AType> = AType
        }
        
        export type dictionary<GPAnnotation, AType> = pt.Dictionary<AType>
    }
    
    export type Dictionary<GPAnnotation, AType> = {
        readonly 'annotation': GPAnnotation
        readonly 'dictionary': pt.Dictionary<AType>
    }
    
    export namespace GlobalType {
        
        export type parameters<GPAnnotation> = T.Parameters<GPAnnotation>
        
        export type _ltype<GPAnnotation> = T.LocalType<GPAnnotation>
    }
    
    export type GlobalType<GPAnnotation> = {
        readonly 'parameters': T.Parameters<GPAnnotation>
        readonly 'type': T.LocalType<GPAnnotation>
    }
    
    export namespace LocalType {
        
        export namespace array {
            
            export type _ltype<GPAnnotation> = T.LocalType<GPAnnotation>
        }
        
        export type array<GPAnnotation> = {
            readonly 'type': T.LocalType<GPAnnotation>
        }
        
        export namespace _lboolean {}
        
        export type _lboolean<GPAnnotation> = {}
        
        export namespace component {
            
            export type arguments<GPAnnotation> = T.Dictionary<GPAnnotation, mcommon.T.Null>
            
            export type _ltype<GPAnnotation> = T._$Reference<GPAnnotation>
        }
        
        export type component<GPAnnotation> = {
            readonly 'arguments': T.Dictionary<GPAnnotation, mcommon.T.Null>
            readonly 'type': T._$Reference<GPAnnotation>
        }
        
        export namespace dictionary {
            
            export type key<GPAnnotation> = T.String<GPAnnotation>
            
            export type _ltype<GPAnnotation> = T.LocalType<GPAnnotation>
        }
        
        export type dictionary<GPAnnotation> = {
            readonly 'key': T.String<GPAnnotation>
            readonly 'type': T.LocalType<GPAnnotation>
        }
        
        export namespace group {
            
            export type properties<GPAnnotation> = T.Properties<GPAnnotation>
        }
        
        export type group<GPAnnotation> = {
            readonly 'properties': T.Properties<GPAnnotation>
        }
        
        export type _lstring<GPAnnotation> = T.String<GPAnnotation>
        
        export namespace taggedUnion {
            
            export type _ldefault<GPAnnotation> = T._$Reference<GPAnnotation>
            
            export type options<GPAnnotation> = T.Dictionary<GPAnnotation, T.LocalType<GPAnnotation>>
        }
        
        export type taggedUnion<GPAnnotation> = {
            readonly 'default': T._$Reference<GPAnnotation>
            readonly 'options': T.Dictionary<GPAnnotation, T.LocalType<GPAnnotation>>
        }
    }
    
    export type LocalType<GPAnnotation> = 
        | ['array', {
            readonly 'type': T.LocalType<GPAnnotation>
        }]
        | ['boolean', {}]
        | ['component', {
            readonly 'arguments': T.Dictionary<GPAnnotation, mcommon.T.Null>
            readonly 'type': T._$Reference<GPAnnotation>
        }]
        | ['dictionary', {
            readonly 'key': T.String<GPAnnotation>
            readonly 'type': T.LocalType<GPAnnotation>
        }]
        | ['group', {
            readonly 'properties': T.Properties<GPAnnotation>
        }]
        | ['string', T.String<GPAnnotation>]
        | ['taggedUnion', {
            readonly 'default': T._$Reference<GPAnnotation>
            readonly 'options': T.Dictionary<GPAnnotation, T.LocalType<GPAnnotation>>
        }]
    
    export namespace Model {
        
        export type globalTypes<GPAnnotation> = T.Dictionary<GPAnnotation, T.GlobalType<GPAnnotation>>
        
        export type root<GPAnnotation> = T._$Reference<GPAnnotation>
        
        export type stringTypes<GPAnnotation> = T.Dictionary<GPAnnotation, mcommon.T.Null>
    }
    
    export type Model<GPAnnotation> = {
        readonly 'globalTypes': T.Dictionary<GPAnnotation, T.GlobalType<GPAnnotation>>
        readonly 'root': T._$Reference<GPAnnotation>
        readonly 'stringTypes': T.Dictionary<GPAnnotation, mcommon.T.Null>
    }
    
    export type Parameter<GPAnnotation> = T._$Reference<GPAnnotation>
    
    export type Parameters<GPAnnotation> = T.Dictionary<GPAnnotation, T.Parameter<GPAnnotation>>
    
    export namespace PM {
        
        export type has__errors<GPAnnotation> = boolean
        
        export type model<GPAnnotation> = T.XModel<GPAnnotation>
    }
    
    export type PM<GPAnnotation> = {
        readonly 'has errors': boolean
        readonly 'model': T.XModel<GPAnnotation>
    }
    
    export type PossibleModel<GPAnnotation> = T.Possibly<GPAnnotation, T.PM<GPAnnotation>>
    
    export namespace Possibly {
        
        export namespace not__set {}
        
        export type not__set<GPAnnotation, AType> = {}
        
        export type _lset<GPAnnotation, AType> = AType
    }
    
    export type Possibly<GPAnnotation, AType> = 
        | ['not set', {}]
        | ['set', AType]
    
    export type Properties<GPAnnotation> = T.Dictionary<GPAnnotation, T.Property<GPAnnotation>>
    
    export namespace Property {
        
        export type sibling__dependencies<GPAnnotation> = T.Dictionary<GPAnnotation, mcommon.T.Null>
        
        export type _ltype<GPAnnotation> = T.LocalType<GPAnnotation>
    }
    
    export type Property<GPAnnotation> = {
        readonly 'sibling dependencies': T.Dictionary<GPAnnotation, mcommon.T.Null>
        readonly 'type': T.LocalType<GPAnnotation>
    }
    
    export namespace Reference {
        
        export namespace steps {
            
            export namespace A {
                
                export namespace array {}
                
                export type array<GPAnnotation> = {}
                
                export type group<GPAnnotation> = T._$Reference<GPAnnotation>
                
                export namespace reference {}
                
                export type reference<GPAnnotation> = {}
                
                export type tagged__union<GPAnnotation> = T._$Reference<GPAnnotation>
            }
            
            export type A<GPAnnotation> = 
                | ['array', {}]
                | ['group', T._$Reference<GPAnnotation>]
                | ['reference', {}]
                | ['tagged union', T._$Reference<GPAnnotation>]
        }
        
        export type steps<GPAnnotation> = pt.Array<
            | ['array', {}]
            | ['group', T._$Reference<GPAnnotation>]
            | ['reference', {}]
            | ['tagged union', T._$Reference<GPAnnotation>]
        >
        
        export namespace _ltype {
            
            export namespace other {}
            
            export type other<GPAnnotation> = {}
            
            export type parameter<GPAnnotation> = T._$Reference<GPAnnotation>
            
            export type sibling<GPAnnotation> = T._$Reference<GPAnnotation>
        }
        
        export type _ltype<GPAnnotation> = 
            | ['other', {}]
            | ['parameter', T._$Reference<GPAnnotation>]
            | ['sibling', T._$Reference<GPAnnotation>]
    }
    
    export type Reference<GPAnnotation> = {
        readonly 'steps': pt.Array<
            | ['array', {}]
            | ['group', T._$Reference<GPAnnotation>]
            | ['reference', {}]
            | ['tagged union', T._$Reference<GPAnnotation>]
        >
        readonly 'type': 
            | ['other', {}]
            | ['parameter', T._$Reference<GPAnnotation>]
            | ['sibling', T._$Reference<GPAnnotation>]
    }
    
    export namespace String {
        
        export namespace constrained {
            
            export namespace no {
                
                export type _ltype<GPAnnotation> = T._$Reference<GPAnnotation>
            }
            
            export type no<GPAnnotation> = {
                readonly 'type': T._$Reference<GPAnnotation>
            }
            
            export type yes<GPAnnotation> = T.Reference<GPAnnotation>
        }
        
        export type constrained<GPAnnotation> = 
            | ['no', {
                readonly 'type': T._$Reference<GPAnnotation>
            }]
            | ['yes', T.Reference<GPAnnotation>]
    }
    
    export type String<GPAnnotation> = {
        readonly 'constrained': 
            | ['no', {
                readonly 'type': T._$Reference<GPAnnotation>
            }]
            | ['yes', T.Reference<GPAnnotation>]
    }
    
    export type XArgument<GPAnnotation> = T.ComputedReference<GPAnnotation, T.XGlobalType<GPAnnotation>>
    
    export namespace XGlobalType {
        
        export type parameters<GPAnnotation> = T.XParameters<GPAnnotation>
        
        export type _ltype<GPAnnotation> = T.XLocalType<GPAnnotation>
    }
    
    export type XGlobalType<GPAnnotation> = {
        readonly 'parameters': T.XParameters<GPAnnotation>
        readonly 'type': T.XLocalType<GPAnnotation>
    }
    
    export namespace XLocalType {
        
        export namespace array {
            
            export type _ltype<GPAnnotation> = T.XLocalType<GPAnnotation>
        }
        
        export type array<GPAnnotation> = {
            readonly 'type': T.XLocalType<GPAnnotation>
        }
        
        export namespace _lboolean {}
        
        export type _lboolean<GPAnnotation> = {}
        
        export namespace component {
            
            export namespace arguments {
                
                export type D<GPAnnotation> = string
            }
            
            export type arguments<GPAnnotation> = pt.Dictionary<string>
            
            export type _ltype<GPAnnotation> = T.ComputedReference<GPAnnotation, T.XGlobalType<GPAnnotation>>
        }
        
        export type component<GPAnnotation> = {
            readonly 'arguments': pt.Dictionary<string>
            readonly 'type': T.ComputedReference<GPAnnotation, T.XGlobalType<GPAnnotation>>
        }
        
        export namespace dictionary {
            
            export type key<GPAnnotation> = T.XString<GPAnnotation>
            
            export type _ltype<GPAnnotation> = T.XLocalType<GPAnnotation>
        }
        
        export type dictionary<GPAnnotation> = {
            readonly 'key': T.XString<GPAnnotation>
            readonly 'type': T.XLocalType<GPAnnotation>
        }
        
        export namespace group {
            
            export type properties<GPAnnotation> = T.XProperties<GPAnnotation>
        }
        
        export type group<GPAnnotation> = {
            readonly 'properties': T.XProperties<GPAnnotation>
        }
        
        export type _lstring<GPAnnotation> = T.XString<GPAnnotation>
        
        export namespace taggedUnion {
            
            export type _ldefault<GPAnnotation> = T.YReference<GPAnnotation, T.XOption<GPAnnotation>>
            
            export type options<GPAnnotation> = T.Dictionary<GPAnnotation, T.XOption<GPAnnotation>>
        }
        
        export type taggedUnion<GPAnnotation> = {
            readonly 'default': T.YReference<GPAnnotation, T.XOption<GPAnnotation>>
            readonly 'options': T.Dictionary<GPAnnotation, T.XOption<GPAnnotation>>
        }
    }
    
    export type XLocalType<GPAnnotation> = 
        | ['array', {
            readonly 'type': T.XLocalType<GPAnnotation>
        }]
        | ['boolean', {}]
        | ['component', {
            readonly 'arguments': pt.Dictionary<string>
            readonly 'type': T.ComputedReference<GPAnnotation, T.XGlobalType<GPAnnotation>>
        }]
        | ['dictionary', {
            readonly 'key': T.XString<GPAnnotation>
            readonly 'type': T.XLocalType<GPAnnotation>
        }]
        | ['group', {
            readonly 'properties': T.XProperties<GPAnnotation>
        }]
        | ['string', T.XString<GPAnnotation>]
        | ['taggedUnion', {
            readonly 'default': T.YReference<GPAnnotation, T.XOption<GPAnnotation>>
            readonly 'options': T.Dictionary<GPAnnotation, T.XOption<GPAnnotation>>
        }]
    
    export namespace XModel {
        
        export type globalTypes<GPAnnotation> = T.Dictionary<GPAnnotation, T.XGlobalType<GPAnnotation>>
        
        export type root<GPAnnotation> = T.YReference<GPAnnotation, T.XGlobalType<GPAnnotation>>
        
        export type stringTypes<GPAnnotation> = T.Dictionary<GPAnnotation, T.XStringType<GPAnnotation>>
    }
    
    export type XModel<GPAnnotation> = {
        readonly 'globalTypes': T.Dictionary<GPAnnotation, T.XGlobalType<GPAnnotation>>
        readonly 'root': T.YReference<GPAnnotation, T.XGlobalType<GPAnnotation>>
        readonly 'stringTypes': T.Dictionary<GPAnnotation, T.XStringType<GPAnnotation>>
    }
    
    export namespace XOption {
        
        export type _ltype<GPAnnotation> = T.XLocalType<GPAnnotation>
    }
    
    export type XOption<GPAnnotation> = {
        readonly 'type': T.XLocalType<GPAnnotation>
    }
    
    export namespace XParameter {}
    
    export type XParameter<GPAnnotation> = {}
    
    export type XParameters<GPAnnotation> = T.Dictionary<GPAnnotation, T.XParameter<GPAnnotation>>
    
    export type XProperties<GPAnnotation> = T.Dictionary<GPAnnotation, T.XProperty<GPAnnotation>>
    
    export namespace XProperty {
        
        export type _ltype<GPAnnotation> = T.XLocalType<GPAnnotation>
    }
    
    export type XProperty<GPAnnotation> = {
        readonly 'type': T.XLocalType<GPAnnotation>
    }
    
    export namespace XReference {
        
        export namespace resolved__type {
            
            export type O<GPAnnotation> = T.LocalType<GPAnnotation>
        }
        
        export type resolved__type<GPAnnotation> = [ false ] | [ true, T.LocalType<GPAnnotation>]
    }
    
    export type XReference<GPAnnotation> = {
        readonly 'resolved type': [ false ] | [ true, T.LocalType<GPAnnotation>]
    }
    
    export namespace XString {
        
        export namespace constrained {
            
            export namespace no {
                
                export type _ltype<GPAnnotation> = T.YReference<GPAnnotation, T.XStringType<GPAnnotation>>
            }
            
            export type no<GPAnnotation> = {
                readonly 'type': T.YReference<GPAnnotation, T.XStringType<GPAnnotation>>
            }
            
            export type yes<GPAnnotation> = T.XReference<GPAnnotation>
        }
        
        export type constrained<GPAnnotation> = 
            | ['no', {
                readonly 'type': T.YReference<GPAnnotation, T.XStringType<GPAnnotation>>
            }]
            | ['yes', T.XReference<GPAnnotation>]
    }
    
    export type XString<GPAnnotation> = {
        readonly 'constrained': 
            | ['no', {
                readonly 'type': T.YReference<GPAnnotation, T.XStringType<GPAnnotation>>
            }]
            | ['yes', T.XReference<GPAnnotation>]
    }
    
    export namespace XStringType {}
    
    export type XStringType<GPAnnotation> = {}
    
    export namespace YReference {
        
        export type annotation<GPAnnotation, AReferencedType> = GPAnnotation
        
        export type name<GPAnnotation, AReferencedType> = string
        
        export type referenced__value<GPAnnotation, AReferencedType> = AReferencedType
    }
    
    export type YReference<GPAnnotation, AReferencedType> = {
        readonly 'annotation': GPAnnotation
        readonly 'name': string
        readonly 'referenced value': AReferencedType
    }
}