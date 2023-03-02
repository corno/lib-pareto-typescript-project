import * as pd from 'pareto-core-data'

import {
    reference,
    boolean,
    string,
    parametrizedReference,
    method,
    null_,
    data,
    array, dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, func, type, glossaryParameter, optional,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
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
}