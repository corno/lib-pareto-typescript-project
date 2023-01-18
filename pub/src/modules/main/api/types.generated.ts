import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mmain from "lib-pareto-main"
import * as mpareto2typescript from "../../pareto2typescript"
import * as mproject from "../../project"

export type TArgumentError = 
    | ['missing', null]
    | ['too many', null]

export type TArguments = pt.Array<string>

export type TParameters = {
    readonly 'testDirectory': string
}

export type TProjectSettings = {
    readonly 'mainData': mmain.TMainData
    readonly 'project': mproject.TProject
}

export type ICreateWriter = ($: mcommon.TString, $c: ($i: mfp.IWriter) => void) => void

export type IParseArguments = ($: TArguments, ) => void

export type IProcessArgument = ($: mcommon.TString, ) => void

export type AGetSingleArgument = ($: TArguments) => pt.AsyncValue<mcommon.TString>

export type PParseArguments = ($i: IProcessArgument, $c: ($i: IParseArguments) => void) => void