import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    component, dictionary, globalType, group, importedComponent, option, optional, prop, taggedUnion, terminal
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({}),
    'terminal types': d({
        "identifier": null,
    }),
    'global types': d({


        "AlgorithmTypeReference": globalType({}, group({
            "context": prop(component("Context", {})),
            "type": prop(taggedUnion({
                "asynchronous": option(taggedUnion({
                    "constructor": option(group({
                        "constructor": prop(terminal("identifier")),
                    })),
                    "function": option(group({
                        "function": prop(terminal("identifier")),
                    })),
                })),
                "synchronous": option(taggedUnion({
                    "procedure": option(group({
                        "procedure": prop(terminal("identifier")),
                    })),
                    "function": option(group({
                        "function": prop(terminal("identifier")),
                    })),
                }))
            })),
        })),
        "Context": globalType({}, group({
            "glossary": prop(terminal("identifier")),
            "arguments": prop(dictionary(terminal("identifier"))),
        })),
        "ModuleDefinition": globalType({}, group({
            "glossary": prop(group({
                //*****"root": prop(importedComponent("glossary", "Glossary", {})),
                "imports": prop(dictionary(taggedUnion({
                    "temp submodule": option(terminal("identifier")),//only possible for main
                    "external": option(terminal("identifier")),
                    "sibling": option(terminal("identifier")),//only possible for submodule
                    "main": option(group({})),//only possible for submodule
                }))),
            })),
            // "api": prop(group({
            //     "root": prop(group({
            //         "algorithms": prop(dictionary(group({
            //             "parameters": prop(dictionary(terminal("identifier"))),
            //             "definition": prop(component("AlgorithmTypeReference", {})),
            //             "type": prop(taggedUnion({
            //                 "independent": group({}),
            //                 "dependent": group({
            //                     "configuration data": prop(optional(group({
            //                         "context": prop(component("Context", {})),
            //                         "type": prop(terminal("identifier")),
            //                     }))),
            //                     "dependencies": prop(dictionary(component("AlgorithmTypeReference", {}))),
            //                     "side effects": prop(dictionary(group({
            //                         "context": prop(component("Context", {})),
            //                         "type": prop(taggedUnion({
            //                             "asynchronous": group({
            //                                 "interface": prop(terminal("identifier")),
            //                             }),
            //                             "synchronous": group({
            //                                 "interface": prop(terminal("identifier")),
            //                             }),
            //                         })),
            //                     }))),
            //                 }),
            //             })),
            //         }))),
            //     })),
            //     "imports": prop(dictionary(taggedUnion({
            //         "this": group({}),
            //         "main": group({}),
            //         "submodule": terminal("identifier"),//only possible for main
            //         "sibling": terminal("identifier"),//only possible for submodule
            //         "external": terminal("identifier"),
            //     }))),
            // })),
        })),
        "Module": globalType({}, group({
            "definition": prop(component("ModuleDefinition", {})),
            "implementation": prop(taggedUnion({
                "typescript": option(group({
                })),
                "pareto": option(group({})),
            })),
        })),
        "Project": globalType({}, group({
            "author": prop(terminal("identifier")),
            "license": prop(terminal("identifier")),
            "description": prop(terminal("identifier")),
            "dependencies": prop(dictionary(group({}))),
            "type": prop(taggedUnion({
                "resource": option(group({
                    "temp": prop(group({
                        "nativeDependencies": prop(dictionary(group({}))),
                        "devDependencies": prop(dictionary(group({}))),
                    })),
                    "definition": prop(component("ModuleDefinition", {})),
                    "test": prop(component("Test", {})),
                })),
                "glossary": option(group({
                    //*****"root": prop(importedComponent("glossary", "Glossary", {})),
                    "imports": prop(dictionary(taggedUnion({
                        "external": option(terminal("identifier")),
                    }))),
                })),
                "library": option(group({
                    "main": prop(component("Module", {})),
                    "submodules": prop(dictionary(component("Module", {}))),
                    "bindings": prop(optional(group({
                        "definition": prop(component("ModuleDefinition", {})),
                        "implementation": prop(taggedUnion({
                            "typescript": option(group({
                            })),
                            "pareto": option(group({})),
                        })),
                    }))),
                    "executables": prop(dictionary(group({}))),
                    "test": prop(component("Test", {})),
                })),
            })),
        })),
        "Test": globalType({}, group({
            "dependencies": prop(dictionary(group({}))),
            "definition": prop(component("ModuleDefinition", {})),
            "imports": prop(dictionary(taggedUnion({
                "this": option(group({})),
                "pub": option(terminal("identifier")),
                "external": option(terminal("identifier")),
            }))),
        })),

    }),
}