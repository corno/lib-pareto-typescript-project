import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mapi from "../../api"
import * as mcollation from "res-pareto-collation"
import * as mglossary from "../../glossary"

export type CcreateProjectSerializer = ($d: {
    cb: {
        readonly "serializeLeafType": mglossary.XSerializeLeafType
        readonly "serializeModuleDefinition": mapi.XSerializeModuleDefinition
    }
    f: {
        readonly "compare": mcollation.FIsABeforeB
    }
    se: {}
}) => glo.XSerializeProject

export type CcreateTemplateSerializer = ($d: {
    cb: {}
    f: {
        readonly "compare": mcollation.FIsABeforeB
    }
    se: {}
}) => glo.XSerializeProject

export type API = {
    createProjectSerializer: CcreateProjectSerializer
    createTemplateSerializer: CcreateTemplateSerializer
}