import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mmain from "lib-pareto-main"
import * as mpareto2typescript from "../../../pareto2typescript"
import * as mproject from "../../../project"

export type TArgumentError = t.GArgumentError

export type TParameters = t.GParameters

export type TProjectSettings = t.GProjectSettings

export type IHandleParameters = ($: TParameters, ) => void

export type IParseArguments = ($: mmain.TArguments, ) => void

export type IProcessArgument = ($: mcommon.TString, ) => void

export type FGenerateProject = ($: TProjectSettings,) => void

export type FGetSingleArgument = ($: mmain.TArguments,) => pt.AsyncValue<mcommon.TString>

export type FHandleArgumentError = ($: TArgumentError,) => void

export type FParseArguments2 = ($: mmain.TArguments, $i: IHandleParameters,) => void