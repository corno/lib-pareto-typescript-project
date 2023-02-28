import * as pd from 'pareto-core-data'

import {
    reference,
    boolean,
    string,
    parametrizedReference,
    array, dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, func, type, glossaryParameter, optional,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "algorithm": "../../../algorithm",
        "api": "../../../api",
        "common": "glo-pareto-common",
        "fp": "lib-fountain-pen",
        "glossary": "../../../glossary",
    }),
    'parameters': d({
        "Annotation": {},
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "AlgorithmImplementation": type(group({})),
        "Implementation": type(dictionary(reference("AlgorithmImplementation"))),
        "Module": type(group({
            "definition": member(reference("ModuleDefinition")),
            // "type": member(taggedUnion({
            //     "binding": nll(),
            //     "resource": nll(),
            //     "logic": nll(),

            // }))
            "implementation": member(taggedUnion({
                "typescript": group({
                    //  parametrizedReference("algorithm", { "Annotation": typeReference("Annotation") }, "Implementation")
                }),
                "pareto": group({}),
            })),
            //"states": member(parametrizedReference("algorithm", { "Annotation": typeReference("Annotation") }, "States"), true)
        })),
        "ModuleDefinition": type(group({
            "glossary": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
            "api": member(parametrizedReference("api", { "Annotation": typeReference("Annotation") }, "API")),
        })),
        "Project": type(group({
            "author": member(string()),
            "license": member(string()),
            "description": member(string()),
            "dependencies": member(dictionary(group({}))),
            "type": member(taggedUnion({
                "resource": group({
                    "nativeDependencies": member(dictionary(group({}))),
                    "devDependencies": member(dictionary(group({}))),
                    "definition": member(reference("ModuleDefinition")),
                    "test": member(reference("Test")),
                }),
                "glossary": group({
                    "glossary": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
                }),
                "library": group({
                    "main": member(reference("Module")),
                    "submodules": member(dictionary(reference("Module"))),
                    "executables": member(dictionary(group({}))),
                    "test": member(reference("Test")),
                }),
            })),
        })),
        "Test": type(group({
            "dependencies": member(dictionary(group({}))),
            "glossary": member(parametrizedReference("glossary", { "Type": typeReference("Annotation") }, "Glossary")),
        })),
    }),
    'interfaces': d({}),
    'functions': d({
        "Serialize": func(typeReference("Module"), null, interfaceReference("fp", "Line"), null),
        "SerializeWithContext": func(typeReference("Module"), null, interfaceReference("fp", "Directory"), null),
    }),
}