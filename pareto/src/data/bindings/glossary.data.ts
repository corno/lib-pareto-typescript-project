import * as pd from 'pareto-core-data'

import {
    aExternalInterfaceReference,
    aInterface,
    aInterfaceMethod,
    constructor, externalTypeReference,
    glossaryParameter,
    imp
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "main": imp({ "Annotation": glossaryParameter("Annotation") }),
        "common": imp({}),
    }),
    'types': d({
    }),
    'asynchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },

}