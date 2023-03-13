import * as pd from 'pareto-core-data'

import {
    typeReference, builderReference, type, glossaryParameter, member, group, dictionary, string, sfunc, externalTypeReference, imp, ref,
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
            "ValidateFiles": sfunc(externalTypeReference("common", "Null"), null, builderReference("fp", "Directory"), null),
            "SerializeGlossary": sfunc(typeReference("SerializeGlossaryData"), null, builderReference("fp", "Directory"), null),
            "SerializeImplementation": sfunc(externalTypeReference("algorithm", "Implementation"), null, builderReference("fp", "Directory"), null),
            "SerializeParetoEnvironment": sfunc(externalTypeReference("common", "Null"), null, builderReference("fp", "Directory"), null),
            "SerializeBuildEnvironment": sfunc(externalTypeReference("common", "Null"), null, builderReference("fp", "Directory"), null),
            "ProjectToDirectory": sfunc(externalTypeReference("project", "Project"), null, builderReference("fp", "Directory"), null),
            "SerializeStates": sfunc(externalTypeReference("algorithm", "States"), null, builderReference("fp", "Block"), null),
        }),

    }],
}