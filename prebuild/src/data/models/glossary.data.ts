import * as pd from 'pareto-core-data'

import * as gliana from "lib-liana/dist/submodules/liana"
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
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: gliana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': d({}),
        'terminal types': d({
            "text": null,
            "boolean": null,
        }),
        'global types': d({
            "Context": globalType({}, taggedUnion({
                "local": group({}),
                //"import": reference(['parent', null), [)),
                "import": group({
                    "glossary": prop(terminal("identifier")),
                    "arguments": prop(dictionary(component("TypeReference", {}))),
                }),
            })),
            "Glossary": globalType({}, group({
                //"imports": prop(dictionary(group({}))),
                "parameters": prop(dictionary(group({}))),
                "types": prop(dictionary(group({
                    "parameters": prop(dictionary(group({}))),
                    "type": prop(component("Type", {})),
                }))),
                "builders": prop(dictionary(component("Builder", {}))),
                "interfaces": prop(dictionary(component("Interface", {}))),
                "functions": prop(dictionary(group({
                    "return type": prop(taggedUnion({
                        "data": group({
                            "asynchronous": prop(terminal("boolean")),
                            "type": prop(component("TypeReference", {})),
                        }),
                        "interface": component("InterfaceReference", {}),
                        "nothing": group({}),
                    })),
                    "data": prop(component("TypeReference", {})),
                    "input builder": prop(optional(component("BuilderReference", {}))),
                    "output builder": prop(optional(component("BuilderReference", {}))),
                }))),
            })),
            "Interface": globalType({}, taggedUnion({
                "choice": group({
                    "options": prop(dictionary(component("Interface", {}))),
                }),
                "stream": group({
                    "data": prop(component("Interface", {})),
                    "end": prop(component("Interface", {})),
                }),
                "method": group({
                    "data": prop(optional(component("TypeReference", {}))),
                    "interface": prop(optional(component("Interface", {}))),
                }),
                "reference": component("InterfaceReference", {}),
            })),
            "Builder": globalType({}, taggedUnion({
                "group": group({
                    "members": prop(dictionary(component("Builder", {}))),
                }),
                "method": group({
                    "data": prop(optional(component("TypeReference", {}))),
                    "builder": prop(optional(component("Builder", {}))),
                }),
                "reference": component("BuilderReference", {}),
            })),
            "InterfaceReference": globalType({}, group({
                "context": prop(component("Context", {})),
                //"interface": [["context"), reference(['sibling', "context"), [))),
                "interface": prop(terminal("identifier")),
            })),
            "BuilderReference": globalType({}, group({
                "context": prop(component("Context", {})),
                //"interface": [["context"), reference(['sibling', "context"), [))),
                "builder": prop(terminal("identifier")),
            })),
            "Type": globalType({}, taggedUnion({
                "array": component("Type", {}),
                "nested": component("Type", {}),
                "dictionary": component("Type", {}),
                "computed": component("Type", {}),
                "optional": component("Type", {}),
                "null": group({}),
                "boolean": group({}),
                "string": group({}),
                "number": group({}),
                "reference": component("TypeReference", {}),
                "group": dictionary(group({
                    "type": prop(component("Type", {})),
                })),
                "type parameter": terminal("identifier"),
                "glossary parameter": terminal("identifier"),
                "taggedUnion": dictionary(component("Type", {})),
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