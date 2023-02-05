import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcollation from "res-pareto-collation"
import * as mforeach from "res-pareto-foreach"
import * as mglossary from "../../glossary"
import * as mmain from "res-pareto-main"
import * as mproject from "../../project"
import * as mts from "res-typescript"

export type CcreateBuildEnvironmentSerializer = ($d: {}) => glo.FSerializeBuildEnvironment

export type CcreateGlossarySerializer = ($d: {
    readonly 'createApostrophedString': mts.FCreateApostrophedString
    readonly 'createBacktickedString': mts.FCreateBacktickedString
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'createQuotedString': mts.FCreateQuotedString
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
    readonly 'enrichedDictionaryForEach': mforeach.FEnrichedDictionaryForEach
}) => glo.FSerializeGlossary

export type CcreateImplementationSerializer = ($d: {
    readonly 'arrayForEach': mforeach.FArrayForEach
    readonly 'createApostrophedString': mts.FCreateApostrophedString
    readonly 'createBacktickedString': mts.FCreateBacktickedString
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'createQuotedString': mts.FCreateQuotedString
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': mforeach.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': mforeach.FEnrichedDictionaryForEach
}) => glo.FSerializeImplementation

export type CcreateModuleDefinitionSerializer = ($d: {
    readonly 'createApostrophedString': mts.FCreateApostrophedString
    readonly 'createBacktickedString': mts.FCreateBacktickedString
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'createQuotedString': mts.FCreateQuotedString
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
    readonly 'serializeGlossary': glo.FSerializeGlossary
}) => glo.FSerializeModuleDefinition

export type CcreateParetoEnvironmentSerializer = ($d: {}) => glo.FSerializeParetoEnvironment

export type CcreateProjectSerializer = ($d: {
    readonly 'createApostrophedString': mts.FCreateApostrophedString
    readonly 'createBacktickedString': mts.FCreateBacktickedString
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'createQuotedString': mts.FCreateQuotedString
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
    readonly 'enrichedDictionaryForEach': mforeach.FEnrichedDictionaryForEach
    readonly 'serializeGlossary': glo.FSerializeGlossary
    readonly 'serializeImplementation': glo.FSerializeImplementation
    readonly 'serializeModuleDefinition': glo.FSerializeModuleDefinition
}) => glo.FSerializeProject

export type CcreateStatesSerializer = ($d: {
    readonly 'arrayForEach': mforeach.FArrayForEach
    readonly 'createApostrophedString': mts.FCreateApostrophedString
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': mforeach.FEnrichedArrayForEach
    readonly 'enrichedDictionaryForEach': mforeach.FEnrichedDictionaryForEach
}) => glo.FSerializeStates

export type CcreateTemplateSerializer = ($d: {
    readonly 'createApostrophedString': mts.FCreateApostrophedString
    readonly 'createBacktickedString': mts.FCreateBacktickedString
    readonly 'createIdentifier': mts.FCreateIdentifier
    readonly 'createQuotedString': mts.FCreateQuotedString
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
}) => glo.FSerializeTemplate

export type API = {
    createBuildEnvironmentSerializer: CcreateBuildEnvironmentSerializer
    createGlossarySerializer: CcreateGlossarySerializer
    createImplementationSerializer: CcreateImplementationSerializer
    createModuleDefinitionSerializer: CcreateModuleDefinitionSerializer
    createParetoEnvironmentSerializer: CcreateParetoEnvironmentSerializer
    createProjectSerializer: CcreateProjectSerializer
    createStatesSerializer: CcreateStatesSerializer
    createTemplateSerializer: CcreateTemplateSerializer
}