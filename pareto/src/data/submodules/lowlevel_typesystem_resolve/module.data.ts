import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.deprecated"
import { $ as glossary } from "./glossary.deprecated"
import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "unresolved": sibling("lowlevel_typesystem"),
                "resolved": sibling("lowlevel_typesystem_possiblyresolved"),
            }),

        },
        'api': {
            'root': api,
            'imports': d({
                "this": this_(),
                "resolve": external("res-pareto-resolve")
            }),
        },
    },
    'implementation': ['typescript', null],
    // 'implementation': {
    //     'implementations': d({}),
    // },
}