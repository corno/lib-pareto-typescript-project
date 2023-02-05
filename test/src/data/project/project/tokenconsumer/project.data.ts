import * as pr from 'pareto-core-raw'

import * as mproject from "../../../../../../pub/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as glossary } from "./glossary.data"

export const $: mproject.TProject = {
    'author': "Corno",
    'description': "common types and functions for Pareto",
    'license': "ISC",

    'pubdependencies': d({}),
    'type': ['glossary', {
        'glossary': glossary
    }],
}