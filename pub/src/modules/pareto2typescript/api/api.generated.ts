import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../project"
import * as mtemp from "../../temp"

export type CcreateGlossarySerializer = ($d: {
    readonly 'cb_dictionaryForEach': mtemp.XDictionaryForEach
    readonly 'cb_enrichedDictionaryForEach': mtemp.XEnrichedDictionaryForEach
}) => glo.XSerializeGlossary

export type CcreateImplementationSerializer = ($d: {
    readonly 'cb_arrayForEach': mtemp.XArrayForEach
    readonly 'cb_dictionaryForEach': mtemp.XDictionaryForEach
    readonly 'cb_enrichedArrayForEach': mtemp.XEnrichedArrayForEach
    readonly 'cb_enrichedDictionaryForEach': mtemp.XEnrichedDictionaryForEach
}) => glo.XSerializeImplementation

export type CcreateModuleDefinitionSerializer = ($d: {
    readonly 'cb_dictionaryForEach': mtemp.XDictionaryForEach
    readonly 'cb_serializeGlossary': glo.XSerializeGlossary
}) => glo.XSerializeModuleDefinition

export type CcreateProjectSerializer = ($d: {
    readonly 'cb_dictionaryForEach': mtemp.XDictionaryForEach
    readonly 'cb_serializeImplementation': glo.XSerializeImplementation
    readonly 'cb_serializeModuleDefinition': glo.XSerializeModuleDefinition
}) => glo.XSerializeProject

export type CcreateTemplateSerializer = ($d: {
    readonly 'cb_dictionaryForEach': mtemp.XDictionaryForEach
}) => glo.XSerializeTemplate

export type API = {
    createGlossarySerializer: CcreateGlossarySerializer
    createImplementationSerializer: CcreateImplementationSerializer
    createModuleDefinitionSerializer: CcreateModuleDefinitionSerializer
    createProjectSerializer: CcreateProjectSerializer
    createTemplateSerializer: CcreateTemplateSerializer
}