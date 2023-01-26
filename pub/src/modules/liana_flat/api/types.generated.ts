import * as pt from 'pareto-core-types'
import * as mfp from "lib-fountain-pen"
import * as mliana from "../../liana"
import * as mliana2Pareto from "../../liana2Pareto"

export type FSerialize = ($: mliana2Pareto.TMappedModel, $i: mfp.IWriter,) => void