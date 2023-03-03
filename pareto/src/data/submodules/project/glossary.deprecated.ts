import * as pd from 'pareto-core-data'

import {
    reference,
    boolean,
    string,
    parametrizedReference,
    array, dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, func, type, glossaryParameter, optional,
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
        //"Implementation": type(dictionary(reference("AlgorithmImplementation"))),
        "Implementation": type(taggedUnion({
            "typescript": group({
                //  parametrizedReference("algorithm", { "Annotation": typeReference("Annotation") }, "AlgorithmImplementation")
            }),
            "pareto": group({}),
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
                    "definition": member(group({
                        "glossary": member(group({
                            "root": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
                            "imports": member(dictionary(taggedUnion({
                                "external": string(),
                            }))),
                        })),
                        "api": member(group({
                            "root": member(parametrizedReference("api", { "Type": typeReference("Annotation") }, "API")),
                            "imports": member(dictionary(taggedUnion({
                                "this": string(),
                                "external": string(),
                            }))),
                        })),
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
                    "main": member(group({
                        "definition": member(group({
                            "glossary": member(group({
                                "root": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
                                "imports": member(dictionary(taggedUnion({
                                    "temp submodule": string(),
                                    "external": string(),
                                }))),
                            })),
                            "api": member(group({
                                "root": member(parametrizedReference("api", { "Type": typeReference("Annotation") }, "API")),
                                "imports": member(dictionary(taggedUnion({
                                    "this": string(),
                                    "submodule": string(),
                                    "external": string(),
                                }))),
                            })),
                        })),
                        "implementation": member(reference("Implementation")),
                    })),
                    "submodules": member(dictionary(group({
                        "definition": member(group({
                            "glossary": member(group({
                                "root": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
                                "imports": member(dictionary(taggedUnion({
                                    "sibling": string(),
                                    "main": group({}),
                                    "external": string(),
                                }))),
                            })),
                            "api": member(group({
                                "root": member(parametrizedReference("api", { "Type": typeReference("Annotation") }, "API")),
                                "imports": member(dictionary(taggedUnion({
                                    "this": string(),
                                    "sibling": string(),
                                    "external": string(),
                                }))),
                            })),
                        })),
                        "implementation": member(reference("Implementation")),
                    }))),
                    "executables": member(dictionary(group({}))),
                    "test": member(reference("Test")),
                }),
            })),
        })),
        "Test": type(group({
            "dependencies": member(dictionary(group({}))),
            "glossary": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
            "imports": member(dictionary(taggedUnion({
                "this": string(),
                "pub": string(),
                "external": string(),
            }))),
        })),
    }),
    'interfaces': d({}),
    'functions': d({
        // "Serialize": func(typeReference("Module"), null, interfaceReference("fp", "Line"), null),
        // "SerializeWithContext": func(typeReference("Module"), null, interfaceReference("fp", "Directory"), null),
    }),
}