import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_this from "../algorithm"

export namespace A {
    
    export type serializeImplementation = <GAnnotation>($d: {
        readonly 'forEachImplementation': g_foreach.SYNC.A.P.DictionaryForEach<g_this.T.Implementation.implementations.D<GAnnotation>>
    }, ) => g_this.SYNC.A.P.SerializeImplementation<GAnnotation>
}

export type API = {
    readonly 'serializeImplementation': A.serializeImplementation
}