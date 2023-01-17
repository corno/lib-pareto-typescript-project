import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
   null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, optional, typeReference
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"


import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "fp": "lib-fountain-pen",
        }),
        'namespace': {
            'types': types({
                "FunctionBlock": group({
                    "innerFunctions": member(dictionary(group({
                        "block": member(ref("FunctionBlock"))
                    })), true),
                    "returnExpression": member(ref("Expression"))
                }),
                "Expression": taggedUnion({
                    "call": group({
                        "function": member(str()),
                    }),
                    "implementMe": str(),
                    "groupInitializer": group({
                        "properties": member(dictionary(ref("Expression"))),
                    }),
                    "switch": group({
                        "cases": member(dictionary(ref("FunctionBlock")))
                    }),
                    "propertySelection": group({
                        "name": member(str()),
                    }),
                    "contextChange": group({
                        "property": member(str()),
                        "block": member(ref("FunctionBlock"))
                    }),
                    "mapDictionary": group({
                        "block": member(ref("FunctionBlock")),
                    }),
                    "mapArray": group({
                        "block": member(ref("FunctionBlock")),
                    }),
                }),
                "Implementation": group({
                    "implementations": member(dictionary(group({
                        "constructor": member(boolean()),
                        "type": member(taggedUnion({
                            "function": group({
                                "block": member(ref("FunctionBlock"))
                            })
                        }))
                    }))),
                }),
            }),
            'interfaces': d({}),

        },
        'functions': d({}),
        'callbacks': d({
            "Serialize": {
                'data': typeReference("Implementation"),
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
        }),
        'algorithms': d({
            "createSerializer": {
                'definition': ['callback', {
                    'callback': "Serialize"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "enrichedDictionaryForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedDictionaryForEach",
                        }],
                        "enrichedArrayForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedArrayForEach",
                        }],
                        "compare": ['function', {
                            'context': ['import', "collation"],
                            'function': "IsABeforeB",
                        }],
                    })
                }]
            },
        })
    },
}