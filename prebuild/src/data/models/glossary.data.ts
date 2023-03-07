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
    option,
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
                "local": option(group({})),
                //"import": reference(['parent', null), [)),
                "import": option(group({
                    "glossary": prop(terminal("identifier")),
                    "arguments": prop(dictionary(component("TypeReference", {}))),
                })),
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
                        "data": option(group({
                            "asynchronous": prop(terminal("boolean")),
                            "type": prop(component("TypeReference", {})),
                        })),
                        "interface": option(component("InterfaceReference", {})),
                        "nothing": option(group({})),
                    })),
                    "data": prop(component("TypeReference", {})),
                    "input builder": prop(optional(component("BuilderReference", {}))),
                    "output builder": prop(optional(component("BuilderReference", {}))),
                }))),
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
                "type parameter":option( terminal("identifier")),
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