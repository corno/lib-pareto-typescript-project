import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mmain from "res-pareto-main"
import * as mpareto2typescript from "../../../submodules/pareto2typescript"
import * as mproject from "../../../submodules/project"

export type IHandleParameters = ($: T.Parameters, ) => void

export type IParseArguments = ($: mmain.T.Arguments, ) => void

export type IProcessArgument = ($: mcommon.T.String, ) => void

export type FGenerateProject = ($: T.ProjectSettings,) => void

export type FGetSingleArgument = ($: mmain.T.Arguments,) => pt.AsyncValue<mcommon.T.String>

export type FHandleArgumentError = ($: T.ArgumentError,) => void

export type FParseArguments2 = ($: mmain.T.Arguments, $i: IHandleParameters,) => void