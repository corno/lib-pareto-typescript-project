import * as pr from 'pareto-core-raw'
import {
    externalReference,
    string,
    null_,
    array, dictionary, group, member, taggedUnion, types, _function, externalTypeReference, typeReference, managedPipe, interfaceReference, procedure, callback, method
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { definitionReference, externalDefinitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mproject from "lib-pareto-typescript-project/dist/modules/project"
import * as mglossary from "lib-pareto-typescript-project/dist/modules/glossary"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
const d = pr.wrapRawDictionary

function def($: mmoduleDefinition.TModuleDefinition): mmoduleDefinition.TModuleDefinition {
    return $
}

export const $: mmoduleDefinition.TModuleDefinition = def({
    'glossary': {
        'parameters': d({}),
        'imports': d({
            "pareto2typescript": "../../../pareto2typescript",

            "common": "glo-pareto-common",
            "fp": "lib-fountain-pen",
            "main": "lib-pareto-main",
            "project": "../../../project",
        }),
        'templates': d({}),
        'types': types({
            "ArgumentError": taggedUnion({
                "missing": null_(),
                "too many": null_(),
            }),
            "ProjectSettings": group({
                "project": member(externalReference("project", "Project")),
                "mainData": member(externalReference("main", "MainData")),
            }),
            "Parameters": group({
                "testDirectory": member(string()),
            }),
        }),
        'interfaces': d({
            "ParseArguments": method(externalTypeReference("main", "Arguments")),
            "ProcessArgument": method(externalTypeReference("common", "String")),
            "HandleParameters": method(typeReference("Parameters")),
        }),
        'functions': d({
            "GenerateProject": procedure(typeReference("ProjectSettings")),
            "GetSingleArgument": _function(externalTypeReference("main", "Arguments"), externalTypeReference("common", "String"), true),
            "HandleArgumentError": procedure(typeReference("ArgumentError")),
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
            "createParametersParser": algorithm(definitionReference("ParseArguments2"), constructor(null, {
                "onError": definitionReference("HandleArgumentError"),
            })),
            "generateProject": algorithm(definitionReference("GenerateProject"), undefined),
            "createProjectGenerator": {
                'definition': {
                    'function': "GenerateProject"
                },
                'type': constructor(null, {
                    "decorateDictionaryEntriesWithKey": externalDefinitionReference("temp", "DecorateDictionaryEntriesWithKey"),
                    "logError": externalDefinitionReference("common", "Log"),
                    "serializeProject": externalDefinitionReference("pareto2typescript", "SerializeProject"),
                    "serializeTemplate": externalDefinitionReference("pareto2typescript", "SerializeTemplate"),
                }),
            }
        })
    },
})
