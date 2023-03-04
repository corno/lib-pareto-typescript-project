import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace AnnotatedToken {
        
        export type annotation<GAnnotation> = GAnnotation
        
        export type token<GAnnotation> = T.Token<GAnnotation>
    }
    
    export type AnnotatedToken<GAnnotation> = {
        readonly 'annotation': GAnnotation
        readonly 'token': T.Token<GAnnotation>
    }
    
    export type Annotation<GAnnotation> = GAnnotation
    
    export namespace MultilineStringData {
        
        export namespace lines {
            
            export type T<GAnnotation> = string
        }
        
        export type lines<GAnnotation> = pt.Array<string>
    }
    
    export type MultilineStringData<GAnnotation> = {
        readonly 'lines': pt.Array<string>
    }
    
    export namespace SimpleStringData {
        
        export type value<GAnnotation> = string
        
        export type wrapping<GAnnotation> = T.Wrapping<GAnnotation>
    }
    
    export type SimpleStringData<GAnnotation> = {
        readonly 'value': string
        readonly 'wrapping': T.Wrapping<GAnnotation>
    }
    
    export namespace StructuralTokenData {
        
        export type _ltype<GAnnotation> = T.StructuralTokenType<GAnnotation>
    }
    
    export type StructuralTokenData<GAnnotation> = {
        readonly 'type': T.StructuralTokenType<GAnnotation>
    }
    
    export namespace StructuralTokenType {
        
        export namespace close__dictionary {}
        
        export type close__dictionary<GAnnotation> = null
        
        export namespace close__list {}
        
        export type close__list<GAnnotation> = null
        
        export namespace close__shorthand__group {}
        
        export type close__shorthand__group<GAnnotation> = null
        
        export namespace close__verbose__group {}
        
        export type close__verbose__group<GAnnotation> = null
        
        export namespace open__dictionary {}
        
        export type open__dictionary<GAnnotation> = null
        
        export namespace open__list {}
        
        export type open__list<GAnnotation> = null
        
        export namespace open__shorthand__group {}
        
        export type open__shorthand__group<GAnnotation> = null
        
        export namespace open__verbose__group {}
        
        export type open__verbose__group<GAnnotation> = null
        
        export namespace tagged__union__start {}
        
        export type tagged__union__start<GAnnotation> = null
    }
    
    export type StructuralTokenType<GAnnotation> = 
        | ['close dictionary', null]
        | ['close list', null]
        | ['close shorthand group', null]
        | ['close verbose group', null]
        | ['open dictionary', null]
        | ['open list', null]
        | ['open shorthand group', null]
        | ['open verbose group', null]
        | ['tagged union start', null]
    
    export namespace Token {
        
        export namespace header__start {}
        
        export type header__start<GAnnotation> = null
        
        export type multiline__string<GAnnotation> = T.MultilineStringData<GAnnotation>
        
        export type simple__string<GAnnotation> = T.SimpleStringData<GAnnotation>
        
        export type structural<GAnnotation> = T.StructuralTokenData<GAnnotation>
    }
    
    export type Token<GAnnotation> = 
        | ['header start', null]
        | ['multiline string', T.MultilineStringData<GAnnotation>]
        | ['simple string', T.SimpleStringData<GAnnotation>]
        | ['structural', T.StructuralTokenData<GAnnotation>]
    
    export namespace Wrapping {
        
        export namespace apostrophe {}
        
        export type apostrophe<GAnnotation> = null
        
        export namespace none {}
        
        export type none<GAnnotation> = null
        
        export namespace quote {}
        
        export type quote<GAnnotation> = null
    }
    
    export type Wrapping<GAnnotation> = 
        | ['apostrophe', null]
        | ['none', null]
        | ['quote', null]
}