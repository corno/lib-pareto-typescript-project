import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.deprecated"
import { $ as glossary } from "./glossary.deprecated"
import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d
const a = pd.a

export const $: g_project.T.Module<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
            "model": sibling("glossary"),
            "fp": external("lib-fountain-pen"),
        }),

    },
        'api': {
            'root': api,
            'imports': d({
                "foreach": external("res-pareto-foreach"),
                "this": this_(),
            }),
        },
        'implementation': ['typescript', null],
        // 'implementation': {
        //     'implementations': d({}),
        // },
}