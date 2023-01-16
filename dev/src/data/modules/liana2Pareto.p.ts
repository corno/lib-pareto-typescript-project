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

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"

import * as mapi from "lib-pareto-typescript-project/dist/modules/api"


const d = pr.wrapRawDictionary

export const $: mapi.TModuleDefinition = {
    'glossary': {
        'imports': d({
            // "glossary": "../../glossary",
            "liana": "../../liana",
            "moduleDefinition": "../../moduleDefinition",
            // "fp": "lib-fountain-pen",
            "main": "lib-pareto-main",
        }),
        'types': types({
            "Configuration": group({
                "model": member(er("liana", "Model")),
                "mainData": member(er("main", "MainData")),
            }),
        }),
        'functions': d({
            "MapLiana2Pareto": {
                'data': externalReference("liana", "Model"),
                'return value': externalReference("moduleDefinition", "ModuleDefinition"),
            }
        }),
        'interfaces': d({}),
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
            "moduleDefinition": "../../moduleDefinition",
        }),
        'algorithms': d({
            "generateProject": {
                'definition': ['procedure', ['type', reference("Configuration")]],
                'type': ['reference', null],
            },
            "createProjectGenerator": {
                'definition': ['procedure', ['type', reference("Configuration")]],
                'type': ['constructor', {
                    'configuration data': ['null', null],
                    'dependencies': d({
                        "mapLiana2Pareto": ['function', {
                            //'async': true,
                            'function': "MapLiana2Pareto",
                        }],
                        // "serializeProject": ['callback', {
                        //     //'context': ['import', "project"],
                        //     'callback': "SerializeProject",
                        // }],
                        // "serializeTemplate": ['callback', {
                        //     //'context': ['import', "project"],
                        //     'callback': "SerializeTemplate",
                        // }],
                        "serializeModuleDefinition": ['callback', {
                            'context': ['import', "moduleDefinition"],
                            'callback': "Serialize"
                        }],
                    }),
                }],
            },
            "createLiana2ParetoMapper": {
                'definition': ['function', {
                    'function': "MapLiana2Pareto"
                }],
                'type': ['constructor', {
                    'configuration data': ['null', null],
                    'dependencies': d({
                        // "enrichedDictionaryForEach": ['callback', {
                        //     'context': ['import', "temp"],
                        //     'callback': "EnrichedDictionaryForEach",
                        // }],
                        // "compare": ['function', {
                        //     'context': ['import', "collation"],
                        //     'function': "IsABeforeB",
                        // }],
                    })
                }]
            },
            // "createModuleDefinitionSerializer": {
            //     'definition': ['callback', {
            //         'callback': "SerializeModuleDefinition"
            //     }],
            //     'type': ['constructor', {
            //         'configuration data': ['null', null],
            //         'dependencies': wd({
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