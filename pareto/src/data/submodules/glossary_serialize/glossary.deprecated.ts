import * as pd from 'pareto-core-data'

import { glossaryParameter, imp, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "fp": imp({}),
        "model": imp({
            "Annotation": typeReference("Annotation"),
        }),
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "Serialize": ['procedure', {
                'in': ['data', {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                        'glossary': {
                            'key': "model",
                            'annotation': pd.getLocationInfo(0),
                        },
                    }],
                    'type': "Glossary",
                    'arguments': d({}),
                }],
                'out': {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                        'glossary': {
                            'key': "fp",
                            'annotation': pd.getLocationInfo(0),
                        },
                    }],
                    'interface': "Block",
                },
            }],

        }),
    },
}