import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, externalTypeReference, typeReference
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mproject from "lib-pareto-typescript-project/dist/modules/project"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
const d = pr.wrapRawDictionary

function def($: mmoduleDefinition.TModuleDefinition): mmoduleDefinition.TModuleDefinition {
    return $
}

export const $: mmoduleDefinition.TModuleDefinition = def({
    'glossary': {
        'imports': d({
            "pareto2typescript": "../../pareto2typescript",

            "common": "glo-pareto-common",
            "fp": "lib-fountain-pen",
            "main": "lib-pareto-main",
            "project": "../../project",
        }),
        'namespace': {
            'types': types({
                "ArgumentError": taggedUnion({
                    "missing": null_(),
                    "too many": null_(),
                }),
                "Arguments": array(str()),
                "ProjectSettings": group({
                    "project": member(er("project", "Project")),
                    "mainData": member(er("main", "MainData")),
                }),
                "Parameters": group({
                    "testDirectory": member(str()),
                }),
            }),
            'interfaces': d({
                "CreateWriter": ['method', {
                    'data': externalTypeReference("common", "String"),
                    'interface': ['set', {
                        'context': ['import', "fp"],
                        'interface': "Writer"
                    }],
                }],
                "ParseArguments": ['method', {
                    'data': typeReference("Arguments"),
                    'interface': ['null', null],
                }],
                "ProcessArgument": ['method', {
                    'data': externalTypeReference("common", "String"),
                    'interface': ['null', null],
                }],
            }),
        },
        'functions': d({
            "GetSingleArgument": _function(typeReference("Arguments"), externalTypeReference("common", "String"), true),

        }),
        // 'interfaces': d({
        //     // "SingleArgument": {
        //     //     "members": d({
        //     //         "Z": ['callback',  ['type', string()]],
        //     //         "Y": ['callback',  ['type', string()]],
        //     //     }),
        //     // }
        // }),
        'callbacks': d({
        }),
        'pipes': d({
            "ParseArguments": {
                'in': {
                    'interface': "ParseArguments"
                },
                'out': {
                    'interface': "ProcessArgument"
                },
            },
        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
            "collation": "res-pareto-collation",
            "main": "lib-pareto-main",
            "pareto2typescript": "../../pareto2typescript",
            "temp": "../../temp",
        }),
        'algorithms': d({
            "createParametersParser": {
                'definition': ['procedure', typeReference("Arguments")],
                //'definition': ['procedure', ['type', externalReference("main", "Arguments")]],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "callback": ['procedure', typeReference("Parameters")],
                        "onError": ['procedure', typeReference("ArgumentError")],

                    }),
                }],
            },
            "generateProject": {
                'definition': ['procedure', typeReference("ProjectSettings")],
                'type': ['reference', null],
            },
            "createProjectGenerator": {
                'definition': ['procedure', typeReference("ProjectSettings")],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "getSingleArgument": ['function', {
                            'async': true,
                            'function': "GetSingleArgument",
                        }],
                        "logError":  ['procedure', externalTypeReference("common", "String")],
                        "serializeProject": ['callback', {
                            'context': ['import', "pareto2typescript"],
                            'callback': "SerializeProject",
                        }],
                        "serializeTemplate": ['callback', {
                            'context': ['import', "pareto2typescript"],
                            'callback': "SerializeTemplate",
                        }],
                    }),
                }],
            }
        })
    },
})
