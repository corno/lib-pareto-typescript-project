import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as malgorithm from "../../../algorithm"
import * as mliana from "../../../liana"
import * as mmain from "res-pareto-main"
import * as mproject from "../../../project"

export type FGenerateProject = <GPAnnotation>($: T.Configuration<GPAnnotation>,) => void

export type FMapLiana2pareto = <GPAnnotation>($: T.MappedModel<GPAnnotation>,) => T.Modules<GPAnnotation>

export type FMapLiana2States = <GPAnnotation>($: T.MappedModel<GPAnnotation>,) => malgorithm.T.States<T.Annotation<GPAnnotation>>