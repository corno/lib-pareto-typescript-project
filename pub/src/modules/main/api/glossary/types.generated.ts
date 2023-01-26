import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mmain from "lib-pareto-main"
import * as mpareto2typescript from "../../../pareto2typescript"
import * as mproject from "../../../project"

export namespace GArgumentError {
    
    export namespace G {}
    export type G = 
        | ['missing', null]
        | ['too many', null]
}
export type GArgumentError = GArgumentError.G

export namespace GParameters {
    
    export namespace G {}
    export type G = {
        readonly 'testDirectory': string
    }
}
export type GParameters = GParameters.G

export namespace GProjectSettings {
    
    export namespace G {}
    export type G = {
        readonly 'mainData': mmain.TMainData
        readonly 'project': mproject.TProject
    }
}
export type GProjectSettings = GProjectSettings.G