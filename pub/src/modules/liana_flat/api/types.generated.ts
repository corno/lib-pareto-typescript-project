import * as pt from 'pareto-core-types'
import * as mfp from "lib-fountain-pen"
import * as mliana from "../../liana"

export type FSerialize = ($: mliana.TModel, $i: mfp.IWriter,) => void