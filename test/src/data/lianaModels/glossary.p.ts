import * as pr from 'pareto-core-raw'

import * as mliana from "../../../../pub/dist/modules/liana"
import {
    array,
    boolean,
    component,
    dictionary,
    globalType,
    group,
    reference,
    //string,
    taggedUnion,
} from "../../../../pub/dist/modules/liana/api/shorthands.p"

const d = pr.wrapRawDictionary

export const $: mliana.TModel = {
    'stringTypes': d({
        "text": null,
    }),
    'globalTypes': d({
        "Context": globalType([], taggedUnion({
            "local": group({}),
            "import": reference(['parent', null], "Interface"),
        })),
        "Glossary": globalType([], group({
            "imports": [[], dictionary(group({}))],
            "parameters": [[], dictionary(group({}))],
            "namespace": [["imports"], component("Namespace", [])],
            "functions": [["namespace"], dictionary(group({
                "async": [[], boolean()],
                "data": [[], component("TypeReference", [])],
                "return value": [[], component("TypeReference", [])],
            }))],
            "callbacks": [["namespace"], dictionary(group({
                "data": [[], component("OptionalTypeReference", [])],
                "context": [[], component("Context", [])],
                "interface": [["context"], reference(['sibling', "context"], "Interface")]
            }))],
            "pipes": [["namespace"], dictionary(group({
                "in": [[], component("InterfaceReference", [])],
                "out": [[], component("InterfaceReference", [])],
            }))],
        })),
        "Interface": globalType([], group({
            "group": [[], group({
                "members": [[], dictionary(component("Interface", []))]
            })],
            "method": [[], group({
                "data": [[], component("OptionalTypeReference", [])],
                "interface": [[], taggedUnion({
                    "null": group({}),
                    "set": group({
                        "interface": [[], reference(['parent', null], "Interface")]
                    }),
                })]
            })],
            "reference": [[], component("InterfaceReference", [])],
        })),
        "InterfaceReference": globalType([], group({
            "context": [[], component("Context", [])],
            "interface": [["context"], reference(['sibling', "context"], "Interface")],
        })),
        "Namespace": globalType([], group({
            "namespaces": [[], dictionary(component("Namespace", []))],
            "templates": [[], dictionary(group({
                "parameters": [[], dictionary(group({}))],
                "type": [[], component("Type", [])],
            }))],
            "types": [["namespaces", "templates"], dictionary(component("Type", []))],
            "interfaces": [["types"], dictionary(component("Interface", []))]
        })),
        "OptionalTypeReference": globalType([], taggedUnion({
            "not set": group({}),
            "set": component("TypeReference", []),
        })),
        "Type": globalType([], group({

        })),
        "TypeReference": globalType([], group({
            "context": [[], component("Context", [])],
            "namespaces": [["context"], array(reference(['sibling', "context"], "Namespace"))],
            "type": [["namespace"], reference(['sibling', "namespaces"], "Type")],
        }))
    }),
    'root': "Glossary",
}