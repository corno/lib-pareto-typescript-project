import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.data"
import { $ as bindings } from "./bindings.api.data"
import { $ as pure } from "./pure.api.data"
import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
            "algorithm": sibling("algorithm"),
            "api": sibling("api"),
            "common": external("glo-pareto-common"),
            "fp": external("lib-fountain-pen"),
            "glossary": sibling("glossary"),
            "project": sibling("project"),
        }),
    },
    'bindings': {
        'api': {
            'root': bindings,
            'imports': d({
            }),
        },
        'implementation': ['typescript', null],
    },
    'pure algorithms': {
        'api': {
            'root': pure,
            'imports': d({
                "collation": external("res-pareto-collation"),
                "common": external("glo-pareto-common"),
                "dictionary": external("res-pareto-dictionary"),
                "foreach": external("res-pareto-foreach"),
                "glossary": sibling("glossary"),
                "main": external("res-pareto-main"),
                "project": sibling("project"),
                "this": this_(),
                "ts": external("res-typescript"),
            }),
        },
        'implementation': ['typescript', null],

    },
}