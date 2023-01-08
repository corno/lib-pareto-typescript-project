import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mapi from "../../api"
import * as mcollation from "res-pareto-collation"
import * as mglossary from "../../glossary"

export type CcreateProjectSerializer = ($d: {
    readonly "compare": mcollation.FIsABeforeB
    readonly "serializeLeafType": mglossary.XSerializeLeafType
    readonly "serializeModuleDefinition": mapi.XSerializeModuleDefinition
}) => glo.XSerializeProject

export type CcreateTemplateSerializer = ($d: {
    readonly "compare": mcollation.FIsABeforeB
}) => glo.XSerializeProject

export type API = {
    createProjectSerializer: CcreateProjectSerializer
    createTemplateSerializer: CcreateTemplateSerializer
}