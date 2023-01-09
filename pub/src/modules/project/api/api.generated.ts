import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mapi from "../../api"
import * as mcollation from "res-pareto-collation"
import * as mglossary from "../../glossary"

export type CcreateProjectSerializer = ($d: {
    readonly "sf_compare": mcollation.FIsABeforeB
    readonly "cb_serializeLeafType": mglossary.XSerializeLeafType
    readonly "cb_serializeModuleDefinition": mapi.XSerializeModuleDefinition
}) => glo.XSerializeProject

export type CcreateTemplateSerializer = ($d: {
    readonly "sf_compare": mcollation.FIsABeforeB
}) => glo.XSerializeTemplate

export type API = {
    createProjectSerializer: CcreateProjectSerializer
    createTemplateSerializer: CcreateTemplateSerializer
}