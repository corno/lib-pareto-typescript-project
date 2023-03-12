import * as pd from 'pareto-core-data'

import * as g_project from "../../../../../../pub/dist/submodules/project"

const d = pd.d

import { $ as glossary } from "./glossary.data"

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "common types and functions for Pareto",
    'license': "TBD",

    'dependencies': d({}),
    'type': ['glossary', {
        'root': glossary,
        'imports': d({})
    }],
}