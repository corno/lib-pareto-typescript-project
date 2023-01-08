import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mglossary from "../../glossary"

export type CcreateModuleDefinitionSerializer = ($d: {
    readonly "cbserializeGlossary": mglossary.XSerializeGlossary
    readonly "cbserializeLeafType": mglossary.XSerializeLeafType
    readonly "fcompare": mcollation.FIsABeforeB
}) => glo.XSerializeModuleDefinition

export type API = {
    createModuleDefinitionSerializer: CcreateModuleDefinitionSerializer
}