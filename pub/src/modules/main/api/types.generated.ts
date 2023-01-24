import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mmain from "lib-pareto-main"
import * as mpareto2typescript from "../../pareto2typescript"
import * as mproject from "../../project"

export type TArgumentError = 
    | ['missing', null]
    | ['too many', null]

export type TParameters = {
    readonly 'testDirectory': string
}

export type TProjectSettings = {
    readonly 'mainData': mmain.TMainData
    readonly 'project': mproject.TProject
}

export type ICreateWriter = ($: mcommon.TString, $c: ($i: mfp.IWriter) => void) => void

export type IHandleParameters = ($: TParameters, ) => void

export type IParseArguments = ($: mmain.TArguments, ) => void

export type IProcessArgument = ($: mcommon.TString, ) => void

export type FGenerateProject = ($: TProjectSettings,) => void

export type FGetSingleArgument = ($: mmain.TArguments,) => pt.AsyncValue<mcommon.TString>

export type FHandleArgumentError = ($: TArgumentError,) => void

export type FParseArguments = ($: mcommon.TNull,$c: ($i: IParseArguments) => void,$i: IProcessArgument,) => void

export type FParseArguments2 = ($: mmain.TArguments,$i: IHandleParameters,) => void