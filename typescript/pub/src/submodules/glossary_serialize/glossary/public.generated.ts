import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_fp from "lib-fountain-pen"
import * as g_model from "../../glossary"

export namespace B {}

export namespace F {
    
    export type Serialize = <GAnnotation>($: g_model.T.Glossary<T.Annotation<GAnnotation>>, $b: g_fp.B.Block) => void
}