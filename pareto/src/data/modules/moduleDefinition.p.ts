import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, typeReference
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "glossary": "../../glossary",
            "fp": "lib-fountain-pen",
        }),
        'namespace': {
            'types': types({
                "DefinitionReference": taggedUnion({
                    "function": group({
                        "context": member(ref("Context"), true),
                        "function": member(str()),
                        "async": member(bln(), true),
                    }),
                    "interface": group({
                        "context": member(ref("Context"), true),
                        "interface": member(str()),
                    }),
                    "callback":group({
                        "context": member(ref("Context"), true),
                        "callback": member(str()),
                        //"async": member(bln(), true),
                    }),
                    "pipe": group({
                        "context": member(ref("Context"), true),
                        "pipe": member(str()),
                    }),
                    "procedure": ref("TypeReference"),

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
                            "type": member(taggedUnion({
                                "reference": null_(),
                                "constructor": group({
                                    "configuration data": member(er("glossary", "OptionalTypeReference")),
                                    "dependencies": member(dictionary(ref("DefinitionReference"))),
                                }),
                            }))
                        }))),
                    })),
                }),
                "TypeReference": group({
                    "context": member(ref("Context")),
                    "namespaces": member(array(str())),
                    "type": member(str()),
                }),
            }),
            'interfaces': d({}),

        },
        'functions': d({}),
        'callbacks': d({
            "Serialize": {
                'data':  typeReference("ModuleDefinition"),
                'context': ['import', "fp"],
                'interface': "Line",
            },
        }),
        'pipes': d({}),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "temp": "../../temp",
            "glossary": "../../glossary",
        }),
        'algorithms': d({
            "createSerializer": {
                'definition': ['callback', {
                    'callback': "Serialize"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "serializeGlossary": ['callback', {
                            'context': ['import', "glossary"],
                            'callback': "Serialize"
                        }],
                        // "arrayForEach": ['callback', {
                        //     'context': ['import', "temp"],
                        //     'callback': "ArrayForEach",
                        // }],
                        "dictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "DictionaryForEach",
                        }],
                        "enrichedArrayForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedArrayForEach",
                        }],
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