import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_main from "res-pareto-main"
import * as g_project from "../../submodules/project"

export namespace B {
    
    export type GenerateProject<GAnnotation> = ($: T.ProjectSettings<GAnnotation>, ) => void
    
    export type HandleArgumentError<GAnnotation> = ($: T.ArgumentError<GAnnotation>, ) => void
    
    export type HandleParameters<GAnnotation> = ($: T.Parameters<GAnnotation>, ) => void
    
    export type ParseArguments<GAnnotation> = ($: g_main.T.Arguments, ) => void
    
    export type ProcessArgument<GAnnotation> = ($: g_common.T.String, ) => void
}

export namespace C {
    
    export type GenerateProject<GAnnotation> = ($b: B.GenerateProject<GAnnotation>) => void
    
    export type HandleArgumentError<GAnnotation> = ($b: B.HandleArgumentError<GAnnotation>) => void
    
    export type HandleParameters<GAnnotation> = ($b: B.HandleParameters<GAnnotation>) => void
    
    export type ParseArguments<GAnnotation> = ($b: B.ParseArguments<GAnnotation>) => void
    
    export type ProcessArgument<GAnnotation> = ($b: B.ProcessArgument<GAnnotation>) => void
}

export namespace F {
    
    export type GenerateProjectAndReport = <GAnnotation>($: T.ProjectSettings<GAnnotation>, $b: g_fp.B.Report) => void
    
    export type ParseArguments2 = <GAnnotation>($: g_main.T.Arguments, $b: B.HandleParameters<GAnnotation>) => void
}