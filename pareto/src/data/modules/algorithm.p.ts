import * as pr from 'pareto-core-raw'
import {
    reference,
    boolean,
    string,
    array, dictionary, group, member, taggedUnion, types, _function, typeReference, interfaceReference, callback
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"


import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
            "SynchronousFunctionBlock": group({
                "innerFunctions": member(dictionary(group({
                    "block": member(reference("SynchronousFunctionBlock"))
                })), true),
                "returnExpression": member(reference("SynchronousExpression"))
            }),
            "AsynchronousFunctionBlock": group({
                "innerFunctions": member(dictionary(group({
                    "block": member(reference("AsynchronousFunctionBlock"))
                })), true),
                "returnExpression": member(reference("AsynchronousExpression"))
            }),
            "ProcedureBlock": group({
                "innerCallbacks": member(dictionary(group({
                    "block": member(reference("ProcedureBlock"))
                })), true),
                "statements": member(array(taggedUnion({
                    "dependencyCall": group({
                        "data": member(string(), true),
                        "callback": member(reference("ProcedureBlock"), true)
                    }),
                    "innerCallbackCall": group({
                        "innerCallback": member(string()),
                        "data": member(reference("SynchronousExpression"), true),
                        "interface": member(string(), true),
                    }),
                    "interfaceCall": group({
                        "property": member(string()),
                        "data": member(string(), true),
                        "callback": member(reference("ProcedureBlock"), true)
                    }),
                    "switch": group({
                        "path": member(array(string())),
                        "cases": member(dictionary(reference("ProcedureBlock")))
                    })
                })))
            }),
            "AsynchronousExpression": taggedUnion({
                "call": group({
                    "function": member(string()),
                }),
            }),
            "InterfaceInitializerBlock": taggedUnion({
                "call": group({
                    "function": member(string()),
                }),
            }),
            "SynchronousExpression": taggedUnion({
                "call": group({
                    "function": member(string()),
                }),
                "implementMe": string(),
                "groupInitializer": group({
                    "properties": member(dictionary(reference("SynchronousExpression"))),
                }),
                "switch": group({
                    "cases": member(dictionary(reference("SynchronousFunctionBlock")))
                }),
                "propertySelection": group({
                    "name": member(string()),
                }),
                "contextChange": group({
                    "property": member(string()),
                    "block": member(reference("SynchronousFunctionBlock"))
                }),
                "mapDictionary": group({
                    "block": member(reference("SynchronousFunctionBlock")),
                }),
                "mapArray": group({
                    "block": member(reference("SynchronousFunctionBlock")),
                }),
            }),
            "Implementation": group({
                "implementations": member(dictionary(group({
                    "constructor": member(boolean()),
                    "type": member(taggedUnion({
                        "synchronous function": group({
                            "block": member(reference("SynchronousFunctionBlock"))
                        }),
                        "asynchronous function": group({
                            "block": member(reference("AsynchronousFunctionBlock"))
                        }),
                        "procedure": group({
                            "block": member(reference("ProcedureBlock"))
                        }),
                        "interface initializer": group({
                            "block": member(reference("InterfaceInitializerBlock"))
                        }),
                    }))
                }))),
            }),
            "States": dictionary(reference("Type")),
            "Type": taggedUnion({
                "array": reference("Type"),
                "optional": reference("Type"),
                "dictionary": reference("Type"),
                "null": group({}),
                "boolean": group({}),
                "string": group({}),
                "number": group({}),
                "reference": string(),
                "group": dictionary(group({
                    "type": member(reference("Type")),
                })),
                "parameter": string(),
                "taggedUnion": dictionary(reference("Type")),
            }),
        }),
        'interfaces': d({}),
        'functions': d({
            "SerializeImplementation": callback(typeReference("Implementation"), interfaceReference("fp", "Line")),
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
                    "arrayForEach": definitionReference("temp", "ArrayForEach"),
                    "dictionaryForEach": definitionReference("temp", "DictionaryForEach"),
                    "enrichedArrayForEach": definitionReference("temp", "EnrichedArrayForEach"),
                    "enrichedDictionaryForEach": definitionReference("temp", "EnrichedDictionaryForEach"),
                })
            },
        })
    },
}