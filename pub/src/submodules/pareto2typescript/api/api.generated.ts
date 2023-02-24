import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcollation from "res-pareto-collation"
import * as gforeach from "res-pareto-foreach"
import * as gglossary from "../../glossary"
import * as gmain from "res-pareto-main"
import * as gproject from "../../project"
import * as gts from "res-typescript"

export type CcreateGlossarySerializer = ($d: {
    readonly 'createApostrophedString': gts.FCreateApostrophedString
    readonly 'createBacktickedString': gts.FCreateBacktickedString
    readonly 'createIdentifier': gts.FCreateIdentifier
    readonly 'createQuotedString': gts.FCreateQuotedString
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedDictionaryForEach': gforeach.FEnrichedDictionaryForEach
}) => gglo.FSerializeGlossary

export type CcreateImplementationSerializer = ($d: {
    readonly 'arrayForEach': gforeach.FArrayForEach
    readonly 'createApostrophedString': gts.FCreateApostrophedString
    readonly 'createBacktickedString': gts.FCreateBacktickedString
    readonly 'createIdentifier': gts.FCreateIdentifier
    readonly 'createQuotedString': gts.FCreateQuotedString
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': gforeach.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': gforeach.FEnrichedDictionaryForEach
}) => gglo.FSerializeImplementation

export type CcreateModuleDefinitionSerializer = ($d: {
    readonly 'createApostrophedString': gts.FCreateApostrophedString
    readonly 'createBacktickedString': gts.FCreateBacktickedString
    readonly 'createIdentifier': gts.FCreateIdentifier
    readonly 'createQuotedString': gts.FCreateQuotedString
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'serializeGlossary': gglo.FSerializeGlossary
}) => gglo.FSerializeModuleDefinition

export type CcreateProjectSerializer = ($d: {
    readonly 'createApostrophedString': gts.FCreateApostrophedString
    readonly 'createBacktickedString': gts.FCreateBacktickedString
    readonly 'createIdentifier': gts.FCreateIdentifier
    readonly 'createQuotedString': gts.FCreateQuotedString
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedDictionaryForEach': gforeach.FEnrichedDictionaryForEach
    readonly 'serializeGlossary': gglo.FSerializeGlossary
    readonly 'serializeImplementation': gglo.FSerializeImplementation
    readonly 'serializeModuleDefinition': gglo.FSerializeModuleDefinition
}) => gglo.FSerializeProject

export type CcreateStatesSerializer = ($d: {
    readonly 'arrayForEach': gforeach.FArrayForEach
    readonly 'createApostrophedString': gts.FCreateApostrophedString
    readonly 'createIdentifier': gts.FCreateIdentifier
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': gforeach.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': gforeach.FEnrichedDictionaryForEach
}) => gglo.FSerializeStates

export type CcreateTemplateSerializer = ($d: {
    readonly 'createApostrophedString': gts.FCreateApostrophedString
    readonly 'createBacktickedString': gts.FCreateBacktickedString
    readonly 'createIdentifier': gts.FCreateIdentifier
    readonly 'createQuotedString': gts.FCreateQuotedString
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
}) => gglo.FSerializeTemplate

export type API = {
    createGlossarySerializer: CcreateGlossarySerializer
    createImplementationSerializer: CcreateImplementationSerializer
    createModuleDefinitionSerializer: CcreateModuleDefinitionSerializer
    createProjectSerializer: CcreateProjectSerializer
    createStatesSerializer: CcreateStatesSerializer
    createTemplateSerializer: CcreateTemplateSerializer
}