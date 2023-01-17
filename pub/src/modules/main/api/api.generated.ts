import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mmain from "lib-pareto-main"
import * as mproject from "../../project"
import * as mtemp from "../../temp"

export type CcreateGlossarySerializer = ($d: {
    readonly 'sf_compare': mcollation.FIsABeforeB
    readonly 'cb_enrichedDictionaryForEach': mtemp.XEnrichedDictionaryForEach
}) => glo.XSerializeGlossary

export type CcreateModuleDefinitionSerializer = ($d: {
    readonly 'sf_compare': mcollation.FIsABeforeB
    readonly 'cb_serializeGlossary': glo.XSerializeGlossary
}) => glo.XSerializeModuleDefinition

export type CcreateParametersParser = ($d: {
    readonly 'pr_callback': pt.Procedure<glo.TParameters>
    readonly 'pr_onError': pt.Procedure<glo.TArgumentError>
}) => pt.Procedure<glo.TArguments>

export type CcreateProjectGenerator = ($d: {
    readonly 'af_getSingleArgument': glo.AGetSingleArgument
    readonly 'cb_serializeProject': glo.XSerializeProject
    readonly 'cb_serializeTemplate': glo.XSerializeTemplate
}) => pt.Procedure<glo.TProjectSettings>

export type CcreateProjectSerializer = ($d: {
    readonly 'sf_compare': mcollation.FIsABeforeB
    readonly 'cb_serializeModuleDefinition': glo.XSerializeModuleDefinition
}) => glo.XSerializeProject

export type CcreateTemplateSerializer = ($d: {
    readonly 'sf_compare': mcollation.FIsABeforeB
}) => glo.XSerializeTemplate

export type CgenerateProject = pt.Procedure<glo.TProjectSettings>

export type API = {
    createGlossarySerializer: CcreateGlossarySerializer
    createModuleDefinitionSerializer: CcreateModuleDefinitionSerializer
    createParametersParser: CcreateParametersParser
    createProjectGenerator: CcreateProjectGenerator
    createProjectSerializer: CcreateProjectSerializer
    createTemplateSerializer: CcreateTemplateSerializer
    generateProject: CgenerateProject
}