import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mapi from "../../api"
import * as mcollation from "res-pareto-collation"
import * as mglossary from "../../glossary"

export type CcreateProjectSerializer = ($d: {
    readonly "cbserializeLeafType": mglossary.XSerializeLeafType
    readonly "cbserializeModuleDefinition": mapi.XSerializeModuleDefinition
    readonly "fcompare": mcollation.FIsABeforeB
}) => glo.XSerializeProject

export type CcreateTemplateSerializer = ($d: {
    readonly "fcompare": mcollation.FIsABeforeB
}) => glo.XSerializeTemplate

export type API = {
    createProjectSerializer: CcreateProjectSerializer
    createTemplateSerializer: CcreateTemplateSerializer
}