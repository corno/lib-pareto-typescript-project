import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_main from "res-pareto-main"
import * as g_project from "../../submodules/project"

export namespace B {
    
    export type HandleParameters<GAnnotation> = ($: T.Parameters<GAnnotation>, ) => void
    
    export type ParseArguments<GAnnotation> = ($: g_main.T.Arguments, ) => void
    
    export type ProcessArgument<GAnnotation> = ($: g_common.T.String, ) => void
    
    export type Report<GAnnotation> = {
        'nodes': g_fp.B.Report
    }
}

export namespace F {
    
    export type GenerateProject = <GAnnotation>($: T.ProjectSettings<GAnnotation>,) => void
    
    export type GenerateProjectAndReport = <GAnnotation>($: T.ProjectSettings<GAnnotation>, $b: B.Report<GAnnotation>,) => void
    
    export type HandleArgumentError = <GAnnotation>($: T.ArgumentError<GAnnotation>,) => void
    
    export type ParseArguments2 = <GAnnotation>($: g_main.T.Arguments, $b: B.HandleParameters<GAnnotation>,) => void
}