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
            "DataOrBuilder": globalType({}, taggedUnion({
                "data": option(component("TypeReference", {})),
                "builder": option(component("BuilderReference", {})),
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
                "type": prop(taggedUnion({
                    "synchronous": option(group({
                        "builders": prop(dictionary(component("Builder", {}))),

                        "functions": prop(dictionary(group({
                            "in": prop(component("DataOrBuilder", {})),
                            "out": prop(component("DataOrBuilder", {})),
                        }))),
                    })),
                    "asynchronous": option(group({
                        "interfaces": prop(dictionary(component("Interface", {}))),
                        "resources": prop(dictionary(group({
                            "data": prop(component("TypeReference", {})),
                            "interface": prop(component("InterfaceReference", {})),
                        }))),
                        "functions": prop(dictionary(group({
                            "out": prop(taggedUnion({
                                "data": option(component("TypeReference", {})),
                                "interface": option(component("InterfaceReference", {})),
                            })),
                            "in": prop(taggedUnion({
                                "data": option(component("TypeReference", {})),
                                "resource": option(component("ResourceReference", {})),
                            })),

                        }))),
                    })),
                })),
            })),
            "Interface": globalType({}, taggedUnion({
                "choice": option(group({
                    "options": prop(dictionary(component("Interface", {}))),
                })),
                "stream": option(group({
                    "data": prop(component("Interface", {})),
                    "end": prop(component("Interface", {})),
                })),
                "method": option(group({
                    "data": prop(optional(component("TypeReference", {}))),
                    "interface": prop(optional(component("Interface", {}))),
                })),
                "reference": option(component("InterfaceReference", {})),
            })),
            "Builder": globalType({}, taggedUnion({
                "group": option(group({
                    "members": prop(dictionary(component("Builder", {}))),
                })),
                "method": option(group({
                    "data": prop(optional(component("TypeReference", {}))),
                    "builder": prop(optional(component("Builder", {}))),
                })),
                "reference": option(component("BuilderReference", {})),
            })),
            "InterfaceReference": globalType({}, group({
                "context": prop(component("Context", {})),
                //"interface": [["context"), reference(['sibling', "context"), [))),
                "interface": prop(terminal("identifier")),
            })),
            "ResourceReference": globalType({}, group({
                "context": prop(component("Context", {})),
                //"interface": [["context"), reference(['sibling', "context"), [))),
                "resource": prop(terminal("identifier")),
            })),
            "BuilderReference": globalType({}, group({
                "context": prop(component("Context", {})),
                //"interface": [["context"), reference(['sibling', "context"), [))),
                "builder": prop(terminal("identifier")),
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