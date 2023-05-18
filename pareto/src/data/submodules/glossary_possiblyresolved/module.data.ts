import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.generated"

const d = pd.d

export const $: g_project.T.Module<null> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
            }),
        },
        'api': {
            'root': api,

            'imports': d({
                //"foreach": external("res-pareto-foreach"),
            }),
        },
    },
    'implementation': ['typescript', null],
}