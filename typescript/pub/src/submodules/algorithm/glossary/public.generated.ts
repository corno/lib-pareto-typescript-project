import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_fp from "lib-fountain-pen"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type SerializeImplementation = <GAnnotation>($: T.Implementation<GAnnotation>, $b: g_fp.B.Line,) => void
}