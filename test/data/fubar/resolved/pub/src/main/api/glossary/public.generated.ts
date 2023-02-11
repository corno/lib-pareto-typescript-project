import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mfp from "lib-fountain-pen"

export type FEnrich = <GPAnnotation>($: T.Root<GPAnnotation>,) => T.Root<GPAnnotation>

export type FSerialize = <GPAnnotation>($: T.Root<GPAnnotation>, $i: mfp.ILine,) => void