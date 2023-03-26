import * as pd from 'pareto-core-data'

import {
    external,
    main,
    submodule,
    tempSubmodule,
    this_
} from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.data"
import { $ as api } from "./api.data"

const d = pd.d

export const $: g_project.T.ModuleDefinition<pd.SourceLocation> = {

    'glossary': {
        'root': glossary,
        'imports': d({
        }),
    },
    'api': {
        'root': api,
        'imports': d({
            "main": main(),
        }),
    },

}