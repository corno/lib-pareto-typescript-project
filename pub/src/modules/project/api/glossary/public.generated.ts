import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as malgorithm from "../../../algorithm"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../../glossary"
import * as mmoduleDefinition from "../../../moduleDefinition"

export type TAlgorithmImplementation = t.UAlgorithmImplementation

export type TImplementation = t.UImplementation

export type TModule = t.UModule

export type TProject = t.UProject

export type TTest = t.UTest

export type FSerialize = ($: TModule, $i: mfp.ILine,) => void

export type FSerializeWithContext = ($: TModule, $i: mfp.IWriter,) => void