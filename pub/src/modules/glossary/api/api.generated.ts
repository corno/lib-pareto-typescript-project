import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mcollation from "res-pareto-collation"

export type CcreateGlossarySerializer = ($d: {
    readonly "fcompare": mcollation.FIsABeforeB
}) => glo.XSerializeGlossary

export type CserializeLeafType = glo.XSerializeLeafType

export type API = {
    createGlossarySerializer: CcreateGlossarySerializer
    serializeLeafType: CserializeLeafType
}