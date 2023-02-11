import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace T {
    
    export namespace _$Reference {
        
        export type annotation = string
        
        export type name = string
    }
    
    export type _$Reference = {
        readonly 'annotation': string
        readonly 'name': string
    }
    
    export namespace ComputedReference {
        
        export type annotation<AReferencedType> = string
        
        export type name<AReferencedType> = string
        
        export namespace referenced__value {
            
            export type C<AReferencedType> = AReferencedType
        }
        
        export type referenced__value<AReferencedType> = () => AReferencedType
    }
    
    export type ComputedReference<AReferencedType> = {
        readonly 'annotation': string
        readonly 'name': string
        readonly 'referenced value': () => AReferencedType
    }
    
    export namespace Dictionary {
        
        export type annotation<AType> = string
        
        export namespace dictionary {
            
            export type D<AType> = AType
        }
        
        export type dictionary<AType> = pt.Dictionary<AType>
    }
    
    export type Dictionary<AType> = {
        readonly 'annotation': string
        readonly 'dictionary': pt.Dictionary<AType>
    }
    
    export namespace GlobalType {
        
        export type parameters = T.Parameters
        
        export type _ltype = T.LocalType
    }
    
    export type GlobalType = {
        readonly 'parameters': T.Parameters
        readonly 'type': T.LocalType
    }
    
    export namespace LocalType {
        
        export namespace array {
            
            export type _ltype = T.LocalType
        }
        
        export type array = {
            readonly 'type': T.LocalType
        }
        
        export namespace _lboolean {}
        
        export type _lboolean = {}
        
        export namespace component {
            
            export type arguments = T.Dictionary<mcommon.T.Null>
            
            export type _ltype = T._$Reference
        }
        
        export type component = {
            readonly 'arguments': T.Dictionary<mcommon.T.Null>
            readonly 'type': T._$Reference
        }
        
        export namespace dictionary {
            
            export type key = T.String
            
            export type _ltype = T.LocalType
        }
        
        export type dictionary = {
            readonly 'key': T.String
            readonly 'type': T.LocalType
        }
        
        export namespace group {
            
            export type properties = T.Properties
        }
        
        export type group = {
            readonly 'properties': T.Properties
        }
        
        export type _lstring = T.String
        
        export namespace taggedUnion {
            
            export type _ldefault = T._$Reference
            
            export type options = T.Dictionary<T.LocalType>
        }
        
        export type taggedUnion = {
            readonly 'default': T._$Reference
            readonly 'options': T.Dictionary<T.LocalType>
        }
    }
    
    export type LocalType = 
        | ['array', {
            readonly 'type': T.LocalType
        }]
        | ['boolean', {}]
        | ['component', {
            readonly 'arguments': T.Dictionary<mcommon.T.Null>
            readonly 'type': T._$Reference
        }]
        | ['dictionary', {
            readonly 'key': T.String
            readonly 'type': T.LocalType
        }]
        | ['group', {
            readonly 'properties': T.Properties
        }]
        | ['string', T.String]
        | ['taggedUnion', {
            readonly 'default': T._$Reference
            readonly 'options': T.Dictionary<T.LocalType>
        }]
    
    export namespace Model {
        
        export type globalTypes = T.Dictionary<T.GlobalType>
        
        export type root = T._$Reference
        
        export type stringTypes = T.Dictionary<mcommon.T.Null>
    }
    
    export type Model = {
        readonly 'globalTypes': T.Dictionary<T.GlobalType>
        readonly 'root': T._$Reference
        readonly 'stringTypes': T.Dictionary<mcommon.T.Null>
    }
    
    export namespace Optional {
        
        export namespace not__set {}
        
        export type not__set<AType> = {}
        
        export type _lset<AType> = AType
    }
    
    export type Optional<AType> = 
        | ['not set', {}]
        | ['set', AType]
    
    export type Parameter = T._$Reference
    
    export type Parameters = T.Dictionary<T.Parameter>
    
    export namespace PM {
        
        export type has__errors = boolean
        
        export type model = T.XModel
    }
    
    export type PM = {
        readonly 'has errors': boolean
        readonly 'model': T.XModel
    }
    
    export type PossibleModel = T.Possibly<T.PM>
    
    export namespace Possibly {
        
        export namespace not__set {}
        
        export type not__set<AType> = {}
        
        export type _lset<AType> = AType
    }
    
    export type Possibly<AType> = 
        | ['not set', {}]
        | ['set', AType]
    
    export type Properties = T.Dictionary<T.Property>
    
    export namespace Property {
        
        export type sibling__dependencies = T.Dictionary<mcommon.T.Null>
        
        export type _ltype = T.LocalType
    }
    
    export type Property = {
        readonly 'sibling dependencies': T.Dictionary<mcommon.T.Null>
        readonly 'type': T.LocalType
    }
    
    export namespace Reference {
        
        export namespace steps {
            
            export namespace A {
                
                export namespace array {}
                
                export type array = {}
                
                export type group = T._$Reference
                
                export namespace reference {}
                
                export type reference = {}
                
                export type tagged__union = T._$Reference
            }
            
            export type A = 
                | ['array', {}]
                | ['group', T._$Reference]
                | ['reference', {}]
                | ['tagged union', T._$Reference]
        }
        
        export type steps = pt.Array<
            | ['array', {}]
            | ['group', T._$Reference]
            | ['reference', {}]
            | ['tagged union', T._$Reference]
        >
        
        export namespace _ltype {
            
            export namespace other {}
            
            export type other = {}
            
            export type parameter = T._$Reference
            
            export type sibling = T._$Reference
        }
        
        export type _ltype = 
            | ['other', {}]
            | ['parameter', T._$Reference]
            | ['sibling', T._$Reference]
    }
    
    export type Reference = {
        readonly 'steps': pt.Array<
            | ['array', {}]
            | ['group', T._$Reference]
            | ['reference', {}]
            | ['tagged union', T._$Reference]
        >
        readonly 'type': 
            | ['other', {}]
            | ['parameter', T._$Reference]
            | ['sibling', T._$Reference]
    }
    
    export namespace String {
        
        export namespace constrained {
            
            export namespace no {
                
                export type _ltype = T._$Reference
            }
            
            export type no = {
                readonly 'type': T._$Reference
            }
            
            export type yes = T.Reference
        }
        
        export type constrained = 
            | ['no', {
                readonly 'type': T._$Reference
            }]
            | ['yes', T.Reference]
    }
    
    export type String = {
        readonly 'constrained': 
            | ['no', {
                readonly 'type': T._$Reference
            }]
            | ['yes', T.Reference]
    }
    
    export type XArgument = T.ComputedReference<T.XGlobalType>
    
    export namespace XGlobalType {
        
        export type parameters = T.XParameters
        
        export type _ltype = T.XLocalType
    }
    
    export type XGlobalType = {
        readonly 'parameters': T.XParameters
        readonly 'type': T.XLocalType
    }
    
    export namespace XLocalType {
        
        export namespace array {
            
            export type _ltype = T.XLocalType
        }
        
        export type array = {
            readonly 'type': T.XLocalType
        }
        
        export namespace _lboolean {}
        
        export type _lboolean = {}
        
        export namespace component {
            
            export namespace arguments {
                
                export type D = string
            }
            
            export type arguments = pt.Dictionary<string>
            
            export type _ltype = T.ComputedReference<T.XGlobalType>
        }
        
        export type component = {
            readonly 'arguments': pt.Dictionary<string>
            readonly 'type': T.ComputedReference<T.XGlobalType>
        }
        
        export namespace dictionary {
            
            export type key = T.XString
            
            export type _ltype = T.XLocalType
        }
        
        export type dictionary = {
            readonly 'key': T.XString
            readonly 'type': T.XLocalType
        }
        
        export namespace group {
            
            export type properties = T.XProperties
        }
        
        export type group = {
            readonly 'properties': T.XProperties
        }
        
        export type _lstring = T.XString
        
        export namespace taggedUnion {
            
            export type _ldefault = T.YReference<T.XOption>
            
            export type options = T.Dictionary<T.XOption>
        }
        
        export type taggedUnion = {
            readonly 'default': T.YReference<T.XOption>
            readonly 'options': T.Dictionary<T.XOption>
        }
    }
    
    export type XLocalType = 
        | ['array', {
            readonly 'type': T.XLocalType
        }]
        | ['boolean', {}]
        | ['component', {
            readonly 'arguments': pt.Dictionary<string>
            readonly 'type': T.ComputedReference<T.XGlobalType>
        }]
        | ['dictionary', {
            readonly 'key': T.XString
            readonly 'type': T.XLocalType
        }]
        | ['group', {
            readonly 'properties': T.XProperties
        }]
        | ['string', T.XString]
        | ['taggedUnion', {
            readonly 'default': T.YReference<T.XOption>
            readonly 'options': T.Dictionary<T.XOption>
        }]
    
    export namespace XModel {
        
        export type globalTypes = T.Dictionary<T.XGlobalType>
        
        export type root = T.YReference<T.XGlobalType>
        
        export type stringTypes = T.Dictionary<T.XStringType>
    }
    
    export type XModel = {
        readonly 'globalTypes': T.Dictionary<T.XGlobalType>
        readonly 'root': T.YReference<T.XGlobalType>
        readonly 'stringTypes': T.Dictionary<T.XStringType>
    }
    
    export namespace XOption {
        
        export type _ltype = T.XLocalType
    }
    
    export type XOption = {
        readonly 'type': T.XLocalType
    }
    
    export namespace XParameter {}
    
    export type XParameter = {}
    
    export type XParameters = T.Dictionary<T.XParameter>
    
    export type XProperties = T.Dictionary<T.XProperty>
    
    export namespace XProperty {
        
        export type _ltype = T.XLocalType
    }
    
    export type XProperty = {
        readonly 'type': T.XLocalType
    }
    
    export namespace XReference {
        
        export type resolved__type = T.Optional<T.LocalType>
    }
    
    export type XReference = {
        readonly 'resolved type': T.Optional<T.LocalType>
    }
    
    export namespace XString {
        
        export namespace constrained {
            
            export namespace no {
                
                export type _ltype = T.YReference<T.XStringType>
            }
            
            export type no = {
                readonly 'type': T.YReference<T.XStringType>
            }
            
            export type yes = T.XReference
        }
        
        export type constrained = 
            | ['no', {
                readonly 'type': T.YReference<T.XStringType>
            }]
            | ['yes', T.XReference]
    }
    
    export type XString = {
        readonly 'constrained': 
            | ['no', {
                readonly 'type': T.YReference<T.XStringType>
            }]
            | ['yes', T.XReference]
    }
    
    export namespace XStringType {}
    
    export type XStringType = {}
    
    export namespace YReference {
        
        export type annotation<AReferencedType> = string
        
        export type name<AReferencedType> = string
        
        export type referenced__value<AReferencedType> = AReferencedType
    }
    
    export type YReference<AReferencedType> = {
        readonly 'annotation': string
        readonly 'name': string
        readonly 'referenced value': AReferencedType
    }
}