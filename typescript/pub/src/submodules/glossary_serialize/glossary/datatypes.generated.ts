import * as pt from 'pareto-core-types'

import * as g_fp from "lib-fountain-pen"
import * as g_model from "../../glossary"

export namespace N {}

export namespace T {
    
    export namespace SourceLocation {
        
        export type column<GAnnotation> = number
        
        export type file<GAnnotation> = string
        
        export type line<GAnnotation> = number
    }
    
    export type SourceLocation<GAnnotation> = {
        readonly 'column': number
        readonly 'file': string
        readonly 'line': number
    }
}