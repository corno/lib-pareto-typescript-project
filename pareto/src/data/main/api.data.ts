import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"

const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'imports': d({
        "common": "glo-pareto-common",
        "foreach": "res-pareto-foreach",
        "pareto2typescript": "../../submodules/pareto2typescript",
        "this": "./glossary",
    }),
    'algorithms': d({
        "createParametersParser": algorithm(functionReference("this", {}, "ParseArguments2"), constructor(null, {
            "onError": functionReference("this", {}, "HandleArgumentError"),
        })),
        "generateProject": algorithm(functionReference("this", {}, "GenerateProject")),
        "createProjectGenerator": algorithm(functionReference("this", {}, "GenerateProject"), constructor(null, {
            "decorateDictionaryEntriesWithKey": functionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
            "logError": functionReference("common", {}, "Log"),
            "serializeProject": functionReference("pareto2typescript", {}, "SerializeProject"),
            "serializeTemplate": functionReference("pareto2typescript", {}, "SerializeTemplate"),
        })),
    })
}