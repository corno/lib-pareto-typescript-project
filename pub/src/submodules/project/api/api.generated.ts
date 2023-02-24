import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as galgorithm from "../../algorithm"
import * as gcollation from "res-pareto-collation"
import * as gforeach from "res-pareto-foreach"
import * as gmoduleDefinition from "../../moduleDefinition"

export type CcreateSerializer = ($d: {
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': gforeach.FEnrichedArrayForEach
    readonly 'serializeImplementation': galgorithm.FSerializeImplementation
    readonly 'serializeModuleDefinition': gmoduleDefinition.FSerialize
}) => gglo.FSerialize

export type CcreateSerializerWithContext = ($d: {
    readonly 'serialize': gglo.FSerialize
}) => gglo.FSerializeWithContext

export type API = {
    createSerializer: CcreateSerializer
    createSerializerWithContext: CcreateSerializerWithContext
}