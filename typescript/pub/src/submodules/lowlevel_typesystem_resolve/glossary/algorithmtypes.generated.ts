import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_resolved from "../../lowlevel_typesystem_possiblyresolved"
import * as g_unresolved from "../../lowlevel_typesystem"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Resolve<GAnnotation> = ($: g_unresolved.T.SourceFile<GAnnotation>) => g_resolved.T.SourceFile<GAnnotation>
        }
    }
}