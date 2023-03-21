import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.data"
import { $ as api } from "./api.data"
import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
            "algorithm": sibling("algorithm"),
            "common": external("glo-pareto-common"),
            "fp": external("lib-fountain-pen"),
            "glossary": sibling("glossary"),
            "project": sibling("project"),
        }),
    },
        'api': {
            'root': api,
            'imports': d({
                "dictionary": external("res-pareto-dictionary"),
                "foreach": external("res-pareto-foreach"),
                "this": this_(),
                "ts": external("res-typescript"),
            }),
        },
        'implementation': ['typescript', null],

}