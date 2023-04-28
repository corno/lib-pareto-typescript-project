import * as pd from 'pareto-core-data'

import { data, externalTypeReference, glossaryParameter, group, imp, member, number, procedure, sExternalInterfaceReference, sInterface, sInterfaceMethod, sfunction, string, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

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
                "Error": type(string())
            }),
        },
        'asynchronous': {
            'interfaces': d({}),
            'algorithms': d({}),
        },
        'synchronous': {
            'interfaces': d({
                "Error": sInterface(sInterfaceMethod(typeReference("Error")))
            }),
            'algorithms': d({
                "Resolve": sfunction(externalTypeReference("resolved", "Glossary Wrapper"), data(externalTypeReference("unresolved", "Glossary Wrapper"))),
            }),
        },
    },
}