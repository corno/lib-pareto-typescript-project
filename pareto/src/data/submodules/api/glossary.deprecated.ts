import * as pd from 'pareto-core-data'

import {
    reference,
    boolean,
    string,
    array, dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, func, type, glossaryParameter, optional,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "glossary": "../../../glossary",
        "fp": "lib-fountain-pen",
        "common": "glo-pareto-common",
    }),
    'parameters': d({
        "Annotation": {},
    }),
    'types': d({
        "Context": type(group({
            "glossary": member(string()),
            "arguments": member(dictionary(reference("TypeReference")))
        })),
        "FunctionReference": type(group({
            "context": member(reference("Context")),
            "function": member(string()),
        })),
        "TypeReference": type(group({
            "context": member(reference("Context")),
            "type": member(string()),
        })),
        "API": type(group({
            "imports": member(dictionary(string())),
            "algorithms": member(dictionary(group({
                "definition": member(reference("FunctionReference")),
                "type": member(taggedUnion({
                    "reference": group({}),
                    "constructor": group({
                        "configuration data": member(optional(reference("TypeReference"))),
                        "dependencies": member(dictionary(reference("FunctionReference"))),
                    }),
                }))
            }))),
        })),
    }),
    'interfaces': d({}),
    'functions': d({
        "Serialize": func(typeReference("API"), null, interfaceReference("fp", "Line"), null),
    }),
}