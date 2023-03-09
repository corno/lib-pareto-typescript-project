import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as bindings } from "./bindings.api.deprecated"
import { $ as pure } from "./pure.api.deprecated"
import { $ as glossary } from "./glossary.deprecated"
import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d
const a = pd.a

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
            "model": sibling("glossary"),
            "fp": external("lib-fountain-pen"),
        }),

    },
    'bindings': {
        'api': {
            'root': bindings,
            'imports': d({
                "foreach": external("res-pareto-foreach"),
                "this": this_(),
            }),
        },
        'implementation': ['typescript', null],
        // 'implementation': {
        //     'implementations': d({}),
        // },

    },
    'pure algorithms': {
        'api': {
            'root': pure,
            'imports': d({
                "foreach": external("res-pareto-foreach"),
                "this": this_(),
            }),
        },
        'implementation': ['typescript', null],
        // 'implementation': {
        //     'implementations': d({}),
        // },
    },
}