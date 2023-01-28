import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mmain from "res-pareto-main"
import * as mpareto2typescript from "../../../pareto2typescript"
import * as mproject from "../../../project"

export namespace GArgumentError {}
export type GArgumentError = 
    | ['missing', null]
    | ['too many', null]
export type UArgumentError = GArgumentError

export namespace GParameters {}
export type GParameters = {
    readonly 'testDirectory': string
}
export type UParameters = GParameters

export namespace GProjectSettings {}
export type GProjectSettings = {
    readonly 'mainData': mmain.TMainData
    readonly 'project': mproject.TProject
}
export type UProjectSettings = GProjectSettings