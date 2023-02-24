import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as malgorithm from "../../../algorithm"
import * as mcommon from "glo-pareto-common"
import * as mliana from "../../../liana"
import * as mmain from "res-pareto-main"
import * as mproject from "../../../project"

export type FGenerateModule = <GPAnnotation>($: T.GenerateModuleData<GPAnnotation>,) => void

export type FMapLiana2Pareto = <GPAnnotation>($: T.MapLiana2ParetoData<GPAnnotation>,) => T.Module<GPAnnotation>

export type FMapLiana2States = <GPAnnotation>($: T.MappedModel<GPAnnotation>,) => malgorithm.T.States<T.Annotation<GPAnnotation>>