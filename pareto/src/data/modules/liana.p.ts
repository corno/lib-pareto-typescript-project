import * as pr from 'pareto-core-raw'
import {
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
                        "referenced type": member(parameter("ReferencedType")),
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
                        "options": member(dictionary(group({
                            "type": member(ref("LocalType"))
                        }))),
                        "default": member(str())
                    }),
                    "group": group({
                        "properties": member(ref("Properties"))
                    }),
                    "component": group({
                        "type": member(str()),
                        "arguments": member(dictionary(null_())),
                    }),
                }),
                "Model": group({
                    "stringTypes": member(dictionary(null_())),
                    "globalTypes": member(dictionary(ref("GlobalType"))),
                    "root": member(ref("_Reference"))
                }),
                "Parameters": dictionary(null_()),
                "Property": group({
                    "sibling dependencies": member(dictionary(null_())),
                    "type": member(ref("LocalType"))
                }),
                "Properties": dictionary(ref("Property")),
                "Reference": group({
                    "annotation": member(str()),
                    "type": member(taggedUnion({
                        "parameter": str(),
                        "sibling": str(),
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
                            "type": member(str()),
                        }),
                        "yes": ref("Reference")
                    }))
                }),
                /////

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
                        "options": member(dictionary(group({
                            "type": member(ref("XLocalType"))
                        }))),
                        "default": member(str())
                    }),
                    "group": group({
                        "properties": member(ref("XProperties"))
                    }),
                    "component": group({
                        "type": member(str()),
                        "arguments": member(dictionary(null_())),
                    }),
                }),
                "XModel": group({
                    "stringTypes": member(dictionary(null_())),
                    "globalTypes": member(dictionary(ref("XGlobalType"))),
                    "root": member(template("Reference", { "ReferencedType": ref("XGlobalType") }))
                }),
                "XParameters": dictionary(null_()),
                "XProperty": group({
                    "type": member(ref("XLocalType"))
                }),
                "XProperties": dictionary(ref("XProperty")),
                "XReference": group({
                    //"resolved type": member(ref("LocalType")),
                }),
                "XString": group({
                    "constrained": member(taggedUnion({
                        "no": group({
                            "type": member(str()),
                        }),
                        "yes": ref("XReference")
                    }))
                }),
                ////
                "PossibleModel": template("Possibly", {"Type": ref("XModel")})
            }),
            'interfaces': d({
                "OnResolved": ['method', {
                    'data': typeReference("XModel"),
                    'interface': ['null', null],
                }]
            }),

        },
        'functions': d({
            "Resolve": {
                'data': typeReference("Model"),
                'return value': typeReference("PossibleModel"),
            }
        }),
        'callbacks': d({

            // "SerializeGlossary": {
            //     'data': ['type', externalReference("glossary", "Glossary")],
            //     'context': ['import', "fp"],
            //     'interface': "Block",
            // },
            // "SerializeLeafType": {
            //     'data': ['type', externalReference("glossary", "LeafType")],
            //     'context': ['import', "fp"],
            //     'interface': "Line",
            // },
            // "SerializeModuleDefinition": {
            //     'data': ['type', externalReference("moduleDefinition", "ModuleDefinition")],
            //     'context': ['import', "fp"],
            //     'interface': "Writer",
            // },
        }),
        'pipes': d({}),
    },
    'api': {
        'imports': d({
            // "collation": "res-pareto-collation",
            "common": "glo-pareto-common",
        }),
        'algorithms': d({
            "createResolver": {
                'definition': ['function', {
                    'function': "Resolve"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "onError": ['procedure', externalTypeReference("common", "String")]
                    }),
                }],
            },
            // "createGlossarySerializer": {
            //     'definition': ['callback', {
            //         'callback': "SerializeGlossary"
            //     }],
            //     'type': ['constructor', {
            //         'configuration data': ['null', null],
            //         'dependencies': d({
            //             "enrichedDictionaryForEach": ['callback', {
            //                 'context': ['import', "temp"],
            //                 'callback': "EnrichedDictionaryForEach",
            //             }],
            //             "compare": ['function', {
            //                 'context': ['import', "collation"],
            //                 'function': "IsABeforeB",
            //             }],
            //         })
            //     }]
            // },
            // "createModuleDefinitionSerializer": {
            //     'definition': ['callback', {
            //         'callback': "SerializeModuleDefinition"
            //     }],
            //     'type': ['constructor', {
            //         'configuration data': ['null', null],
            //         'dependencies': d({
            //             "compare": ['function', {
            //                 'context': ['import', "collation"],
            //                 'function': "IsABeforeB",
            //             }],
            //             "serializeGlossary": ['callback', {
            //                 //'context': ['import', "glossary"],
            //                 'callback': "SerializeGlossary"
            //             }],
            //             "serializeLeafType": ['callback', {
            //                 //'context': ['import', "glossary"],
            //                 'callback': "SerializeLeafType"
            //             }],
            //         }),
            //         'callback': {
            //             'callback': "SerializeModuleDefinition"
            //         }
            //     }],
            // },
        })
    },
}