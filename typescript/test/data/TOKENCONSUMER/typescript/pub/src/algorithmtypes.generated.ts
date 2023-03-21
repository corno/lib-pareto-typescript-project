import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {
        
        export type TokenConsumer<GAnnotation> = {
            'data': ($: T.AnnotatedToken<GAnnotation>, ) => void
            'end': ($: T.Annotation<GAnnotation>, ) => void
        }
    }
    
    export namespace C {}
    
    export namespace F {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace I2 {}
    
    export namespace I3 {}
    
    export namespace C {}
    
    export namespace C2 {}
    
    export namespace C3 {}
    
    export namespace F {}
}