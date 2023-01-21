import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, externalTypeReference, typeReference, null_
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "liana": "../../liana",
            "project": "../../project",
            // "fp": "lib-fountain-pen",
            "main": "lib-pareto-main",
        }),
        'namespace': {
            'types': types({
                "Configuration": group({
                    "model": member(ref("MappedModel")),
                    "mainData": member(er("main", "MainData")),
                }),
                "MappedModel": group({
                    "model": member(er("liana", "Model")),
                    "stringmapping": member(dictionary(taggedUnion({
                        "number": null_(),
                        "string": null_(),
                    }))),
                })
            }),
            'interfaces': d({}),

        },
        'functions': d({
            "MapLiana2Pareto": {
                'data': typeReference("MappedModel"),
                'return value': externalTypeReference("project", "Module"),
            }
        }),
        'callbacks': d({
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
                'definition': ['procedure', typeReference("Configuration")],
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
                        "logError": ['procedure', externalTypeReference("common", "String")],
                        "mapLiana2Pareto": ['function', {
                            //'async': true,
                            'function': "MapLiana2Pareto",
                        }],
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
                    })
                }]
            },
        })
    },
}