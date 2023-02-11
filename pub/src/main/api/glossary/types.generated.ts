import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mmain from "res-pareto-main"
import * as mpareto2typescript from "../../../submodules/pareto2typescript"
import * as mproject from "../../../submodules/project"

export namespace T {
    
    export namespace ArgumentError {
        
        export type missing = null
        
        export type too__many = null
    }
    
    export type ArgumentError = 
        | ['missing', null]
        | ['too many', null]
    
    export namespace Parameters {
        
        export type testDirectory = string
    }
    
    export type Parameters = {
        readonly 'testDirectory': string
    }
    
    export namespace ProjectSettings {
        
        export type mainData = mmain.T.MainData
        
        export type project = mproject.T.Project
    }
    
    export type ProjectSettings = {
        readonly 'mainData': mmain.T.MainData
        readonly 'project': mproject.T.Project
    }
}