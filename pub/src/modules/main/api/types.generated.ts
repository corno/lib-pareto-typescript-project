import * as pt from "pareto-core-types"
import * as mcommon from "glo-pareto-common"
import * as mproject from "../../project"

export type TProjectSettings = {
    readonly "path": mcommon.TPath
    readonly "project": mproject.TProject
}