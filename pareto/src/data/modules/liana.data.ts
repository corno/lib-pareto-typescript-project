import * as pr from 'pareto-core-raw'
import {
    computed,
    string,
    reference,
    boolean,
    array, dictionary, group, member, taggedUnion, types, typeReference, typeParameter, parametrizedTypeReference, func, data, type, parametrizedType
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"
import { algorithm, constructor, definitionReference, } from 'lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p'


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'types': d({
            "Dictionary": parametrizedType({ "Type": {} }, group({
                "annotation": member(string()),
                "dictionary": member(dictionary(typeParameter("Type"))),
            })),
            "Possibly": parametrizedType({ "Type": {} }, taggedUnion({
                "set": typeParameter("Type"),
                "not set": group({})
            })),
            "YReference": parametrizedType({ "ReferencedType": {} }, group({
                "referenced value": member(typeParameter("ReferencedType")),
                "annotation": member(string()),
                "name": member(string()),
            })),
            "ComputedReference": parametrizedType({ "ReferencedType": {} }, group({
                "referenced value": member(computed(typeParameter("ReferencedType"))),
                "annotation": member(string()),
                "name": member(string()),
            })),
            "Optional": parametrizedType({ "Type": {} }, taggedUnion({
                "set": typeParameter("Type"),
                "not set": group({}),
            })),
            ////
            "_Reference": type(group({
                "name": member(string()),
                "annotation": member(string()),
            })),
            "GlobalType": type(group({
                "parameters": member(reference("Parameters")),
                "type": member(reference("LocalType"))
            })),
            "LocalType": type(taggedUnion({
                "string": reference("String"),
                "boolean": group({}),
                "dictionary": group({
                    "key": member(reference("String")),
                    "type": member(reference("LocalType"))
                }),
                "array": group({
                    "type": member(reference("LocalType"))
                }),
                "taggedUnion": group({
                    "options": member(['reference', parametrizedTypeReference("Dictionary", {
                        "Type": typeReference("LocalType")
                    })]),
                    "default": member(reference("_Reference"))
                }),
                "group": group({
                    "properties": member(reference("Properties"))
                }),
                "component": group({
                    "type": member(reference("_Reference")),
                    "arguments": member(['reference', parametrizedTypeReference("Dictionary", { "Type": typeReference("common", "Null") })]),
                }),
            })),
            "Model": type(group({
                "stringTypes": member(['reference', parametrizedTypeReference("Dictionary", { "Type": typeReference("common", "Null") })]),
                "globalTypes": member(['reference', parametrizedTypeReference("Dictionary", { "Type": typeReference("GlobalType") })]),
                "root": member(reference("_Reference"))
            })),
            "Parameter": type(reference("_Reference")),
            "Parameters": type(['reference', parametrizedTypeReference("Dictionary", { "Type": typeReference("Parameter") })]),
            "Property": type(group({
                "sibling dependencies": member(['reference', parametrizedTypeReference("Dictionary", { "Type": typeReference("common", "Null") })]),
                "type": member(reference("LocalType"))
            })),
            "Properties": type(['reference', parametrizedTypeReference("Dictionary", { "Type": typeReference("Property") })]),
            "Reference": type(group({
                "type": member(taggedUnion({
                    "parameter": reference("_Reference"),
                    "sibling": reference("_Reference"),
                    "other": group({}),
                })),
                "steps": member(array(taggedUnion({
                    "group": reference("_Reference"),
                    "tagged union": reference("_Reference"),
                    "reference": group({}),
                    "array": group({}),
                }))),
            })),
            "String": type(group({
                "constrained": member(taggedUnion({
                    "no": group({
                        "type": member(reference("_Reference")),
                    }),
                    "yes": reference("Reference")
                }))
            })),
            /////
            "XArgument": type(['reference', parametrizedTypeReference("ComputedReference", { "ReferencedType": typeReference("XGlobalType") })]),
            "XGlobalType": type(group({
                "parameters": member(reference("XParameters")),
                "type": member(reference("XLocalType"))
            })),
            "XLocalType": type(taggedUnion({
                "string": reference("XString"),
                "boolean": group({}),
                "dictionary": group({
                    "key": member(reference("XString")),
                    "type": member(reference("XLocalType"))
                }),
                "array": group({
                    "type": member(reference("XLocalType"))
                }),
                "taggedUnion": group({
                    "options": member(['reference', parametrizedTypeReference("Dictionary", { "Type": typeReference("XOption") })]),
                    "default": member(['reference', parametrizedTypeReference("YReference", { "ReferencedType": typeReference("XOption") })]),
                }),
                "group": group({
                    "properties": member(reference("XProperties"))
                }),
                "component": group({
                    "type": member(['reference', parametrizedTypeReference("ComputedReference", { "ReferencedType": typeReference("XGlobalType") })]),
                    // "arguments": member(template("ConstrainedDictionary", {
                    //     "ReferencedType": reference("XParameter"),
                    //     "Type": reference("XArgument"),
                    // })),
                    "arguments": member(dictionary(string())),
                }),
            })),
            "XModel": type(group({
                "stringTypes": member(['reference', parametrizedTypeReference("Dictionary", { "Type": typeReference("XStringType") })]),
                "globalTypes": member(['reference', parametrizedTypeReference("Dictionary", { "Type": typeReference("XGlobalType") })]),
                "root": member(['reference', parametrizedTypeReference("YReference", { "ReferencedType": typeReference("XGlobalType") })]),
            })),
            "XOption": type(group({
                "type": member(reference("XLocalType"))
            })),
            "XParameter": type(group({})),
            //"XParameter": template("ComputedReference", { "ReferencedType": ref("XGlobalType") }),

            "XParameters": type(['reference', parametrizedTypeReference("Dictionary", { "Type": typeReference("XParameter") })]),
            "XProperty": type(group({
                "type": member(reference("XLocalType"))
            })),
            "XProperties": type(['reference', parametrizedTypeReference("Dictionary", { "Type": typeReference("XProperty") })]),
            "XReference": type(group({
                "resolved type": member(['reference', parametrizedTypeReference("Optional", { "Type": typeReference("LocalType") })]),
            })),
            "XString": type(group({
                "constrained": member(taggedUnion({
                    "no": group({
                        "type": member(['reference', parametrizedTypeReference("YReference", { "ReferencedType": typeReference("XStringType") })]),
                    }),
                    "yes": reference("XReference")
                }))
            })),
            "XStringType": type(group({})),
            ////
            "PM": type(group({
                "model": member(reference("XModel")),
                "has errors": member(boolean()),
            })),
            "PossibleModel": type(['reference', parametrizedTypeReference("Possibly", {
                "Type": typeReference("PM"),
            })])
        }),
        'interfaces': d({
        }),
        'functions': d({
            "Resolve": func(typeReference("Model"), null, null, data(typeReference("PossibleModel"), false)),
        }),
    },
    'api': {
        'imports': d({
            // "collation": "res-pareto-collation",
            "common": "glo-pareto-common",
        }),
        'algorithms': d({
            "createResolver": algorithm(definitionReference("Resolve"), constructor(null, {
                "onError": definitionReference("common", {}, "Log"),
            })),
        })
    },
}