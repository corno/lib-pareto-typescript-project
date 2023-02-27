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
                "Annotation": {},
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
                    'return type': ['nothing', {}],
                },
            }),
        },
        'api': {
            'imports': d({
                "foreach": "res-pareto-foreach",
            }),
            'algorithms': d({
                "createSerializer": {
                    'definition': {
                        'context': ['local', {}],
                        'function': "Serialize",
                    },
                    'type': ['constructor', {
                        'configuration data': [false],
                        'dependencies': d({
                            "arrayForEach": {
                                'context': ['import', {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                }],
                                'function': "ArrayForEach",
                            },
                            "dictionaryForEach": {
                                'context': ['import', {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                }],
                                'function': "DictionaryForEach",
                            },
                            "enrichedArrayForEach": {
                                'context': ['import', {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                }],
                                'function': "EnrichedArrayForEach",
                            },
                            "enrichedDictionaryForEach": {
                                'context': ['import', {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                }],
                                'function': "EnrichedDictionaryForEach",
                            },
                        }),
                    }],
                },
            }),
        },
    },
    'implementation': ['manual', {}],
    // 'implementation': {
    //     'implementations': d({}),
    // },
}