import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_glossary from "../glossary"
import * as g_this from "./glossary"

export namespace D {
    
    export type serialize<GAnnotation> = {
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'getSourceLocation': g_this.SYNC.A.F.GetSourceLocation<GAnnotation>
    }
}

export namespace A {
    
    export type serialize = <GAnnotation>($d: D.serialize<GAnnotation>, ) => g_this.SYNC.A.P.Serialize<GAnnotation>
}

export type API = {
    readonly 'serialize': A.serialize
}