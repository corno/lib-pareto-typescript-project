import * as pl from "pareto-core-lib"
import * as pr from "pareto-core-raw"

import * as api from "../api"

import {
    array,
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    template,
    dictionary, group as grp, member, taggedUnion, types, _function, group
} from "../../glossary/api/shorthands.p"


// import { string, reference, externalReference, number, boolean } from "../../moduleDefinition/api/shorthands.p"


const wd = pr.wrapRawDictionary

export const icreateLiana2ParetoMapper: api.CcreateLiana2ParetoMapper = ($d) => {
    return ($) => {
        return {
            'glossary': {
                'imports': wd({
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
                                "data": member(ref("LeafTypeOrNull")),
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
                            "data": member(ref("LeafTypeOrNull")),
                            "context": member(ref("Context"), true),
                            "interface": member(str())
                        }),
                        "Context": taggedUnion({
                            "local": nullType(),
                            "import": type(str()),
                        }),
                        "Function": group({
                            "async": member(bln(), true),
                            "data": member(ref("LeafType")),
                            "return value": member(ref("LeafType"))
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
                        "LeafType": taggedUnion({
                            "boolean": nullType(),
                            "string": nullType(),
                            "number": nullType(),
                            "reference": type(group({
                                "context": member(ref("Context")),
                                "namespaces": member(array(str())),
                                "type": member(str()),
                            })),
                        }),
                        "LeafTypeOrNull": taggedUnion({
                            "type": type(ref("LeafType")),
                            "null": nullType(),
                        }),
                        "Parameters": ['dictionary', nullType()],
                        "Template": group({
                            "parameters": member(["dictionary", nullType()]),
                            "type": member(ref("Type"))
                        }),
                        "Type": taggedUnion({
                            "array": type(ref("Type")),
                            "dictionary": type(ref("TypeOrNull")),
                            "group": type(dictionary(group({
                                "type": member(ref("Type")),
                                "optional": member(bln(), true)
                            }))),
                            "leaf": type(ref("LeafType")),
                            "nested": type(ref("Type")),
                            "optional": type(ref("Type")),
                            "parameter": type(str()),
                            "template": type(group({
                                "context": member(ref("Context"), true),
                                "template": member(str()),
                                "arguments": member(dictionary(ref("TypeOrNull")))
                            })),
                            "taggedUnion": type(dictionary(ref("TypeOrNull"))),
                        }),
                        "TypeOrNull": taggedUnion({
                            "type": type(ref("Type")),
                            "null": nullType(),
                        }),
                    }),
                    'interfaces': wd({}),

                },
                'functions': wd({}),
                'callbacks': wd({
                }),
                'pipes': wd({}),
            },
            'api': {
                'imports': wd({
                }),
                'algorithms': wd({
                })
            },
        }
    }
}