import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    resolvedSiblingComponent, dictionary,
    globalType,
    group,
    importedComponent, option, optional, prop,
    taggedUnion, terminal
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({
        "glossary": null,
    }),
    'labels': {
        'atom types': d({
            "identifier": null,
        }),
    },
    'global types': d({
        "AlgorithmTypeReference": globalType(
            {},
            group({
                "context": prop(resolvedSiblingComponent("Context", {})),
                "type": prop(taggedUnion({
                    "asynchronous": option(taggedUnion({
                        "constructor": option(group({
                            "constructor": prop(terminal("identifier")),
                        })),
                        "function": option(group({
                            "function": prop(terminal("identifier")),
                        })),
                        "resource": option(group({
                            "resource": prop(terminal("identifier")),
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
            })
        ),
        "Context": globalType(
            {},
            group({
                "glossary": prop(terminal("identifier")),
                "arguments": prop(dictionary(terminal("identifier"))),
            })
        ),
        "ModuleDefinition": globalType(
            {},
            group({
                "glossary": prop(group({
                    "root": prop(importedComponent("glossary", "Glossary", {})),
                    "imports": prop(dictionary(taggedUnion({
                        "temp submodule": option(terminal("identifier")),//only possible for main
                        "external": option(terminal("identifier")),
                        "sibling": option(terminal("identifier")),//only possible for submodule
                        "main": option(group({})),//only possible for submodule
                    }))),
                })),
                "api": prop(group({
                    "root": prop(group({
                        "algorithms": prop(dictionary(group({
                            "parameters": prop(dictionary(terminal("identifier"))),
                            "definition": prop(resolvedSiblingComponent("AlgorithmTypeReference", {})),
                            "type": prop(taggedUnion({
                                "independent": option(group({})),
                                "dependent": option(group({
                                    "configuration data": prop(optional(group({
                                        "context": prop(resolvedSiblingComponent("Context", {})),
                                        "type": prop(terminal("identifier")),
                                    }))),
                                    "dependencies": prop(dictionary(resolvedSiblingComponent("AlgorithmTypeReference", {}))),
                                    "side effects": prop(dictionary(group({
                                        "context": prop(resolvedSiblingComponent("Context", {})),
                                        "type": prop(taggedUnion({
                                            "asynchronous": option(group({
                                                "interface": prop(terminal("identifier")),
                                            })),
                                            "synchronous": option(group({
                                                "interface": prop(terminal("identifier")),
                                            })),
                                        })),
                                    }))),
                                })),
                            })),
                        }))),
                    })),
                    "imports": prop(dictionary(taggedUnion({
                        "this": option(group({})),
                        "main": option(group({})),
                        "submodule": option(terminal("identifier")),//only possible for main
                        "sibling": option(terminal("identifier")),//only possible for submodule
                        "external": option(terminal("identifier")),
                    }))),
                })),
            })
        ),
        "Module": globalType(
            {},
            group({
                "definition": prop(resolvedSiblingComponent("ModuleDefinition", {})),
                "implementation": prop(taggedUnion({
                    "typescript": option(group({
                    })),
                    "pareto": option(group({})),
                })),
            })
        ),
        "Project": globalType(
            {},
            group({
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
                        "definition": prop(resolvedSiblingComponent("ModuleDefinition", {})),
                        "test": prop(resolvedSiblingComponent("Test", {})),
                    })),
                    "glossary": option(group({
                        "root": prop(importedComponent("glossary", "Glossary", {})),
                        "imports": prop(dictionary(taggedUnion({
                            "external": option(terminal("identifier")),
                        }))),
                    })),
                    "library": option(group({
                        "main": prop(resolvedSiblingComponent("Module", {})),
                        "submodules": prop(dictionary(resolvedSiblingComponent("Module", {}))),
                        "bindings": prop(optional(group({
                            "definition": prop(resolvedSiblingComponent("ModuleDefinition", {})),
                            "implementation": prop(taggedUnion({
                                "typescript": option(group({
                                })),
                                "pareto": option(group({})),
                            })),
                        }))),
                        "executables": prop(dictionary(group({
                            "constructor": prop(terminal("identifier"))
                        }))),
                        "test": prop(resolvedSiblingComponent("Test", {})),
                    })),
                })),
            })
        ),
        "Test": globalType(
            {},
            group({
                "dependencies": prop(dictionary(group({}))),
                "definition": prop(resolvedSiblingComponent("ModuleDefinition", {})),
                "imports": prop(dictionary(taggedUnion({
                    "this": option(group({})),
                    "pub": option(terminal("identifier")),
                    "external": option(terminal("identifier")),
                }))),
            })
        ),
    }),
}