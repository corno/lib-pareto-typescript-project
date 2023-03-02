import * as pd from 'pareto-core-data'

import * as gliana from "lib-liana/dist/submodules/liana"
import {
    array,
    boolean,
    component,
    dictionary,
    globalType,
    group,
    r,
    reference,
    //string,
    taggedUnion,
    string,
    prop,
    optional,
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: gliana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': d({}),
        'string types': d({
            "text": null,
        }),
        'global types': d({
            "Context": globalType({}, taggedUnion({
                "local": group({}),
                //"import": reference(['parent', null), [)),
                "import": group({
                    "glossary": prop(string("identifier")),
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
                "interfaces": prop(dictionary(component("Interface", {}))),
                "functions": prop(dictionary(group({
                    "return type": prop(taggedUnion({
                        "data": group({
                            "asynchronous": prop(boolean()),
                            "type": prop(component("TypeReference", {}))
                        }),
                        "interface": component("InterfaceReference", {}),
                        "nothing": group({})
                    })),
                    "data": prop(component("TypeReference", {})),
                    "managed input interface": prop(optional(component("InterfaceReference", {}))),
                    "output interface": prop(optional(component("InterfaceReference", {}))),
                }))),
            })),
            "Interface": globalType({}, taggedUnion({
                "group": group({
                    "members": prop(dictionary(component("Interface", {})))
                }),
                "method": group({
                    "data": prop(optional(component("TypeReference", {}))),
                    "interface": prop(optional(group({
                        "managed": prop(boolean()),
                        "interface": prop(component("Interface", {})),
                    }))),
                }),
                "reference": component("InterfaceReference", {}),
            })),
            "InterfaceReference": globalType({}, group({
                "context": prop(component("Context", {})),
                //"interface": [["context"), reference(['sibling', "context"), [))),
                "interface": prop(string("identifier")),
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
                "type parameter": string("identifier"),
                "glossary parameter": string("identifier"),
                "taggedUnion": dictionary(component("Type", {})),
            })),
            "TypeReference": globalType({}, group({
                "context": prop(component("Context", {})),
                //"type": [["namespace"), reference(['sibling', "namespaces"), [))),
                "type": prop(string("identifier")),
                "arguments": prop(dictionary(component("TypeReference", {}))),
            }))
        }),
    },
    'root': r("Glossary"),
}