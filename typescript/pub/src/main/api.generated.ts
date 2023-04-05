import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_fp from "lib-fountain-pen"
import * as g_fs from "lib-pareto-filesystem"
import * as g_parametersparser from "../submodules/parametersparser"
import * as g_pareto2typescript from "../submodules/pareto2typescript"
import * as g_this from "./glossary"

export namespace D {
    
    export type createProjectGeneratorAndReporter<GAnnotation> = {
        readonly 'createDirectory': g_fp.SYNC.A.P.CreateDirectory
        readonly 'createParametersParser': g_parametersparser.ASYNC.A.C.CreateParametersParser
        readonly 'readDirectoryOrAbort': g_fs.ASYNC.A.F.ReadDirectoryOrAbort
        readonly 'serializeProject': g_pareto2typescript.SYNC.A.P.ProjectToDirectory<GAnnotation>
        readonly 'validateFiles': g_pareto2typescript.SYNC.A.P.ValidateFiles<GAnnotation>
    }
}

export namespace A {
    
    export type createProjectGeneratorAndReporter = <GAnnotation>($d: D.createProjectGeneratorAndReporter<GAnnotation>, ) => g_this.ASYNC.A.C.CreateProjectGenerator<GAnnotation>
}

export type API = {
    readonly 'createProjectGeneratorAndReporter': A.createProjectGeneratorAndReporter
}