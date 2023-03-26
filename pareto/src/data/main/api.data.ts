import * as pd from 'pareto-core-data'

import { constructor, algorithm, dependent, sfunction, procedure, afunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createProjectGeneratorAndReporter": algorithm(constructor("this", {}, "CreateProjectGenerator"), { "Annotation": "Annotation" }, dependent(null, {
            //"decorateDictionaryEntriesWithKey": sfunction("foreach", { }, "DecorateDictionaryEntriesWithKey"),
            "createParametersParser": constructor("parametersparser", {}, "CreateParametersParser"),
            //"reportSuperfluousNode": functionReference("fp", {}, "ReportSuperfluousNode"),
            "validateFiles": procedure("pareto2typescript", { "X": "GAnnotation" }, "ValidateFiles"),
            "serializeProject": procedure("pareto2typescript", { "X": "GAnnotation" }, "ProjectToDirectory"),
            "serializeTemplate": procedure("pareto2typescript", { "X": "GAnnotation" }, "ProjectToDirectory"),
            "readDirectoryOrAbort": afunction("fs", {}, "ReadDirectoryOrAbort"),
            "createDirectory": procedure("fp", {}, "CreateDirectory")
        }, {})),
    })
}