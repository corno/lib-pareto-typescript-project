import * as pt from "pareto-core-types"
import * as mcommon from "glo-pareto-common"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../project"

export type TArguments = pt.Array<string>

export type TProjectSettings = {
    readonly "mainData": mmain.TMainData
    readonly "project": mproject.TProject
}

export type ISingleArgument = {}

export type XGetSingleArgument = ($: TArguments, $i: ISingleArgument) => void