import * as pd from 'pareto-core-data'

import {
    external,
    submodule,
    tempSubmodule,
    this_
} from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.data"
import { $ as pure } from "./api.data"

const d = pd.d

export const $: g_project.T.Project._ltype.library.main<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
            "common": external("glo-pareto-common"),
            "fp": external("lib-fountain-pen"),
            "main": external("res-pareto-main"),
            "project": tempSubmodule("project"),
        }),
    },
    'api': {
        'root': pure,
        'imports': d({
            "common": external("glo-pareto-common"),
            "foreach": external("res-pareto-foreach"),
            "fp": external("lib-fountain-pen"),
            "fs": external("res-pareto-filesystem"),
            "pareto2typescript": submodule("pareto2typescript"),
            "this": this_(),
        }),
    },
    'implementation': ['typescript', null],

}