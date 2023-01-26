import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, typeReference, optional, externalInterfaceReference, callback
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "glossary": "../../../glossary",
            "fp": "lib-fountain-pen",
        }),
        'parameters': d({}),
        'types': types({
            "_AlgorithmType": taggedUnion({
                "reference": null_(),
                "constructor": group({
                    "configuration data": member(optional(er("glossary", "TypeReference"))),
                    "dependencies": member(dictionary(ref("DefinitionReference"))),
                }),
            }),
            "DefinitionReference": group({
                "context": member(ref("Context"), true),
                "function": member(str()),
            }),
            "Context": taggedUnion({
                "local": null_(),
                "import": str(),
            }),
            "ModuleDefinition": group({
                "glossary": member(er("glossary", "Glossary")),
                "api": member(group({
                    "imports": member(dictionary(str())),
                    "algorithms": member(dictionary(group({
                        "definition": member(ref("DefinitionReference")),
                        "type": member(ref("_AlgorithmType"))
                    }))),
                })),
            }),
            // "TypeReference": group({
            //     "context": member(ref("Context")),
            //     "namespaces": member(array(str())),
            //     "type": member(str()),
            // }),
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": callback(typeReference("ModuleDefinition"), externalInterfaceReference("fp", "Line")),
        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "temp": "../../temp",
            "glossary": "../../glossary",
        }),
        'algorithms': d({
            "createSerializer": {
                'definition': {
                    'function': "Serialize"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "serializeGlossary": {
                            'context': ['import', "glossary"],
                            'function': "Serialize"
                        },
                        // "arrayForEach": ['callback', {
                        //     'context': ['import', "temp"],
                        //     'callback': "ArrayForEach",
                        // }],
                        "dictionaryForEach": {
                            'context': ['import', "temp"],
                            'function': "DictionaryForEach",
                        },
                        "enrichedArrayForEach": {
                            'context': ['import', "temp"],
                            'function': "EnrichedArrayForEach",
                        },
                        // "enrichedDictionaryForEach": ['callback', {
                        //     'context': ['import', "temp"],
                        //     'callback': "EnrichedDictionaryForEach",
                        // }],
                        // "serializeLeafType": ['callback', {
                        //     //'context': ['import', "glossary"],
                        //     'callback': "SerializeLeafType"
                        // }],
                    }),
                }],
            },
        })
    },
}