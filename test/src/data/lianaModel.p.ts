import * as pr from 'pareto-core-raw'

import * as mliana from "../../../pub/dist/modules/liana"
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
} from "../../../pub/dist/modules/liana/api/shorthands.p"

const d = pr.wrapRawDictionary

export const $: mliana.TModel = {
    'globalTypes': d({
        "Context": globalType(taggedUnion({
            "local": group({}),
            "import": group({}),
        })),
        "Glossary": globalType(group({
            "imports": dictionary(group({})),
            "parameters": dictionary(group({})),
            "namespace": component("Namespace"),
            "functions": dictionary(group({
                "async": boolean(),
                "data": component("TypeReference"),
                "return value": component("TypeReference"),
            })),
            "callbacks": dictionary(group({
                "data": component("OptionalTypeReference"),
                "context": component("Context"),
                "interface": reference("Interface")
            })),
            "pipes": dictionary(group({
                "in": component("InterfaceReference"),
                "out": component("InterfaceReference"),
            })),
        })),
        "Interface": globalType(group({
            "group": group({
                "members": dictionary(component("Interface"))
            }),
            "method": group({
                "data": component("OptionalTypeReference"),
                "interface": taggedUnion({
                    "set": group({
                        "interface": reference("Interface")
                    }),
                    "null": group({}),
                })
            }),
            "reference": component("InterfaceReference"),
        })),
        "InterfaceReference": globalType(group({
            "context": component("Context"),
            "interface": reference("Interface"),
        })),
        "Namespace": globalType(group({
            "namespaces": dictionary(component("Namespace")),
            "templates": dictionary(group({
                "parameters": dictionary(group({})),
                "type": component("Type"),
            })),
            "types": dictionary(component("Type")),
            "interfaces": dictionary(component("Interface"))
        })),
        "OptionalTypeReference": globalType(taggedUnion({
            "set": component("TypeReference"),
            "not set": group({})
        })),
        "Type": globalType(group({

        })),
        "TypeReference": globalType(group({
            "context": component("Context"),
            "namespaces": array(reference("Namespace")),
            "type": reference("Type"),
        }))
    }),
    'root': "Glossary",
}