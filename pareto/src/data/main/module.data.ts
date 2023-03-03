import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.data"
import { $ as api } from "./api.data"

const d = pd.d

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': glossary,
        'imports': d({
            "pareto2typescript": "../../../submodules/pareto2typescript",
            "common": "glo-pareto-common",
            "fp": "lib-fountain-pen",
            "main": "res-pareto-main",
            "project": "../../../submodules/project",
        }),
        'api': api,
    },
    'implementation': ['typescript', null],
}