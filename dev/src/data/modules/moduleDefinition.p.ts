import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mapi from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mapi.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "glossary": "../../glossary",
            "fp": "lib-fountain-pen",
        }),
        'namespace': {
            'types': types({
                "DefinitionReference": taggedUnion({
                    "function": type(group({
                        "context": member(ref("Context"), true),
                        "function": member(str()),
                        "async": member(bln(), true),
                    })),
                    "interface": type(group({
                        "context": member(ref("Context"), true),
                        "interface": member(str()),
                    })),
                    "callback": type(group({
                        "context": member(ref("Context"), true),
                        "callback": member(str()),
                        //"async": member(bln(), true),
                    })),
                    "pipe": type(group({
                        "context": member(ref("Context"), true),
                        "pipe": member(str()),
                    })),
                    "procedure": type(er("glossary", "LeafTypeOrNull")),

                }),
                "Context": taggedUnion({
                    "local": nullType(),
                    "import": type(str()),
                }),
                "ModuleDefinition": group({
                    "glossary": member(er("glossary", "Glossary")),
                    "api": member(group({
                        "imports": member(dictionary(str())),
                        "algorithms": member(dictionary(group({
                            "definition": member(ref("DefinitionReference")),
                            "type": member(taggedUnion({
                                "reference": nullType(),
                                "constructor": type(group({
                                    "configuration data": member(er("glossary", "LeafTypeOrNull")),
                                    "dependencies": member(dictionary(ref("DefinitionReference"))),
                                })),
                            }))
                        }))),
                    })),
                })
            }),
            'interfaces': d({}),

        },
        'functions': d({}),
        'callbacks': d({
            "Serialize": {
                'data': ['type', reference("ModuleDefinition")],
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
            "glossary": "../../glossary",
        }),
        'algorithms': d({
            "createSerializer": {
                'definition': ['callback', {
                    'callback': "Serialize"
                }],
                'type': ['constructor', {
                    'configuration data': ['null', null],
                    'dependencies': d({
                        "compare": ['function', {
                            'context': ['import', "collation"],
                            'function': "IsABeforeB",
                        }],
                        "serializeGlossary": ['callback', {
                            'context': ['import', "glossary"],
                            'callback': "Serialize"
                        }],
                        "enrichedArrayForEach": ['callback', {
                            'context': ['import', "temp"],
                            'callback': "EnrichedArrayForEach",
                        }],
                        // "serializeLeafType": ['callback', {
                        //     //'context': ['import', "glossary"],
                        //     'callback': "SerializeLeafType"
                        // }],
                    }),
                    'callback': {
                        'callback': "SerializeModuleDefinition"
                    }
                }],
            },
        })
    },
}