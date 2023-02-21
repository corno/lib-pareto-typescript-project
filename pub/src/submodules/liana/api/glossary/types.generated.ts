import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mresolved from "../../../liana_resolved"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
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
            
            export type arguments<GPAnnotation> = mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, mcommon.T.Null>
            
            export type _ltype<GPAnnotation> = mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
        }
        
        export type component<GPAnnotation> = {
            readonly 'arguments': mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, mcommon.T.Null>
            readonly 'type': mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
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
        
        export namespace optional {
            
            export type _ltype<GPAnnotation> = T.LocalType<GPAnnotation>
        }
        
        export type optional<GPAnnotation> = {
            readonly 'type': T.LocalType<GPAnnotation>
        }
        
        export type _lstring<GPAnnotation> = T.String<GPAnnotation>
        
        export namespace taggedUnion {
            
            export type _ldefault<GPAnnotation> = mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
            
            export type options<GPAnnotation> = mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.LocalType<GPAnnotation>>
        }
        
        export type taggedUnion<GPAnnotation> = {
            readonly 'default': mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
            readonly 'options': mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.LocalType<GPAnnotation>>
        }
    }
    
    export type LocalType<GPAnnotation> = 
        | ['array', {
            readonly 'type': T.LocalType<GPAnnotation>
        }]
        | ['boolean', {}]
        | ['component', {
            readonly 'arguments': mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, mcommon.T.Null>
            readonly 'type': mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
        }]
        | ['dictionary', {
            readonly 'key': T.String<GPAnnotation>
            readonly 'type': T.LocalType<GPAnnotation>
        }]
        | ['group', {
            readonly 'properties': T.Properties<GPAnnotation>
        }]
        | ['optional', {
            readonly 'type': T.LocalType<GPAnnotation>
        }]
        | ['string', T.String<GPAnnotation>]
        | ['taggedUnion', {
            readonly 'default': mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
            readonly 'options': mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.LocalType<GPAnnotation>>
        }]
    
    export namespace Model {
        
        export type globalTypes<GPAnnotation> = mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.GlobalType<GPAnnotation>>
        
        export type root<GPAnnotation> = mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
        
        export type stringTypes<GPAnnotation> = mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, mcommon.T.Null>
    }
    
    export type Model<GPAnnotation> = {
        readonly 'globalTypes': mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.GlobalType<GPAnnotation>>
        readonly 'root': mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
        readonly 'stringTypes': mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, mcommon.T.Null>
    }
    
    export type Parameter<GPAnnotation> = mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
    
    export type Parameters<GPAnnotation> = mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.Parameter<GPAnnotation>>
    
    export type Properties<GPAnnotation> = mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, T.Property<GPAnnotation>>
    
    export namespace Property {
        
        export type sibling__dependencies<GPAnnotation> = mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, mcommon.T.Null>
        
        export type _ltype<GPAnnotation> = T.LocalType<GPAnnotation>
    }
    
    export type Property<GPAnnotation> = {
        readonly 'sibling dependencies': mcommon.T.AnnotatedDictionary<T.Annotation<GPAnnotation>, mcommon.T.Null>
        readonly 'type': T.LocalType<GPAnnotation>
    }
    
    export namespace Reference {
        
        export namespace steps {
            
            export namespace A {
                
                export namespace array {}
                
                export type array<GPAnnotation> = {}
                
                export type group<GPAnnotation> = mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
                
                export namespace reference {}
                
                export type reference<GPAnnotation> = {}
                
                export type tagged__union<GPAnnotation> = mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
            }
            
            export type A<GPAnnotation> = 
                | ['array', {}]
                | ['group', mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>]
                | ['reference', {}]
                | ['tagged union', mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>]
        }
        
        export type steps<GPAnnotation> = pt.Array<
            | ['array', {}]
            | ['group', mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>]
            | ['reference', {}]
            | ['tagged union', mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>]
        >
        
        export namespace _ltype {
            
            export namespace other {}
            
            export type other<GPAnnotation> = {}
            
            export type parameter<GPAnnotation> = mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
            
            export type sibling<GPAnnotation> = mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
        }
        
        export type _ltype<GPAnnotation> = 
            | ['other', {}]
            | ['parameter', mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>]
            | ['sibling', mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>]
    }
    
    export type Reference<GPAnnotation> = {
        readonly 'steps': pt.Array<
            | ['array', {}]
            | ['group', mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>]
            | ['reference', {}]
            | ['tagged union', mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>]
        >
        readonly 'type': 
            | ['other', {}]
            | ['parameter', mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>]
            | ['sibling', mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>]
    }
    
    export namespace String {
        
        export namespace constrained {
            
            export namespace no {
                
                export type _ltype<GPAnnotation> = mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
            }
            
            export type no<GPAnnotation> = {
                readonly 'type': mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
            }
            
            export type yes<GPAnnotation> = T.Reference<GPAnnotation>
        }
        
        export type constrained<GPAnnotation> = 
            | ['no', {
                readonly 'type': mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
            }]
            | ['yes', T.Reference<GPAnnotation>]
    }
    
    export type String<GPAnnotation> = {
        readonly 'constrained': 
            | ['no', {
                readonly 'type': mcommon.T.AnnotatedKey<T.Annotation<GPAnnotation>>
            }]
            | ['yes', T.Reference<GPAnnotation>]
    }
}