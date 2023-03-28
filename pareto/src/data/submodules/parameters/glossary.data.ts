import * as pd from 'pareto-core-data'

import {
    group, member, string, type
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Parameters": type(group({
                "directory": member(string()),
            })),
        }),
    },
    'imports': d({
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),
    },

}