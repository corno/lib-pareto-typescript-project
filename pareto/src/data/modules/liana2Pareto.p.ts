import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, externalTypeReference, typeReference
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            // "glossary": "../../glossary",
            "liana": "../../liana",
            "project": "../../project",
            // "fp": "lib-fountain-pen",
            "main": "lib-pareto-main",
        }),
        'namespace': {
            'types': types({
                "Configuration": group({
                    "model": member(er("liana", "Model")),
                    "mainData": member(er("main", "MainData")),
                }),
            }),
            'interfaces': d({}),

        },
        'functions': d({
            "MapLiana2Pareto": {
                'data': externalTypeReference("liana", "Model"),
                'return value': externalTypeReference("project", "Module"),
            }
        }),
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
            "common": "glo-pareto-common",
            "project": "../../project",
            "temp": "../../temp",
        }),
        'algorithms': d({
            "generateProject": {
                'definition': ['procedure',  typeReference("Configuration")],
                'type': ['reference', null],
            },
            "createProjectGenerator": {
                'definition': ['procedure', typeReference("Configuration")],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "addKeysToDictionary": ['function', {
                            'context': ['import', "temp"],
                            'function': "AddKeysToDictionary"
                        }],
                        "logError":  ['procedure', externalTypeReference("common", "String")],
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
                        "serializeProject": ['callback', {
                            'context': ['import', "project"],
                            'callback': "SerializeWithContext"
                        }],
                    }),
                }],
            },
            "createLiana2ParetoMapper": {
                'definition': ['function', {
                    'function': "MapLiana2Pareto"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "addKeysToDictionary": ['function', {
                            'context': ['import', "temp"],
                            'function': "AddKeysToDictionary"
                        }],
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
            //         'configuration data': null,
            //         'dependencies': d({
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