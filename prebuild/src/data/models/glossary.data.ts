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
                    "Dummy": globalTypeDeclaration({}),
                    "DataOrSynchronousInterface": globalTypeDeclaration({
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    }),
                    "Namespace": globalTypeDeclaration({
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                    }),
                    "Glossary Reference": globalTypeDeclaration({
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    }),
                    "Imports": globalTypeDeclaration({}),
                    "Parameters": globalTypeDeclaration({}),
                    "Glossary": globalTypeDeclaration({
                        "glossaries": pNonCyclicSiblings(globalTypeSelection("Glossary"))
                    }),
                    "DataSpecifier": globalTypeDeclaration({
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    }),
                    "Arguments": globalTypeDeclaration({
                        "parameters": pResolvedValue("Parameters", false),
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    }),
                    "AsynchronousInterface": globalTypeDeclaration({
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    }),
                    "SynchronousInterface": globalTypeDeclaration({
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    }),
                    "AsynchronousInterfaceReference": globalTypeDeclaration({
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    }),
                    "SynchronousInterfaceReference": globalTypeDeclaration({
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    }),
                    "Type": globalTypeDeclaration({
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    }),
                }),
                'definitions': d({
                    "Dummy": globalTypeDefinition(group({})),
                    "DataOrSynchronousInterface": globalTypeDefinition(
                        taggedUnion({
                            "data": option(component("DataSpecifier", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                            "interface": option(component("SynchronousInterfaceReference", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                        })
                    ),
                    "Namespace": globalTypeDefinition(
                        group({
                            "namespaces": prop(dictionary(component("Namespace", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                            }))),
                            "types": prop(dictionary(group({
                                "parameters": prop(component("Parameters", {})),
                                "type": prop(component("Type", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("parameters")),
                                })),
                            }))),
                        })
                    ),
                    "Glossary Reference": globalTypeDefinition(
                        group({
                            "glossary": prop(resolvedValueReference(valSel("imports"), tempTypeSelection("Imports"))),
                            "glossary arguments": prop(component("Arguments", {
                                "parameters": aResolvedValue(valSel("glossary parameters")), //FIXME the parameters of the referenced glossary
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                        })
                    ),
                    "Parameters": globalTypeDefinition(dictionary(group({}))),
                    "Glossary": globalTypeDefinition(
                        group({
                            "imports": prop(component("Imports", {})   ),
                            "glossary parameters": prop(component("Parameters", {})),
                            "root": prop(component("Namespace", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                            })),
                            "synchronous": prop(group({
                                "interfaces": prop(dictionary(group({
                                    "parameters": prop(component("Parameters", {})),
                                    "interface": prop(component("SynchronousInterface", {
                                        "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                        "imports": aResolvedValue(valSel("imports")),
                                        "type parameters": aResolvedValue(valSel("parameters")),
                                    }))
                                }))),
                                "algorithms": prop(dictionary(group({
                                    "parameters": prop(component("Parameters", {})),
                                    "type": prop(taggedUnion({
                                        "function": option(group({
                                            "in": prop(component("DataOrSynchronousInterface", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            })),
                                            "out": prop(component("DataSpecifier", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            })),
                                            "callbacks": prop(dictionary(group({
                                                "in": prop(component("DataSpecifier", {
                                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                    "imports": aResolvedValue(valSel("imports")),
                                                    "type parameters": aResolvedValue(valSel("parameters")),
                                                })),
                                                "lookups": prop(dictionary(component("DataSpecifier", {
                                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                    "imports": aResolvedValue(valSel("imports")),
                                                    "type parameters": aResolvedValue(valSel("parameters")),
                                                }))),
                                                "out": prop(component("DataSpecifier", {
                                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                    "imports": aResolvedValue(valSel("imports")),
                                                    "type parameters": aResolvedValue(valSel("parameters")),
                                                })),
                                            })))
                                        })),
                                        "procedure": option(group({
                                            "in": prop(component("DataOrSynchronousInterface", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            })),
                                            "out": prop(component("SynchronousInterfaceReference", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            })),
                                        })),
                                    }))
                                }))),
                            })),
                            "asynchronous": prop(group({
                                "interfaces": prop(dictionary(group({
                                    "parameters": prop(component("Parameters", {})),
                                    "interface": prop(component("AsynchronousInterface", {
                                        "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                        "imports": aResolvedValue(valSel("imports")),
                                        "type parameters": aResolvedValue(valSel("parameters")),
                                    }))
                                }))),
                                "algorithms": prop(dictionary(group({
                                    "parameters": prop(component("Parameters", {})),
                                    "type": prop(taggedUnion({
                                        "constructor": option(group({
                                            "interface": prop(component("AsynchronousInterfaceReference", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            })),
                                            "downstreams": prop(dictionary(component("AsynchronousInterfaceReference", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            }))),
                                        })),
                                        "resource": option(group({
                                            "consumer": prop(component("AsynchronousInterfaceReference", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            })),
                                            "request": prop(component("DataSpecifier", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            })),
                                        })),
                                        "function": option(group({
                                            "out": prop(component("DataSpecifier", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            })),
                                            "in": prop(component("DataSpecifier", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            })),
                                        })),
                                    })),
                                }))),
                            })),
                        }),
                    ),
                    "Imports": globalTypeDefinition(
                        constrainedDictionary(
                            {
                                //FIXME
                            },
                            group({
                            })
                        )
                    ),
                    "DataSpecifier": globalTypeDefinition(
                        taggedUnion({
                            "type": option(group({
                                "context": prop(taggedUnion({
                                    "local": option(group({})),
                                    //"import": reference(['parent', null), [)),
                                    "import": option(group({
                                        "glossary": prop(component("Glossary Reference", {
                                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                            "imports": aResolvedValue(valSel("imports")),
                                            "type parameters": aResolvedValue(valSel("type parameters")),
                                        })),
                                    })),
                                })),
                                "typeXX": prop(terminal("identifier")),
                                "tailXX": prop(array(terminal("identifier"))),
                                "type arguments": prop(component("Arguments", {
                                    "parameters": aResolvedValue(valSel("glossary parameters")), //FIXME the parameters of the referenced type
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                })),
                            })),
                            "type parameterXX": option(terminal("identifier")),
                            "glossary parameterXX": option(terminal("identifier")),
                        })
                    ),
                    "AsynchronousInterface": globalTypeDefinition(
                        taggedUnion({
                            "choice": option(group({
                                "options": prop(dictionary(component("AsynchronousInterface", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                }))),
                            })),
                            "streamconsumer": option(group({
                                "data": prop(component("AsynchronousInterface", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                })),
                                "end": prop(component("AsynchronousInterface", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                })),
                            })),
                            "method": option(group({
                                "data": prop(optional(component("DataSpecifier", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                }))),
                                "interface": prop(optional(component("AsynchronousInterface", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                }))),
                            })),
                            "reference": option(component("AsynchronousInterfaceReference", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                        })
                    ),
                    "SynchronousInterface": globalTypeDefinition(
                        taggedUnion({
                            "group": option(group({
                                "members": prop(dictionary(component("SynchronousInterface", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                }))),
                            })),
                            "method": option(group({
                                "data": prop(optional(component("DataSpecifier", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                }))),
                                "interface": prop(optional(component("SynchronousInterface", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                }))),
                            })),
                            "reference": option(component("SynchronousInterfaceReference", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                        })),
                    "AsynchronousInterfaceReference": globalTypeDefinition(
                        group({
                            "context": prop(taggedUnion({
                                "local": option(group({})),
                                //"import": reference(['parent', null), [)),
                                "import": option(group({
                                    "glossary": prop(component("Glossary Reference", {
                                        "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                        "imports": aResolvedValue(valSel("imports")),
                                        "type parameters": aResolvedValue(valSel("type parameters")),
                                    })),
                                })),
                            })),
                            //"interface": [["context"), reference(['sibling', "context"), [))),
                            "interfaceXX": prop(terminal("identifier")),
                            "type arguments": prop(component("Arguments", {
                                "parameters": aResolvedValue(valSel("glossary parameters")), //FIXME the parameters of the referenced type

                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                        })
                    ),
                    "Arguments": globalTypeDefinition(
                        constrainedDictionary(
                            {},
                            component("DataSpecifier", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })
                        )
                    ),
                    "SynchronousInterfaceReference": globalTypeDefinition(
                        group({
                            "context": prop(taggedUnion({
                                "local": option(group({})),
                                //"import": reference(['parent', null), [)),
                                "import": option(group({
                                    "glossary": prop(component("Glossary Reference", {
                                        "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                        "imports": aResolvedValue(valSel("imports")),
                                        "type parameters": aResolvedValue(valSel("type parameters")),
                                    })),
                                })),
                            })),
                            //"interface": [["context"), reference(['sibling', "context"), [))),
                            "interfaceXX": prop(terminal("identifier")),
                            "type arguments": prop(component("Arguments", {
                                "parameters": aResolvedValue(valSel("glossary parameters")), //FIXME the parameters of the referenced type
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                        })
                    ),
                    "Type": globalTypeDefinition(
                        taggedUnion({
                            "array": option(component("Type", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                            "dictionary": option(component("Type", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                            "computed": option(component("Type", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                            "optional": option(component("Type", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                            "null": option(group({})),
                            "boolean": option(group({})),
                            "string": option(group({})),
                            "number": option(group({})),
                            "reference": option(component("DataSpecifier", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                            "group": option(dictionary(group({
                                "type": prop(component("Type", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                })),
                            }))),
                            "taggedUnion": option(dictionary(component("Type", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            }))),
                        })
                    ),
                }),
            }
        },
        'root': {
            'annotation': pd.getLocationInfo(0),
            'key': "Dummy"
        }
    }
}