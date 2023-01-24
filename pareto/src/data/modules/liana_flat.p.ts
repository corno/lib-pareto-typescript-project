import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, optional, typeReference, externalTypeReference, externalInterfaceReference, callback
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import {definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/modules/glossary"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
            "liana": "../../liana"
        }),
        'parameters': d({}),
        'namespace': {
            'types': types({
            }),
            'interfaces': d({}),

        },
        'functions': d({

            "Serialize": callback(externalTypeReference("liana", "Model"), externalInterfaceReference("fp", "Writer")),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "temp": "../../temp",
        }),
        'algorithms': d({
            "createSerializer": {
                'definition':{
                    'function': "Serialize"
                },
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