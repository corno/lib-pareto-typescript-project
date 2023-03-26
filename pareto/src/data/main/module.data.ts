import * as pd from 'pareto-core-data'

import {
    external,
    submodule,
    tempSubmodule,
    this_
} from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.data"
import { $ as api } from "./api.data"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
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
            'root': api,
            'imports': d({

                "fp": external("lib-fountain-pen"),
                "fs": external("lib-pareto-filesystem"),
                "parametersparser": submodule("parametersparser"),
                "foreach": external("res-pareto-foreach"),
                "pareto2typescript": submodule("pareto2typescript"),
                "this": this_(),
            }),
        },
    },
    'implementation': ['typescript', null],
}