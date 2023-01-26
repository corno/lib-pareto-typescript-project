import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcollation from "res-pareto-collation"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../project"
import * as mtemp from "../../temp"
import * as mts from "res-typescript"

export type CcreateGlossarySerializer = ($d: {
    readonly 'createApostrophedString': mts.FCreateApostrophedString
    readonly 'createBacktickedString': mts.FCreateBacktickedString
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'createQuotedString': mts.FCreateQuotedString
    readonly 'dictionaryForEach': mtemp.FDictionaryForEach
    readonly 'enrichedDictionaryForEach': mtemp.FEnrichedDictionaryForEach
}) => glo.FSerializeGlossary

export type CcreateImplementationSerializer = ($d: {
    readonly 'arrayForEach': mtemp.FArrayForEach
    readonly 'createApostrophedString': mts.FCreateApostrophedString
    readonly 'createBacktickedString': mts.FCreateBacktickedString
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'createQuotedString': mts.FCreateQuotedString
    readonly 'dictionaryForEach': mtemp.FDictionaryForEach
    readonly 'enrichedArrayForEach': mtemp.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': mtemp.FEnrichedDictionaryForEach
}) => glo.FSerializeImplementation

export type CcreateModuleDefinitionSerializer = ($d: {
    readonly 'createApostrophedString': mts.FCreateApostrophedString
    readonly 'createBacktickedString': mts.FCreateBacktickedString
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'createQuotedString': mts.FCreateQuotedString
    readonly 'dictionaryForEach': mtemp.FDictionaryForEach
    readonly 'serializeGlossary': glo.FSerializeGlossary
}) => glo.FSerializeModuleDefinition

export type CcreateProjectSerializer = ($d: {
    readonly 'createApostrophedString': mts.FCreateApostrophedString
    readonly 'createBacktickedString': mts.FCreateBacktickedString
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'createQuotedString': mts.FCreateQuotedString
    readonly 'dictionaryForEach': mtemp.FDictionaryForEach
    readonly 'serializeImplementation': glo.FSerializeImplementation
    readonly 'serializeModuleDefinition': glo.FSerializeModuleDefinition
}) => glo.FSerializeProject

export type CcreateStatesSerializer = ($d: {
    readonly 'arrayForEach': mtemp.FArrayForEach
    readonly 'createApostrophedString': mts.FCreateApostrophedString
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'dictionaryForEach': mtemp.FDictionaryForEach
    readonly 'enrichedArrayForEach': mtemp.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': mtemp.FEnrichedDictionaryForEach
}) => glo.FSerializeStates

export type CcreateTemplateSerializer = ($d: {
    readonly 'createApostrophedString': mts.FCreateApostrophedString
    readonly 'createBacktickedString': mts.FCreateBacktickedString
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'createQuotedString': mts.FCreateQuotedString
    readonly 'dictionaryForEach': mtemp.FDictionaryForEach
}) => glo.FSerializeTemplate

export type API = {
    createGlossarySerializer: CcreateGlossarySerializer
    createImplementationSerializer: CcreateImplementationSerializer
    createModuleDefinitionSerializer: CcreateModuleDefinitionSerializer
    createProjectSerializer: CcreateProjectSerializer
    createStatesSerializer: CcreateStatesSerializer
    createTemplateSerializer: CcreateTemplateSerializer
}