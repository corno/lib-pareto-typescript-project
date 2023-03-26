import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_main from "../../main"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Nothing<GAnnotation> = ($: g_common.T.Null, ) => void
    }
    
    export namespace A {
        
        
        export namespace P {
            export type GenerateProject<GAnnotation> = ($: g_main.T.ProjectSettings<T.Annotation<GAnnotation>>, $i: SYNC.I.Nothing<GAnnotation>) => void
        }
    }
}