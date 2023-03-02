import * as pt from 'pareto-core-types'

import * as galgorithm from "../../algorithm"
import * as gapi from "../../api"
import * as gcollation from "res-pareto-collation"
import * as gforeach from "res-pareto-foreach"
import * as gglossary_serialize_temp from "../../glossary_serialize_temp"
import * as gthis from "./glossary"

export type CcreateSerializer = ($d: {
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'enrichedArrayForEach': gforeach.FEnrichedArrayForEach
    readonly 'serializeAPI': gapi.FSerialize
    readonly 'serializeGlossary': gglossary_serialize_temp.FSerialize
    readonly 'serializeImplementation': galgorithm.FSerializeImplementation
}) => gthis.FSerialize

export type CcreateSerializerWithContext = ($d: {
    readonly 'serialize': gthis.FSerialize
}) => gthis.FSerializeWithContext

export type API = {
    createSerializer: CcreateSerializer
    createSerializerWithContext: CcreateSerializerWithContext
}