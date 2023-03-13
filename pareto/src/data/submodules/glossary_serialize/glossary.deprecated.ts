import * as pd from 'pareto-core-data'

import {
    typeReference, interfaceReference, type, glossaryParameter, member, group, dictionary, string, imp,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

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
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d<g_glossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({
            "Serialize": {
                'data': {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                        'glossary': {
                            'key': "model",
                            'annotation': pd.getLocationInfo(0),
                        },
                    }],
                    'type': "Glossary",
                    'arguments': d({}),
                },
                'input builder': [false],
                'output builder': [true, {
                    'context': <g_glossary.T.Context<pd.SourceLocation>>['import', {
                        'glossary': {
                            'key': "fp",
                            'annotation': pd.getLocationInfo(0),
                        },
                    }],
                    'builder': "Block",
                }],
                'return type': ['nothing', null],
            },
        }),
    }],
}