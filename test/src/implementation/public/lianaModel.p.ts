import * as pr from 'pareto-core-raw'

import * as mliana from "../../../../pub/dist/modules/liana"
import {
    boolean,
    component,
    dictionary,
    globalType,
    group,
    reference,
    string,
} from "../../../../pub/dist/modules/liana/api/shorthands.p"

const d = pr.wrapRawDictionary

export const $: mliana.TModel = {
    'globalTypes': d({
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
                "interface": reference("***INTERFACE***")
            })),
            "pipes": dictionary(group({
                "in": component("InterfaceReference"),
                "out": component("InterfaceReference"),
            })),

            //"parameters": member(ref("Parameters"), true),
            // "imports": member(dictionary(str())),
            // "namespace": member(ref("Namespace")),
            // "functions": member(dictionary(ref("Function"))),
            // "callbacks": member(dictionary(ref("Callback"))),
            // "pipes": member(dictionary(group({
            //     "in": member(ref("InterfaceReference")),
            //     "out": member(ref("InterfaceReference")),
            // }))),
        })),
        "Interface": globalType(group({

        })),
        "Namespace": globalType(group({
            "namespaces": dictionary(component("Namespace")),
            "templates": dictionary(component("Template")),
            "types": dictionary(component("Type")),
            "interfaces": dictionary(component("Interface"))
        })),
        "Type": globalType(group({

        })),
    }),
    'root': "Glossary",
}