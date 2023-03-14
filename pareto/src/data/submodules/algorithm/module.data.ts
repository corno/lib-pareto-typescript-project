import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.deprecated"
import { $ as pure } from "./api.deprecated"

import { external, sibling } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: g_project.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
            "fp": external("lib-fountain-pen"),
        }),

    },
        'api': {
            'root': pure,
            'imports': d({
                "collation": external("res-pareto-collation"),
                "foreach": external("res-pareto-foreach"),
                "this": sibling("algorithm"),//FIXME!!! references itself
            }),
        },
        'implementation': ['typescript', null],

}