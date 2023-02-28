import * as pd from 'pareto-core-data'
import {
    string,
    null_,
    reference,
    array, dictionary, group, member, taggedUnion, types, typeReference,
    interfaceReference,
    typeParameter,
    func,
    type,
    parametrizedType,
    parametrizedTypeReference,
    optional,
    parametrizedReference,
    glossaryParameter,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"


const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "glossary": "../../../glossary",
            "fp": "lib-fountain-pen",
            "common": "glo-pareto-common",
        }),
        'parameters': d({
            "Annotation": {},
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
            "Context": type(group({
                "glossary": member(string()),
                "arguments": member(dictionary(reference("TypeReference")))
            })),
            "FunctionReference": type(group({
                "context": member(reference("Context")),
                "function": member(string()),
            })),
            "TypeReference": type(group({
                "context": member(reference("Context")),
                "type": member(string()),
            })),
            "API": type(group({
                "imports": member(dictionary(string())),
                "algorithms": member(dictionary(group({
                    "definition": member(reference("FunctionReference")),
                    "type": member(taggedUnion({
                        "reference": group({}),
                        "constructor": group({
                            "configuration data": member(optional(reference("TypeReference"))),
                            "dependencies": member(dictionary(reference("FunctionReference"))),
                        }),
                    }))
                }))),
            })),
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": func(typeReference("API"), null, interfaceReference("fp", "Line"), null),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "foreach": "res-pareto-foreach",
        }),
        'algorithms': d({
            "createSerializer": algorithm(definitionReference("Serialize"), constructor(null, {
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("foreach", {}, "EnrichedArrayForEach"),
            })),
        })
    },
}