import * as pr from 'pareto-core-raw'
import {
    string,
    null_,
    reference,
    array, dictionary, group, member, taggedUnion, types, _function, typeReference, managedPipe, interfaceReference, procedure, callback, method
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
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
                "project": member(reference("project", "Project")),
                "mainData": member(reference("main", "MainData")),
            }),
            "Parameters": group({
                "testDirectory": member(string()),
            }),
        }),
        'interfaces': d({
            "ParseArguments": method(typeReference("main", "Arguments")),
            "ProcessArgument": method(typeReference("common", "String")),
            "HandleParameters": method(typeReference("Parameters")),
        }),
        'functions': d({
            "GenerateProject": procedure(typeReference("ProjectSettings")),
            "GetSingleArgument": _function(typeReference("main", "Arguments"), typeReference("common", "String"), true),
            "HandleArgumentError": procedure(typeReference("ArgumentError")),
            "ParseArguments2": callback(typeReference("main", "Arguments"), interfaceReference("HandleParameters")),
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
            "generateProject": algorithm(definitionReference("GenerateProject")),
            "createProjectGenerator": algorithm(definitionReference("GenerateProject"), constructor(null, {
                "decorateDictionaryEntriesWithKey": definitionReference("temp", "DecorateDictionaryEntriesWithKey"),
                "logError": definitionReference("common", "Log"),
                "serializeProject": definitionReference("pareto2typescript", "SerializeProject"),
                "serializeTemplate": definitionReference("pareto2typescript", "SerializeTemplate"),
            })),
        })
    },
}