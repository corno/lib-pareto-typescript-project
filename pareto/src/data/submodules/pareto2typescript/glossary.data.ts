import * as pd from 'pareto-core-data'

import {
    parametrizedTypeReference,
    typeReference, builderReference, type, glossaryParameter, member, group, parametrizedReference, dictionary, string, sfunc,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "SerializeGlossaryData": type(group({
            "glossary": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
            "imports": member(dictionary(string())),
        })),
        "SerializeAPIData": type(group({
            "api": member(parametrizedReference("api", { "Type": typeReference("Annotation") }, "API")),
            "imports": member(dictionary(string())),
        })),
    }),
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "SerializeGlossary": sfunc(typeReference("SerializeGlossaryData"), null, builderReference("fp", "Directory"), null),
            "SerializeImplementation": sfunc(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "Implementation"), null, builderReference("fp", "Directory"), null),
            "SerializeAPI": sfunc(typeReference("SerializeAPIData"), null, builderReference("fp", "Block"), null),
            "SerializeParetoEnvironment": sfunc(typeReference("common", "Null"), null, builderReference("fp", "Directory"), null),
            "SerializeBuildEnvironment": sfunc(typeReference("common", "Null"), null, builderReference("fp", "Directory"), null),
            "ProjectToDirectory": sfunc(parametrizedTypeReference("project", { "Annotation": typeReference("Annotation") }, "Project"), null, builderReference("fp", "Directory"), null),
            "SerializeStates": sfunc(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "States"), null, builderReference("fp", "Block"), null),
        }),

    }],
}