import * as pt from 'pareto-core-types'

import * as g_algorithm from "../algorithm"
import * as g_foreach from "res-pareto-foreach"
import * as g_glossary from "../glossary"
import * as g_project from "../project"
import * as g_this from "./glossary"
import * as g_ts from "res-typescript"

export namespace D {
    
    export type serializeGlossary<GAnnotation> = {
        readonly 'createApostrophedString': g_ts.SYNC.A.F.CreateApostrophedString
        readonly 'createBacktickedString': g_ts.SYNC.A.F.CreateBacktickedString
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'createQuotedString': g_ts.SYNC.A.F.CreateQuotedString
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'enrichedDictionaryForEach': g_foreach.SYNC.A.P.EnrichedDictionaryForEach
    }
    
    export type serializeImplementation<GAnnotation> = {
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'enrichedDictionaryForEach': g_foreach.SYNC.A.P.EnrichedDictionaryForEach
    }
    
    export type serializeProject<GAnnotation> = {
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'enrichedDictionaryForEach': g_foreach.SYNC.A.P.EnrichedDictionaryForEach
        readonly 'serializeGlossary': g_this.SYNC.A.P.SerializeGlossary<GAnnotation>
        readonly 'serializeImplementation': g_this.SYNC.A.P.SerializeImplementation<GAnnotation>
    }
    
    export type serializeStates<GAnnotation> = {
        readonly 'createApostrophedString': g_ts.SYNC.A.F.CreateApostrophedString
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'enrichedDictionaryForEach': g_foreach.SYNC.A.P.EnrichedDictionaryForEach
    }
    
}

export namespace A {
    
    export type serializeGlossary = <GAnnotation>($d: D.serializeGlossary<GAnnotation>, ) => g_this.SYNC.A.P.SerializeGlossary<GAnnotation>
    
    export type serializeImplementation = <GAnnotation>($d: D.serializeImplementation<GAnnotation>, ) => g_this.SYNC.A.P.SerializeImplementation<GAnnotation>
    
    export type serializeProject = <GAnnotation>($d: D.serializeProject<GAnnotation>, ) => g_this.SYNC.A.P.ProjectToDirectory<GAnnotation>
    
    export type serializeStates = <GAnnotation>($d: D.serializeStates<GAnnotation>, ) => g_this.SYNC.A.P.SerializeStates<GAnnotation>
    
    export type validateFiles = <GAnnotation>() => g_this.SYNC.A.F.ValidateFiles<GAnnotation>
}

export type API = {
    readonly 'serializeGlossary': A.serializeGlossary
    readonly 'serializeImplementation': A.serializeImplementation
    readonly 'serializeProject': A.serializeProject
    readonly 'serializeStates': A.serializeStates
    readonly 'validateFiles': A.validateFiles
}