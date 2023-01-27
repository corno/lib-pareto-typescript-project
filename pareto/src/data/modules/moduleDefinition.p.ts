import * as pr from 'pareto-core-raw'
import {
    string,
    null_,
    reference,
    array, dictionary, group, member, taggedUnion, types, _function, typeReference,
    interfaceReference, callback,
    parameter,
    template,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "glossary": "../../../glossary",
            "fp": "lib-fountain-pen",
        }),
        'parameters': d({}),
        'templates': d({
            "Optional": {
                'parameters': d({ "Type": {}, }),
                'type': taggedUnion({
                    "set": parameter("Type"),
                    "not set": group({}),
                })
            }
        }),
        'types': types({
            "DefinitionReference": group({
                "context": member(reference("Context"), true),
                "function": member(string()),
            }),
            "Context": taggedUnion({
                "local": group({}),
                "import": string(),
            }),
            "ModuleDefinition": group({
                "glossary": member(reference("glossary", "Glossary")),
                "api": member(group({
                    "imports": member(dictionary(string())),
                    "algorithms": member(dictionary(group({
                        "definition": member(reference("DefinitionReference")),
                        "type": member(taggedUnion({
                            "reference": group({}),
                            "constructor": group({
                                "configuration data": member(template("Optional", { "Type": reference("glossary", "TypeReference") })),
                                "dependencies": member(dictionary(reference("DefinitionReference"))),
                            }),
                        }))
                    }))),
                })),
            }),
            // "TypeReference": group({
            //     "context": member(ref("Context")),
            //     "namespaces": member(array(str())),
            //     "type": member(str()),
            // }),
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": callback(typeReference("ModuleDefinition"), interfaceReference("fp", "Line")),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "temp": "../../temp",
            "glossary": "../../glossary",
        }),
        'algorithms': d({
            "createSerializer": algorithm(definitionReference("Serialize"), constructor(null, {
                "serializeGlossary": definitionReference("glossary", "Serialize"),
                "dictionaryForEach": definitionReference("temp", "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("temp", "EnrichedArrayForEach"),
            })),
        })
    },
}