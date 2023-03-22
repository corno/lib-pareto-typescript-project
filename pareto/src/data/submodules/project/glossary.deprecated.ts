import * as pd from 'pareto-core-data'

import {
    dictionary, externalTypeReference, glossaryParameter, group, imp, member, optional, ref, string, taggedUnion, type, typeReference
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
        "AlgorithmTypeReference": type(group({
            "context": member(ref(typeReference("Context"))),
            "type": member(taggedUnion({
                "asynchronous": taggedUnion({
                    "constructor": group({
                        "constructor": member(string()),
                    }),
                    "function": group({
                        "function": member(string()),
                    }),
                }),
                "synchronous": taggedUnion({
                    "procedure": group({
                        "procedure": member(string()),
                    }),
                    "function": group({
                        "function": member(string()),
                    }),
                })
            })),
        })),
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
                        "parameters": member(dictionary(string())),
                        "definition": member(ref(typeReference("AlgorithmTypeReference"))),
                        "type": member(taggedUnion({
                            "independent": group({}),
                            "dependent": group({
                                "configuration data": member(optional(group({
                                    "context": member(ref(typeReference("Context"))),
                                    "type": member(string()),
                                }))),
                                "dependencies": member(dictionary(ref(typeReference("AlgorithmTypeReference")))),
                                "side effects": member(dictionary(group({
                                    "context": member(ref(typeReference("Context"))),
                                    "type": member(taggedUnion({
                                        "asynchronous": group({
                                            "interface": member(string()),
                                        }),
                                        "synchronous": group({
                                            "interface": member(string()),
                                        }),
                                    })),
                                }))),
                            }),
                        })),
                    }))),
                })),
                "imports": member(dictionary(taggedUnion({
                    "this": group({}),
                    "main": group({}),
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
                    "temp": member(group({
                        "nativeDependencies": member(dictionary(group({}))),
                        "devDependencies": member(dictionary(group({}))),
                    })),
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