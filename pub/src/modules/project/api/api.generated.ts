import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as malgorithm from "../../algorithm"
import * as mcollation from "res-pareto-collation"
import * as mmoduleDefinition from "../../moduleDefinition"
import * as mtemp from "../../temp"

export type CcreateSerializer = ($d: {
    readonly 'sf_compare': mcollation.FIsABeforeB
    readonly 'cb_enrichedArrayForEach': mtemp.XEnrichedArrayForEach
    readonly 'cb_serializeImplementation': malgorithm.XSerialize
    readonly 'cb_serializeModuleDefinition': mmoduleDefinition.XSerialize
}) => glo.XSerialize

export type CcreateSerializerWithContext = ($d: {
    readonly 'cb_serialize': glo.XSerialize
}) => glo.XSerializeWithContext

export type API = {
    createSerializer: CcreateSerializer
    createSerializerWithContext: CcreateSerializerWithContext
}