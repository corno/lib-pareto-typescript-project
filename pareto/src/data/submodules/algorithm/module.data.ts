import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.deprecated"
import { $ as api } from "./api.deprecated"

import { external, sibling } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "fp": external("lib-fountain-pen"),
            }),

        },
        'api': {
            'root': api,
            'imports': d({
                "foreach": external("res-pareto-foreach"),
                "this": sibling("algorithm"),//FIXME!!! references itself
            }),
        },
    },
    'implementation': ['typescript', null],
}