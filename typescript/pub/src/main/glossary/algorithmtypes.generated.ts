import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_main from "res-pareto-main"
import * as g_project from "../../submodules/project"

export namespace ASYNC {
    
    export namespace I {
        
        export type GenerateProject<GAnnotation> = ($: T.ProjectSettings<GAnnotation>, ) => void
        
        export type Log<GAnnotation> = g_common.ASYNC.I.String
        
        export type LogError<GAnnotation> = g_common.ASYNC.I.String
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateProjectGenerator<GAnnotation> = {
                'construct': ($is: {
                    readonly 'log': ASYNC.I.Log<GAnnotation>
                    readonly 'logError': ASYNC.I.LogError<GAnnotation>
                }) => ASYNC.I.GenerateProject<GAnnotation>
            }
        }
        
        
        export namespace C {
            export type CreateProjectGeneratorAndReporter<GAnnotation> = {
                'construct': () => ASYNC.I.GenerateProject<GAnnotation>
            }
        }
    }
}

export namespace SYNC {}