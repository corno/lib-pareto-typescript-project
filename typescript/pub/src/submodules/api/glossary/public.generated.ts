import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_glossary from "../../glossary"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type Serialize = <GAnnotation>($: T.API<GAnnotation>, $b: g_fp.B.Block,) => void
}