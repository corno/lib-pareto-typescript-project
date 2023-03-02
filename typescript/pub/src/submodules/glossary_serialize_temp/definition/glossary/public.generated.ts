import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gfp from "lib-fountain-pen"
import * as gmodel from "../../../glossary"

export type FSerialize = <GPAnnotation>($: gmodel.T.Glossary<T.Annotation<GPAnnotation>>, $i: gfp.ILine,) => void