import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mfp from "lib-fountain-pen"

export type FSerialize<GPAnnotation> = ($: T.Glossary<GPAnnotation>, $i: mfp.ILine,) => void