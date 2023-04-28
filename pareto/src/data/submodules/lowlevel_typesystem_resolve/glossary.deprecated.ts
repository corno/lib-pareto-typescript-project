import * as pd from 'pareto-core-data'

import { data, externalTypeReference, glossaryParameter, group, imp, member, number, procedure, sExternalInterfaceReference, sfunction, string, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "unresolved": imp({ "Annotation": glossaryParameter("Annotation"), }),
        "resolved": imp({ "Annotation": glossaryParameter("Annotation"), }),
        "model": imp({}),
    }),
    'core': {

        'parameters': d({
            "Annotation": null,
        }),

        'root': {
            'namespaces': d({}),
            'types': d({
            }),
        },
        'asynchronous': {
            'interfaces': d({}),
            'algorithms': d({}),
        },
        'synchronous': {
            'interfaces': d({}),
            'algorithms': d({
                "Resolve": sfunction(externalTypeReference("resolved", "SourceFile"), data(externalTypeReference("unresolved", "SourceFile"))),
            }),
        },
    },
}