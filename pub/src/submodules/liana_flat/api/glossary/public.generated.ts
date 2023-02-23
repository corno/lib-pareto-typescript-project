import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mfp from "lib-fountain-pen"
import * as mliana from "../../../liana"
import * as mliana2pareto from "../../../liana2pareto"

export type FSerialize = <GPAnnotation>($: mliana2pareto.T.MappedModel<T.Annotation<GPAnnotation>>, $i: mfp.IWriter,) => void