import * as pd from 'pareto-core-data'

import {
    data, dictionary, externalTypeReference, glossaryParameter, group, imp,
    member, procedure, ref, sExternalInterfaceReference, string, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "algorithm": imp({ "Annotation": glossaryParameter("Annotation") }),
        "common": imp({}),
        "fp": imp({}),
        "glossary": imp({ "Annotation": glossaryParameter("Annotation") }),
        "project": imp({ "Annotation": glossaryParameter("Annotation") }),
    }),
    'types': d({
        "SerializeGlossaryData": type(group({
            "glossary": member(ref(externalTypeReference("glossary", "Glossary"))),
            "imports": member(dictionary(string())),
        })),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "ValidateFiles": procedure(data(externalTypeReference("common", "Null")), sExternalInterfaceReference("fp", "Directory")),
            "SerializeGlossary": procedure(data(typeReference("SerializeGlossaryData")), sExternalInterfaceReference("fp", "Directory")),
            "SerializeImplementation": procedure(data(externalTypeReference("algorithm", "Implementation")), sExternalInterfaceReference("fp", "Directory")),
            "SerializeParetoEnvironment": procedure(data(externalTypeReference("common", "Null")), sExternalInterfaceReference("fp", "Directory")),
            "SerializeBuildEnvironment": procedure(data(externalTypeReference("common", "Null")), sExternalInterfaceReference("fp", "Directory")),
            "ProjectToDirectory": procedure(data(externalTypeReference("project", "Project")), sExternalInterfaceReference("fp", "Directory")),
            "SerializeStates": procedure(data(externalTypeReference("algorithm", "States")), sExternalInterfaceReference("fp", "Block")),
        }),
    },
}