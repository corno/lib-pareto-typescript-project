import * as pr from 'pareto-core-raw'
import {
    computed,
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, string, optional, typeReference, parameter, template, externalTypeReference
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            // "glossary": "../../glossary",
            // "moduleDefinition": "../../moduleDefinition",
            // "fp": "lib-fountain-pen",
        }),
        'namespace': {
            'templates': d({
                "Dictionary": {
                    'parameters': d({
                        "Type": null
                    }),
                    'type': group({
                        "annotation": member(str()),
                        "dictionary": member(dictionary(parameter("Type"))),
                    })
                },
                "ConstrainedDictionary": {
                    'parameters': d({
                        "ReferencedType": null,
                        "Type": null
                    }),
                    'type': group({
                        "annotation": member(str()),
                        "dictionary": member(dictionary(template("ConstrainedDictionaryEntry", {
                            "Type": ref("XArgument"),
                            "ReferencedType": ref("XGlobalType"),
                        }))),
                    })
                },
                "ConstrainedDictionaryEntry": {
                    'parameters': d({
                        "ReferencedType": null,
                        "Type": null
                    }),
                    'type': group({
                        "referenced value": member(parameter("ReferencedType")),
                        "value": member(parameter("Type"))
                    })
                },


                
                "Possibly": {
                    'parameters': d({
                        "Type": null
                    }),
                    'type': taggedUnion({
                        "set": parameter("Type"),
                        "not set": null_()
                    }),
                },
                "Reference": {
                    'parameters': d({
                        "ReferencedType": null
                    }),
                    'type': group({
                        "referenced value": member(parameter("ReferencedType")),
                        "annotation": member(str()),
                        "name": member(str()),
                    }),
                },
                "ComputedReference": {
                    'parameters': d({
                        "ReferencedType": null
                    }),
                    'type': group({
                        "referenced value": member(computed(parameter("ReferencedType"))),
                        "annotation": member(str()),
                        "name": member(str()),
                    }),
                }
            }),
            'types': types({
                "_Reference": group({
                    "name": member(str()),
                    "annotation": member(str()),
                }),
                "GlobalType": group({
                    "parameters": member(ref("Parameters")),
                    "type": member(ref("LocalType"))
                }),
                "LocalType": taggedUnion({
                    "string": ref("String"),
                    "boolean": null_(),
                    "dictionary": group({
                        "key": member(ref("String")),
                        "type": member(ref("LocalType"))
                    }),
                    "array": group({
                        "type": member(ref("LocalType"))
                    }),
                    "taggedUnion": group({
                        "options": member(template("Dictionary", { "Type": group({
                            "type": member(ref("LocalType"))
                        })})),
                        "default": member(ref("_Reference"))
                    }),
                    "group": group({
                        "properties": member(ref("Properties"))
                    }),
                    "component": group({
                        "type": member(ref("_Reference")),
                        "arguments": member(template("Dictionary", { "Type": null_()})),
                    }),
                }),
                "Model": group({
                    "stringTypes": member(template("Dictionary", { "Type": null_()})),
                    "globalTypes": member(template("Dictionary", { "Type": ref("GlobalType")})),
                    "root": member(ref("_Reference"))
                }),
                "Parameter": ref("_Reference"),
                "Parameters": template("Dictionary", { "Type": ref("Parameter")}),
                "Property": group({
                    "sibling dependencies": member(template("Dictionary", { "Type": null_()})),
                    "type": member(ref("LocalType"))
                }),
                "Properties": template("Dictionary", { "Type": ref("Property")}),
                "Reference": group({
                    "type": member(taggedUnion({
                        "parameter": ref("_Reference"),
                        "sibling": ref("_Reference"),
                        "other": null_(),
                    })),
                    "steps": member(array(taggedUnion({
                        "group": ref("_Reference"),
                        "tagged union": ref("_Reference"),
                        "reference": null_(),
                        "array": null_(),
                    }))),
                }),
                "String": group({
                    "constrained": member(taggedUnion({
                        "no": group({
                            "type": member(ref("_Reference")),
                        }),
                        "yes": ref("Reference")
                    }))
                }),
                /////
                "XArgument": template("ComputedReference", { "ReferencedType": ref("XGlobalType") }),
                "XGlobalType": group({
                    "parameters": member(ref("XParameters")),
                    "type": member(ref("XLocalType"))
                }),
                "XLocalType": taggedUnion({
                    "string": ref("XString"),
                    "boolean": null_(),
                    "dictionary": group({
                        "key": member(ref("XString")),
                        "type": member(ref("XLocalType"))
                    }),
                    "array": group({
                        "type": member(ref("XLocalType"))
                    }),
                    "taggedUnion": group({
                        "options": member(template("Dictionary", { "Type": ref("XOption")})),
                        "default": member(template("Reference", { "ReferencedType": ref("XOption") }))
                    }),
                    "group": group({
                        "properties": member(ref("XProperties"))
                    }),
                    "component": group({
                        "type": member(template("ComputedReference", { "ReferencedType": ref("XGlobalType") })),
                        "arguments": member(template("ConstrainedDictionary", {
                            "ReferencedType": ref("XParameter"),
                            "Type": ref("XArgument"),
                        })),
                    }),
                }),
                "XModel": group({
                    "stringTypes": member(template("Dictionary", { "Type": ref("XStringType")})),
                    "globalTypes": member(template("Dictionary", { "Type": ref("XGlobalType")})),
                    "root": member(template("Reference", { "ReferencedType": ref("XGlobalType") }))
                }),
                "XOption": group({
                    "type": member(ref("XLocalType"))
                }),
                "XParameter": null_(),
                //"XParameter": template("ComputedReference", { "ReferencedType": ref("XGlobalType") }),

                "XParameters": template("Dictionary", { "Type": ref("XParameter")}),
                "XProperty": group({
                    "type": member(ref("XLocalType"))
                }),
                "XProperties": template("Dictionary", { "Type": ref("XProperty")}),
                "XReference": group({
                    "resolved type": member(optional(ref("LocalType"))),
                }),
                "XString": group({
                    "constrained": member(taggedUnion({
                        "no": group({
                            "type": member(template("Reference", { "ReferencedType": ref("XStringType") }))
                        }),
                        "yes": ref("XReference")
                    }))
                }),
                "XStringType": null_(),
                ////
                "PossibleModel": template("Possibly", {"Type": group({
                    "model": member(ref("XModel")),
                    "has errors": member(bln()),
                })})
            }),
            'interfaces': d({
            }),

        },
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
            "createResolver": {
                'definition': {
                    'function': "Resolve"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "onError": {
                            'context': ['import', "common"],
                            'function': "Log",
                        }
                    }),
                }],
            },
        })
    },
}