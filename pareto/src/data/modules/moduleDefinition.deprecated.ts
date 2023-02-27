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
            "DefinitionReference": type(group({
                "context": member(reference("Context")),
                "function": member(string()),
            })),
            "Context": type(taggedUnion({
                "local": group({}),
                "import": group({
                    "glossary": member(string()),
                    "arguments": member(dictionary(['reference', parametrizedTypeReference("glossary", { "Type": typeReference("Annotation") }, "TypeReference")]))
                }),
            })),
            "ModuleDefinition": type(group({
                "glossary": member(['reference', parametrizedTypeReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")]),
                "api": member(group({
                    "imports": member(dictionary(string())),
                    "algorithms": member(dictionary(group({
                        "definition": member(reference("DefinitionReference")),
                        "type": member(taggedUnion({
                            "reference": group({}),
                            "constructor": group({
                                "configuration data": member(optional(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "TypeReference"))),
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
            "glossary_temp": "../../glossary_temp",
        }),
        'algorithms': d({
            "createSerializer": algorithm(definitionReference("Serialize"), constructor(null, {
                "serializeGlossary": definitionReference("glossary_temp", {}, "Serialize"),
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("foreach", {}, "EnrichedArrayForEach"),
            })),
        })
    },
}