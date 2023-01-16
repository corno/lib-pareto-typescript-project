import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"
import * as mtemp from "../../temp"

export type CcreateGlossarySerializer = ($d: {
    readonly "sf_compare": mcollation.FIsABeforeB
    readonly "cb_enrichedDictionaryForEach": mtemp.XEnrichedDictionaryForEach
}) => glo.XSerializeGlossary

export type CcreateModuleDefinitionSerializer = ($d: {
    readonly "sf_compare": mcollation.FIsABeforeB
    readonly "cb_serializeGlossary": glo.XSerializeGlossary
}) => glo.XSerializeModuleDefinition

export type API = {
    createGlossarySerializer: CcreateGlossarySerializer
    createModuleDefinitionSerializer: CcreateModuleDefinitionSerializer
}