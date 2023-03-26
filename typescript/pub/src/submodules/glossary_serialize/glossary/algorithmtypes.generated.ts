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
        
        
        export namespace P {
            export type Serialize<GAnnotation> = ($: g_model.T.Glossary<T.Annotation<GAnnotation>>, $i: g_fp.SYNC.I.Block) => void
        }
    }
}