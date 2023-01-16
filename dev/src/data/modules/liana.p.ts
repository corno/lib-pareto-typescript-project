import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function
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
                "LocalType": taggedUnion({
                    "string": group({}),
                    "dictionary":group({
                        "type": member(ref("LocalType"))
                    }),
                    "array": group({
                        "type": member(ref("LocalType"))
                    }),
                    "taggedUnion": group({
                        "options": member(dictionary(group({
                            "type": member(ref("LocalType"))
                        })))
                    }),
                    "group": group({
                        "properties": member(dictionary(group({
                            "type": member(ref("LocalType"))
                        })))
                    }),
                    "component": group({
                        "type": member(str())
                    }),
                }),
                "Model": group({
                    "types": member(dictionary(group({
                        "type": member(ref("LocalType"))
                    }))),
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