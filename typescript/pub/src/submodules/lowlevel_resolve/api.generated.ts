import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
}

export namespace A {
    
    export type resolve = <GAnnotation>() => g_this.SYNC.A.F.Resolve<GAnnotation>
}

export type API = {
    readonly 'resolve': A.resolve
}