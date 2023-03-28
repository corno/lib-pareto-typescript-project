import * as pd from 'pareto-core-data'

import {
    aExternalInterfaceReference,
    aInterface,
    aInterfaceMethod,
    aInterfaceReference,
    constructor,
    data, externalTypeReference, glossaryParameter, group, imp, member, procedure, ref, sExternalInterfaceReference, type, typeReference
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
            "Annotation": glossaryParameter("Annotation")
        }),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "ProjectSettings": type(group({
                "project": member(ref(externalTypeReference("project", "Project"))),
                "mainData": member(ref(externalTypeReference("main", "MainData"))),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({
            "GenerateProject": aInterface(aInterfaceMethod(typeReference("ProjectSettings"))),
            "Log": aInterface(['reference', aExternalInterfaceReference("common", "String")]),
            "LogError": aInterface(['reference', aExternalInterfaceReference("common", "String")]),
        }),
        'algorithms': d({
            "CreateProjectGeneratorAndReporter": constructor(aInterfaceReference("GenerateProject"), {}),
            "CreateProjectGenerator": constructor(aInterfaceReference("GenerateProject"), {
                "log": aInterfaceReference("Log"),
                "logError": aInterfaceReference("LogError"),
            }),
        }),
    },
    'synchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),
    },
}