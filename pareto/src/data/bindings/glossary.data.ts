import * as pd from 'pareto-core-data'

import {
    data,
    externalTypeReference,
    glossaryParameter,
    imp,
    procedure,
    sInterfaceMethod,
    sInterfaceReference,
    type,
    typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "main": imp({ "Annotation": typeReference("Annotation") }),
        "common": imp({}),
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
            "Nothing": sInterfaceMethod(externalTypeReference("common", "Null"))
        }),
        'algorithms': d({
            "GenerateProject": procedure(data(externalTypeReference("main", "ProjectSettings")), sInterfaceReference("Nothing")),
        }),

    },

}