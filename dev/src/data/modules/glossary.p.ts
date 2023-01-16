import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, optional
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"


import * as mapi from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mapi.TModuleDefinition = {
    "glossary": {
        'imports': d({
            "fp": "lib-fountain-pen",
        }),
        'namespace': {
            'types': types({
                "Namespace": group({
                    "namespaces": member(dictionary(ref("Namespace")), true),
                    "templates": member(dictionary(ref("Template")), true),
                    "types": member(dictionary(ref("Type"))),
                    "interfaces": member(dictionary(ref("Interface"))),
                }),
                "Interface": taggedUnion({
                    "group": type(group({
                        "members": member(dictionary(ref("Interface")))
                    })),
                    "method": type(group({
                        "data": member(ref("OptionalTypeReference")),
                        "interface": member(taggedUnion({
                            "set": type(group({
                                "interface": member(str())
                            })),
                            "null": nullType(),
                        }))
                    })),
                    "reference": type(ref("InterfaceReference")),
                }),
                "InterfaceReference": group({
                    "context": member(ref("Context"), true),
                    "interface": member(str())
                }),
                "Callback": group({
                    "data": member(ref("OptionalTypeReference")),
                    "context": member(ref("Context"), true),
                    "interface": member(str())
                }),
                "Context": taggedUnion({
                    "local": nullType(),
                    "import": type(str()),
                }),
                "Function": group({
                    "async": member(bln(), true),
                    "data": member(ref("TypeReference")),
                    "return value": member(ref("TypeReference"))
                }),
                "Glossary": group({
                    "parameters": member(ref("Parameters"), true),
                    "imports": member(dictionary(str())),
                    "namespace": member(ref("Namespace")),
                    "functions": member(dictionary(ref("Function"))),
                    "callbacks": member(dictionary(ref("Callback"))),
                    "pipes": member(dictionary(group({
                        "in": member(ref("InterfaceReference")),
                        "out": member(ref("InterfaceReference")),
                    }))),
                }),
                "OptionalTypeReference": optional(ref("TypeReference")),
                "Parameters": ['dictionary', nullType()],
                "Template": group({
                    "parameters": member(["dictionary", nullType()]),
                    "type": member(ref("Type"))
                }),
                "Type": taggedUnion({
                    "null": nullType(),
                    "boolean": nullType(),
                    "string": nullType(),
                    "number": nullType(),
                    "reference": type(ref("TypeReference")),
                    "array": type(ref("Type")),
                    "dictionary": type(ref("Type")),
                    "group": type(dictionary(group({
                        "type": member(ref("Type")),
                        "optional": member(bln(), true)
                    }))),
                    "nested": type(ref("Type")),
                    "optional": type(ref("Type")),
                    "parameter": type(str()),
                    "template": type(group({
                        "context": member(ref("Context"), true),
                        "template": member(str()),
                        "arguments": member(dictionary(ref("Type")))
                    })),
                    "taggedUnion": type(dictionary(ref("Type"))),
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
                'data': ['type', reference("Glossary")],
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
                    'configuration data': ['null', null],
                    'dependencies': d({
                        "enrichedDictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedDictionaryForEach",
                        }],
                        "enrichedArrayForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedArrayForEach",
                        }],
                        "compare": ['function', {
                            'context': ['import', "collation"],
                            'function': "IsABeforeB",
                        }],
                    })
                }]
            },
        })
    },
}