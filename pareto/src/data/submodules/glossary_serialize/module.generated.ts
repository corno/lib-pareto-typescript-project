import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import { external } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d
const a = pd.a

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'definition': {
        'api': {
            'root': {
                'algorithms': d({
                    "createSerializer": {
                        'definition': {
                            'context': {
                                'glossary': "XXXXXX",
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
            'imports': d({
                "foreach": external("res-pareto-foreach"),
            }),
        },
        'glossary': {
            'root': {
                'parameters': d({
                    "Annotation": null,
                }),
                'types': d({}),
                'interfaces': d({}),
                'functions': d({
                    "Serialize": {
                        'data': {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Glossary",
                            'arguments': d({}),
                        },
                        'managed input interface': [false],
                        'output interface': [true, {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['import', {
                                'glossary': "fp",
                                'arguments': d({}),
                            }],
                            'interface': "Block",
                        }],
                        'return type': ['nothing', null],
                    },
                }),
            },
            'imports': d({
                "fp": external("lib-fountain-pen"),
            }),
        },
    },
    'implementation': ['typescript', null],
}