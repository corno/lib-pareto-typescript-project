import * as pd from 'pareto-core-data'

import * as g_liana2algorithm from "lib-liana/dist/submodules/liana2algorithm"

import {
    resolvedSiblingComponent,
    dictionary,
    terminal,
    globalType,
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
    pNonCyclicLookup,
    globalTypeSelection,
    pResolvedValue,
    constrainedDictionary,
    aResolvedValue,
    aLookup,
    lparameter,
    dictConstraint,
    resultTaggedUnion,
    s_reference,
    lookupReference,
} from "lib-liana/dist/submodules/liana/shorthands"
import { varSel } from 'lib-liana/dist/submodules/liana/shorthands'

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
            'global types': d({
                "Dummy": globalType(
                    {},
                    group({})
                ),
                "DataOrSynchronousInterface": globalType(
                    {
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    },
                    taggedUnion({
                        "data": option(resolvedSiblingComponent("DataSpecifier", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })),
                        "interface": option(resolvedSiblingComponent("SynchronousInterfaceReference", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })),
                    })
                ),
                "Namespace": globalType(
                    {
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                    },
                    group({
                        "namespaces": prop(dictionary(resolvedSiblingComponent("Namespace", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                        }))),
                        "types": prop(dictionary(group({
                            "parameters": prop(resolvedSiblingComponent("Parameters", {})),
                            "type": prop(resolvedSiblingComponent("Type", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("parameters")),
                            })),
                        }))),
                    })
                ),
                "Glossary Reference": globalType(
                    {
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    },
                    group({
                        "glossary": prop(resolvedValueReference(valSel("imports"), tempTypeSelection("Imports"))),
                        "glossary arguments": prop(resolvedSiblingComponent("Arguments", {
                            "parameters": aResolvedValue(valSel("glossary parameters")), //FIXME the parameters of the referenced glossary
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })),
                    })
                ),
                "Parameters": globalType(
                    {},
                    dictionary(group({}))
                ),
                "Glossary": globalType(
                    {
                        "glossaries": pNonCyclicLookup(globalTypeSelection("Glossary"))
                    },
                    group({
                        "imports": prop(resolvedSiblingComponent("Imports", {
                            "glossaries": aLookup(lparameter("glossaries")),
                        })),
                        "glossary parameters": prop(resolvedSiblingComponent("Parameters", {})),
                        "root": prop(resolvedSiblingComponent("Namespace", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                        })),
                        "synchronous": prop(group({
                            "interfaces": prop(dictionary(group({
                                "parameters": prop(resolvedSiblingComponent("Parameters", {})),
                                "interface": prop(resolvedSiblingComponent("Synchronous Interface", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("parameters")),
                                }))
                            }))),
                            "algorithms": prop(dictionary(group({
                                "parameters": prop(resolvedSiblingComponent("Parameters", {})),
                                "type": prop(taggedUnion({
                                    "function": option(group({
                                        "in": prop(resolvedSiblingComponent("DataOrSynchronousInterface", {
                                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                            "imports": aResolvedValue(valSel("imports")),
                                            "type parameters": aResolvedValue(valSel("parameters")),
                                        })),
                                        "out": prop(resolvedSiblingComponent("DataSpecifier", {
                                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                            "imports": aResolvedValue(valSel("imports")),
                                            "type parameters": aResolvedValue(valSel("parameters")),
                                        })),
                                        "callbacks": prop(dictionary(group({
                                            "in": prop(resolvedSiblingComponent("DataSpecifier", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            })),
                                            "lookups": prop(dictionary(resolvedSiblingComponent("DataSpecifier", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            }))),
                                            "out": prop(resolvedSiblingComponent("DataSpecifier", {
                                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                                "imports": aResolvedValue(valSel("imports")),
                                                "type parameters": aResolvedValue(valSel("parameters")),
                                            })),
                                        })))
                                    })),
                                    "procedure": option(group({
                                        "in": prop(resolvedSiblingComponent("DataOrSynchronousInterface", {
                                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                            "imports": aResolvedValue(valSel("imports")),
                                            "type parameters": aResolvedValue(valSel("parameters")),
                                        })),
                                        "out": prop(resolvedSiblingComponent("SynchronousInterfaceReference", {
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
                                "parameters": prop(resolvedSiblingComponent("Parameters", {})),
                                "interface": prop(resolvedSiblingComponent("AsynchronousInterface", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("parameters")),
                                }))
                            }))),
                            "algorithms": prop(dictionary(group({
                                "parameters": prop(resolvedSiblingComponent("Parameters", {})),
                                "type": prop(taggedUnion({
                                    "constructor": option(group({
                                        "interface": prop(resolvedSiblingComponent("AsynchronousInterfaceReference", {
                                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                            "imports": aResolvedValue(valSel("imports")),
                                            "type parameters": aResolvedValue(valSel("parameters")),
                                        })),
                                        "downstreams": prop(dictionary(resolvedSiblingComponent("AsynchronousInterfaceReference", {
                                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                            "imports": aResolvedValue(valSel("imports")),
                                            "type parameters": aResolvedValue(valSel("parameters")),
                                        }))),
                                    })),
                                    "resource": option(group({
                                        "consumer": prop(resolvedSiblingComponent("AsynchronousInterfaceReference", {
                                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                            "imports": aResolvedValue(valSel("imports")),
                                            "type parameters": aResolvedValue(valSel("parameters")),
                                        })),
                                        "request": prop(resolvedSiblingComponent("DataSpecifier", {
                                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                            "imports": aResolvedValue(valSel("imports")),
                                            "type parameters": aResolvedValue(valSel("parameters")),
                                        })),
                                    })),
                                    "function": option(group({
                                        "out": prop(resolvedSiblingComponent("DataSpecifier", {
                                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                            "imports": aResolvedValue(valSel("imports")),
                                            "type parameters": aResolvedValue(valSel("parameters")),
                                        })),
                                        "in": prop(resolvedSiblingComponent("DataSpecifier", {
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
                "Imports": globalType(
                    {
                        "glossaries": pNonCyclicLookup(globalTypeSelection("Glossary"))
                    },
                    constrainedDictionary(
                        {
                            //"glossary": dictConstraint(valSel("glossaries"), tempTypeSelection("Glossary"))
                        },
                        group({
                        })
                    )
                ),
                "DataSpecifier": globalType(
                    {
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    },
                    taggedUnion({
                        "type": option(group({
                            "context": prop(taggedUnion({
                                "local": option(group({})),
                                "import": option(group({
                                    "glossary": prop(resolvedSiblingComponent("Glossary Reference", {
                                        "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                        "imports": aResolvedValue(valSel("imports")),
                                        "type parameters": aResolvedValue(valSel("type parameters")),
                                    })),
                                })),
                            })),
                            "typeXX": prop(terminal("identifier")),
                            "tailXX": prop(array(terminal("identifier"))),
                            "type arguments": prop(resolvedSiblingComponent("Arguments", {
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
                "AsynchronousInterface": globalType(
                    {
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    },
                    taggedUnion({
                        "choice": option(group({
                            "options": prop(dictionary(resolvedSiblingComponent("AsynchronousInterface", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            }))),
                        })),
                        "streamconsumer": option(group({
                            "data": prop(resolvedSiblingComponent("AsynchronousInterface", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                            "end": prop(resolvedSiblingComponent("AsynchronousInterface", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                        })),
                        "method": option(group({
                            "data": prop(optional(resolvedSiblingComponent("DataSpecifier", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            }))),
                            "interface": prop(optional(resolvedSiblingComponent("AsynchronousInterface", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            }))),
                        })),
                        "reference": option(resolvedSiblingComponent("AsynchronousInterfaceReference", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })),
                    })
                ),
                "Synchronous Interface": globalType(
                    {
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    },
                    taggedUnion({
                        "group": option(group({
                            "members": prop(dictionary(resolvedSiblingComponent("Synchronous Interface", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            }))),
                        })),
                        "method": option(group({
                            "data": prop(optional(resolvedSiblingComponent("DataSpecifier", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            }))),
                            "interface": prop(optional(resolvedSiblingComponent("Synchronous Interface", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            }))),
                        })),
                        "reference": option(resolvedSiblingComponent("SynchronousInterfaceReference", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })),
                    })
                ),
                "AsynchronousInterfaceReference": globalType(
                    {
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    },
                    group({
                        "context": prop(taggedUnion({
                            "local": option(group({})),
                            "import": option(group({
                                "glossary": prop(resolvedSiblingComponent("Glossary Reference", {
                                    "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                    "imports": aResolvedValue(valSel("imports")),
                                    "type parameters": aResolvedValue(valSel("type parameters")),
                                })),
                            })),
                        })),
                        "interfaceXX": prop(terminal("identifier")),
                        "type arguments": prop(resolvedSiblingComponent("Arguments", {
                            "parameters": aResolvedValue(valSel("glossary parameters")), //FIXME the parameters of the referenced type

                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })),
                    })
                ),
                "Arguments": globalType(
                    {
                        "parameters": pResolvedValue("Parameters", false),
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    },
                    constrainedDictionary(
                        {},
                        resolvedSiblingComponent("DataSpecifier", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })
                    )
                ),
                "SynchronousInterfaceReference": globalType(
                    {
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                        //"synchronous interfaces": pNonCyclicLookup(globalTypeSelection("Synchronous Interface"))
                    },
                    group({
                        "context": prop(taggedUnion(
                            {
                                "local": option(group({
                                    "interfaceXX": prop(terminal("identifier"))
                                    // "interface": prop(lookupReference(lparameter("synchronous interfaces"), tempTypeSelection("Synchronous Interface")))
                                })),
                                "import": option(group({
                                    "glossary": prop(resolvedSiblingComponent("Glossary Reference", {
                                        "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                        "imports": aResolvedValue(valSel("imports")),
                                        "type parameters": aResolvedValue(valSel("type parameters")),
                                    })),
                                    "interfaceXX": prop(terminal("identifier"))

                                    //"interface FIXME": prop(lookupReference(lparameter("synchronous interfaces"), tempTypeSelection("Synchronous Interface")))
                                })),
                            }
                        )),
                        "type arguments": prop(resolvedSiblingComponent("Arguments", {
                            "parameters": aResolvedValue(valSel("glossary parameters")), //FIXME the parameters of the referenced type
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })),
                    })
                ),
                "Type": globalType(
                    {
                        "glossary parameters": pResolvedValue("Parameters", false),
                        "imports": pResolvedValue("Imports", false),
                        "type parameters": pResolvedValue("Parameters", false),
                    },
                    taggedUnion({
                        "array": option(resolvedSiblingComponent("Type", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })),
                        "dictionary": option(resolvedSiblingComponent("Type", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })),
                        "computed": option(resolvedSiblingComponent("Type", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })),
                        "optional": option(resolvedSiblingComponent("Type", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })),
                        "null": option(group({})),
                        "boolean": option(group({})),
                        "string": option(group({})),
                        "number": option(group({})),
                        "reference": option(resolvedSiblingComponent("DataSpecifier", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        })),
                        "group": option(dictionary(group({
                            "type": prop(resolvedSiblingComponent("Type", {
                                "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                                "imports": aResolvedValue(valSel("imports")),
                                "type parameters": aResolvedValue(valSel("type parameters")),
                            })),
                        }))),
                        "taggedUnion": option(dictionary(resolvedSiblingComponent("Type", {
                            "glossary parameters": aResolvedValue(valSel("glossary parameters")),
                            "imports": aResolvedValue(valSel("imports")),
                            "type parameters": aResolvedValue(valSel("type parameters")),
                        }))),
                    })
                ),
            }),
        },
        'root': {
            'annotation': pd.getLocationInfo(0),
            'key': "Dummy"
        }
    }
}