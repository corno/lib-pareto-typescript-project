import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, string, optional
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
            'types': types({
                "GlobalType": group({
                    "type": member(ref("LocalType"))
                }),
                "String": group({
                    "constrained": member(taggedUnion({
                        "no": group({
                            "type": member(str()),
                        }),
                        "yes": group({
                            "type": member(str()),
                        })
                    }))
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
                        "properties": member(dictionary(group({
                            "sibling dependencies": member(dictionary(null_())),
                            "type": member(ref("LocalType"))
                        })))
                    }),
                    "component": group({
                        "type": member(str())
                    }),
                }),
                "Model": group({
                    "stringTypes": member(dictionary(null_())),
                    "globalTypes": member(dictionary(ref("GlobalType"))),
                    "root": member(str())
                }),
            }),
            'interfaces': d({}),

        },
        'functions': d({}),
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
            // "temp": "../../temp",
        }),
        'algorithms': d({
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