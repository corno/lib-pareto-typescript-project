import * as pd from 'pareto-core-data'

import {
    constructor,
    aInterfaceMethod,
    aInterfaceReference,
    externalTypeReference,
    imp, streamconsumer,
    type,
    taggedUnion,
    null_,
    typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'types': d({
        "ArgumentsError": type(taggedUnion({
            "missing": null_(),
            "too many": null_(),
        })),
    }),
    'imports': d({
        "main": imp({}),
        "parameters": imp({}),
    }),
    'asynchronous': {
        'interfaces': d({
            "ParametersHandler": aInterfaceMethod(externalTypeReference("parameters", "Parameters")),
            "ErrorsHandler": streamconsumer(
                aInterfaceMethod(typeReference("ArgumentsError")),
                aInterfaceMethod(null),
            ),
            "HandleArguments": streamconsumer(
                aInterfaceMethod(externalTypeReference("main", "Arguments")),
                aInterfaceMethod(null)
            )
        }),
        'algorithms': d({
            "CreateParametersParser": constructor(aInterfaceReference("HandleArguments"), {
                "handler": aInterfaceReference("ParametersHandler"),
                "errorHandler": aInterfaceReference("ErrorsHandler"),
            }),
        }),
    },
    'synchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),
    },

}