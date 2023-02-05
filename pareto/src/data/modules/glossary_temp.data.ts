import * as pr from 'pareto-core-raw'

import {
    types, typeReference, interfaceReference, func
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "glossary": "../../../glossary",
            "fp": "lib-fountain-pen",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
        }),
        'interfaces': d({}),
        'functions': d({
            "Serialize": {
                'data': {
                    'context': ['import', "glossary"],
                    'type': "Glossary",
                },
                'managed input interface': ['not set', {}],
                'output interface': ['set', {
                    'context': ['import', "fp"],
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
                    'configuration data': ['not set', {}],
                    'dependencies': d({
                        "arrayForEach": {
                            'context': ['import', "foreach"],
                            'function': "ArrayForEach",
                        },
                        "dictionaryForEach": {
                            'context': ['import', "foreach"],
                            'function': "DictionaryForEach",
                        },
                        "enrichedArrayForEach": {
                            'context': ['import', "foreach"],
                            'function': "EnrichedArrayForEach",
                        },
                        "enrichedDictionaryForEach": {
                            'context': ['import', "foreach"],
                            'function': "EnrichedDictionaryForEach",
                        },
                    }),
                }],
            },
        })
    },
}