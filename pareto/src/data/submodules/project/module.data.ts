import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.deprecated"
import { $ as bindings } from "./bindings.api.deprecated"
import { $ as pure } from "./pure.api.deprecated"
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
        }),
    },
    'bindings': {
        'api': {
            'root': bindings,
    
            'imports': d({
                "algorithm": sibling("algorithm"),
                "collation": external("res-pareto-collation"),
                "api": sibling("api"),
                "foreach": external("res-pareto-foreach"),
                "glossary_serialize": sibling("glossary_serialize"),
                "this": this_(),
            }),
        },
        'implementation': ['typescript', null],

    },
    'pure algorithms': {
        'api': {
            'root': pure,
    
            'imports': d({
                "algorithm": sibling("algorithm"),
                "collation": external("res-pareto-collation"),
                "api": sibling("api"),
                "foreach": external("res-pareto-foreach"),
                "glossary_serialize": sibling("glossary_serialize"),
                "this": this_(),
            }),
        },
        'implementation': ['typescript', null],

    },
}