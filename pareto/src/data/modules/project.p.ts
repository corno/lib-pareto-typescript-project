import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, typeReference
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "moduleDefinition": "../../moduleDefinition",
            "algorithm": "../../algorithm",
            "fp": "lib-fountain-pen",
        }),
        'namespace': {
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
                }),
                "Project": group({
                    "type": member(taggedUnion({
                        "resource": null_(),
                        "glossary": null_(),
                        "library": null_(),
                    }), true),
                    "modules": member(dictionary(ref("Module"))),
                    "main": member(str()),
                }),
            }),
            'interfaces': d({}),

        },
        'functions': d({}),
        'callbacks': d({
            "Serialize": {
                'data':  typeReference("Module"),
                'context': ['import', "fp"],
                'interface': "Line",
            },
            "SerializeWithContext": {
                'data':  typeReference("Module"),
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
            "moduleDefinition": "../../moduleDefinition",
            "algorithm": "../../algorithm",
        }),
        'algorithms': d({
            "createSerializer": {
                'definition': ['callback', {
                    'callback': "Serialize"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "serializeModuleDefinition": ['callback', {
                            'context': ['import', "moduleDefinition"],
                            'callback': "Serialize"
                        }],
                        "serializeImplementation": ['callback', {
                            'context': ['import', "algorithm"],
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
                    }),
                }],
            },
            "createSerializerWithContext": {
                'definition': ['callback', {
                    'callback': "SerializeWithContext"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "serialize": ['callback', {
                            'callback': "Serialize"
                        }],
                    }),
                }],
            },
        })
    },
}