import * as pd from 'pareto-core-data'
import {
    string,
    null_,
    reference,
    array, dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, method, func, data, type, glossaryParameter, parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: mmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
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
        }),
        'algorithms': d({
            "createParametersParser": algorithm(definitionReference("ParseArguments2"), constructor(null, {
                "onError": definitionReference("HandleArgumentError"),
            })),
            "generateProject": algorithm(definitionReference("GenerateProject")),
            "createProjectGenerator": algorithm(definitionReference("GenerateProject"), constructor(null, {
                "decorateDictionaryEntriesWithKey": definitionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
                "logError": definitionReference("common", {}, "Log"),
                "serializeProject": definitionReference("pareto2typescript", {}, "SerializeProject"),
                "serializeTemplate": definitionReference("pareto2typescript", {}, "SerializeTemplate"),
            })),
        })
    },
}