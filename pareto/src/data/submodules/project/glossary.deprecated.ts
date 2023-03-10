import * as pd from 'pareto-core-data'

import {
    reference,
    boolean,
    string,
    parametrizedReference,
    array, dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, type, glossaryParameter, optional,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "AlgorithmImplementation": type(group({})),


        "Context": type(group({
            "glossary": member(string()),
            "arguments": member(dictionary(reference("TypeReference"))),
        })),
        "FunctionReference": type(group({
            "context": member(reference("Context")),
            "function": member(string()),
        })),
        "TypeReference": type(group({
            "context": member(reference("Context")),
            "type": member(string()),
        })),

        "Implementation": type(taggedUnion({
            "typescript": group({
                //  parametrizedReference("algorithm", { "Annotation": typeReference("Annotation") }, "AlgorithmImplementation"),
            }),
            "pareto": group({}),
        })),
        "Module": type(group({
            "glossary": member(group({
                "root": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
                "imports": member(dictionary(taggedUnion({
                    "temp submodule": string(),//only possible for main
                    "external": string(),
                    "sibling": string(),//only possible for submodule
                    "main": group({}),//only possible for submodule
                }))),
            })),
            "bindings": member(group({
                "api": member(group({
                    "root": member(parametrizedReference("api", { "Type": typeReference("Annotation") }, "API")),
                    "imports": member(dictionary(taggedUnion({
                        "this": group({}),
                        "submodule": string(),//only possible for main
                        "sibling": string(),//only possible for submodule
                        "external": string(),
                    }))),
                })),
                "implementation": member(reference("Implementation")),
            })),
            "pure algorithms": member(group({
                "api": member(group({
                    "root": member(parametrizedReference("api", { "Type": typeReference("Annotation") }, "API")),
                    "imports": member(dictionary(taggedUnion({
                        "this": group({}),
                        "submodule": string(),//only possible for main
                        "sibling": string(),//only possible for submodule
                        "external": string(),
                    }))),
                })),
                "implementation": member(reference("Implementation")),
            })),
        })),
        "Project": type(group({
            "author": member(string()),
            "license": member(string()),
            "description": member(string()),
            "dependencies": member(dictionary(group({}))),
            "type": member(taggedUnion({
                "resource": group({
                    "nativeDependencies": member(dictionary(group({}))),
                    "devDependencies": member(dictionary(group({}))),
                    "glossary": member(group({
                        "root": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
                        "imports": member(dictionary(taggedUnion({
                            "external": string(),
                        }))),
                    })),
                    "api": member(group({
                        "root": member(group({
                            "algorithms": member(dictionary(group({
                                "definition": member(reference("FunctionReference")),
                                "type": member(taggedUnion({
                                    "reference": group({}),
                                    "constructor": group({
                                        "configuration data": member(optional(reference("TypeReference"))),
                                        "dependencies": member(dictionary(reference("FunctionReference"))),
                                    }),
                                })),
                            }))),
                        })),
                        "imports": member(dictionary(taggedUnion({
                            "this": group({}),
                            "external": string(),
                        }))),
                    })),
                    "test": member(reference("Test")),
                }),
                "glossary": group({
                    "root": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
                    "imports": member(dictionary(taggedUnion({
                        "external": string(),
                    }))),
                }),
                "library": group({
                    "main": member(reference("Module")),
                    "submodules": member(dictionary(reference("Module"))),
                    "executables": member(dictionary(group({}))),
                    "test": member(reference("Test")),
                }),
            })),
        })),
        "Test": type(group({
            "dependencies": member(dictionary(group({}))),
            "glossary": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
            "imports": member(dictionary(taggedUnion({
                "this": group({}),
                "pub": string(),
                "external": string(),
            }))),
        })),
    }),
    'type': ['synchronous', {

        'builders': d({}),
        'functions': d<gglossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({
            // "Serialize": func(typeReference("Module"), null, interfaceReference("fp", "Line"), null),
            // "SerializeWithContext": func(typeReference("Module"), null, interfaceReference("fp", "Directory"), null),
        }),
    }],
}