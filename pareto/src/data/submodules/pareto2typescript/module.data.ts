import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.data"
import { $ as api } from "./api.data"

const d = pd.d

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': glossary,
        'imports': d({
            "algorithm": "../../../algorithm",
            "common": "glo-pareto-common",
            "fp": "lib-fountain-pen",
            "glossary": "../../../glossary",
            "api": "../../../api",
            "project": "../../../project",
        }),
        'api': api,
    },
    'implementation': ['typescript', null],
}