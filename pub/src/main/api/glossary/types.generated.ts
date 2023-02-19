import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mfp from "lib-fountain-pen"
import * as mmain from "res-pareto-main"
import * as mpareto2typescript from "../../../submodules/pareto2typescript"
import * as mproject from "../../../submodules/project"

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
        
        export type mainData<GPAnnotation> = mmain.T.MainData
        
        export type project<GPAnnotation> = mproject.T.Project<T.Annotation<GPAnnotation>>
    }
    
    export type ProjectSettings<GPAnnotation> = {
        readonly 'mainData': mmain.T.MainData
        readonly 'project': mproject.T.Project<T.Annotation<GPAnnotation>>
    }
}