import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mmain from "res-pareto-main"
import * as mpareto2typescript from "../../../submodules/pareto2typescript"
import * as mproject from "../../../submodules/project"

export type IHandleParameters<GPAnnotation> = ($: T.Parameters<GPAnnotation>, ) => void

export type IParseArguments<GPAnnotation> = ($: mmain.T.Arguments, ) => void

export type IProcessArgument<GPAnnotation> = ($: mcommon.T.String, ) => void

export type FGenerateProject = <GPAnnotation>($: T.ProjectSettings<GPAnnotation>,) => void

export type FGetSingleArgument = <GPAnnotation>($: mmain.T.Arguments,) => pt.AsyncValue<mcommon.T.String>

export type FHandleArgumentError = <GPAnnotation>($: T.ArgumentError<GPAnnotation>,) => void

export type FParseArguments2 = <GPAnnotation>($: mmain.T.Arguments, $i: IHandleParameters<GPAnnotation>,) => void