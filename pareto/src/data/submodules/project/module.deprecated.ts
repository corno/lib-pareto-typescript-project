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
                "algorithm": sibling("algorithm"),
                "api": sibling("api"),
                "common": external("glo-pareto-common"),
                "fp": external("lib-fountain-pen"),
                "glossary": sibling("glossary"),
            }),
        },
        'api': {
            'root': api,

            'imports': d({
                "algorithm": sibling("algorithm"),
                "collation": external("res-pareto-collation"),
                "api": sibling("api"),
                "foreach": external("res-pareto-foreach"),
                "glossary_serialize_temp": sibling("glossary_serialize_temp"),
                "this": sibling("project")//FIXME self reference
            }),
        },
    },
    'implementation': ['typescript', null],
}