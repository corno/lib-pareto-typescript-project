import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, typeReference, externalInterfaceReference, callback
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "moduleDefinition": "../../../moduleDefinition",
            "algorithm": "../../../algorithm",
            "fp": "lib-fountain-pen",
        }),
        'parameters': d({}),
        'types': types({
            "AlgorithmImplementation": group({}),
            "Implementation": dictionary(ref("AlgorithmImplementation")),
            "Module": group({
                "definition": member(er("moduleDefinition", "ModuleDefinition")),
                // "type": member(taggedUnion({
                //     "binding": nll(),
                //     "resource": nll(),
                //     "logic": nll(),

                // }))
                "implementation": member(er("algorithm", "Implementation"), true),
                "states": member(er("algorithm", "States"), true)
            }),
            "Project": group({
                "type": member(taggedUnion({
                    "resource": null_(),
                    "glossary": null_(),
                    "library": null_(),
                })),
                "modules": member(dictionary(ref("Module"))),
                "main": member(str()),
            }),
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": callback(typeReference("Module"), externalInterfaceReference("fp", "Line")),
            "SerializeWithContext": callback(typeReference("Module"), externalInterfaceReference("fp", "Writer")),

        }),
    },
    'api': {
        'imports': d({
            "collation": "res-pareto-collation",
            "temp": "../../temp",
            "moduleDefinition": "../../moduleDefinition",
            "algorithm": "../../algorithm",
        }),
        'algorithms': d({
            "createSerializer": {
                'definition': {
                    'function': "Serialize"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "serializeModuleDefinition": {
                            'context': ['import', "moduleDefinition"],
                            'function': "Serialize"
                        },
                        "serializeImplementation": {
                            'context': ['import', "algorithm"],
                            'function': "SerializeImplementation"
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
                    }),
                }],
            },
            "createSerializerWithContext": {
                'definition': {
                    'function': "SerializeWithContext"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "serialize": {
                            'function': "Serialize"
                        },
                    }),
                }],
            },
        })
    },
}