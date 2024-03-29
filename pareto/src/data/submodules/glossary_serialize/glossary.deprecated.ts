import * as pd from 'pareto-core-data'

import { data, externalTypeReference, glossaryParameter, group, imp, member, number, procedure, sExternalInterfaceReference, sfunction, string, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "fp": imp(),
        "model": imp(),
    }),


    'glossary parameters': d({
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
            "SerializeAnnotation": procedure(data(glossaryParameter("Annotation")), sExternalInterfaceReference("fp", "Line")),
            "SerializeAnnotationType": procedure(data(externalTypeReference("common", "Null")), sExternalInterfaceReference("fp", "Line")),
            "Serialize": procedure(data(externalTypeReference("model", "Glossary", {
                "Annotation": glossaryParameter("Annotation"),
            })), sExternalInterfaceReference("fp", "Block")),
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