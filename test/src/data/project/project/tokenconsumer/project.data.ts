import * as pd from 'pareto-core-data'

import * as gproject from "../../../../../../pub/dist/submodules/project"

const d = pd.d

import { $ as glossary } from "./glossary.data"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "common types and functions for Pareto",
    'license': "ISC",

    'dependencies': d({}),
    'type': ['glossary', {
        'glossary': glossary
    }],
}