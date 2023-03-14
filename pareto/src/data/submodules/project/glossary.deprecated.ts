import * as pd from 'pareto-core-data'

import {
    boolean,
    string,
    array, dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, type, glossaryParameter, optional, ref, imp, externalTypeReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "glossary": imp({ "Annotation": typeReference("Annotation") }),
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "AlgorithmImplementation": type(group({})),
        "Context": type(group({
            "glossary": member(string()),
            "arguments": member(dictionary(string())),
        })),
        "DefinitionReference": type(group({
            "context": member(ref(typeReference("Context"))),
            "type": member(taggedUnion({
                "function": group({
                    "function": member(string()),
                }),
                "interface": group({
                    "interface": member(string()),
                }),
                "builder": group({
                    "builder": member(string()),
                }),
                "resource": group({
                    "resource": member(string()),
                }),

            })),
        })),
        "TypeReference": type(group({
            "context": member(ref(typeReference("Context"))),
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
                "root": member(ref(externalTypeReference("glossary", "Glossary"))),
                "imports": member(dictionary(taggedUnion({
                    "temp submodule": string(),//only possible for main
                    "external": string(),
                    "sibling": string(),//only possible for submodule
                    "main": group({}),//only possible for submodule
                }))),
            })),
            "api": member(group({
                "root": member(group({
                    "algorithms": member(dictionary(group({
                        "definition": member(ref(typeReference("DefinitionReference"))),
                        "type": member(taggedUnion({
                            "reference": group({}),
                            "constructor": group({
                                "configuration data": member(optional(ref(typeReference("TypeReference")))),
                                "dependencies": member(dictionary(ref(typeReference("DefinitionReference")))),
                            }),
                        })),
                    }))),
                })),
                "imports": member(dictionary(taggedUnion({
                    "this": group({}),
                    "submodule": string(),//only possible for main
                    "sibling": string(),//only possible for submodule
                    "external": string(),
                }))),
            })),
            "implementation": member(ref(typeReference("Implementation"))),
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
                        "root": member(ref(externalTypeReference("glossary", "Glossary"))),
                        "imports": member(dictionary(taggedUnion({
                            "external": string(),
                        }))),
                    })),
                    "api": member(group({
                        "root": member(group({
                            "algorithms": member(dictionary(group({
                                "definition": member(ref(typeReference("DefinitionReference"))),
                                "type": member(taggedUnion({
                                    "reference": group({}),
                                    "constructor": group({
                                        "configuration data": member(optional(ref(typeReference("TypeReference")))),
                                        "dependencies": member(dictionary(ref(typeReference("DefinitionReference")))),
                                    }),
                                })),
                            }))),
                        })),
                        "imports": member(dictionary(taggedUnion({
                            "this": group({}),
                            "external": string(),
                        }))),
                    })),
                    "test": member(ref(typeReference("Test"))),
                }),
                "glossary": group({
                    "root": member(ref(externalTypeReference("glossary", "Glossary"))),
                    "imports": member(dictionary(taggedUnion({
                        "external": string(),
                    }))),
                }),
                "library": group({
                    "main": member(ref(typeReference("Module"))),
                    "submodules": member(dictionary(ref(typeReference("Module")))),
                    "bindings": member(optional(group({
                        "api": member(group({
                            "root": member(group({
                                "algorithms": member(dictionary(group({
                                    "parameters": member(dictionary(group({}))),
                                    "definition": member(ref(typeReference("DefinitionReference"))),
                                }))),
                            })),
                            "imports": member(dictionary(taggedUnion({
                                "this": group({}),
                                "submodule": string(),//only possible for main
                                "external": string(),
                            }))),
                        })),
                        "implementation": member(ref(typeReference("Implementation"))),
                    }))),
                    "executables": member(dictionary(group({}))),
                    "test": member(ref(typeReference("Test"))),
                }),
            })),
        })),
        "Test": type(group({
            "dependencies": member(dictionary(group({}))),
            "glossary": member(ref(externalTypeReference("glossary", "Glossary"))),
            "imports": member(dictionary(taggedUnion({
                "this": group({}),
                "pub": string(),
                "external": string(),
            }))),
        })),
    }),
    'type': ['synchronous', {

        'builders': d({}),
        'functions': d<g_glossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({
            // "Serialize": func(typeReference("Module"), null, interfaceReference("fp", "Line"), null),
            // "SerializeWithContext": func(typeReference("Module"), null, interfaceReference("fp", "Directory"), null),
        }),
    }],
}