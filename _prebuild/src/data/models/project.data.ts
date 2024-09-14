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
        /**
        Defines a package
        */
        "Project": globalType( //FIX rename to Package
            {},
            group({
                /** used for the generated package.json */
                "description": prop(terminal("identifier")),
                /** used for the generated package.json */
                "author": prop(terminal("identifier")),
                /** used for the generated package.json */
                "license": prop(terminal("identifier")),
                /**
                 * a dictionary of all the dependencies this package has.
                 * used for the generated package.json
                 * */
                "dependencies": prop(dictionary(group({}))),
                "type": prop(taggedUnion({
                    /**
                     * a library provides a clearly specified API and an implementation.
                     * libraries are the most common and should contain the bulk of the code in a project (think 95%)
                     */
                    "library": option(group({
                        /**
                         * the main module is what other packages can use
                         */
                        "main": prop(resolvedSiblingComponent("Module", {})),
                        /**
                         * submodules are implementation details, they should not be used by external packages
                         */
                        "submodules": prop(dictionary(resolvedSiblingComponent("Module", {}))),
                        /**
                         * Pareto algorithms cannot include or link to other packages. Their dependencies have to be injected
                         * (see {@link https://en.wikipedia.org/wiki/Dependency_injection}).
                         * bindings inject these dependencies and offer ready to go algorithms, or are partially linked if needed 
                         */
                        "bindings": prop(optional(group({
                            "definition": prop(resolvedSiblingComponent("ModuleDefinition", {})),
                            "implementation": prop(taggedUnion({
                                /**
                                 * the binding will be written in Typescript
                                 */
                                "typescript": option(group({
                                })),
                                /**
                                 * I don't think that this option is already supported
                                 */
                                "pareto": option(group({})),
                            })),
                        }))),
                        /**
                         * if a library implements algorithms that can be called from the command line, then adding these algorithms here makes the library an executable package
                         * these constructors should be references to synchronous algorithms in the 'bindings' section
                         */
                        "executables": prop(dictionary(group({
                            "constructor": prop(terminal("identifier"))
                        }))),
                        "test": prop(resolvedSiblingComponent("Test", {})),
                    })),
                    "glossary": option(group({
                        "root": prop(importedComponent("glossary", "Glossary", {})),
                        "imports": prop(dictionary(taggedUnion({
                            "external": option(terminal("identifier")),
                        }))),
                    })),
                    /**
                     * a resource package is a low level package that implements anything that cannot be implemented in the pure style that is expected/enforced for a library.
                     * a resource can be created to access any peripheral (storage, network ).
                     * there are resources    
                     */
                    "resource": option(group({
                        "temp": prop(group({
                            "nativeDependencies": prop(dictionary(group({}))),
                            "devDependencies": prop(dictionary(group({}))),
                        })),
                        "definition": prop(resolvedSiblingComponent("ModuleDefinition", {})),
                        "test": prop(resolvedSiblingComponent("Test", {})),
                    })),
                })),
            })
        ),
    }),
}