import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
   null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, optional, typeReference, externalTypeReference
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"


import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
            "liana": "../../liana"
        }),
        'namespace': {
            'types': types({
            }),
            'interfaces': d({}),

        },
        'functions': d({}),
        'callbacks': d({
            "Serialize": {
                'data': externalTypeReference("liana", "Model"),
                'context': ['import', "fp"],
                'interface': "Writer",
            },
        }),
        'pipes': d({}),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "temp": "../../temp",
        }),
        'algorithms': d({
            "createSerializer": {
                'definition': ['callback', {
                    'callback': "Serialize"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        // "arrayForEach": ['callback', {
                        //     'context': ['import', "temp"],
                        //     'callback': "ArrayForEach",
                        // }],
                        // "dictionaryForEach": ['callback', {
                        //     'context': ['import', "temp"],
                        //     'callback': "DictionaryForEach",
                        // }],
                        // "enrichedArrayForEach": ['callback', {
                        //     'context': ['import', "temp"],
                        //     'callback': "EnrichedArrayForEach",
                        // }],
                        // "enrichedDictionaryForEach": ['callback', {
                        //     'context': ['import', "temp"],
                        //     'callback': "EnrichedDictionaryForEach",
                        // }],
                    })
                }]
            },
        })
    },
}