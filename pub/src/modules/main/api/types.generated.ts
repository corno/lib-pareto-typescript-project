import * as pt from "pareto-core-types"
import * as mcommon from "glo-pareto-common"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../project"

export type TProjectSettings = {
    readonly "mainData": mmain.TMainData
    readonly "project": mproject.TProject
}