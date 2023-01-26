import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as malgorithm from "../../../algorithm"
import * as mliana from "../../../liana"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../../project"

export type TConfiguration = t.GConfiguration.$

export type TMappedModel = t.GMappedModel.$

export type FGenerateProject = ($: TConfiguration,) => void

export type FMapLiana2Pareto = ($: TMappedModel,) => mproject.TModule

export type FMapLiana2States = ($: TMappedModel,) => malgorithm.TStates