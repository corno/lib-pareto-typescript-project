import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"
import * as gmain from "res-pareto-main"
import * as gpareto2typescript from "../../../submodules/pareto2typescript"
import * as gproject from "../../../submodules/project"

export type IHandleParameters<GPAnnotation> = ($: T.Parameters<GPAnnotation>, ) => void

export type IParseArguments<GPAnnotation> = ($: gmain.T.Arguments, ) => void

export type IProcessArgument<GPAnnotation> = ($: gcommon.T.String, ) => void

export type FGenerateProject = <GPAnnotation>($: T.ProjectSettings<GPAnnotation>,) => void

export type FGetSingleArgument = <GPAnnotation>($: gmain.T.Arguments,) => pt.AsyncValue<gcommon.T.String>

export type FHandleArgumentError = <GPAnnotation>($: T.ArgumentError<GPAnnotation>,) => void

export type FParseArguments2 = <GPAnnotation>($: gmain.T.Arguments, $i: IHandleParameters<GPAnnotation>,) => void