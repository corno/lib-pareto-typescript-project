import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_resolved from "../../lowlevel_implementation_possiblyresolved"
import * as g_unresolved from "../../lowlevel_implementation"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Error<GAnnotation> = ($: T.Error<GAnnotation>, ) => void
    }
    
    export namespace A {
        
        
        export namespace F {
            export type Resolve<GAnnotation> = ($: g_unresolved.T.Address__Selection<GAnnotation>) => g_resolved.T.Address__Selection<GAnnotation>
        }
    }
}