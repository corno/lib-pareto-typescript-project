import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as galgorithm from "../../algorithm"
import * as gcollation from "res-pareto-collation"
import * as gforeach from "res-pareto-foreach"
import * as gglossary_serialize_temp from "../../glossary_serialize_temp"
import * as gmoduleDefinition from "../../moduleDefinition"

export type CcreateSerializer = ($d: {
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': gforeach.FEnrichedArrayForEach
    readonly 'serializeAPI': gmoduleDefinition.FSerialize
    readonly 'serializeGlossary': gglossary_serialize_temp.FSerialize
    readonly 'serializeImplementation': galgorithm.FSerializeImplementation
}) => gglo.FSerialize

export type CcreateSerializerWithContext = ($d: {
    readonly 'serialize': gglo.FSerialize
}) => gglo.FSerializeWithContext

export type API = {
    createSerializer: CcreateSerializer
    createSerializerWithContext: CcreateSerializerWithContext
}