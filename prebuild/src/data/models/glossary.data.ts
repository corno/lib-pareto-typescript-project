import * as pd from 'pareto-core-data'

import * as g_liana2algorithm from "lib-liana/dist/submodules/liana2algorithm"

import {
    component,
    dictionary,
    terminal,
    globalTypeDeclaration,
    globalTypeDefinition,
    group,
    taggedUnion,
    prop,
    optional,
    option,
    tempTypeSelection,
    t_grp,
    array,
    resolvedValueReference,
    valSel,
    pNonCyclicSiblings,
    globalTypeSelection,
    pResolvedValue,
    constrainedDictionary,
    aResolvedValue,
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana2algorithm.T.CreateResolverParameters<pd.SourceLocation> = {


    'in': "../../glossary",
    'out': {
        'root': "../../glossary_possiblyresolved",
        'subs': pd.d({
        }),
    },
    'model': {
        'type library': {
            'imports': d({}),
            'labels': {
                'atom types': d({
                    "identifier": null,
                }),

            },
            'global types': {
                'declarations': d({
                    "DataOrSynchronousInterface": globalTypeDeclaration({}),
                    "TypeParameters": globalTypeDeclaration({}),
                    "Namespace": globalTypeDeclaration({}),
                    "Glossary Core": globalTypeDeclaration({}),
                    "Glossary Library": globalTypeDeclaration({}),
                    "Glossary Wrapper": globalTypeDeclaration({}),
                    "Glossary Parameters": globalTypeDeclaration({}),
                    "Glossary": globalTypeDeclaration({
                        "dependencies": pResolvedValue("Glossary Library", false),
                    }),
                    "DataSpecifier": globalTypeDeclaration({}),
                    "Arguments": globalTypeDeclaration({}),
                    "AsynchronousInterface": globalTypeDeclaration({}),
                    "SynchronousInterface": globalTypeDeclaration({}),
                    "AsynchronousInterfaceReference": globalTypeDeclaration({}),
                    "SynchronousInterfaceReference": globalTypeDeclaration({}),
                    "Type": globalTypeDeclaration({}),
                }),
                'definitions': d({
                    "DataOrSynchronousInterface": globalTypeDefinition(
                        taggedUnion({
                            "data": option(component("DataSpecifier", {})),
                            "interface": option(component("SynchronousInterfaceReference", {})),
                        })
                    ),
                    "TypeParameters": globalTypeDefinition(
                        dictionary(group({}))
                    ),
                    "Namespace": globalTypeDefinition(
                        group({
                            "namespaces": prop(dictionary(component("Namespace", {}))),
                            "types": prop(dictionary(group({
                                "parameters": prop(component("TypeParameters", {})),
                                "type": prop(component("Type", {})),
                            }))),
                        })
                    ),
                    "Glossary Library": globalTypeDefinition(
                        dictionary(component("Glossary Core", {}))
                    ),
                    "Glossary Wrapper": globalTypeDefinition(
                        group({
                            "library": prop(component("Glossary Library", {})),
                            "glossary": prop(component("Glossary", {
                                "dependencies": aResolvedValue(valSel("library")),
                            }))
                        })
                    ),
                    "Glossary Parameters": globalTypeDefinition(dictionary(group({}))),
                    "Glossary Core": globalTypeDefinition(
                        group({
                            "parameters": prop(component("Glossary Parameters", {})),
                            "root": prop(component("Namespace", {})),
                            "synchronous": prop(group({
                                "interfaces": prop(dictionary(group({
                                    "parameters": prop(component("TypeParameters", {})),
                                    "interface": prop(component("SynchronousInterface", {}))
                                }))),
                                "algorithms": prop(dictionary(group({
                                    "parameters": prop(component("TypeParameters", {})),
                                    "type": prop(taggedUnion({
                                        "function": option(group({
                                            "in": prop(component("DataOrSynchronousInterface", {})),
                                            "out": prop(component("DataSpecifier", {})),
                                            "callbacks": prop(dictionary(group({
                                                "in": prop(component("DataSpecifier", {})),
                                                "lookups": prop(dictionary(component("DataSpecifier", {}))),
                                                "out": prop(component("DataSpecifier", {})),
                                            })))
                                        })),
                                        "procedure": option(group({
                                            "in": prop(component("DataOrSynchronousInterface", {})),
                                            "out": prop(component("SynchronousInterfaceReference", {})),
                                        })),
                                    }))
                                }))),
                            })),
                            "asynchronous": prop(group({
                                "interfaces": prop(dictionary(group({
                                    "parameters": prop(component("TypeParameters", {})),
                                    "interface": prop(component("AsynchronousInterface", {}))
                                }))),
                                "algorithms": prop(dictionary(group({
                                    "parameters": prop(component("TypeParameters", {})),
                                    "type": prop(taggedUnion({
                                        "constructor": option(group({
                                            "interface": prop(component("AsynchronousInterfaceReference", {})),
                                            "downstreams": prop(dictionary(component("AsynchronousInterfaceReference", {}))),
                                        })),
                                        "resource": option(group({
                                            "consumer": prop(component("AsynchronousInterfaceReference", {})),
                                            "request": prop(component("DataSpecifier", {})),
                                        })),
                                        "function": option(group({
                                            "out": prop(component("DataSpecifier", {})),
                                            "in": prop(component("DataSpecifier", {})),
                                        })),
                                    })),
                                }))),
                            })),
                        }),
                    ),
                    "Glossary": globalTypeDefinition(
                        group({
                            "imports": prop(constrainedDictionary(
                                {

                                },
                                group({
                                    "arguments": prop(component("Arguments", {})),
                                }))
                            ),
                            "core": prop(component("Glossary Core", {})),
                        })
                    ),
                    "DataSpecifier": globalTypeDefinition(
                        taggedUnion({
                            "type": option(group({
                                "context": prop(taggedUnion({
                                    "local": option(group({})),
                                    //"import": reference(['parent', null), [)),
                                    "import": option(group({
                                        //"glossary": prop(resolvedValueReference(valSel("glossary2"), tempTypeSelection("Glossary", t_grp("imports")))),
                                        "glossaryXX": prop(terminal("identifier")),
                                    })),
                                })),
                                "typeXX": prop(terminal("identifier")),
                                "tailXX": prop(array(terminal("identifier"))),
                                "arguments": prop(component("Arguments", {})),
                            })),
                            "type parameterXX": option(terminal("identifier")),
                            "glossary parameterXX": option(terminal("identifier")),
                        })
                    ),
                    "AsynchronousInterface": globalTypeDefinition(
                        taggedUnion({
                            "choice": option(group({
                                "options": prop(dictionary(component("AsynchronousInterface", {}))),
                            })),
                            "streamconsumer": option(group({
                                "data": prop(component("AsynchronousInterface", {})),
                                "end": prop(component("AsynchronousInterface", {})),
                            })),
                            "method": option(group({
                                "data": prop(optional(component("DataSpecifier", {}))),
                                "interface": prop(optional(component("AsynchronousInterface", {}))),
                            })),
                            "reference": option(component("AsynchronousInterfaceReference", {})),
                        })
                    ),
                    "SynchronousInterface": globalTypeDefinition(
                        taggedUnion({
                            "group": option(group({
                                "members": prop(dictionary(component("SynchronousInterface", {}))),
                            })),
                            "method": option(group({
                                "data": prop(optional(component("DataSpecifier", {}))),
                                "interface": prop(optional(component("SynchronousInterface", {}))),
                            })),
                            "reference": option(component("SynchronousInterfaceReference", {})),
                        })),
                    "AsynchronousInterfaceReference": globalTypeDefinition(
                        group({
                            "context": prop(taggedUnion({
                                "local": option(group({})),
                                //"import": reference(['parent', null), [)),
                                "import": option(group({
                                    //"glossary": prop(resolvedValueReference(valSel("glossary2"), tempTypeSelection("Glossary", t_grp("imports")))),
                                    "glossaryXX": prop(terminal("identifier")),
                                })),
                            })),
                            //"interface": [["context"), reference(['sibling', "context"), [))),
                            "interfaceXX": prop(terminal("identifier")),
                            "arguments": prop(component("Arguments", {})),
                        })
                    ),
                    "Arguments": globalTypeDefinition(
                        dictionary(component("DataSpecifier", {}))
                    ),
                    "SynchronousInterfaceReference": globalTypeDefinition(
                        group({
                            "context": prop(taggedUnion({
                                "local": option(group({})),
                                //"import": reference(['parent', null), [)),
                                "import": option(group({
                                    //"glossary": prop(resolvedValueReference(valSel("glossary2"), tempTypeSelection("Glossary", t_grp("imports")))),
                                    "glossaryXX": prop(terminal("identifier")),
                                })),
                            })),
                            //"interface": [["context"), reference(['sibling', "context"), [))),
                            "interfaceXX": prop(terminal("identifier")),
                            "arguments": prop(component("Arguments", {})),
                        })
                    ),
                    "Type": globalTypeDefinition(
                        taggedUnion({
                            "array": option(component("Type", {})),
                            "dictionary": option(component("Type", {})),
                            "computed": option(component("Type", {})),
                            "optional": option(component("Type", {})),
                            "null": option(group({})),
                            "boolean": option(group({})),
                            "string": option(group({})),
                            "number": option(group({})),
                            "reference": option(component("DataSpecifier", {})),
                            "group": option(dictionary(group({
                                "type": prop(component("Type", {})),
                            }))),
                            "taggedUnion": option(dictionary(component("Type", {}))),
                        })
                    ),
                }),
            }
        },
        'root': {
            'annotation': pd.getLocationInfo(0),
            'key': "Glossary Wrapper"
        }
    }
}