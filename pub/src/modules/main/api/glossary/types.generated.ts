import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mmain from "lib-pareto-main"
import * as mpareto2typescript from "../../../pareto2typescript"
import * as mproject from "../../../project"

export namespace UArgumentError {}
export type UArgumentError = 
    | ['missing', null]
    | ['too many', null]
export type GArgumentError = UArgumentError

export namespace UParameters {}
export type UParameters = {
    readonly 'testDirectory': string
}
export type GParameters = UParameters

export namespace UProjectSettings {}
export type UProjectSettings = {
    readonly 'mainData': mmain.TMainData
    readonly 'project': mproject.TProject
}
export type GProjectSettings = UProjectSettings