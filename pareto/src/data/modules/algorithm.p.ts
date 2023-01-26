import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, optional, typeReference, externalInterfaceReference, callback
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
        'namespace': {
            'types': types({
                "FunctionBlock": group({
                    "innerFunctions": member(dictionary(group({
                        "block": member(ref("FunctionBlock"))
                    })), true),
                    "returnExpression": member(ref("Expression"))
                }),
                "CallbackBlock": group({
                    "innerCallbacks": member(dictionary(group({
                        "block": member(ref("CallbackBlock"))
                    })), true),
                    "statements": member(array(taggedUnion({
                        "dependencyCall": group({
                            "data": member(str(), true),
                            "callback": member(ref("CallbackBlock"), true)
                        }),
                        "innerCallbackCall": group({
                            "innerCallback": member(str()),
                            "data": member(ref("Expression"), true),
                            "interface": member(str(), true),
                        }),
                        "interfaceCall": group({
                            "property": member(str()),
                            "data": member(str(), true),
                            "callback": member(ref("CallbackBlock"), true)
                        }),
                        "switch": group({
                            "path": member(array(str())),
                            "cases": member(dictionary(ref("CallbackBlock")))
                        })
                    })))
                }),
                "Expression": taggedUnion({
                    "call": group({
                        "function": member(str()),
                    }),
                    "implementMe": str(),
                    "groupInitializer": group({
                        "properties": member(dictionary(ref("Expression"))),
                    }),
                    "switch": group({
                        "cases": member(dictionary(ref("FunctionBlock")))
                    }),
                    "propertySelection": group({
                        "name": member(str()),
                    }),
                    "contextChange": group({
                        "property": member(str()),
                        "block": member(ref("FunctionBlock"))
                    }),
                    "mapDictionary": group({
                        "block": member(ref("FunctionBlock")),
                    }),
                    "mapArray": group({
                        "block": member(ref("FunctionBlock")),
                    }),
                }),
                "Implementation": group({
                    "implementations": member(dictionary(group({
                        "constructor": member(bln()),
                        "type": member(taggedUnion({
                            "function": group({
                                "block": member(ref("FunctionBlock"))
                            }),
                            "callback": group({
                                "block": member(ref("CallbackBlock"))
                            }),
                        }))
                    }))),
                }),
                "States": dictionary(ref("Type")),
                "Type": taggedUnion({
                    "array": ref("Type"),
                    "optional": ref("Type"),
                    "dictionary": ref("Type"),
                    "null": null_(),
                    "boolean": null_(),
                    "string": null_(),
                    "number": null_(),
                    "reference": str(),
                    "group": dictionary(group({
                        "type": member(ref("Type")),
                    })),
                    "parameter": str(),
                    "taggedUnion": dictionary(ref("Type")),
                }),
            }),
            'interfaces': d({}),

        },
        'functions': d({
            "SerializeImplementation": callback(typeReference("Implementation"), externalInterfaceReference("fp", "Line")),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "temp": "../../temp",
        }),
        'algorithms': d({
            "createImplementationSerializer": {
                'definition': {
                    'function': "SerializeImplementation"
                },
                'type': constructor(null, {
                    "arrayForEach": externalDefinitionReference("temp", "ArrayForEach"),
                    "dictionaryForEach": externalDefinitionReference("temp", "DictionaryForEach"),
                    "enrichedArrayForEach": externalDefinitionReference("temp", "EnrichedArrayForEach"),
                    "enrichedDictionaryForEach": externalDefinitionReference("temp", "EnrichedDictionaryForEach"),
                })
            },
        })
    },
}