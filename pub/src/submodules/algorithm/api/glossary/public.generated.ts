import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mfp from "lib-fountain-pen"

export type FSerializeImplementation = ($: T.Implementation, $i: mfp.ILine,) => void