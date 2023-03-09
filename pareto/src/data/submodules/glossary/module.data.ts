import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.generated"
import { $ as bindings } from "./bindings.api.data"
import { $ as pure } from "./pure.api.data"
import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
        }),
    },
    'bindings': {
        'api': {
            'root': bindings,
    
            'imports': d({
                "foreach": external("res-pareto-foreach"),
            }),
        },
        'implementation': ['typescript', null],

    },
    'pure algorithms': {
        'api': {
            'root': pure,
    
            'imports': d({
                "foreach": external("res-pareto-foreach"),
            }),
        },
        'implementation': ['typescript', null],

    },
}