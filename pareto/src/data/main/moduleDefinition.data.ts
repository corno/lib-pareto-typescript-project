import * as pd from 'pareto-core-data'
import {
    string,
    null_,
    reference,
    array, dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, method, func, data, type, glossaryParameter, parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: gproject.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'parameters': d({
            "Annotation": {}
        }),
        'imports': d({
            "pareto2typescript": "../../../submodules/pareto2typescript",
            "common": "glo-pareto-common",
            "fp": "lib-fountain-pen",
            "main": "res-pareto-main",
            "project": "../../../submodules/project",
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
            "ArgumentError": type(taggedUnion({
                "missing": null_(),
                "too many": null_(),
            })),
            "ProjectSettings": type(group({
                "project": member(parametrizedReference("project", { "Annotation": typeReference("Annotation") }, "Project")),
                "mainData": member(reference("main", "MainData")),
            })),
            "Parameters": type(group({
                "testDirectory": member(string()),
            })),
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
            "foreach": "res-pareto-foreach",
            "this": "./glossary"
        }),
        'algorithms': d({
            "createParametersParser": algorithm(functionReference("this", {}, "ParseArguments2"), constructor(null, {
                "onError": functionReference("this", {}, "HandleArgumentError"),
            })),
            "generateProject": algorithm(functionReference("this", {}, "GenerateProject")),
            "createProjectGenerator": algorithm(functionReference("this", {}, "GenerateProject"), constructor(null, {
                "decorateDictionaryEntriesWithKey": functionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
                "logError": functionReference("common", {}, "Log"),
                "serializeProject": functionReference("pareto2typescript", {}, "SerializeProject"),
                "serializeTemplate": functionReference("pareto2typescript", {}, "SerializeTemplate"),
            })),
        })
    },
}