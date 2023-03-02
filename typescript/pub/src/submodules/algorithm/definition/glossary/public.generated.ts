import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gfp from "lib-fountain-pen"

export type FSerializeImplementation = <GPAnnotation>($: T.Implementation<GPAnnotation>, $i: gfp.ILine,) => void