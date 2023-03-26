import * as pd from 'pareto-core-data'

import {
    data, dictionary, externalTypeReference, glossaryParameter, group, imp,
    member, procedure, ref, sInterfaceReference, string, type, typeReference
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
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "ValidateFiles": procedure(data(externalTypeReference("common", "Null")), sInterfaceReference("fp", "Directory")),
            "SerializeGlossary": procedure(data(typeReference("SerializeGlossaryData")), sInterfaceReference("fp", "Directory")),
            "SerializeImplementation": procedure(data(externalTypeReference("algorithm", "Implementation")), sInterfaceReference("fp", "Directory")),
            "SerializeParetoEnvironment": procedure(data(externalTypeReference("common", "Null")), sInterfaceReference("fp", "Directory")),
            "SerializeBuildEnvironment": procedure(data(externalTypeReference("common", "Null")), sInterfaceReference("fp", "Directory")),
            "ProjectToDirectory": procedure(data(externalTypeReference("project", "Project")), sInterfaceReference("fp", "Directory")),
            "SerializeStates": procedure(data(externalTypeReference("algorithm", "States")), sInterfaceReference("fp", "Block")),
        }),
    },
}