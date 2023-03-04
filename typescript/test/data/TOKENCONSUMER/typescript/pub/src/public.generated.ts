import * as pt from 'pareto-core-types'

import { T } from './types.generated'


export namespace I {
    
    export type TokenConsumer<GAnnotation> = {
        'onEnd': ($: T.Annotation<GAnnotation>, ) => void
        'onToken': ($: T.AnnotatedToken<GAnnotation>, ) => void
    }
}

export namespace B {}

export namespace F {}