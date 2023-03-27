import * as pt from 'pareto-core-types'

import * as g_main from "../main"

export namespace D {
    
}

export namespace A {
    
    export type createProjectGeneratorAndReporter = <GAnnotation>() => g_main.ASYNC.A.C.CreateProjectGeneratorAndReporter<GAnnotation>
}

export type API = {
    readonly 'createProjectGeneratorAndReporter': A.createProjectGeneratorAndReporter
}