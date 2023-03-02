import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gfp from "lib-fountain-pen"
import * as gmain from "res-pareto-main"
import * as gpareto2typescript from "../../../submodules/pareto2typescript"
import * as gproject from "../../../submodules/project"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace ArgumentError {
        
        export type missing<GPAnnotation> = null
        
        export type too__many<GPAnnotation> = null
    }
    
    export type ArgumentError<GPAnnotation> = 
        | ['missing', null]
        | ['too many', null]
    
    export namespace Parameters {
        
        export type testDirectory<GPAnnotation> = string
    }
    
    export type Parameters<GPAnnotation> = {
        readonly 'testDirectory': string
    }
    
    export namespace ProjectSettings {
        
        export type mainData<GPAnnotation> = gmain.T.MainData
        
        export type project<GPAnnotation> = gproject.T.Project<T.Annotation<GPAnnotation>>
    }
    
    export type ProjectSettings<GPAnnotation> = {
        readonly 'mainData': gmain.T.MainData
        readonly 'project': gproject.T.Project<T.Annotation<GPAnnotation>>
    }
}