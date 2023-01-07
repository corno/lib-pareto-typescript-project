import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mapi from "../../api"
import * as mcollation from "res-pareto-collation"
import * as mglossary from "../../glossary"

export type CcreateProjectSerializer = ($: null, $d: {
    readonly "compare": mcollation.FIsABeforeB
    readonly "serializeLeafType": mglossary.XserializeLeafType
    readonly "serializeModuleDefinition": mapi.XserializeModuleDefinition
}) => glo.XserializeProject

export type CcreateTemplateSerializer = ($: null, $d: {
    readonly "compare": mcollation.FIsABeforeB
}) => glo.XserializeProject

export type API = {
    createProjectSerializer: CcreateProjectSerializer
    createTemplateSerializer: CcreateTemplateSerializer
}