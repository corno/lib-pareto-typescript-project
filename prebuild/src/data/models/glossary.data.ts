import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    component,
    dictionary,
    terminal,
    globalType,
    group,
    reference,
    taggedUnion,
    prop,
    optional,
    option,
    typePath,
    grp,
    tbd,
    array,
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({}),
    'terminal types': d({
        "identifier": null,
    }),
    'global types': d({
        "Context": globalType({}, taggedUnion({
            "local": option(group({})),
            //"import": reference(['parent', null), [)),
            "import": option(group({
                "glossary": prop(reference(typePath("Glossary", [grp("imports")]), tbd())),
            })),
        })),
        "DataOrSynchronousInterface": globalType({}, taggedUnion({
            "data": option(component("DataSpecifier", {})),
            "interface": option(component("SynchronousInterfaceReference", {})),
        })),
        "TypeParameters": globalType({}, dictionary(group({}))),
        "Namespace": globalType({}, group({

            "namespaces": prop(dictionary(component("Namespace", {}))),
            "types": prop(dictionary(group({
                "parameters": prop(component("TypeParameters", {})),
                "type": prop(component("Type", {})),
            }))),
        })),
        "Glossary": globalType({}, group({
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
        })),
        "DataSpecifier": globalType({}, taggedUnion({
            "type": option(group({
                "context": prop(component("Context", {})),
                "namespaces": prop(array(terminal("identifier"))),
                "type": prop(terminal("identifier")),
                "arguments": prop(dictionary(component("DataSpecifier", {}))),
            })),
            "type parameter": option(terminal("identifier")),
            "glossary parameter": option(terminal("identifier")),
        })),
        "AsynchronousInterface": globalType({}, taggedUnion({
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
        })),
        "SynchronousInterface": globalType({}, taggedUnion({
            "group": option(group({
                "members": prop(dictionary(component("SynchronousInterface", {}))),
            })),
            "method": option(group({
                "data": prop(optional(component("DataSpecifier", {}))),
                "interface": prop(optional(component("SynchronousInterface", {}))),
            })),
            "reference": option(component("SynchronousInterfaceReference", {})),
        })),
        "AsynchronousInterfaceReference": globalType({}, group({
            "context": prop(component("Context", {})),
            //"interface": [["context"), reference(['sibling', "context"), [))),
            "interface": prop(terminal("identifier")),
            "arguments": prop(dictionary(component("DataSpecifier", {}))),
        })),
        "SynchronousInterfaceReference": globalType({}, group({
            "context": prop(component("Context", {})),
            //"interface": [["context"), reference(['sibling', "context"), [))),
            "interface": prop(terminal("identifier")),
            "arguments": prop(dictionary(component("DataSpecifier", {}))),
        })),
        "Type": globalType({}, taggedUnion({
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
        })),
    }),
}