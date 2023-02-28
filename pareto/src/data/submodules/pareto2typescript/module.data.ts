import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as definition } from "./moduleDefinition.data"

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': definition,
    'implementation': ['manual', {}],
}