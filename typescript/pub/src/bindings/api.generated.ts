import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type generateProject = <GAnnotation>() => g_this.SYNC.A.P.GenerateProject<GAnnotation>
}

export type API = {
    readonly 'generateProject': A.generateProject
}