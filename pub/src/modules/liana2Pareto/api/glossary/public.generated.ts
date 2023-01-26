import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as malgorithm from "../../../algorithm"
import * as mliana from "../../../liana"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../../project"

export type TConfiguration = t.UConfiguration

export type TMappedModel = t.UMappedModel

export type TModules = t.UModules

export type FGenerateProject = ($: TConfiguration,) => void

export type FMapLiana2Pareto = ($: TMappedModel,) => TModules

export type FMapLiana2States = ($: TMappedModel,) => malgorithm.TStates