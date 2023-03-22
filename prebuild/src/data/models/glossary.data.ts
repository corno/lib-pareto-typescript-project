import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    component,
    dictionary,
    terminal,
    globalType,
    group,
    r,
    reference,
    taggedUnion,
    prop,
    optional,
    option,
    typePath,
    grp,
    tbd,
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': d({}),
        'terminal types': d({
            "text": null,
            "boolean": null,
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
                "data": option(component("TypeReference", {})),
                "interface": option(component("SynchronousInterfaceReference", {})),
            })),
            "Glossary": globalType({}, group({
                "imports": prop(dictionary(group({
                    "arguments": prop(dictionary(component("TypeReference", {}))),
                }))),
                "parameters": prop(dictionary(group({}))),
                "types": prop(dictionary(group({
                    "parameters": prop(dictionary(group({}))),
                    "type": prop(component("Type", {})),
                }))),
                "synchronous": prop(group({
                    "interfaces": prop(dictionary(component("SynchronousInterface", {}))),
                    "algorithms": prop(dictionary(taggedUnion({
                        "function": option(group({
                            "in": prop(component("DataOrSynchronousInterface", {})),
                            "out": prop(component("TypeReference", {})),
                        })),
                        "procedure": option(group({
                            "in": prop(component("DataOrSynchronousInterface", {})),
                            "out": prop(component("SynchronousInterfaceReference", {})),
                        })),
                    }))),
                })),
                "asynchronous": prop(group({
                    "interfaces": prop(dictionary(component("AsynchronousInterface", {}))),
                    "algorithms": prop(dictionary(taggedUnion({
                        "constructor": option(group({
                            "interface": prop(component("AsynchronousInterfaceReference", {})),
                            "downstreams": prop(dictionary(component("AsynchronousInterfaceReference", {}))),
                        })),
                        "function": option(group({
                            "out": prop(component("TypeReference", {})),
                            "in": prop(component("TypeReference", {})),
                        })),
                    }))),
                })),
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
                    "data": prop(optional(component("TypeReference", {}))),
                    "interface": prop(optional(component("AsynchronousInterface", {}))),
                })),
                "reference": option(component("AsynchronousInterfaceReference", {})),
            })),
            "SynchronousInterface": globalType({}, taggedUnion({
                "group": option(group({
                    "members": prop(dictionary(component("SynchronousInterface", {}))),
                })),
                "method": option(group({
                    "data": prop(optional(component("TypeReference", {}))),
                    "interface": prop(optional(component("SynchronousInterface", {}))),
                })),
                "reference": option(component("SynchronousInterfaceReference", {})),
            })),
            "AsynchronousInterfaceReference": globalType({}, group({
                "context": prop(component("Context", {})),
                //"interface": [["context"), reference(['sibling', "context"), [))),
                "interface": prop(terminal("identifier")),
            })),
            "SynchronousInterfaceReference": globalType({}, group({
                "context": prop(component("Context", {})),
                //"interface": [["context"), reference(['sibling', "context"), [))),
                "interface": prop(terminal("identifier")),
            })),
            "Type": globalType({}, taggedUnion({
                "array": option(component("Type", {})),
                "nested": option(component("Type", {})),
                "dictionary": option(component("Type", {})),
                "computed": option(component("Type", {})),
                "optional": option(component("Type", {})),
                "null": option(group({})),
                "boolean": option(group({})),
                "string": option(group({})),
                "number": option(group({})),
                "reference": option(component("TypeReference", {})),
                "group": option(dictionary(group({
                    "type": prop(component("Type", {})),
                }))),
                "type parameter": option(terminal("identifier")),
                "glossary parameter": option(terminal("identifier")),
                "taggedUnion": option(dictionary(component("Type", {}))),
            })),
            "TypeReference": globalType({}, group({
                "context": prop(component("Context", {})),
                //"type": [["namespace"), reference(['sibling', "namespaces"), [))),
                "type": prop(terminal("identifier")),
                "arguments": prop(dictionary(component("TypeReference", {}))),
            })),
        }),
    },
    'root': r("Glossary"),
}