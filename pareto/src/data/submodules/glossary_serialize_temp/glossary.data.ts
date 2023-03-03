import * as pd from 'pareto-core-data'

import {
    parametrizedTypeReference,
    typeReference, interfaceReference, func, type, glossaryParameter, member, group, parametrizedReference, dictionary, string,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation"))
    }),
    'interfaces': d({}),
    'functions': d({
        "Serialize": {
            'data': {
                'context': <gglossary.T.Context<pd.SourceLocation>>['import', {
                    'glossary': "model",
                    'arguments': d({
                        "Annotation": typeReference("Annotation")
                    }),
                }],
                'type': "Glossary",
                'arguments': d({}),
            },
            'managed input interface': [false],
            'output interface': [true, {
                'context': <gglossary.T.Context<pd.SourceLocation>>['import', {
                    'glossary': "fp",
                    'arguments': d({}),
                }],
                'interface': "Line",
            }],
            'return type': ['nothing', null],
        },
    }),
}