import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import { glossaryParameter, type, typeReference } from 'lib-pareto-typescript-project/dist/submodules/glossary/shorthands'

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': glossary,
        'imports': d({
            "model": "../../../glossary",
            "fp": "lib-fountain-pen",
        }),
        'api': api,
    },
    'implementation': ['typescript', null],
    // 'implementation': {
    //     'implementations': d({}),
    // },
}