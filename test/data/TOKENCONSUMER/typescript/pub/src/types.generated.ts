import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace AnnotatedToken {
        
        export type annotation<GPAnnotation> = GPAnnotation
        
        export type token<GPAnnotation> = T.Token<GPAnnotation>
    }
    
    export type AnnotatedToken<GPAnnotation> = {
        readonly 'annotation': GPAnnotation
        readonly 'token': T.Token<GPAnnotation>
    }
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace MultilineStringData {
        
        export namespace lines {
            
            export type A<GPAnnotation> = string
        }
        
        export type lines<GPAnnotation> = pt.Array<string>
    }
    
    export type MultilineStringData<GPAnnotation> = {
        readonly 'lines': pt.Array<string>
    }
    
    export namespace SimpleStringData {
        
        export type value<GPAnnotation> = string
        
        export type wrapping<GPAnnotation> = T.Wrapping<GPAnnotation>
    }
    
    export type SimpleStringData<GPAnnotation> = {
        readonly 'value': string
        readonly 'wrapping': T.Wrapping<GPAnnotation>
    }
    
    export namespace StructuralTokenData {
        
        export type _ltype<GPAnnotation> = T.StructuralTokenType<GPAnnotation>
    }
    
    export type StructuralTokenData<GPAnnotation> = {
        readonly 'type': T.StructuralTokenType<GPAnnotation>
    }
    
    export namespace StructuralTokenType {
        
        export namespace close__dictionary {}
        
        export type close__dictionary<GPAnnotation> = {}
        
        export namespace close__list {}
        
        export type close__list<GPAnnotation> = {}
        
        export namespace close__shorthand__group {}
        
        export type close__shorthand__group<GPAnnotation> = {}
        
        export namespace close__verbose__group {}
        
        export type close__verbose__group<GPAnnotation> = {}
        
        export namespace open__dictionary {}
        
        export type open__dictionary<GPAnnotation> = {}
        
        export namespace open__list {}
        
        export type open__list<GPAnnotation> = {}
        
        export namespace open__shorthand__group {}
        
        export type open__shorthand__group<GPAnnotation> = {}
        
        export namespace open__verbose__group {}
        
        export type open__verbose__group<GPAnnotation> = {}
        
        export namespace tagged__union__start {}
        
        export type tagged__union__start<GPAnnotation> = {}
    }
    
    export type StructuralTokenType<GPAnnotation> = 
        | ['close dictionary', {}]
        | ['close list', {}]
        | ['close shorthand group', {}]
        | ['close verbose group', {}]
        | ['open dictionary', {}]
        | ['open list', {}]
        | ['open shorthand group', {}]
        | ['open verbose group', {}]
        | ['tagged union start', {}]
    
    export namespace Token {
        
        export namespace header__start {}
        
        export type header__start<GPAnnotation> = {}
        
        export type multiline__string<GPAnnotation> = T.MultilineStringData<GPAnnotation>
        
        export type simple__string<GPAnnotation> = T.SimpleStringData<GPAnnotation>
        
        export type structural<GPAnnotation> = T.StructuralTokenData<GPAnnotation>
    }
    
    export type Token<GPAnnotation> = 
        | ['header start', {}]
        | ['multiline string', T.MultilineStringData<GPAnnotation>]
        | ['simple string', T.SimpleStringData<GPAnnotation>]
        | ['structural', T.StructuralTokenData<GPAnnotation>]
    
    export namespace Wrapping {
        
        export namespace apostrophe {}
        
        export type apostrophe<GPAnnotation> = {}
        
        export namespace none {}
        
        export type none<GPAnnotation> = {}
        
        export namespace quote {}
        
        export type quote<GPAnnotation> = {}
    }
    
    export type Wrapping<GPAnnotation> = 
        | ['apostrophe', {}]
        | ['none', {}]
        | ['quote', {}]
}