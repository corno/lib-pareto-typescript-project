import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_fp from "lib-fountain-pen"
import * as g_model from "../../glossary"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type GetSourceLocation<GAnnotation> = ($: GAnnotation) => T.SourceLocation<GAnnotation>
        }
        
        
        export namespace P {
            export type Serialize<GAnnotation> = ($: g_model.T.Glossary<GAnnotation>, $i: g_fp.SYNC.I.Block) => void
        }
    }
}