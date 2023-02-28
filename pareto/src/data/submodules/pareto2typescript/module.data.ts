import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.data"
import { $ as api } from "./api.data"

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': glossary,
        'api': api,
    },
    'implementation': ['typescript', {}],
}