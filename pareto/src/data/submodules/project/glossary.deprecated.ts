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
        "Context": type(group({
            "glossary": member(string()),
            "arguments": member(dictionary(string())),
        })),
        "ModuleDefinition": type(group({
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
                        "definition": member(group({
                            "context": member(ref(typeReference("Context"))),
                            "type": member(taggedUnion({
                                "async": taggedUnion({
                                    "class": group({
                                        "class": member(string()),
                                    }),
                                    "function": group({
                                        "function": member(string()),
                                    }),
                                }),
                                "sync": taggedUnion({
                                    "builder": group({
                                        "builder": member(string()),
                                    }),
                                    "function": group({
                                        "function": member(string()),
                                    }),
                                })
                            })),
                        })),
                        "type": member(taggedUnion({
                            "independent": group({}),
                            "dependent": group({
                                "configuration data": member(optional(group({
                                    "context": member(ref(typeReference("Context"))),
                                    "type": member(string()),
                                }))),
                                "dependencies": member(dictionary(group({
                                    "context": member(ref(typeReference("Context"))),
                                    "type": member(taggedUnion({
                                        "async": taggedUnion({
                                            "function": group({
                                                "function": member(string()),
                                            }),
                                            "interface": group({
                                                "interface": member(string()),
                                            }),
                                        }),
                                        "sync": taggedUnion({
                                            "function": group({
                                                "function": member(string()),
                                            }),
                                            "interface": group({
                                                "interface": member(string()),
                                            }),
                                        })
                                    })),
                                }))),
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
        })),
        "Module": type(group({
            "definition": member(ref(typeReference("ModuleDefinition"))),
            "implementation": member(taggedUnion({
                "typescript": group({
                }),
                "pareto": group({}),
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
                    "definition": member(ref(typeReference("ModuleDefinition"))),
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
                        "definition": member(ref(typeReference("ModuleDefinition"))),
                        "implementation": member(taggedUnion({
                            "typescript": group({
                            }),
                            "pareto": group({}),
                        })),
                    }))),
                    "executables": member(dictionary(group({}))),
                    "test": member(ref(typeReference("Test"))),
                }),
            })),
        })),
        "Test": type(group({
            "dependencies": member(dictionary(group({}))),
            "definition": member(ref(typeReference("ModuleDefinition"))),
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