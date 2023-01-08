import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mglossary from "../../glossary"

export type CcreateModuleDefinitionSerializer = ($d: {
    cb: {
        readonly "serializeGlossary": mglossary.XSerializeGlossary
        readonly "serializeLeafType": mglossary.XSerializeLeafType
    }
    f: {
        readonly "compare": mcollation.FIsABeforeB
    }
    se: {}
}) => glo.XSerializeModuleDefinition

export type API = {
    createModuleDefinitionSerializer: CcreateModuleDefinitionSerializer
}