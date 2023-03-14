import * as pd from 'pareto-core-data'

import {
    typeReference, builderReference, type, glossaryParameter, member, group, dictionary, string, sfunc, externalTypeReference, imp, ref, data, bldr,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "algorithm": imp({ "Annotation": typeReference("Annotation") }),
        "common": imp({}),
        "fp": imp({}),
        "glossary": imp({ "Annotation": typeReference("Annotation") }),
        "project": imp({ "Annotation": typeReference("Annotation") }),
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "SerializeGlossaryData": type(group({
            "glossary": member(ref(externalTypeReference("glossary", "Glossary"))),
            "imports": member(dictionary(string())),
        })),
    }),
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "ValidateFiles": sfunc(data(externalTypeReference("common", "Null")), bldr(builderReference("fp", "Directory"))),
            "SerializeGlossary": sfunc(data(typeReference("SerializeGlossaryData")), bldr(builderReference("fp", "Directory"))),
            "SerializeImplementation": sfunc(data(externalTypeReference("algorithm", "Implementation")), bldr(builderReference("fp", "Directory"))),
            "SerializeParetoEnvironment": sfunc(data(externalTypeReference("common", "Null")), bldr(builderReference("fp", "Directory"))),
            "SerializeBuildEnvironment": sfunc(data(externalTypeReference("common", "Null")), bldr(builderReference("fp", "Directory"))),
            "ProjectToDirectory": sfunc(data(externalTypeReference("project", "Project")), bldr(builderReference("fp", "Directory"))),
            "SerializeStates": sfunc(data(externalTypeReference("algorithm", "States")), bldr(builderReference("fp", "Block"))),
        }),

    }],
}