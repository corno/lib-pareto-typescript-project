import * as pr from 'pareto-core-raw'

import * as mliana from "lib-pareto-typescript-project/dist/modules/liana"
import {
    d,
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
} from "lib-pareto-typescript-project/dist/modules/liana/api/shorthands.p"

export const $: mliana.TModel = {
    'stringTypes': d({
        "text": {},
    }),
    'globalTypes': d({
        "Context": globalType({}, taggedUnion({
            "local": group({}),
            //"import": reference(['parent', null], []),
            "import": string("identifier"),
        })),
        "Glossary": globalType({}, group({
            "imports": [[], dictionary(group({}))],
            "parameters": [[], dictionary(group({}))],
            "templates": [[], dictionary(group({
                "parameters": [[], dictionary(group({}))],
                "type": [[], component("Type", {})],
            }))],
            "types": [["namespaces", "templates"], dictionary(component("Type", {}))],
            "interfaces": [["types"], dictionary(component("Interface", {}))],
            "functions": [["namespace"], dictionary(group({
                "return type": [[], taggedUnion({
                    "data": group({
                        "asynchronous": [[], boolean()],
                        "type": [[], component("TypeReference", {})]
                    }),
                    "interface": component("InterfaceReference", {}),
                    "nothing": group({})
                })],
                "data": [[], component("TypeReference", {})],
                "managed input interface": [[], taggedUnion({
                    "set": component("InterfaceReference", {}),
                    "not set": group({}),
                })],
                "output interface": [[], taggedUnion({
                    "set": component("InterfaceReference", {}),
                    "not set": group({}),
                })],
            }))],
        })),
        "Interface": globalType({}, taggedUnion({
            "group": group({
                "members": [[], dictionary(component("Interface", {}))]
            }),
            "method": group({
                "data": [[], taggedUnion({
                    "set": component("TypeReference", {}),
                    "not set": group({}),
                })],
                "interface": [[], taggedUnion({
                    "set": component("InterfaceReference", {}),
                    "not set": group({}),
                })],
            }),
            "reference": component("InterfaceReference", {}),
        })),
        "InterfaceReference": globalType({}, group({
            "context": [[], component("Context", {})],
            //"interface": [["context"], reference(['sibling', "context"], [])],
            "interface": [[], string("identifier")],
        })),
        "Type": globalType({}, taggedUnion({
            "array": component("Type", {}),
            "nested": component("Type", {}),
            "dictionary": component("Type", {}),
            "computed": component("Type", {}),
            "null": group({}),
            "boolean": group({}),
            "string": group({}),
            "number": group({}),
            "reference": component("TypeReference", {}),
            "group": dictionary(group({
                "type": [[], component("Type", {})],
                "optional": [[], boolean()],
            })),
            "parameter": string("identifier"),
            "template": group({
                "context": [[], component("Context", {})],
                "template": [[], string("identifier")],
                "arguments": [[], dictionary(component("Type", {}))]
            }),
            "taggedUnion": dictionary(component("Type", {})),
        })),
        "TypeReference": globalType({}, group({
            "context": [[], component("Context", {})],
            //"type": [["namespace"], reference(['sibling', "namespaces"], [])],
            "type": [[], string("identifier")],
        }))
    }),
    'root': r("Glossary"),
}