import * as pt from 'pareto-core-types'

import { T   } from './types.generated'


export type FSerialize = <GPAnnotation>($: T.Glossary<GPAnnotation>, $i: gfp.ILine,) => void