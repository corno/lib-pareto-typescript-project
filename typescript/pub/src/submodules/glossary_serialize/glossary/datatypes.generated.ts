import * as pt from 'pareto-core-types'

import * as g_fp from "lib-fountain-pen"
import * as g_model from "../../glossary"

export namespace T {
    
    export namespace SourceLocation {
        
        export type column<GAnnotation> = string
        
        export type file<GAnnotation> = string
        
        export type line<GAnnotation> = string
    }
    
    export type SourceLocation<GAnnotation> = {
        readonly 'column': string
        readonly 'file': string
        readonly 'line': string
    }
}