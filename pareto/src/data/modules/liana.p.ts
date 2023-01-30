import * as pr from 'pareto-core-raw'
import {
    computed,
    string,
    reference,
    boolean,
    array, dictionary, group, member, taggedUnion, types, _function, typeReference, parameter, template
} from "lib-pareto-typescript-project/dist/submodules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"
import { algorithm, constructor, definitionReference, } from 'lib-pareto-typescript-project/dist/submodules/moduleDefinition/api/shorthands.p'


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
        }),
        'parameters': d({}),
        'templates': d({
            "Dictionary": {
                'parameters': d({
                    "Type": {}
                }),
                'type': group({
                    "annotation": member(string()),
                    "dictionary": member(dictionary(parameter("Type"))),
                })
            },
            "ConstrainedDictionary": {
                'parameters': d({
                    "ReferencedType": {},
                    "Type": {}
                }),
                'type': group({
                    "annotation": member(string()),
                    "dictionary": member(dictionary(template("ConstrainedDictionaryEntry", {
                        "Type": reference("XArgument"),
                        "ReferencedType": reference("XGlobalType"),
                    }))),
                })
            },
            "ConstrainedDictionaryEntry": {
                'parameters': d({
                    "ReferencedType": {},
                    "Type": {}
                }),
                'type': group({
                    "referenced value": member(parameter("ReferencedType")),
                    "value": member(parameter("Type"))
                })
            },
            "Possibly": {
                'parameters': d({
                    "Type": {}
                }),
                'type': taggedUnion({
                    "set": parameter("Type"),
                    "not set": group({})
                }),
            },
            "Reference": {
                'parameters': d({
                    "ReferencedType": {}
                }),
                'type': group({
                    "referenced value": member(parameter("ReferencedType")),
                    "annotation": member(string()),
                    "name": member(string()),
                }),
            },
            "ComputedReference": {
                'parameters': d({
                    "ReferencedType": {}
                }),
                'type': group({
                    "referenced value": member(computed(parameter("ReferencedType"))),
                    "annotation": member(string()),
                    "name": member(string()),
                }),
            },
            "Optional": {
                'parameters': d({ "Type": {}, }),
                'type': taggedUnion({
                    "set": parameter("Type"),
                    "not set": group({}),
                })
            }
        }),
        'types': types({
            "_Reference": group({
                "name": member(string()),
                "annotation": member(string()),
            }),
            "GlobalType": group({
                "parameters": member(reference("Parameters")),
                "type": member(reference("LocalType"))
            }),
            "LocalType": taggedUnion({
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
                    "options": member(template("Dictionary", {
                        "Type": group({
                            "type": member(reference("LocalType"))
                        })
                    })),
                    "default": member(reference("_Reference"))
                }),
                "group": group({
                    "properties": member(reference("Properties"))
                }),
                "component": group({
                    "type": member(reference("_Reference")),
                    "arguments": member(template("Dictionary", { "Type": group({}) })),
                }),
            }),
            "Model": group({
                "stringTypes": member(template("Dictionary", { "Type": group({}) })),
                "globalTypes": member(template("Dictionary", { "Type": reference("GlobalType") })),
                "root": member(reference("_Reference"))
            }),
            "Parameter": reference("_Reference"),
            "Parameters": template("Dictionary", { "Type": reference("Parameter") }),
            "Property": group({
                "sibling dependencies": member(template("Dictionary", { "Type": group({}) })),
                "type": member(reference("LocalType"))
            }),
            "Properties": template("Dictionary", { "Type": reference("Property") }),
            "Reference": group({
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
            }),
            "String": group({
                "constrained": member(taggedUnion({
                    "no": group({
                        "type": member(reference("_Reference")),
                    }),
                    "yes": reference("Reference")
                }))
            }),
            /////
            "XArgument": template("ComputedReference", { "ReferencedType": reference("XGlobalType") }),
            "XGlobalType": group({
                "parameters": member(reference("XParameters")),
                "type": member(reference("XLocalType"))
            }),
            "XLocalType": taggedUnion({
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
                    "options": member(template("Dictionary", { "Type": reference("XOption") })),
                    "default": member(template("Reference", { "ReferencedType": reference("XOption") }))
                }),
                "group": group({
                    "properties": member(reference("XProperties"))
                }),
                "component": group({
                    "type": member(template("ComputedReference", { "ReferencedType": reference("XGlobalType") })),
                    "arguments": member(template("ConstrainedDictionary", {
                        "ReferencedType": reference("XParameter"),
                        "Type": reference("XArgument"),
                    })),
                }),
            }),
            "XModel": group({
                "stringTypes": member(template("Dictionary", { "Type": reference("XStringType") })),
                "globalTypes": member(template("Dictionary", { "Type": reference("XGlobalType") })),
                "root": member(template("Reference", { "ReferencedType": reference("XGlobalType") }))
            }),
            "XOption": group({
                "type": member(reference("XLocalType"))
            }),
            "XParameter": group({}),
            //"XParameter": template("ComputedReference", { "ReferencedType": ref("XGlobalType") }),

            "XParameters": template("Dictionary", { "Type": reference("XParameter") }),
            "XProperty": group({
                "type": member(reference("XLocalType"))
            }),
            "XProperties": template("Dictionary", { "Type": reference("XProperty") }),
            "XReference": group({
                "resolved type": member(template("Optional", { "Type": reference("LocalType") })),
            }),
            "XString": group({
                "constrained": member(taggedUnion({
                    "no": group({
                        "type": member(template("Reference", { "ReferencedType": reference("XStringType") }))
                    }),
                    "yes": reference("XReference")
                }))
            }),
            "XStringType": group({}),
            ////
            "PossibleModel": template("Possibly", {
                "Type": group({
                    "model": member(reference("XModel")),
                    "has errors": member(boolean()),
                })
            })
        }),
        'interfaces': d({
        }),
        'functions': d({
            "Resolve": _function(typeReference("Model"), typeReference("PossibleModel")),
        }),
    },
    'api': {
        'imports': d({
            // "collation": "res-pareto-collation",
            "common": "glo-pareto-common",
        }),
        'algorithms': d({
            "createResolver": algorithm(definitionReference("Resolve"), constructor(null, {
                "onError": definitionReference("common", "Log"),
            })),
        })
    },
}