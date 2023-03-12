import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"

const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
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