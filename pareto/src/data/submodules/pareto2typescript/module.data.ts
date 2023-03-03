import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.data"
import { $ as api } from "./api.data"
import { external, sibling } from 'lib-pareto-typescript-project/dist/submodules/project/shorthands'

const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "algorithm": sibling("algorithm"),
                "common": external("glo-pareto-common"),
                "fp": external("lib-fountain-pen"),
                "glossary": sibling("glossary"),
                "api": sibling("api"),
                "project": sibling("project"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "collation": external("res-pareto-collation"),
                "dictionary": external("res-pareto-dictionary"),
                "foreach": external("res-pareto-foreach"),
                "glossary": sibling("glossary"),
                "main": external("res-pareto-main"),
                "project": sibling("project"),
                "ts": external("res-typescript"),
                "this": sibling("pareto2typescript"),//FIXME selfreference
            }),
        },
    },
    'implementation': ['typescript', null],
}