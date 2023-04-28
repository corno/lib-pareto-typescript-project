import * as pd from 'pareto-core-data'
import {
    type, aInterfaceMethod,
} from "../../../../../pub/dist/submodules/glossary/shorthands"
import { external } from "../../../../../pub/dist/submodules/project/shorthands"

import * as g_project from "../../../../../pub/dist/submodules/project"

import * as g_glossary from "../../../../../pub/dist/submodules/glossary"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': {
                'imports': d({}),
                // 'templates': d({
                //     "Reference": {
                //         'parameters': d({
                //             "ReferencedType": {},
                //         }),
                //         'type': <g_glossary.T.Type<pd.SourceLocation>>['group', d({
                //             "annotation": {
                //                 'type': <g_glossary.T.Type<pd.SourceLocation>>['string', {}],
                //             },
                //             "name": {
                //                 'type': <g_glossary.T.Type<pd.SourceLocation>>['string', {}],
                //             },
                //         })],
                //     },
                // }),
                'core': {
                    'parameters': d({
                        "Annotation": null,
                    }),
                    'root': {
                        'types': d({
                        }),
                        'namespaces': d({}),
                    },
                    'asynchronous': {
                        'interfaces': d({
                        }),
                        'algorithms': d({}),
                    },
                    'synchronous': {
                        'interfaces': d({}),
                        'algorithms': d({}),
                    },
                },
            },
            'imports': d({}),
        },
        'api': {
            'root': {
                'algorithms': d({}),
            },
            'imports': d({
            }),
        },

    },

    'implementation': ['pareto', null],
}