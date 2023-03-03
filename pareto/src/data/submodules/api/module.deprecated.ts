import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.deprecated"
import { $ as api } from "./api.deprecated"
import { external, sibling } from 'lib-pareto-typescript-project/dist/submodules/project/shorthands'

const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "glossary": sibling("glossary"),
                "fp": external("lib-fountain-pen"),
                "common": external("glo-pareto-common"),
            }),

        },
        'api': {
            'root': api,

            'imports': d({
                "collation": external("res-pareto-collation"),
                "foreach": external("res-pareto-foreach"),
                "this": sibling("api"),//FIXME self reference
            }),
        },
    },
    'implementation': ['typescript', null],
}