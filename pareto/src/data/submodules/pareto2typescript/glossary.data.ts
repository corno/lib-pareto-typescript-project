import * as pd from 'pareto-core-data'

import {
    data, dictionary, externalTypeReference, glossaryParameter, group, imp,
    member, procedure, ref, sExternalInterfaceReference, sfunction, string, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "algorithm": imp(),
        "common": imp(),
        "fp": imp(),
        "fp2": imp(),
        "glossary": imp(),
        "project": imp(),
    }),

    'glossary parameters': d({
        "Annotation": null,
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "SerializeGlossaryData": type(group({
                "glossary": member(ref(externalTypeReference("glossary", "Glossary", { "Annotation": glossaryParameter("Annotation") }))),
                "imports": member(dictionary(string())),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "ValidateFiles": sfunction(externalTypeReference("fp2", "Directory", { "Annotation": glossaryParameter("Annotation") }), data(externalTypeReference("common", "Null")),),
            "SerializeGlossary": procedure(data(typeReference("SerializeGlossaryData")), sExternalInterfaceReference("fp", "Directory")),
            "SerializeImplementation": procedure(data(externalTypeReference("algorithm", "Implementation", { "Annotation": glossaryParameter("Annotation") })), sExternalInterfaceReference("fp", "Directory")),
            "SerializeParetoEnvironment": procedure(data(externalTypeReference("common", "Null")), sExternalInterfaceReference("fp", "Directory")),
            "SerializeBuildEnvironment": procedure(data(externalTypeReference("common", "Null")), sExternalInterfaceReference("fp", "Directory")),
            "ProjectToDirectory": procedure(data(externalTypeReference("project", "Project", { "Annotation": glossaryParameter("Annotation") })), sExternalInterfaceReference("fp", "Directory")),
            "SerializeStates": procedure(data(externalTypeReference("algorithm", "States", { "Annotation": glossaryParameter("Annotation") })), sExternalInterfaceReference("fp", "Block")),
        }),
    },
}