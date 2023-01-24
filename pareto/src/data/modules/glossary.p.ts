import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, optional, typeReference, interfaceReference, externalInterfaceReference
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"


import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
import { callback } from './liana_flat.p'


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
        }),
        'namespace': {
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
                "_Parameters": dictionary(null_()),

                "Context": taggedUnion({
                    "local": null_(),
                    "import": str(),
                }),
                "Glossary": group({
                    "parameters": member(ref("_Parameters"), true),
                    "imports": member(dictionary(str())),
                    "namespace": member(ref("Namespace")),
                    "functions": member(dictionary(ref("_Function"))),
                }),
                "Interface": taggedUnion({
                    "group": group({
                        "members": member(dictionary(ref("Interface")))
                    }),
                    "method": group({
                        "data": member(optional(ref("NamespacedTypeReference"))),
                        "interface": member(optional(ref("Interface"))),
                    }),
                    "reference": group({
                        "context": member(ref("Context"), true),
                        "namespaces": member(array(str())),// shouldn't this be a singular optional namespace?
                        "interface": member(str())
                    }),
                }),
                "InterfaceReference": group({
                    "context": member(ref("Context"), true),
                    "interface": member(str())
                }),
                "Namespace": group({
                    "namespaces": member(dictionary(ref("Namespace")), true),
                    "templates": member(dictionary(group({
                        "parameters": member(['dictionary', null_()]),
                        "type": member(ref("Type"))
                    })), true),
                    "types": member(dictionary(ref("Type"))),
                    "interfaces": member(dictionary(ref("Interface"))),
                }),
                "NamespacedTypeReference": group({
                    "context": member(ref("Context")),
                    "namespaces": member(array(str())),// shouldn't this be a singular optional namespace?
                    "type": member(str()),
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
                    "reference": ref("NamespacedTypeReference"),
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
                    "taggedUnion": dictionary(ref("Type")),
                }),
                "TypeReference": group({
                    "context": member(ref("Context")),
                    "type": member(str()),
                }),
            }),
            'interfaces': d({}),

        },
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