import * as pd from 'pareto-core-data'

import {
    parametrizedTypeReference,
    typeReference, interfaceReference, func, type, glossaryParameter, member, group, parametrizedReference, dictionary, string,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "algorithm": "../../../algorithm",
        "common": "glo-pareto-common",
        "fp": "lib-fountain-pen",
        "glossary": "../../../glossary",
        "api": "../../../api",
        "project": "../../../project",
    }),
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "GlossarySerializationData": type(group({
            "glossary": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
            "imports": member(dictionary(string())),
        })),
    }),
    'interfaces': d({
    }),
    'functions': d({
        "SerializeGlossary": func(typeReference("GlossarySerializationData"), null, interfaceReference("fp", "Directory"), null),
        "SerializeImplementation": func(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "Implementation"), null, interfaceReference("fp", "Directory"), null),
        "SerializeAPI": func(parametrizedTypeReference("api", { "Annotation": typeReference("Annotation") }, "API"), null, interfaceReference("fp", "Block"), null),
        "SerializeParetoEnvironment": func(typeReference("common", "Null"), null, interfaceReference("fp", "Directory"), null),
        "SerializeBuildEnvironment": func(typeReference("common", "Null"), null, interfaceReference("fp", "Directory"), null),
        "ProjectToDirectory": func(parametrizedTypeReference("project", { "Annotation": typeReference("Annotation") }, "Project"), null, interfaceReference("fp", "Directory"), null),
        "SerializeStates": func(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "States"), null, interfaceReference("fp", "Block"), null),
    }),
}