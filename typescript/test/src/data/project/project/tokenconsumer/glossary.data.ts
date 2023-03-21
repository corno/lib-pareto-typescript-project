import * as pd from 'pareto-core-data'

import {
    typeReference,
    string,
    taggedUnion,
    glossaryParameter,
    group,
    member,
    array,
    type,
    ref,
    aInterfaceMethod,
} from "../../../../../../pub/dist/submodules/glossary/shorthands"

import * as g_glossary from "../../../../../../pub/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({}),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "AnnotatedToken": type(group({
            "token": member(ref(typeReference("Token"))),
            "annotation": member(glossaryParameter("Annotation"))
        })),
        "MultilineStringData": type(group({
            "lines": member(array(string()))
        })),
        "SimpleStringData": type(group({
            "wrapping": member(ref(typeReference("Wrapping"))),
            "value": member(string()),
        })),
        "StructuralTokenData": type(group({
            "type": member(ref(typeReference("StructuralTokenType")))
        })),
        "StructuralTokenType": type(taggedUnion({
            "tagged union start": group({}),
            "open shorthand group": group({}),
            "close shorthand group": group({}),
            "open verbose group": group({}),
            "close verbose group": group({}),
            "open dictionary": group({}),
            "close dictionary": group({}),
            "open list": group({}),
            "close list": group({}),
        })),
        "Token": type(taggedUnion({
            "header start": group({}),
            "structural": ref(typeReference("StructuralTokenData")),
            "simple string": ref(typeReference("SimpleStringData")),
            "multiline string": ref(typeReference("MultilineStringData")),
        })),
        "Wrapping": type(taggedUnion({
            "quote": group({}),
            "apostrophe": group({}),
            "none": group({}),
        })),

    }),
    'asynchronous': {
        'interfaces': d({
            "TokenConsumer": ['streamconsumer', {
                'data': aInterfaceMethod(typeReference("AnnotatedToken")),
                'end': aInterfaceMethod(typeReference("Annotation")), //should be a parameter reference
            }]
        }),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({  }),
        'algorithms': d({}),
    },
}