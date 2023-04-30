import * as pt from 'pareto-core-types'

import * as g_resolve from "res-pareto-resolve"
import * as g_this from "./glossary"

export namespace D {
    
    export type resolve<GAnnotation> = {
        readonly 'resolveDictionary': g_resolve.SYNC.A.F.SafeResolveDictionary
    }
}

export namespace A {
    
    export type resolve = <GAnnotation>($d: D.resolve<GAnnotation>, ) => g_this.SYNC.A.F.Resolve<GAnnotation>
}

export type API = {
    readonly 'resolve': A.resolve
}