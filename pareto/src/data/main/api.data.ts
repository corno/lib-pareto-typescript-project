import * as pd from 'pareto-core-data'

import { constructor, algorithm, dependent, sfunction, procedure } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "generateProjectAndReport": algorithm(procedure("this", {}, "GenerateProjectAndReport"), { "Annotation": "Annotation" }, dependent(null, {
            "decorateDictionaryEntriesWithKey": sfunction("foreach", { "T": "string" }, "DecorateDictionaryEntriesWithKey"),
            "createParametersParser": constructor("parametersparser", {}, "CreateParametersParser"),
            //"reportSuperfluousNode": functionReference("fp", {}, "ReportSuperfluousNode"),
            "validateFiles": procedure("pareto2typescript", { "X": "GAnnotation" }, "ValidateFiles"),
            "serializeProject": procedure("pareto2typescript", { "X": "GAnnotation" }, "ProjectToDirectory"),
            "serializeTemplate": procedure("pareto2typescript", { "X": "GAnnotation" }, "ProjectToDirectory"),
        }, {})),
    })
}