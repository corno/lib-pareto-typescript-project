import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gfp from "lib-fountain-pen"
import * as gliana from "../../../liana"
import * as gliana2pareto from "../../../liana2pareto"

export type FSerialize = <GPAnnotation>($: gliana2pareto.T.MappedModel<T.Annotation<GPAnnotation>>, $i: gfp.IWriter,) => void