import * as pd from 'pareto-core-data'

import * as g_llts from "../../../../pub/dist/submodules/lowlevel_typesystem"

import {
    array,
    ns,
    optional,
    string

} from "../../../../pub/dist/submodules/lowlevel_typesystem/shorthands"

export const $: g_llts.T.Namespace<pd.SourceLocation> = ns(
    {}, {}, {
        "foo": array(optional(string()))
    }
)