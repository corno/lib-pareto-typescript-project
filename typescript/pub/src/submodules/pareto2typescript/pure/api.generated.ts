import * as pt from 'pareto-core-types'

import * as g_collation from "res-pareto-collation"
import * as g_common from "glo-pareto-common"
import * as g_dictionary from "res-pareto-dictionary"
import * as g_foreach from "res-pareto-foreach"
import * as g_glossary from "../../glossary"
import * as g_main from "res-pareto-main"
import * as g_project from "../../project"
import * as g_this from "../glossary"
import * as g_ts from "res-typescript"

export type createGlossarySerializer = ($d: {
    readonly 'createApostrophedString': g_ts.F.CreateApostrophedString
    readonly 'createBacktickedString': g_ts.F.CreateBacktickedString
    readonly 'createIdentifier': g_ts.F.CreateIdentifier
    readonly 'createQuotedString': g_ts.F.CreateQuotedString
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
    readonly 'dictionaryIsEmpty': g_dictionary.F.IsEmpty
    readonly 'enrichedDictionaryForEach': g_foreach.F.EnrichedDictionaryForEach
}) => g_this.F.SerializeGlossary

export type createImplementationSerializer = ($d: {
    readonly 'arrayForEach': g_foreach.F.ArrayForEach
    readonly 'createApostrophedString': g_ts.F.CreateApostrophedString
    readonly 'createBacktickedString': g_ts.F.CreateBacktickedString
    readonly 'createIdentifier': g_ts.F.CreateIdentifier
    readonly 'createQuotedString': g_ts.F.CreateQuotedString
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
    readonly 'enrichedArrayForEach': g_foreach.F.EnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': g_foreach.F.EnrichedDictionaryForEach
}) => g_this.F.SerializeImplementation

export type createProjectSerializer = ($d: {
    readonly 'createApostrophedString': g_ts.F.CreateApostrophedString
    readonly 'createBacktickedString': g_ts.F.CreateBacktickedString
    readonly 'createIdentifier': g_ts.F.CreateIdentifier
    readonly 'createQuotedString': g_ts.F.CreateQuotedString
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
    readonly 'enrichedDictionaryForEach': g_foreach.F.EnrichedDictionaryForEach
    readonly 'serializeGlossary': g_this.F.SerializeGlossary
    readonly 'serializeImplementation': g_this.F.SerializeImplementation
}) => g_this.F.ProjectToDirectory

export type createStatesSerializer = ($d: {
    readonly 'arrayForEach': g_foreach.F.ArrayForEach
    readonly 'createApostrophedString': g_ts.F.CreateApostrophedString
    readonly 'createIdentifier': g_ts.F.CreateIdentifier
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
    readonly 'enrichedArrayForEach': g_foreach.F.EnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': g_foreach.F.EnrichedDictionaryForEach
}) => g_this.F.SerializeStates

export type createTemplateSerializer = ($d: {
    readonly 'createApostrophedString': g_ts.F.CreateApostrophedString
    readonly 'createBacktickedString': g_ts.F.CreateBacktickedString
    readonly 'createIdentifier': g_ts.F.CreateIdentifier
    readonly 'createQuotedString': g_ts.F.CreateQuotedString
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
}) => g_this.F.ProjectToDirectory

export type validateFiles = g_this.F.ValidateFiles

export type API = {
    createGlossarySerializer: createGlossarySerializer
    createImplementationSerializer: createImplementationSerializer
    createProjectSerializer: createProjectSerializer
    createStatesSerializer: createStatesSerializer
    createTemplateSerializer: createTemplateSerializer
    validateFiles: validateFiles
}