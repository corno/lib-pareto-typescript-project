import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_this from "../algorithm"

export namespace D {
    
    export type serializeImplementation<GAnnotation> = {
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
    }
}

export namespace A {
    
    export type serializeImplementation = <GAnnotation>($d: D.serializeImplementation<GAnnotation>, ) => g_this.SYNC.A.P.SerializeImplementation<GAnnotation>
}

export type API = {
    readonly 'serializeImplementation': A.serializeImplementation
}