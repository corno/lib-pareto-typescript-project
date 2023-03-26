import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_glossary from "../glossary"
import * as g_this from "./glossary"

export namespace A {
    
    export type serialize = <GAnnotation>($d: {
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
    }, ) => g_this.SYNC.A.P.Serialize<GAnnotation>
}

export type API = {
    readonly 'serialize': A.serialize
}