import * as pd from 'pareto-core-data'

import {
    boolean,
    string,
    builderMethod,
    null_,
    sdata,
    array, dictionary, group, member, taggedUnion, types, typeReference, builderReference, sfunc, type, glossaryParameter, optional, imp, externalTypeReference, ref,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "common": imp({}),
        "fp": imp({}),
        "main": imp({}),
        "project": imp({
            "Annotation": typeReference("Annotation")
        }),
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "ArgumentError": type(taggedUnion({
            "missing": null_(),
            "too many": null_(),
        })),
        "ProjectSettings": type(group({
            "project": member(ref(externalTypeReference("project", "Project"))),
            "mainData": member(ref(externalTypeReference("main", "MainData"))),
        })),
        "Parameters": type(group({
            "testDirectory": member(string()),
        })),
    }),
    'type': ['synchronous', {
        'builders': d({
            "ParseArguments": builderMethod(externalTypeReference("main", "Arguments")),
            "ProcessArgument": builderMethod(externalTypeReference("common", "String")),
            "HandleParameters": builderMethod(typeReference("Parameters")),
        }),
        'functions': d({
            "GenerateProject": sfunc(typeReference("ProjectSettings"), null, null, null),
            "GenerateProjectAndReport": sfunc(typeReference("ProjectSettings"), null, builderReference("fp", "Report"), null),
            //"GetSingleArgument": sfunc(typeReference("main", "Arguments"), null, null, sdata(typeReference("common", "String"), true)),
            "HandleArgumentError": sfunc(typeReference("ArgumentError"), null, null, null),
            "ParseArguments2": sfunc(externalTypeReference("main", "Arguments"), null, builderReference("HandleParameters"), null),
        }),

    }],
}