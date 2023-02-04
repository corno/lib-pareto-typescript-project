import * as pr from 'pareto-core-raw'
import {
    string,
    null_,
    reference,
    array, dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, method, func, data
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'parameters': d({}),
        'imports': d({
            "pareto2typescript": "../../../submodules/pareto2typescript",
            "common": "glo-pareto-common",
            "fp": "lib-fountain-pen",
            "main": "res-pareto-main",
            "project": "../../../submodules/project",
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
            "GenerateProject": func(typeReference("ProjectSettings"), null, null, null),
            "GetSingleArgument": func(typeReference("main", "Arguments"), null, null, data(typeReference("common", "String"), true)),
            "HandleArgumentError": func(typeReference("ArgumentError"), null, null, null),
            "ParseArguments2": func(typeReference("main", "Arguments"), null, interfaceReference("HandleParameters"), null),
        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
            "collation": "res-pareto-collation",
            "main": "res-pareto-main",
            "pareto2typescript": "../../submodules/pareto2typescript",
            "temp": "../../submodules/temp",
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