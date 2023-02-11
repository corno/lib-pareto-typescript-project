import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as malgorithm from "../../../algorithm"
import * as mliana from "../../../liana"
import * as mmain from "res-pareto-main"
import * as mproject from "../../../project"

export type FGenerateProject = ($: T.Configuration,) => void

export type FMapLiana2Pareto = ($: T.MappedModel,) => T.Modules

export type FMapLiana2States = ($: T.MappedModel,) => malgorithm.T.States