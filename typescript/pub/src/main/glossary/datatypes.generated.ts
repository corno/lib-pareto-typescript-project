import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_main from "res-pareto-main"
import * as g_project from "../../submodules/project"

export namespace N {}

export namespace T {
    
    export namespace ProjectSettings {
        
        export type mainData<GAnnotation> = g_main.T.MainData
        
        export type project<GAnnotation> = g_project.T.Project<GAnnotation>
    }
    
    export type ProjectSettings<GAnnotation> = {
        readonly 'mainData': g_main.T.MainData
        readonly 'project': g_project.T.Project<GAnnotation>
    }
}