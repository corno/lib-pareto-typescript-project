import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createParametersParser": algorithm(functionReference("this", {}, "ParseArguments2"), constructor(null, {
            //"onError": functionReference("this", {}, "HandleArgumentError"),
        })),
        "createProjectGenerator": algorithm(functionReference("this", {}, "GenerateProjectAndReport"), constructor(null, {
            "decorateDictionaryEntriesWithKey": functionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
            //"reportSuperfluousNode": functionReference("fp", {}, "ReportSuperfluousNode"),
            "validateFiles": functionReference("pareto2typescript", {}, "ValidateFiles"),
            "serializeProject": functionReference("pareto2typescript", {}, "ProjectToDirectory"),
            "serializeTemplate": functionReference("pareto2typescript", {}, "ProjectToDirectory"),
        })),
    })
}