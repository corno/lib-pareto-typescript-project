import * as pd from 'pareto-core-data'

import {
    parametrizedTypeReference,
    typeReference, interfaceReference, func, type, glossaryParameter, member, group, parametrizedReference, dictionary, string,
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
    'interfaces': d({
    }),
    'functions': d({
        "SerializeGlossary": func(typeReference("SerializeGlossaryData"), null, interfaceReference("fp", "Directory"), null),
        "SerializeImplementation": func(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "Implementation"), null, interfaceReference("fp", "Directory"), null),
        "SerializeAPI": func(typeReference("SerializeAPIData"), null, interfaceReference("fp", "Block"), null),
        "SerializeParetoEnvironment": func(typeReference("common", "Null"), null, interfaceReference("fp", "Directory"), null),
        "SerializeBuildEnvironment": func(typeReference("common", "Null"), null, interfaceReference("fp", "Directory"), null),
        "ProjectToDirectory": func(parametrizedTypeReference("project", { "Annotation": typeReference("Annotation") }, "Project"), null, interfaceReference("fp", "Directory"), null),
        "SerializeStates": func(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "States"), null, interfaceReference("fp", "Block"), null),
    }),
}