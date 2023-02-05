import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as malgorithm from "../../algorithm"
import * as mcollation from "res-pareto-collation"
import * as mforeach from "res-pareto-foreach"
import * as mmoduleDefinition from "../../moduleDefinition"

export type CcreateSerializer = ($d: {
    readonly 'dictionaryForEach': mforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': mforeach.FEnrichedArrayForEach
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