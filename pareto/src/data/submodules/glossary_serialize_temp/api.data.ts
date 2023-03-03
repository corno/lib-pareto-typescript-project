import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"

const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
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
}