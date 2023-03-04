import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.generated"
import { $ as api } from "./api.data"
import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
            }),

        },
        'api': {
            'root': api,

            'imports': d({
                "foreach": external("res-pareto-foreach"),
            }),
        },
    },
    'implementation': ['typescript', null],
}