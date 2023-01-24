import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
   null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, optional, typeReference
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"


import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
        }),
        'namespace': {
            'types': types({
                "Context": taggedUnion({
                    "local": null_(),
                    "import": str(),
                }),
                "Function": group({
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
                "Glossary": group({
                    "parameters": member(ref("Parameters"), true),
                    "imports": member(dictionary(str())),
                    "namespace": member(ref("Namespace")),
                    "functions": member(dictionary(ref("Function"))),
                }),
                "Interface": taggedUnion({
                    "group":group({
                        "members": member(dictionary(ref("Interface")))
                    }),
                    "method": group({
                        "data": member(optional(ref("TypeReference"))),
                        "interface": member(optional(ref("Interface")))
                    }),
                    "reference": ref("InterfaceReference"),
                }),
                "InterfaceReference": group({
                    "context": member(ref("Context"), true),
                    "interface": member(str())
                }),
                "Namespace": group({
                    "namespaces": member(dictionary(ref("Namespace")), true),
                    "templates": member(dictionary(ref("Template")), true),
                    "types": member(dictionary(ref("Type"))),
                    "interfaces": member(dictionary(ref("Interface"))),
                }),
                "Parameters": ['dictionary', null_()],
                "Template": group({
                    "parameters": member(['dictionary',  null_()]),
                    "type": member(ref("Type"))
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
                        "optional": member(bln(), true)
                    })),
                    "parameter": str(),
                    "template": group({
                        "context": member(ref("Context"), true),
                        "template": member(str()),
                        "arguments": member(dictionary(ref("Type")))
                    }),
                    "taggedUnion":dictionary(ref("Type")),
                }),
                "TypeReference": group({
                    "context": member(ref("Context")),
                    "namespaces": member(array(str())),
                    "type": member(str()),
                }),
            }),
            'interfaces': d({}),

        },
        'functions': d({}),
        'callbacks': d({
            "Serialize": {
                'data': typeReference("Glossary"),
                'context': ['import', "fp"],
                'interface': "Line",
            },
        }),
        'pipes': d({}),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "temp": "../../temp",
        }),
        'algorithms': d({
            "createSerializer": {
                'definition': ['callback', {
                    'callback': "Serialize"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "arrayForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "ArrayForEach",
                        }],
                        "dictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "DictionaryForEach",
                        }],
                        "enrichedArrayForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedArrayForEach",
                        }],
                        "enrichedDictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedDictionaryForEach",
                        }],
                    })
                }]
            },
        })
    },
}