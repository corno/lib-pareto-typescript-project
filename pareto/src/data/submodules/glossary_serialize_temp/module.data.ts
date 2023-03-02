import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import { glossaryParameter, type, typeReference } from 'lib-pareto-typescript-project/dist/submodules/glossary/shorthands'

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({
                "model": "../../../glossary",
                "fp": "lib-fountain-pen",
            }),
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
        },
        'api': {
            'imports': d({
                "foreach": "res-pareto-foreach",
                "this": "./glossary",
            }),
            'algorithms': d({
                "createSerializer": {
                    'definition': {
                        'context': {
                            'glossary': "this",
                            'arguments': d({}),
                        },
                        'function': "Serialize",
                    },
                    'type': ['constructor', {
                        'configuration data': [false],
                        'dependencies': d({
                            "arrayForEach": {
                                'context': {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                },
                                'function': "ArrayForEach",
                            },
                            "dictionaryForEach": {
                                'context': {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                },
                                'function': "DictionaryForEach",
                            },
                            "enrichedArrayForEach": {
                                'context': {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                },
                                'function': "EnrichedArrayForEach",
                            },
                            "enrichedDictionaryForEach": {
                                'context': {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                },
                                'function': "EnrichedDictionaryForEach",
                            },
                        }),
                    }],
                },
            }),
        },
    },
    'implementation': ['typescript', null],
    // 'implementation': {
    //     'implementations': d({}),
    // },
}