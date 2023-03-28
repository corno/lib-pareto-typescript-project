import * as pd from 'pareto-core-data'

import { data, externalTypeReference, glossaryParameter, group, imp, member, number, procedure, sExternalInterfaceReference, sfunction, string, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "fp": imp({}),
        "model": imp({
            "Annotation": glossaryParameter("Annotation"),
        }),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "SourceLocation": type(group({
                "file": member(string()),
                "line": member(number()),
                "column": member(number()),
            }))
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "GetSourceLocation": sfunction(typeReference("SourceLocation"), data(glossaryParameter("Annotation"))),
            "Serialize": procedure(data(externalTypeReference("model", "Glossary")), sExternalInterfaceReference("fp", "Block")),
            // "Serialize": {
            //     'parameters': d({}),
            //     'type': ['procedure', {
            //         'in': ['data', {
            //             'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
            //                 'glossary': {
            //                     'key': "model",
            //                     'annotation': pd.getLocationInfo(0),
            //                 },
            //             }],
            //             'type': "Glossary",
            //             'arguments': d({}),
            //         }],
            //         'out': {
            //             'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
            //                 'glossary': {
            //                     'key': "fp",
            //                     'annotation': pd.getLocationInfo(0),
            //                 },
            //             }],
            //             'interface': "Block",
            //             'arguments': d({}),
            //         },
            //     }],
            // }

        }),
    },
}