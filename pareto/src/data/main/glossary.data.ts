import * as pd from 'pareto-core-data'

import {
    aInterfaceMethod,
    aInterfaceReference,
    constructor,
    data, externalTypeReference, glossaryParameter, group, imp, member,
    null_, procedure, ref, sInterfaceMethod, sInterfaceReference, streamconsumer, string, taggedUnion, type, typeReference
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
        "ProjectSettings": type(group({
            "project": member(ref(externalTypeReference("project", "Project"))),
            "mainData": member(ref(externalTypeReference("main", "MainData"))),
        })),
    }),
    'asynchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),
    },
    'synchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
            "GenerateProjectAndReport": procedure(data(typeReference("ProjectSettings")), sInterfaceReference("fp", "Report")),
        }),
    },
}