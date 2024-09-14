import * as pt from 'pareto-core-types'

import * as g_main from "../main"
import * as g_serializeGlossary from "../submodules/glossary_serialize"

export namespace D {
    
    
}

export namespace A {
    
    export type createProjectGeneratorAndReporter = <GAnnotation>() => g_main.ASYNC.A.C.CreateProjectGeneratorAndReporter<GAnnotation>
    
    export type serializeGlossary = <GAnnotation>() => g_serializeGlossary.SYNC.A.P.Serialize<GAnnotation>
}

export type API = {
    readonly 'createProjectGeneratorAndReporter': A.createProjectGeneratorAndReporter
    readonly 'serializeGlossary': A.serializeGlossary
}