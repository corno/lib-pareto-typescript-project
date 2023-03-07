import * as pd from 'pareto-core-data'

import {
    reference,
    boolean,
    string,
    parametrizedReference,
    builderMethod,
    null_,
    data,
    array, dictionary, group, member, taggedUnion, types, typeReference, builderReference, func, type, glossaryParameter, optional,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
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
    'builders': d({
        "ParseArguments": builderMethod(typeReference("main", "Arguments")),
        "ProcessArgument": builderMethod(typeReference("common", "String")),
        "HandleParameters": builderMethod(typeReference("Parameters")),
        "Report": ['group', {
            'members': d({
                "nodes": ['reference', builderReference("fp", "Report")],
                //add error here
            }),
        }],
    }),
    'interfaces': d({
    }),
    'functions': d({
        "GenerateProject": func(typeReference("ProjectSettings"), null, builderReference("Report"), null),
        "GetSingleArgument": func(typeReference("main", "Arguments"), null, null, data(typeReference("common", "String"), true)),
        "HandleArgumentError": func(typeReference("ArgumentError"), null, null, null),
        "ParseArguments2": func(typeReference("main", "Arguments"), null, builderReference("HandleParameters"), null),
    }),
}