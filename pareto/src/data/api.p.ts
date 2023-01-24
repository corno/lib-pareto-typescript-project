import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    array, dictionary, group, member, taggedUnion, types, _function, externalTypeReference, typeReference, managedPipe, interfaceReference, procedure
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mproject from "lib-pareto-typescript-project/dist/modules/project"
import * as mglossary from "lib-pareto-typescript-project/dist/modules/glossary"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
const d = pr.wrapRawDictionary


export function callback(data: mglossary.TTypeReference, inf: mglossary.TInterfaceReference): mglossary.TFunction {
    return {
        'return type': ['nothing', null],
        'data': data,
        'managed input interface': null,
        'output interface': inf,
    }
}

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
                    'interface': ['reference', {
                        'context': ['import', "fp"],
                        'interface': "Writer"
                    }],
                }],
                "ParseArguments": ['method', {
                    'data': externalTypeReference("main", "Arguments"),
                    'interface': null,
                }],
                "ProcessArgument": ['method', {
                    'data': externalTypeReference("common", "String"),
                    'interface': null,
                }],
                "HandleParameters": ['method', {
                    'data': typeReference("Parameters"),
                    'interface': null,
                }],
            }),
        },
        'functions': d({
            "GenerateProject": procedure(typeReference("ProjectSettings")),
            "GetSingleArgument": _function(externalTypeReference("main", "Arguments"), externalTypeReference("common", "String"), true),
            "HandleArgumentError": procedure(typeReference("ArgumentError")),
            "ParseArguments": managedPipe(externalTypeReference("common", "Null"), interfaceReference("ParseArguments"), interfaceReference("ProcessArgument")),
            "ParseArguments2": callback(externalTypeReference("main", "Arguments"), interfaceReference("HandleParameters")),
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
                'definition': {
                    'function': "ParseArguments2"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "onError": {
                            'function': "HandleArgumentError"
                        },

                    }),
                }],
            },
            "generateProject": {
                'definition': {
                    'function': "GenerateProject"
                },
                'type': ['reference', null],
            },
            "createProjectGenerator": {
                'definition': {
                    'function': "GenerateProject"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "addKeysToDictionary": {
                            'context': ['import', "temp"],
                            'function': "AddKeysToDictionary"
                        },
                        "getSingleArgument": {
                            'function': "GetSingleArgument",
                        },
                        "logError": {
                            'context': ['import', "common"],
                            'function': "Log"
                        },
                        "serializeProject": {
                            'context': ['import', "pareto2typescript"],
                            'function': "SerializeProject",
                        },
                        "serializeTemplate": {
                            'context': ['import', "pareto2typescript"],
                            'function': "SerializeTemplate",
                        },
                    }),
                }],
            }
        })
    },
})
