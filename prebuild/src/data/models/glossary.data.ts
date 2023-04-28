import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
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
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({}),
    'labels': {
        'atom types': d({
            "identifier": null,
        }),

    },
    'global types': {
        'declarations': d({
            "Context": globalTypeDeclaration({}),
            "DataOrSynchronousInterface": globalTypeDeclaration({}),
            "TypeParameters": globalTypeDeclaration({}),
            "Namespace": globalTypeDeclaration({}),
            "Glossary": globalTypeDeclaration({}),
            "DataSpecifier": globalTypeDeclaration({}),
            "AsynchronousInterface": globalTypeDeclaration({}),
            "SynchronousInterface": globalTypeDeclaration({}),
            "AsynchronousInterfaceReference": globalTypeDeclaration({}),
            "SynchronousInterfaceReference": globalTypeDeclaration({}),
            "Type": globalTypeDeclaration({}),
        }),
        'definitions': d({
            "Context": globalTypeDefinition(
                taggedUnion({
                    "local": option(group({})),
                    //"import": reference(['parent', null), [)),
                    "import": option(group({
                        "glossary": prop(resolvedValueReference(valSel("glossary"), tempTypeSelection("Glossary", t_grp("imports")))),
                    })),
                })
            ),
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
                })),
            "Glossary": globalTypeDefinition(
                group({
                    "imports": prop(dictionary(group({
                        "arguments": prop(dictionary(component("DataSpecifier", {}))),
                    }))),
                    "parameters": prop(dictionary(group({}))),
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
                })
            ),
            "DataSpecifier": globalTypeDefinition(
                taggedUnion({
                    "type": option(group({
                        "context": prop(component("Context", {})),
                        "type": prop(terminal("identifier")),
                        "tail": prop(array(terminal("identifier"))),
                        "arguments": prop(dictionary(component("DataSpecifier", {}))),
                    })),
                    "type parameter": option(terminal("identifier")),
                    "glossary parameter": option(terminal("identifier")),
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
                    "context": prop(component("Context", {})),
                    //"interface": [["context"), reference(['sibling', "context"), [))),
                    "interface": prop(terminal("identifier")),
                    "arguments": prop(dictionary(component("DataSpecifier", {}))),
                })
            ),
            "SynchronousInterfaceReference": globalTypeDefinition(
                group({
                    "context": prop(component("Context", {})),
                    //"interface": [["context"), reference(['sibling', "context"), [))),
                    "interface": prop(terminal("identifier")),
                    "arguments": prop(dictionary(component("DataSpecifier", {}))),
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
}