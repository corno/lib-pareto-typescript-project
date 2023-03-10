import * as pd from 'pareto-core-data'

import {
    parametrizedTypeReference,
    typeReference, interfaceReference, type, glossaryParameter, member, group, parametrizedReference, dictionary, string,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
    }),
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d<gglossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({
            "Serialize": {
                'data': {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['import', {
                        'glossary': "model",
                        'arguments': d({
                            "Annotation": typeReference("Annotation"),
                        }),
                    }],
                    'type': "Glossary",
                    'arguments': d({}),
                },
                'input builder': [false],
                'output builder': [true, {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['import', {
                        'glossary': "fp",
                        'arguments': d({}),
                    }],
                    'builder': "Block",
                }],
                'return type': ['nothing', null],
            },
        }),
    }],
}