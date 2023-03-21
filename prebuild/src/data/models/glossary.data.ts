import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    array,
    component,
    dictionary,
    terminal,
    globalType,
    group,
    r,
    reference,
    //string,
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
                    "constructors": prop(dictionary(group({
                        "interface": prop(component("SynchronousInterfaceReference", {})),
                        //???  maybe this one                      "in": prop(component("DataOrSynchronousInterface", {})),
                        "downstreams": prop(dictionary(component("SynchronousInterfaceReference", {}))),
                    }))),
                    "functions": prop(dictionary(group({
                        "in": prop(component("DataOrSynchronousInterface", {})),
                        "out": prop(component("TypeReference", {})),
                    }))),
                })),
                "asynchronous": prop(group({
                    "interfaces": prop(dictionary(component("AsynchronousInterface", {}))),
                    "constructors": prop(dictionary(group({
                        "interface": prop(component("AsynchronousInterfaceReference", {})),
                        //???  maybe this one                      "in": prop(component("DataOrSynchronousInterface", {})),
                        "downstreams": prop(dictionary(component("AsynchronousInterfaceReference", {}))),
                    }))),
                    "functions": prop(dictionary(group({
                        "out": prop(component("TypeReference", {})),
                        "in": prop(taggedUnion({
                            "data": option(component("TypeReference", {})),
                        })),
                    }))),
                })),
            })),
            "AsynchronousInterface": globalType({}, taggedUnion({
                "choice": option(group({
                    "options": prop(dictionary(component("AsynchronousInterface", {}))),
                })),
                "stream": option(group({
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