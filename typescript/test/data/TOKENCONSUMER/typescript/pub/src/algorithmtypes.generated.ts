import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {
        
        export type TokenConsumer<GAnnotation> = {
            'data': ($: T.AnnotatedToken<GAnnotation>, ) => void
            'end': ($: T.Annotation<GAnnotation>, ) => void
        }
    }
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace IW {}
    
    export namespace A {}
}