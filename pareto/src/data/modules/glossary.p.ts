import * as pr from 'pareto-core-raw'
import {
    string,
    reference,
    boolean,
    template,
    array, dictionary, group, member, taggedUnion, types, _function, typeReference, interfaceReference, callback, parameter
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"


import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
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
            "Context": taggedUnion({
                "local": group({}),
                "import": string(),
            }),
            "Glossary": group({
                "parameters": member(dictionary(group({}))),
                "imports": member(dictionary(string())),
                "templates": member(dictionary(group({
                    "parameters": member(dictionary(group({}))),
                    "type": member(reference("Type")),
                }))),
                "types": member(dictionary(reference("Type"))),
                "interfaces": member(dictionary(reference("Interface"))),
                "functions": member(dictionary(group({
                    "return type": member(taggedUnion({
                        "data": group({
                            "asynchronous": member(boolean()),
                            "type": member(reference("TypeReference")),
                        }),
                        "interface": reference("InterfaceReference"),
                        "nothing": group({}),
                    })),
                    "data": member(reference("TypeReference")),
                    "managed input interface": member(template("Optional", {
                        "Type": reference("InterfaceReference")
                    })),
                    "output interface": member(template("Optional", {
                        "Type": reference("InterfaceReference")
                    })),
                }))),
            }),
            "Interface": taggedUnion({
                "group": group({
                    "members": member(dictionary(reference("Interface")))
                }),
                "method": group({
                    "data": member(template("Optional", {
                        "Type": reference("TypeReference")
                    })),
                    "interface": member(template("Optional", {
                        "Type": group({
                            "managed": member(boolean()),
                            "interface": member(reference("Interface"))
                        })
                    })),
                }),
                "reference": reference("InterfaceReference"),
            }),
            "InterfaceReference": group({
                "context": member(reference("Context")),
                "interface": member(string())
            }),
            "Type": taggedUnion({
                "array": reference("Type"),
                "nested": reference("Type"),
                "dictionary": reference("Type"),
                "computed": reference("Type"),

                "null": group({}),
                "boolean": group({}),
                "string": group({}),
                "number": group({}),
                "reference": reference("TypeReference"),
                "group": dictionary(group({
                    "type": member(reference("Type")),
                    "optional": member(boolean())
                })),
                "parameter": string(),
                "template": group({
                    "context": member(reference("Context")),
                    "template": member(string()),
                    "arguments": member(dictionary(reference("Type")))
                }),
                "taggedUnion": dictionary(reference("Type")),
            }),
            "TypeReference": group({
                "context": member(reference("Context")),
                "type": member(string()),
            }),
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": callback(typeReference("Glossary"), interfaceReference("fp", "Line")),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "temp": "../../temp",
        }),
        'algorithms': d({
            "createSerializer": algorithm(definitionReference("Serialize"), constructor(null, {
                "arrayForEach": definitionReference("temp", "ArrayForEach"),
                "dictionaryForEach": definitionReference("temp", "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("temp", "EnrichedArrayForEach"),
                "enrichedDictionaryForEach": definitionReference("temp", "EnrichedDictionaryForEach"),
            })),
        })
    },
}