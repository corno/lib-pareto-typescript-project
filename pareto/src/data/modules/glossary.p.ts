import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, optional, typeReference, interfaceReference, externalInterfaceReference, callback, boolean
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"


import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
        }),
        'parameters': d({}),
        'types': types({
            "_Function": group({
                "return type": member(taggedUnion({
                    "data": group({
                        "asynchronous": member(bln()),
                        "type": member(ref("TypeReference")),
                    }),
                    "interface": ref("InterfaceReference"),
                    "nothing": null_(),
                })),
                "data": member(ref("TypeReference")),
                "managed input interface": member(optional(ref("InterfaceReference"))),
                "output interface": member(optional(ref("InterfaceReference"))),
            }),
            "_MethodInterface": group({
                "managed": member(boolean()),
                "interface": member(ref("Interface"))
            }),
            "_Parameters": dictionary(null_()),

            "Context": taggedUnion({
                "local": null_(),
                "import": str(),
            }),
            "Glossary": group({
                "parameters": member(ref("_Parameters")),
                "imports": member(dictionary(str())),
                "templates": member(dictionary(group({
                    "parameters": member(['dictionary', null_()]),
                    "type": member(ref("Type"))
                })), true),
                "types": member(dictionary(ref("Type"))),
                "interfaces": member(dictionary(ref("Interface"))),
                "functions": member(dictionary(ref("_Function"))),
            }),
            "Interface": taggedUnion({
                "group": group({
                    "members": member(dictionary(ref("Interface")))
                }),
                "method": group({
                    "data": member(optional(ref("TypeReference"))),
                    "interface": member(optional(ref("_MethodInterface"))),
                }),
                "reference": group({
                    "context": member(ref("Context")),
                    "interface": member(str())
                }),
            }),
            "InterfaceReference": group({
                "context": member(ref("Context")),
                "interface": member(str())
            }),
            "Type": taggedUnion({
                "array": ref("Type"),
                "nested": ref("Type"),
                "optional": ref("Type"),
                "dictionary": ref("Type"),
                "computed": ref("Type"),

                "null": null_(),
                "boolean": null_(),
                "string": null_(),
                "number": null_(),
                "reference": ref("TypeReference"),
                "group": dictionary(group({
                    "type": member(ref("Type")),
                    "optional": member(bln())
                })),
                "parameter": str(),
                "template": group({
                    "context": member(ref("Context")),
                    "template": member(str()),
                    "arguments": member(dictionary(ref("Type")))
                }),
                "taggedUnion": dictionary(ref("Type")),
            }),
            "TypeReference": group({
                "context": member(ref("Context")),
                "type": member(str()),
            }),
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": callback(typeReference("Glossary"), externalInterfaceReference("fp", "Line")),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "temp": "../../temp",
        }),
        'algorithms': d({
            "createSerializer": {
                'definition': {
                    'function': "Serialize"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "arrayForEach": {
                            'context': ['import', "temp"],
                            'function': "ArrayForEach",
                        },
                        "dictionaryForEach": {
                            'context': ['import', "temp"],
                            'function': "DictionaryForEach",
                        },
                        "enrichedArrayForEach": {
                            'context': ['import', "temp"],
                            'function': "EnrichedArrayForEach",
                        },
                        "enrichedDictionaryForEach": {
                            'context': ['import', "temp"],
                            'function': "EnrichedDictionaryForEach",
                        },
                    })
                }]
            },
        })
    },
}