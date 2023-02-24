import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace _$ComputedReference {
        
        export type annotation<GPAnnotation, AReferencedType> = GPAnnotation
        
        export type key<GPAnnotation, AReferencedType> = string
        
        export namespace referenced__value {
            
            export type C<GPAnnotation, AReferencedType> = AReferencedType
        }
        
        export type referenced__value<GPAnnotation, AReferencedType> = () => AReferencedType
    }
    
    export type _$ComputedReference<GPAnnotation, AReferencedType> = {
        readonly 'annotation': GPAnnotation
        readonly 'key': string
        readonly 'referenced value': () => AReferencedType
    }
    
    export namespace _$Reference {
        
        export type annotation<GPAnnotation, AReferencedType> = GPAnnotation
        
        export type key<GPAnnotation, AReferencedType> = string
        
        export type referenced__value<GPAnnotation, AReferencedType> = AReferencedType
    }
    
    export type _$Reference<GPAnnotation, AReferencedType> = {
        readonly 'annotation': GPAnnotation
        readonly 'key': string
        readonly 'referenced value': AReferencedType
    }
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace PossibleModel {
        
        export namespace O {
            
            export type has__errors<GPAnnotation> = boolean
            
            export type model<GPAnnotation> = T.XModel<GPAnnotation>
        }
        
        export type O<GPAnnotation> = {
            readonly 'has errors': boolean
            readonly 'model': T.XModel<GPAnnotation>
        }
    }
    
    export type PossibleModel<GPAnnotation> = [ false ] | [ true, {
        readonly 'has errors': boolean
        readonly 'model': T.XModel<GPAnnotation>
    }]
    
    export type XArgument<GPAnnotation> = T._$ComputedReference<GPAnnotation, T.XGlobalType<GPAnnotation>>
    
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
            
            export type _ltype<GPAnnotation> = T._$ComputedReference<GPAnnotation, T.XGlobalType<GPAnnotation>>
        }
        
        export type component<GPAnnotation> = {
            readonly 'arguments': pt.Dictionary<string>
            readonly 'type': T._$ComputedReference<GPAnnotation, T.XGlobalType<GPAnnotation>>
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
            
            export type _ldefault<GPAnnotation> = T._$Reference<GPAnnotation, T.XOption<GPAnnotation>>
            
            export type options<GPAnnotation> = gcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.XOption<GPAnnotation>>
        }
        
        export type taggedUnion<GPAnnotation> = {
            readonly 'default': T._$Reference<GPAnnotation, T.XOption<GPAnnotation>>
            readonly 'options': gcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.XOption<GPAnnotation>>
        }
    }
    
    export type XLocalType<GPAnnotation> = 
        | ['array', {
            readonly 'type': T.XLocalType<GPAnnotation>
        }]
        | ['boolean', {}]
        | ['component', {
            readonly 'arguments': pt.Dictionary<string>
            readonly 'type': T._$ComputedReference<GPAnnotation, T.XGlobalType<GPAnnotation>>
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
            readonly 'default': T._$Reference<GPAnnotation, T.XOption<GPAnnotation>>
            readonly 'options': gcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.XOption<GPAnnotation>>
        }]
    
    export namespace XModel {
        
        export type globalTypes<GPAnnotation> = gcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.XGlobalType<GPAnnotation>>
        
        export type root<GPAnnotation> = T._$Reference<GPAnnotation, T.XGlobalType<GPAnnotation>>
        
        export type stringTypes<GPAnnotation> = gcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.XStringType<GPAnnotation>>
    }
    
    export type XModel<GPAnnotation> = {
        readonly 'globalTypes': gcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.XGlobalType<GPAnnotation>>
        readonly 'root': T._$Reference<GPAnnotation, T.XGlobalType<GPAnnotation>>
        readonly 'stringTypes': gcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.XStringType<GPAnnotation>>
    }
    
    export namespace XOption {
        
        export type _ltype<GPAnnotation> = T.XLocalType<GPAnnotation>
    }
    
    export type XOption<GPAnnotation> = {
        readonly 'type': T.XLocalType<GPAnnotation>
    }
    
    export namespace XParameter {}
    
    export type XParameter<GPAnnotation> = {}
    
    export type XParameters<GPAnnotation> = gcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.XParameter<GPAnnotation>>
    
    export type XProperties<GPAnnotation> = gcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.XProperty<GPAnnotation>>
    
    export namespace XProperty {
        
        export type _ltype<GPAnnotation> = T.XLocalType<GPAnnotation>
    }
    
    export type XProperty<GPAnnotation> = {
        readonly 'type': T.XLocalType<GPAnnotation>
    }
    
    export namespace XReference {
        
        export namespace resolved__type {
            
            export type O<GPAnnotation> = T.XLocalType<GPAnnotation>
        }
        
        export type resolved__type<GPAnnotation> = [ false ] | [ true, T.XLocalType<GPAnnotation>]
    }
    
    export type XReference<GPAnnotation> = {
        readonly 'resolved type': [ false ] | [ true, T.XLocalType<GPAnnotation>]
    }
    
    export namespace XString {
        
        export namespace constrained {
            
            export namespace no {
                
                export type _ltype<GPAnnotation> = T._$Reference<GPAnnotation, T.XStringType<GPAnnotation>>
            }
            
            export type no<GPAnnotation> = {
                readonly 'type': T._$Reference<GPAnnotation, T.XStringType<GPAnnotation>>
            }
            
            export type yes<GPAnnotation> = T.XReference<GPAnnotation>
        }
        
        export type constrained<GPAnnotation> = 
            | ['no', {
                readonly 'type': T._$Reference<GPAnnotation, T.XStringType<GPAnnotation>>
            }]
            | ['yes', T.XReference<GPAnnotation>]
    }
    
    export type XString<GPAnnotation> = {
        readonly 'constrained': 
            | ['no', {
                readonly 'type': T._$Reference<GPAnnotation, T.XStringType<GPAnnotation>>
            }]
            | ['yes', T.XReference<GPAnnotation>]
    }
    
    export namespace XStringType {}
    
    export type XStringType<GPAnnotation> = {}
}