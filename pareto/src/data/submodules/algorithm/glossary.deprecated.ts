import * as pd from 'pareto-core-data'

import {
    array, boolean, data, dictionary,
    glossaryParameter, group, imp, member,
    optional, procedure, ref, sExternalInterfaceReference, sInterfaceReference, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "fp": imp(),
    }),

    'glossary parameters': d({
        "Annotation": null,
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "SynchronousFunctionBlock": type(group({
                "innerFunctions": member(dictionary(group({
                    "block": member(ref(typeReference("SynchronousFunctionBlock"))),
                }))),
                "returnExpression": member(ref(typeReference("SynchronousExpression"))),
            })),
            "AsynchronousFunctionBlock": type(group({
                "innerFunctions": member(dictionary(group({
                    "block": member(ref(typeReference("AsynchronousFunctionBlock"))),
                }))),
                "returnExpression": member(ref(typeReference("AsynchronousExpression"))),
            })),
            "ProcedureBlock": type(group({
                "innerFunctions": member(dictionary(group({
                    "type": member(ref(typeReference("ImplementationType"))),
                }))),
                "statements": member(array(taggedUnion({
                    "dependencyCall": group({
                        "data": member(string()),
                        "callback": member(ref(typeReference("ProcedureBlock"))),
                    }),
                    "innerCallbackCall": group({
                        "innerCallback": member(string()),
                        "data": member(ref(typeReference("SynchronousExpression"))),
                        "interface": member(string()),
                    }),
                    "interfaceCall": group({
                        "child path": member(array(string())),
                        //"property": member(array(string())),
                        "data": member(optional(ref(typeReference("SynchronousExpression")))),
                        "callback": member(optional(ref(typeReference("ProcedureBlock")))),
                    }),
                    "switch": group({
                        "path": member(array(string())),
                        "cases": member(dictionary(ref(typeReference("ProcedureBlock")))),
                    }),
                }))),
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
                    "properties": member(dictionary(ref(typeReference("SynchronousExpression")))),
                }),
                "switch": group({
                    "cases": member(dictionary(ref(typeReference("SynchronousFunctionBlock")))),
                }),
                "propertySelection": group({
                    "name": member(string()),
                }),
                "contextChange": group({
                    "property": member(string()),
                    "block": member(ref(typeReference("SynchronousFunctionBlock"))),
                }),
                "string literal": string(),
                "mapDictionary": group({
                    "block": member(ref(typeReference("SynchronousFunctionBlock"))),
                }),
                "mapArray": group({
                    "block": member(ref(typeReference("SynchronousFunctionBlock"))),
                }),
            })),
            "Implementation": type(group({
                "implementations": member(dictionary(group({
                    "constructor": member(boolean()),
                    "type": member(ref(typeReference("ImplementationType"))),
                }))),
            })),
            "ImplementationType": type(taggedUnion({
                "synchronous function": group({
                    "block": member(ref(typeReference("SynchronousFunctionBlock"))),
                }),
                "asynchronous function": group({
                    "block": member(ref(typeReference("AsynchronousFunctionBlock"))),
                }),
                "procedure": group({
                    "block": member(ref(typeReference("ProcedureBlock"))),
                }),
                "interface initializer": group({
                    "block": member(ref(typeReference("InterfaceInitializerBlock"))),
                }),
            })),
            "States": type(dictionary(ref(typeReference("Type")))),
            "Type": type(taggedUnion({
                "array": ref(typeReference("Type")),
                "optional": ref(typeReference("Type")),
                "dictionary": ref(typeReference("Type")),
                "null": group({}),
                "boolean": group({}),
                "string": group({}),
                "number": group({}),
                "reference": string(),
                "group": dictionary(group({
                    "type": member(ref(typeReference("Type"))),
                })),
                "parameter": string(),
                "taggedUnion": dictionary(ref(typeReference("Type"))),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "SerializeImplementation": procedure(data(typeReference("Implementation")), sExternalInterfaceReference("fp", "Line")),
        }),
    },
}