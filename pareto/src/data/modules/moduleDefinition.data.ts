import * as pr from 'pareto-core-raw'
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
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "glossary": "../../../glossary",
            "fp": "lib-fountain-pen",
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'types': d({
            "DefinitionReference": type(group({
                "context": member(reference("Context"), true),
                "function": member(string()),
            })),
            "Context": type(taggedUnion({
                "local": group({}),
                "import": group({
                    "glossary": member(string()),
                    "arguments": member(dictionary(['reference', parametrizedTypeReference("glossary", { "Type": typeReference("common", "String") }, "TypeReference")]))
                }),
            })),
            "ModuleDefinition": type(group({
                "glossary": member(['reference', parametrizedTypeReference("glossary", { "Type": typeReference("common", "String") }, "Glossary")]),
                "api": member(group({
                    "imports": member(dictionary(string())),
                    "algorithms": member(dictionary(group({
                        "definition": member(reference("DefinitionReference")),
                        "type": member(taggedUnion({
                            "reference": group({}),
                            "constructor": group({
                                "configuration data": member(optional(parametrizedReference("glossary", { "Type": typeReference("common", "String") }, "TypeReference"))),
                                "dependencies": member(dictionary(reference("DefinitionReference"))),
                            }),
                        }))
                    }))),
                })),
            })),
            // "TypeReference": group({
            //     "context": member(ref("Context")),
            //     "namespaces": member(array(str())),
            //     "type": member(str()),
            // }),
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": func(typeReference("ModuleDefinition"), null, interfaceReference("fp", "Line"), null),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "foreach": "res-pareto-foreach",
            "glossary": "../../glossary",
        }),
        'algorithms': d({
            "createSerializer": algorithm(definitionReference("Serialize"), constructor(null, {
                "serializeGlossary": definitionReference("glossary", {}, "Serialize"),
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("foreach", {}, "EnrichedArrayForEach"),
            })),
        })
    },
}