import * as pd from 'pareto-core-data'

import { constructor, algorithm, procedure, dependent, sfunction, sSideEffect } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import { sInterface } from 'lib-pareto-typescript-project/dist/submodules/glossary/shorthands'

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "resolve": algorithm(sfunction("this", {}, "Resolve"), { "Annotation": "Annotation" }, dependent(null, {
            "getLastElement": sfunction("array", {}, "GetLastElement")
        }, {
            "error": sSideEffect("this", { "A": "Annotation" }, "Error")
        }))
    }),
}