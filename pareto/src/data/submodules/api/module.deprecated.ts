import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.deprecated"
import { $ as api } from "./api.deprecated"

const d = pd.d

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': glossary,
        'imports': d({
            "glossary": "../../../glossary",
            "fp": "lib-fountain-pen",
            "common": "glo-pareto-common",
        }),
        'api': api,
    },
    'implementation': ['typescript', null],
}