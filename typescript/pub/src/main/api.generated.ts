import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_parametersparser from "../submodules/parametersparser"
import * as g_pareto2typescript from "../submodules/pareto2typescript"
import * as g_this from "./glossary"

export namespace A {
    
    export type generateProjectAndReport = <GAnnotation>($d: {
        readonly 'createParametersParser': g_parametersparser.ASYNC.A.C.CreateParametersParser
        readonly 'decorateDictionaryEntriesWithKey': g_foreach.SYNC.A.F.DecorateDictionaryEntriesWithKey<string>
        readonly 'serializeProject': g_pareto2typescript.SYNC.A.P.ProjectToDirectory<GAnnotation>
        readonly 'serializeTemplate': g_pareto2typescript.SYNC.A.P.ProjectToDirectory<GAnnotation>
        readonly 'validateFiles': g_pareto2typescript.SYNC.A.P.ValidateFiles<GAnnotation>
    }, ) => g_this.SYNC.A.P.GenerateProjectAndReport<GAnnotation>
}

export type API = {
    readonly 'generateProjectAndReport': A.generateProjectAndReport
}