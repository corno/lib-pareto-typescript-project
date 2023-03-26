import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as pure } from "./api.data"
import { $ as glossary } from "./glossary.data"

import { external, main, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({}),
        },
        'api': {
            'root': pure,
            'imports': d({
            }),
        },
    },
    'implementation': ['typescript', null],
}