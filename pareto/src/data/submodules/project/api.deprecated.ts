import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'imports': d({
        "algorithm": "../../algorithm",
        "collation": "res-pareto-collation",
        "moduleDefinition": "../../api",
        "foreach": "res-pareto-foreach",
        "glossary_serialize_temp": "../../glossary_serialize_temp",
        "this": "./glossary"
    }),
    'algorithms': d({
        "createSerializer": algorithm(functionReference("this", {}, "Serialize"), constructor(null, {
            "serializeAPI": functionReference("moduleDefinition", {}, "Serialize"),
            "serializeGlossary": functionReference("glossary_serialize_temp", {}, "Serialize"),
            "serializeImplementation": functionReference("algorithm", {}, "SerializeImplementation"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "enrichedArrayForEach": functionReference("foreach", {}, "EnrichedArrayForEach"),
        })),
        "createSerializerWithContext": algorithm(functionReference("this", {}, "SerializeWithContext"), constructor(null, {
            "serialize": functionReference("this", {}, "Serialize"),
        })),
    })
}