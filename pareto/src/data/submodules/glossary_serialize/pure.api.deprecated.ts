import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
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