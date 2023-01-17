import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mglossary from "../../glossary"
import * as mmain from "lib-pareto-main"
import * as mmoduleDefinition from "../../moduleDefinition"
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

export type XSerializeGlossary = ($: mglossary.TGlossary, $i: mfp.IBlock) => void

export type XSerializeModuleDefinition = ($: mmoduleDefinition.TModuleDefinition, $i: mfp.IWriter) => void

export type XSerializeProject = ($: mproject.TProject, $i: mfp.IWriter) => void

export type XSerializeTemplate = ($: mproject.TProject, $i: mfp.IWriter) => void

export type PParseArguments = ($i: IProcessArgument, $c: ($i: IParseArguments) => void) => void