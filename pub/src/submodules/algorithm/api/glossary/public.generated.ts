import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mfp from "lib-fountain-pen"

export type FSerializeImplementation = <GPAnnotation>($: T.Implementation<GPAnnotation>, $i: mfp.ILine,) => void