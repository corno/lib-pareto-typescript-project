import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"
import { external, sibling } from 'lib-pareto-typescript-project/dist/submodules/project/shorthands'

const d = pd.d
const a = pd.a

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "model": sibling("glossary"),
                "fp": external("lib-fountain-pen"),
            }),

        },
        'api': {
            'root': api,
            'imports': d({
                "foreach": external( "res-pareto-foreach"),
                "this": sibling("glossary_serialize_temp"),//FIXME self reference
            }),
        },
    },
    'implementation': ['typescript', null],
    // 'implementation': {
    //     'implementations': d({}),
    // },
}