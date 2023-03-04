import * as pd from 'pareto-core-data'

import {
    external,
    submodule,
    tempSubmodule,
    this_
} from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.data"
import { $ as api } from "./api.data"

const d = pd.d

export const $: gproject.T.Project._ltype.library.main<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "pareto2typescript": tempSubmodule("pareto2typescript"),
                "common": external("glo-pareto-common"),
                "fp": external("lib-fountain-pen"),
                "main": external("res-pareto-main"),
                "project": tempSubmodule("project"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "common": external("glo-pareto-common"),
                "foreach": external("res-pareto-foreach"),
                "fp": external("lib-fountain-pen"),
                "fs": external("res-pareto-filesystem"),
                "pareto2typescript": submodule("pareto2typescript"),
                "this": this_(),
            }),
        },
    },
    'implementation': ['typescript', null],
}