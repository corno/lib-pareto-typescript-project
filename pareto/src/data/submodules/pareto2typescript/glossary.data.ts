import * as pd from 'pareto-core-data'

import {
    parametrizedTypeReference,
    typeReference, builderReference, type, glossaryParameter, member, group, parametrizedReference, dictionary, string, sfunc,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "SerializeGlossaryData": type(group({
            "glossary": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
            "imports": member(dictionary(string())),
        })),
    }),
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "ValidateFiles": sfunc(typeReference("common", "Null"), null, builderReference("fp", "Directory"), null),
            "SerializeGlossary": sfunc(typeReference("SerializeGlossaryData"), null, builderReference("fp", "Directory"), null),
            "SerializeImplementation": sfunc(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "Implementation"), null, builderReference("fp", "Directory"), null),
            "SerializeParetoEnvironment": sfunc(typeReference("common", "Null"), null, builderReference("fp", "Directory"), null),
            "SerializeBuildEnvironment": sfunc(typeReference("common", "Null"), null, builderReference("fp", "Directory"), null),
            "ProjectToDirectory": sfunc(parametrizedTypeReference("project", { "Annotation": typeReference("Annotation") }, "Project"), null, builderReference("fp", "Directory"), null),
            "SerializeStates": sfunc(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "States"), null, builderReference("fp", "Block"), null),
        }),

    }],
}