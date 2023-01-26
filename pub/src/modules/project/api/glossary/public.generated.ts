import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as malgorithm from "../../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mmoduleDefinition from "../../../moduleDefinition"

export type TAlgorithmImplementation = t.GAlgorithmImplementation.$

export type TImplementation = t.GImplementation.$

export type TModule = t.GModule.$

export type TProject = t.GProject.$

export type FSerialize = ($: TModule, $i: mfp.ILine,) => void

export type FSerializeWithContext = ($: TModule, $i: mfp.IWriter,) => void