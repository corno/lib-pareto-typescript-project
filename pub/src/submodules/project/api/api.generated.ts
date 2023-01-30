import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as malgorithm from "../../algorithm"
import * as mcollation from "res-pareto-collation"
import * as mmoduleDefinition from "../../moduleDefinition"
import * as mtemp from "../../temp"

export type CcreateSerializer = ($d: {
    readonly 'dictionaryForEach': mtemp.FDictionaryForEach
    readonly 'enrichedArrayForEach': mtemp.FEnrichedArrayForEach
    readonly 'serializeImplementation': malgorithm.FSerializeImplementation
    readonly 'serializeModuleDefinition': mmoduleDefinition.FSerialize
}) => glo.FSerialize

export type CcreateSerializerWithContext = ($d: {
    readonly 'serialize': glo.FSerialize
}) => glo.FSerializeWithContext

export type API = {
    createSerializer: CcreateSerializer
    createSerializerWithContext: CcreateSerializerWithContext
}