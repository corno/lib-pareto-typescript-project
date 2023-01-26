import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mmain from "lib-pareto-main"
import * as mpareto2typescript from "../../../pareto2typescript"
import * as mproject from "../../../project"

export namespace GArgumentError {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = 
            | ['missing', null]
            | ['too many', null]
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GArgumentError = GArgumentError.$

export namespace GParameters {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {
            readonly 'testDirectory': string
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GParameters = GParameters.$

export namespace GProjectSettings {
    
    export namespace G {
        export type /*FIXME REMOVE*/$ = {
            readonly 'mainData': mmain.TMainData
            readonly 'project': mproject.TProject
        }
    }
    export type G = G.$
    export type /*FIXME REMOVE*/$ = G
}
export type GProjectSettings = GProjectSettings.$