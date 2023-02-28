import * as pd from 'pareto-core-data'

import { $ as api } from "./moduleDefinition.data"

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': api,
    'implementation': ['manual', {}],
}