import * as pd from 'pareto-core-data'

import {
    reference,
    boolean,
    string,
    array, dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, func, type,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
        }),
        'parameters': d({}),
        'types': d({
            "SynchronousFunctionBlock": type(group({
                "innerFunctions": member(dictionary(group({
                    "block": member(reference("SynchronousFunctionBlock"))
                })), true),
                "returnExpression": member(reference("SynchronousExpression"))
            })),
            "AsynchronousFunctionBlock": type(group({
                "innerFunctions": member(dictionary(group({
                    "block": member(reference("AsynchronousFunctionBlock"))
                })), true),
                "returnExpression": member(reference("AsynchronousExpression"))
            })),
            "ProcedureBlock": type(group({
                "innerFunctions": member(dictionary(group({
                    "type": member(reference("ImplementationType"))
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
                        "child path": member(array(string())),
                        //"property": member(array(string())),
                        "data": member(taggedUnion({
                            "not set": group({}),
                            "set": reference("SynchronousExpression"),
                        })),
                        "callback": member(taggedUnion({
                            "not set": group({}),
                            "set": reference("ProcedureBlock"),
                        }))
                    }),
                    "switch": group({
                        "path": member(array(string())),
                        "cases": member(dictionary(reference("ProcedureBlock")))
                    })
                })))
            })),
            "AsynchronousExpression": type(taggedUnion({
                "call": group({
                    "function": member(string()),
                }),
            })),
            "InterfaceInitializerBlock": type(taggedUnion({
                "call": group({
                    "function": member(string()),
                }),
            })),
            "SynchronousExpression": type(taggedUnion({
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
                "string literal": string(),
                "mapDictionary": group({
                    "block": member(reference("SynchronousFunctionBlock")),
                }),
                "mapArray": group({
                    "block": member(reference("SynchronousFunctionBlock")),
                }),
            })),
            "Implementation": type(group({
                "implementations": member(dictionary(group({
                    "constructor": member(boolean()),
                    "type": member(reference("ImplementationType"))
                }))),
            })),
            "ImplementationType": type(taggedUnion({
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
            })),
            "States": type(dictionary(reference("Type"))),
            "Type": type(taggedUnion({
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
            })),
        }),
        'interfaces': d({}),
        'functions': d({
            "SerializeImplementation": func(typeReference("Implementation"), null, interfaceReference("fp", "Line"), null),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "foreach": "res-pareto-foreach",
        }),
        'algorithms': d({
            "createImplementationSerializer": algorithm(definitionReference("SerializeImplementation"), constructor(null, {
                "arrayForEach": definitionReference("foreach", {}, "ArrayForEach"),
                "dictionaryForEach": definitionReference("foreach", {}, "DictionaryForEach"),
                "enrichedArrayForEach": definitionReference("foreach", {}, "EnrichedArrayForEach"),
                "enrichedDictionaryForEach": definitionReference("foreach", {}, "EnrichedDictionaryForEach"),
            })),
        })
    },
}