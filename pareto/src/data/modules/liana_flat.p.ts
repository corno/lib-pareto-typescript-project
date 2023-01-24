import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, optional, typeReference, externalTypeReference, externalInterfaceReference
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/modules/glossary"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

export function callback(data: mglossary.TTypeReference, inf: mglossary.TInterfaceReference): mglossary.TFunction {
    return {
        'return type': ['nothing', null],
        'data': data,
        'managed input interface': null,
        'output interface': inf,
    }
}

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